// Отвечает за управление отображением инф-ии о пользователе на странице
export default class UserInfo {
  constructor({ nameSelector, professionSelector, linkSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._profession = document.querySelector(professionSelector);
    this._link = document.querySelector(linkSelector);
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
    this._name.textContent = name;
    this._profession.textContent = about;
    //this._avatar.src = avatar;
  }





}
