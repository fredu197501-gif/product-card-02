const usersList = document.querySelector('#users-list');
const loadingError = document.querySelector('#loading-error');
const dataLoading = document.querySelector('#data-loading');
const getBtnAllCards = document.querySelector('#getBtnAllCards');
const deleteBtnAllCards = document.querySelector('#deleteBtnAllCards');
const loader = document.querySelector('#loader');
const cardTemplate = document.querySelector('#user-card-template');
const USERS_STORAGE_KEY = 'users';

const toggle = (el, show) => el.classList.toggle('hidden', !show);

const getFromStorage = key => {
  try {
    ;
    return JSON.parse(localStorage.getItem(key));
  } catch {
    localStorage.removeItem(key);
    return null;
  }
}

const saveToStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

let isFirstAttempt = true;

async function fetchUsers() {
  if (isFirstAttempt) {
    isFirstAttempt = false;
    await new Promise(resolve => setTimeout(resolve, 3000));
    throw new Error('Ошибка при загрузке данных');
  }
  const response = await fetch('users.json');
  if (!response.ok)
    throw new Error('Ошибка при загрузке данных');
  return response.json();
}

function deleteUser(userId) {
  const users = getFromStorage(USERS_STORAGE_KEY) || [];
  saveToStorage(USERS_STORAGE_KEY, users.filter(user => user.id !== userId));
}

deleteBtnAllCards.addEventListener('click', () => {
  localStorage.removeItem(USERS_STORAGE_KEY);
  usersList.innerHTML = '';
  toggle(dataLoading, false);
  toggle(loadingError, false);
});

getBtnAllCards.addEventListener('click', async () => {
  const cached = getFromStorage(USERS_STORAGE_KEY);

  if (cached?.length) {
    renderContainerUser(cached);
    toggle(dataLoading, true);
    return;
  }

  toggle(loader, true);
  toggle(loadingError, false);
  toggle(dataLoading, false);
  try {
    const users = await fetchUsers();
    saveToStorage(USERS_STORAGE_KEY, users);
    renderContainerUser(users);
    toggle(dataLoading, true);
  } catch {
    toggle(loadingError, true);
  } finally {
    toggle(loader, false);
  }
});

function renderContainerUser(users) {
  usersList.innerHTML = '';
  users.forEach(user => {
    const template = cardTemplate.content.cloneNode(true);

    const card = template.querySelector('.user-container');
    card.dataset.id = user.id;

    template.querySelector('.user-id').textContent = `ID: ${user.id}`;
    template.querySelector('.user-name').textContent = user.name;
    template.querySelector('.user-surname').textContent = user.surname;
    template.querySelector('.user-email').textContent = user.email;
    template.querySelector('.user-age').textContent = `Возраст: ${user.age}`;
    template.querySelector('.btn-specific').addEventListener('click', () => {
      deleteUser(user.id);
      card.remove();
      toggle(dataLoading, false);
    });
    usersList.append(template);
  })
}

