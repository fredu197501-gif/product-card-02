console.log("Данные загружаются...");

fetch("users.json")
  .then((response) => response.json())
  .then((data) => {
    console.log("Данные получены:", data);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });