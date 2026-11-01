const usersList = document.querySelector('#users-list');
const loadingError = document.querySelector('#loading-error');
const dataLoading = document.querySelector('#data-loading');
const getBtnAllCards = document.querySelector('#getBtnAllCards');
const deleteBtnAllCards = document.querySelector('#deleteBtnAllCards');
const loader = document.querySelector('#loader')
const USERS_STORAGE_KEY = 'users';
const SIMULATE_ERROR = false;

function getFromStorage(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    localStorage.removeItem(key);
    return null;
  }
}

function saveToStorage(key, data) {
  if (data === undefined) return;
  localStorage.setItem(key, JSON.stringify(data));
}

let isFirstAttempt = true;

async function fetchUsers() {
  if (isFirstAttempt) {
    isFirstAttempt = false;
    await new Promise(resolve => setTimeout(resolve, 3000));
    throw new Error('Ошибка при загрузке данных');
  }
  const response = await fetch('users.json');
  if (!response.ok) {
    throw new Error('Ошибка при загрузке данных');
  }
  return await response.json();
}

function deleteUser(userId) {
  const users = getFromStorage(USERS_STORAGE_KEY) || [];
  const updatedUsers = users.filter(user => user.id !== userId);

  if (updatedUsers.length > 0) {
    saveToStorage(USERS_STORAGE_KEY, updatedUsers);
  } else {
    localStorage.removeItem(USERS_STORAGE_KEY);
  }
}

deleteBtnAllCards.addEventListener('click', () => {
  localStorage.removeItem(USERS_STORAGE_KEY);
  usersList.innerHTML = '';
  dataLoading.classList.add('hidden');
  loadingError.classList.add('hidden');
});

getBtnAllCards.addEventListener('click', async () => {
  const userFromStorage = getFromStorage(USERS_STORAGE_KEY);

  if (userFromStorage && userFromStorage.length > 0) {
    renderContainerUser(userFromStorage);
    dataLoading.classList.remove('hidden');
    return;
  }

  loader.classList.remove('hidden');
  loadingError.classList.add('hidden');
  dataLoading.classList.add('hidden');
  try {
    const users = await fetchUsers();
    saveToStorage(USERS_STORAGE_KEY, users);
    renderContainerUser(users);
    dataLoading.classList.remove('hidden');
  } catch (error) {
    loadingError.classList.remove('hidden');
  } finally {
    loader.classList.add('hidden');
  }
});

function renderContainerUser(users) {
  usersList.innerHTML = '';
  users.forEach(user => {
    const template = document.querySelector('#user-card-template').content.cloneNode(true);

    const card = template.querySelector('.user-container');
    card.dataset.id = user.id;

    template.querySelector('.user-id').textContent = `ID: ${user.id}`;
    template.querySelector('.user-name').textContent = user.name;
    template.querySelector('.user-surname').textContent = user.surname;
    template.querySelector('.user-email').textContent = user.email;
    template.querySelector('.user-age').textContent = `Возраст: ${user.age}`;
    const btnSpec = template.querySelector('.Btn-Specific');
    btnSpec.addEventListener('click', () => {
      deleteUser(user.id);
      card.remove();
      dataLoading.classList.add('hidden');
    });
    usersList.append(template);
  })
}

