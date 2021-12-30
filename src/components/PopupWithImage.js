import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupName = this._popup.querySelector('.popup__title-image');
  }

  // Дополняем родительски метод popup, вставляем src и подпись
  // open({link, name}) {
  //   this._popupImage.src = link;
  //   this._popupName.textContent = name;
  //   this._popupImage.alt = name;
  //   super.open();
  // }

  open(link, name) {
    this._popupImage.src = link;
    this._popupName.textContent = name;
    this._popupImage.alt = name;
    super.open();
  }

}
