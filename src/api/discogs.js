// константные значения для дальнейшего использования
const collectionRequest =
  "https://api.discogs.com/users/ssjjitt/collection/folders/6168819/releases";
const wishlistRequest = "https://api.discogs.com/users/ssjjitt/wants";
const releaseRequest = "https://api.discogs.com/releases/";
const searchRequest =
  "https://api.discogs.com/database/search?type=release&format=vinyl&";
const token = "VRGAbLazDuQqsuOLSPfJtsUcReQRZkhIaKdGzIvr";
const header = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Discogs token=${token}`,
  Host: "api.discogs.com",
};
// ЗАПРОСЫ
// тут функция выполняет запросы к API
export const discogs = (endpoint, method) =>
  (async () => { // асинхронность для выполнения в фоновом режиме(короче просто не блокирует основу)
    return await fetch(endpoint, { // await - ожидание выполнения фетча
      method: method,
      headers: header,
    })
      .then((response) => { // обработка ответов сервера
        if (response.ok) {
          if (method === "DELETE") {
            return response.text();
          } else {
            return response.json();
          }
        }
      })
      .then((data) => {
        console.log(data);
        return {
          ...data,
        };
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error.message); // отклоненное обещание
      });
  })();
// МЕТОДЫ
// получение коллекции
discogs.fetchCollection = () => {
  return discogs(collectionRequest, "GET");
};
// добавить в коллекцию
discogs.addToCollection = (releaseID) => {
  return discogs(collectionRequest + "/" + releaseID, "POST");
};
// удалить из коллекции
discogs.deleteFromCollection = (releaseID, instanceID) => {
  return discogs(
    collectionRequest + "/" + releaseID + "/instances/" + instanceID,
    "DELETE"
  );
};
// для работы со списком
discogs.fetchWishlist = () => {
  return discogs(wishlistRequest, "GET");
};

discogs.addToWishlist = (releaseID) => {
  return discogs(wishlistRequest + "/" + releaseID, "PUT");
};

discogs.deleteFromWishlist = (releaseID) => {
  return discogs(wishlistRequest + "/" + releaseID, "DELETE");
};

discogs.fetchRelease = (releaseID) => {
  return discogs(releaseRequest + releaseID, "GET");
};

discogs.search = (queryParams) => {
  return discogs(searchRequest + queryParams, "GET");
};
