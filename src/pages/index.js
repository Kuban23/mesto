
import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupDelete from '../components/PopupDelete.js';
import Api from '../components/Api.js';

import {
  editBtnProfile,
  profileForm,
  addBtnProfile,
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
  imageAvatarSelector,

} from '../parts/constants.js';

// Popup с картинкой openPopupWithImage
const imagePopup = new PopupWithImage(popupImageViewing);

// Данные о пользователе и данные об аватарке
const profileUserInfo = new UserInfo(
  {
    nameSelector: profileNameSelector,
    professionSelector: profileProfessionSelector,
    avatarSelector: imageAvatarSelector
  }
);


// Данные API
const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-34',
  token: '3e73d708-abda-497f-b5cd-226c9c586d8e',
});

// Реализация загрузки информации о пользователе и карточек с сервера
let myProfileId;

Promise.all([api.getProfileUserInfo(), api.getLoadCards()])
  .then(([userData, arrayCards]) => {
    myProfileId = userData._id;
    profileUserInfo.setUserInfo(userData);
    сardList.renderItems(arrayCards);
  })
  .catch((error) => {
    console.log(error);
  });

// Функция для создания карточки

const createCard = ({ name, link, likes, owner, _id }, selector) => {

  const handleCardClick = (name, link) => {
    imagePopup.open(name, link);
  }

  const handleDeleteCard = (card) => {
    popupDelete.open();
    popupDelete.setSubmit(() => {
      api.deleteCard(card.getId())
        .then(() => {
          card.deleteCard();
          popupDelete.close();
        })
        .catch((error) => console.log(error));
    });
  }

  const handleSetLike = (card) => {
    api.addLikes(card.getId())
      .then((res) => {
        card.setInfoLikes(res);
      })
      .catch((error) => console.log(error));
  }

  const hendleRemoveLike = (card) => {
    api.deleteLikes(card.getId())
      .then((res) => {
        card.setInfoLikes(res);
      })
      .catch((error) => console.log(error));
  }
  const card = new Card(
    { name, link, likes, owner, _id },
    myProfileId,
    handleCardClick,
    handleDeleteCard,
    handleSetLike,
    hendleRemoveLike,
    selector,
  );
  return card.generateCard();
};


// Добавляем картинки на страницу

const сardList = new Section(
  {
    renderer: (item) => {
      const defaultCard = createCard(item, photoTemplateSelector);
      сardList.addItem(defaultCard);
    }
  }, photoContainer
);

// Popup редактируем профиль

const popupProfile = new PopupWithForm({
  selectorPopup: popupProfileSelector,
  handleFormSubmit: ({ name, about }) => {
    popupProfile.renderLoading(true, 'Загрузка...');
    api.redactProfile({ name, about })
      .then((res) => {
        profileUserInfo.setUserInfo({ name, about });
        popupProfile.close();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        popupProfile.renderLoading(false);
      });
  },

});

// Открываем popup profile

editBtnProfile.addEventListener('click', () => {
  popupProfile.open();
  // Вызываем функцию resetValidation для очищения инпутов
  profFormValidator.resetValidation();
  //Получаем объект с данными
  const getUserInfo = profileUserInfo.getUserInfo();
  popupInputTypeName.value = getUserInfo.name;
  popupInputTypeProfession.value = getUserInfo.about;

  // Если форма валидна, то кнопка активна
  profFormValidator.enableSubmitButton();
});


// Создаем карточки ч/з popup

const popupAddImage = new PopupWithForm({
  selectorPopup: popupAddImageSelector,
  handleFormSubmit: (data) => {
    popupAddImage.renderLoading(true, 'Сохранение...');
    api.addCard(data)
      .then((data) => {
        const newImage = createCard(data, photoTemplateSelector);
        сardList.addItem(newImage, false);
        popupAddImage.close();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        popupAddImage.renderLoading(false);
      });
  }
});

// Popup с автаркой openPopupAvatar

const popupAvatar = new PopupWithForm({
  selectorPopup: popupAddAvatarSelector,
  handleFormSubmit: (values) => {
    const { link } = values;
    popupAvatar.renderLoading(true, 'Сохранение...');
    api.redactAvatar(link)
      .then((res) => {
        profileUserInfo.setUserInfo({ avatar: res.avatar });
        popupAvatar.close();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        popupAvatar.renderLoading(false);
      });
  }
});

// Открываем popup для изменения аватарки
openPupopAvatarBtn.addEventListener('click', () => {
  popupAvatar.open();
  // Вызываем на объекте avatarFormValidator функцию resetValidation для очищения инпутов
  avatarFormValidator.resetValidation();
});

// Popup подтверждения удаления
const popupDelete = new PopupDelete(popupDeleteSelector);


// Открываем popup для добавления картинок
addBtnProfile.addEventListener('click', function () {
  popupAddImage.open();
  // Вызываем на объекте imageFormValidator функцию resetValidation для очищения инпутов
  imageFormValidator.resetValidation();

});

//  Создаем слушателей

imagePopup.setEventListeners();
popupProfile.setEventListeners();
popupAddImage.setEventListeners();
popupAvatar.setEventListeners();
popupDelete.setEventListeners();


// Включаем валидацию popup профиля
const profFormValidator = new FormValidator(objForm, profileForm);
profFormValidator.enableValidation();

// Включаем валидацию popup добавление карточки
const imageFormValidator = new FormValidator(objForm, addImageForm);
imageFormValidator.enableValidation();

// Включаем валидацию popup аватара
const avatarFormValidator = new FormValidator(objForm, avatarForm);
avatarFormValidator.enableValidation();

