// Класс Section добавляет элементы на страницу
export default class Section {
  constructor({ renderer }, containerSelector) {
    //this._initialArray = items;
    this._renderer = renderer; // ф-я которая отвечает за создание карточек и их вставку в разметку
    this._container = document.querySelector(containerSelector);
  }

  // Метод отрисовывает все элементы
  // renderItems() {
  //   this._initialArray.forEach((item) => {
  //     this._renderer(item);
  //   });
  // }
  renderItems(array) {
    array.forEach((item) => {
      this._renderer(item);
    });
  }


  // Метод принимающий DOM-элемент и добавляет его в контейнер
  addItem(element) {
    this._container.prepend(element);
  }


}
