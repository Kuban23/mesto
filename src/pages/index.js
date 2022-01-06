
import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../parts/initialCards.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {
  editBtnProfile,
  profileForm,
  addBtnProfile,
  popupInputaddImageTitle,
  popupInputaddImageLink,
  photoContainer,
  addImageForm,
  initEditForm,
  objForm,
  profileName,
  profileProfession,
  popupInputTypeName,
  popupInputTypeProfession,
  popupImageViewing,
  profileNameSelector,
  profileProfessionSelector
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


// Функция для создания карточки

function createCard(cardItem) {
  const card = new Card({
    data: cardItem,
    handleCardClick: () => {
      openPopupWithImage.open(cardItem.link, cardItem.name);
    }
  }, '.photo-template');

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
  selectorPopup: '.popup_type_addImage',
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
  selectorPopup: '.popup_type_profile',
  handleFormSubmit: ({ name, profession }) => {
    profileUserInfo.setUserInfo({ name, profession })
    console.log(name)
    // profileName.textContent = popupInputTypeName.value;
    // profileProfession.textContent = popupInputTypeProfession.value;
    openPopupProfile.close();
  }
});

openPopupWithImage.setEventListeners();
openPopupProfile.setEventListeners();
openPopupAddImage.setEventListeners();


//  Создаем слушателей для кнопок

// Открываем popup profile
editBtnProfile.addEventListener('click', () => {
  //Получаем объект с данными
  const getUserInfo = profileUserInfo.getUserInfo();
  popupInputTypeName.value = getUserInfo.name;
  popupInputTypeProfession.value = getUserInfo.profession;
  
  // Если форма валидна, то кнопка активна
  profFormValidator.enableSubmitButton();
  openPopupProfile.open();
});



// Открываем popup для добавления картинок
addBtnProfile.addEventListener('click', function () {
  openPopupAddImage.open();
  // Вызываем на объекте imageFormValidator функцию resetValidation для очищения инпутов
  imageFormValidator.resetValidation();

});


// Включаем валидацию popup профиля
const profFormValidator = new FormValidator(objForm, profileForm);
profFormValidator.enableValidation();

// Включаем валидацию popup добавление карточки
const imageFormValidator = new FormValidator(objForm, addImageForm);
imageFormValidator.enableValidation();


// openPopupWithImage.setEventListeners();
// openPopupProfile.setEventListeners();
// openPopupAddImage.setEventListeners();

