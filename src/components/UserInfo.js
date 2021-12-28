// Отвечает за управление отображением инф-ии о пользователе на странице
export default class UserInfo {
  constructor({ nameSelector, professionSelector }) {
    this._name = document.querySelector(nameSelector);
    this._profession = document.querySelector(professionSelector);
  }

  // Возвращает объект с данными пользователя
  getUserInfo() {
    return {
      name: this._name.textContent,
      profession: this._profession.textContent
    };
  }

  // Принимает новые данные пользователя и добавляет их на страницу
  setUserInfo({name, profession}) {
    this._name.textContent = name;
    this._profession.textContent = profession;
  }


}
