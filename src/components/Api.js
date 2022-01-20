export default class Api {
  constructor({ address, token }) {
    this._address = address;
    this._token = token;
  }

  // Проверка ответа
  _checkResponse = (res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`); // если ошибка, отклоняем промис
    }
    return res.json();
  };


  // Загрузка информации о пользователе
  getProfileUserInfo() {
    return fetch(`${this._address}/users/me`, {
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
    })
      .then(this._checkResponse);

  }

  // Загрузка карточек с сервера
  getLoadCards() {
    return fetch(`${this._address}/cards`, {
      headers: {
        authorization: this._token,
      },
    })
      .then(this._checkResponse);
  }

  // Редактирование профиля
  redactProfile(data) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    })
      .then(this._checkResponse);
  }

  // Добавление новой карточки
  addCard(data) {
    return fetch(`${this._address}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      })
    })
      .then(this._checkResponse);
  }

  // Добавление лайков
  addLikes(id) {
    return fetch(`${this._address}/cards/likes/${id}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
      }
    })
      .then(this._checkResponse);
  }

  // Удаления карточки
  deleteCard(id) {
    return fetch(`${this._address}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      }
    })
      .then(this._checkResponse);
  }

  // Постановка и снятие лайка
  deleteLikes(id) {
  	return fetch(`${this._address}/cards/likes/${id}`, {
  		method: 'DELETE',
  		headers: {
  			authorization: this._token,
  		}
  	})
  		.then(this._checkResponse);
  }

  // Обновление аватарки
  redactAvatar(link) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: link,

      }),
    })
      .then(this._checkResponse);
  }

}
