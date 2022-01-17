
import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../parts/initialCards.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithAvatar from '../components/PopupWithAvatar.js';
import PopupDelete from '../components/PopupDelete.js';
//import Api from '../components/Api.js';

import {
  editBtnProfile,
  profileForm,
  addBtnProfile,
  popupInputaddImageTitle,
  popupInputaddImageLink,
  photoContainer,
  addImageForm,
  objForm,
  popupInputTypeName,
  popupInputTypeProfession,
  popupImageViewing,
  profileNameSelector,
  profileProfessionSelector,
  popupProfileSelector,
  popupAddImageSelector,
  photoTemplateSelector,
  avatarForm,
  openPupopAvatarBtn,
  popupAddAvatarSelector,
  popupDeleteSelector,
  popupInputAvatarSelector,
  imageAvatarSelector
} from '../parts/constants.js';



// Popup с картинкой
const openPopupWithImage = new PopupWithImage(popupImageViewing);

// Данные о пользователе
const profileUserInfo = new UserInfo(
  {
    nameSelector: profileNameSelector,
    professionSelector: profileProfessionSelector
  }
);

// Данные об аватарке
const profileUserAvatarInfo = new UserInfo(
  {
    linkSelector: popupInputAvatarSelector,
    avatarSelector: imageAvatarSelector
  }
);

// Popup с автаркой
const openPopupAvatar = new PopupWithAvatar(popupAddAvatarSelector);


// Popup подтверждения удаления
const popupDelete = new PopupDelete(popupDeleteSelector);


// Функция для создания карточки

function createCard(cardItem) {
  const card = new Card({
    data: cardItem,
    handleCardClick: () => {
      openPopupWithImage.open(cardItem.link, cardItem.name);
    },
    handleDeleteCard: (card) => {
      popupDelete.open();

      card.deleteCard();
      //popupDelete.close();
    }
  }, photoTemplateSelector);

  return card.generateCard();
}


// Добавляем картинки на страницу

const сardList = new Section(
  {
    items: initialCards,
    renderer: (cardItem) => {
      сardList.addItem(createCard(cardItem));
    }
  }, photoContainer
);
// отрисовываем все элементы
сardList.renderItems();


// Создаем карточки ч/з popup

const openPopupAddImage = new PopupWithForm({
  selectorPopup: popupAddImageSelector,
  handleFormSubmit: () => {
    const cardInfo = {
      name: popupInputaddImageTitle.value,
      link: popupInputaddImageLink.value
    };
    const newImage = createCard(cardInfo);
    сardList.addItem(newImage);
    openPopupAddImage.close();
  }
});


// Popup редактируем профиль

const openPopupProfile = new PopupWithForm({
  selectorPopup: popupProfileSelector,
  handleFormSubmit: ({ name, about }) => {
    profileUserInfo.setUserInfo({ name, about });
    openPopupProfile.close();
  }
});

//  Создаем слушателей для кнопок

openPopupWithImage.setEventListeners();
openPopupProfile.setEventListeners();
openPopupAddImage.setEventListeners();
openPopupAvatar.setEventListeners();
popupDelete.setEventListeners();


// Открываем popup profile
editBtnProfile.addEventListener('click', () => {
  openPopupProfile.open();
  // Вызываем функцию resetValidation для очищения инпутов
  profFormValidator.resetValidation();
  //Получаем объект с данными
  const getUserInfo = profileUserInfo.getUserInfo();
  popupInputTypeName.value = getUserInfo.name;
  popupInputTypeProfession.value = getUserInfo.about;

  // Если форма валидна, то кнопка активна
  profFormValidator.enableSubmitButton();

});

// Открываем popup для добавления картинок
addBtnProfile.addEventListener('click', function () {
  openPopupAddImage.open();
  // Вызываем на объекте imageFormValidator функцию resetValidation для очищения инпутов
  imageFormValidator.resetValidation();

});

// Открываем popup для изменения аватарки
openPupopAvatarBtn.addEventListener('click', function () {
  openPopupAvatar.open();
  profileUserAvatarInfo.setUserInfo({ avatar });
  // Вызываем на объекте imageFormValidator функцию resetValidation для очищения инпутов
  avatarFormValidator.resetValidation();
  openPopupAvatar.close();
});




// Включаем валидацию popup профиля
const profFormValidator = new FormValidator(objForm, profileForm);
profFormValidator.enableValidation();

// Включаем валидацию popup добавление карточки
const imageFormValidator = new FormValidator(objForm, addImageForm);
imageFormValidator.enableValidation();

// Включаем валидацию popup аватара
const avatarFormValidator = new FormValidator(objForm, avatarForm);
avatarFormValidator.enableValidation();




// Данные API
const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-34',
  token: '3e73d708-abda-497f-b5cd-226c9c586d8e',
});
