// Отвечает за управление отображением инф-ии о пользователе на странице
export default class UserInfo {
  constructor({ nameSelector, professionSelector, linkSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._profession = document.querySelector(professionSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  // Возвращает объект с данными пользователя
  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      about: this._profession.textContent,
    };
    return userInfo;
  }

  // Принимает новые данные пользователя и добавляет их на страницу
  setUserInfo({ name, about, avatar }) {
    // this._name.textContent = name;
    // this._profession.textContent = about;
    // this._avatar.src = avatar;

    if (name) {
      this._name.textContent = name;
    }
    if (about) {
      this._profession.textContent = about;
    }
    if (avatar) {
      this._avatar.src = avatar;
    }

  }

}
