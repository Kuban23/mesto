// import {Card} from './Card';
// import {FormValidator} from './FormValidator';

// class Card {
//   constructor(data, cardTemplate) {
//     this._name = data.name;
//     this._imageAlt = data.name;
//     this._link = data.link;
//     this._cardTemplate = cardTemplate;
//   }

// // Забираем разметку из HTML  и клонируем элемент.
// _getTemplate() {
//   const photoElement = document.querySelector('.photo-template').content.querySelector('.photo').cloneNode(true);
//   return photoElement;
// }

// // Готовим карточку к публикации.
// generateCard() {
//   this._element = this._getTemplate; //Запишем разметку в приватное поле _element
//   // Добавим данные
//   this._element.querySelector('.photo__image').src = this._link;
//   this._element.querySelector('.photo__image').alt = this._name;
//   this._element.querySelector('.photo__text').textContent = this._name;

//   return this._element;
// }





// }

//  Находим кнопки
const editBtnProfile = document.querySelector('.profile__edit-button');
const profileForm = document.querySelector('.popup__form');
const addBtnProfile = document.querySelector('.profile__add-button');
const addBtnCard = document.querySelector('.popup__submit-button_type_image');

//  Находим popup
const popupProfile = document.querySelector('.popup_type_profile');
const popupAddImage = document.querySelector('.popup_type_addImage');
const popupImageViewing = document.querySelector('.popup_type_image');

//  Находим Инпуты в popup Profile
const popupInputTypeName = document.querySelector('.popup__input_type_name');
const popupInputTypeProfession = document.querySelector('.popup__input_type_profession');

// Находим Инпуты popup для добавления карточек
const popupInputaddImageTitle = document.querySelector('.popup__input_type_title');
const popupInputaddImageLink = document.querySelector('.popup__input_type_link');

// Находим имя и профессию в блоке profile
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

// Находим блок photo
const photoContainer = document.querySelector('.galery');

// Берем форму popup картинок
const addImageForm = document.querySelector('.popup_type_addImage .popup__form-image');

// Объединение обработчиков Оверлея и закрытие popup при клике на крестик
const popupList = document.querySelectorAll('.popup');
popupList.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  })
})

// Функция которая заполняет Инпуты содержимым из профиля, имя и профессия (перед валидацией)
const initEditForm = () => {
  popupInputTypeName.value = profileName.textContent;
  popupInputTypeProfession.value = profileProfession.textContent;
};

// Функция закрытия popup по клавише Esc.
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

//  Функции для открытия и закрытия popup profile
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}


//  Функция отправки формы (пока форму никуда не отправляем)
function submitFormHandler(evt) {
  evt.preventDefault();
  // Вставляем новые значения в поля профиля имя и профессия
  profileName.textContent = popupInputTypeName.value;
  profileProfession.textContent = popupInputTypeProfession.value;
  closePopup(popupProfile);
}

// // Получаем содержимое template обращаясь к св-ву content
// const photoTemplate = document.querySelector('.photo-template').content;

// // Функция для добавления картинок из массива на страницу
// function addImageHtml(element) {
//   const photoElement = photoTemplate.querySelector('.photo').cloneNode(true);
//   const photoImage = photoElement.querySelector('.photo__image');

//   photoImage.src = element.link;
//   photoImage.alt = element.name;
//   photoElement.querySelector('.photo__text').textContent = element.name;

//   // Реализация лайков
//   photoElement.querySelector('.photo__like').addEventListener('click', function (evt) {
//     evt.target.classList.toggle('photo__like_active');
//   });

//   // Реализация удаления карточек
//   const photoBtnTrash = photoElement.querySelector('.photo__trash');
//   photoBtnTrash.addEventListener('click', function () {
//     const listItem = photoBtnTrash.closest('.photo');
//     listItem.remove();
//   });

//   // Реализация просмотра картинок
//   photoImage.addEventListener('click', function () {
//     openPopup(popupImageViewing);
//     popupImageViewing.querySelector('.popup__image').src = photoImage.src;
//     popupImageViewing.querySelector('.popup__image').alt = photoImage.alt;
//     popupImageViewing.querySelector('.popup__title-image').textContent = element.name;
//   });

//   return photoElement;
// }

// Перебираем массив и добавляем карточку
initialCards.forEach((cardInfo) => photoContainer.append(addImageHtml(cardInfo)));

// Функция для создания карточки ч/з popup
function createCard(cardInfo) {
  const addCard = addImageHtml(cardInfo);
  photoContainer.prepend(addCard);
}

function createObjectHandler(evt) {
  evt.preventDefault();
  // Создали объект который получает данные из Input добавления карточки
  const cardInfo = {
    name: popupInputaddImageTitle.value,
    link: popupInputaddImageLink.value
  };

  createCard(cardInfo);
  popupInputaddImageTitle.value = '';
  popupInputaddImageLink.value = '';

  addBtnCard.disabled = true;
  addBtnCard.classList.add('popup__submit-button_inactive');
  closePopup(popupAddImage);

 

};

//  Создаем слушателя для кнопок
editBtnProfile.addEventListener('click', function () {            // Открываем popup profile
  openPopup(popupProfile);
});

addBtnProfile.addEventListener('click', function () {  // Открываем popup для добавления картинок
  openPopup(popupAddImage);
});

profileForm.addEventListener('submit', submitFormHandler); // Кпнопка сохранения popup profile (отправка формы)

addImageForm.addEventListener('submit', createObjectHandler); // Кпнопка добавления карточки

