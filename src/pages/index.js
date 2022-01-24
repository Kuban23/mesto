
import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
//import { initialCards } from '../parts/initialCards.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithAvatar from '../components/PopupWithAvatar.js';
import PopupDelete from '../components/PopupDelete.js';
import Api from '../components/Api.js';

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
  imageAvatarSelector,

} from '../parts/constants.js';

// Popup с картинкой
const openPopupWithImage = new PopupWithImage(popupImageViewing);

// Данные о пользователе
const profileUserInfo = new UserInfo(
  {
    nameSelector: profileNameSelector,
    professionSelector: profileProfessionSelector,
    avatarSelector: imageAvatarSelector
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
const createCard = (
  { name, link, likes, owner, _id },
  selector,

  handleCardClick = (name, link) => {
    openPopupWithImage.open(name, link);
  },

  handleDeleteCard = (card) => {
    popupDelete.open();
    popupDelete.setSubmit(() => {
      api.deleteCard(card.getId())
        .then(() => {
          card.deleteCard();
          popupDelete.close();
        })
        .catch((error) => console.log(error));
    });
  },

  handleSetLike = (card) => {
    api.addLikes(card.getId())
      .then((res) => {
        card.kitInfoLikes(res);
      })
      .catch((error) => console.log(error));
  },

  hendleRemoveLike = (card) => {
    api.deleteLikes(card.getId())
      .then((res) => {
        card.kitInfoLikes(res);
      })
      .catch((error) => console.log(error));
  }
) => {
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

const openPopupProfile = new PopupWithForm({
  selectorPopup: popupProfileSelector,
  handleFormSubmit: ({ name, about }) => {
    openPopupProfile.renderLoading(true);
    api.redactProfile({ name, about })
      .then((res) => {
        profileUserInfo.setUserInfo({ name, about });
        openPopupProfile.close();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        openPopupProfile.renderLoading(false);
      });
  },

});

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

// Создаем карточки ч/з popup

const openPopupAddImage = new PopupWithForm({
  selectorPopup: popupAddImageSelector,
  handleFormSubmit: (data) => {
    openPopupAddImage.renderLoading(true);
    api.addCard(data)
      .then((data) => {
        const newImage = createCard(data, photoTemplateSelector);
        сardList.addItem(newImage, false);
        openPopupAddImage.close();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        openPopupAddImage.renderLoading(false);
      });

  }
});

// Открываем popup для изменения аватарки
openPupopAvatarBtn.addEventListener('click', () => {
  openPopupAvatar.open();
  // Вызываем на объекте imageFormValidator функцию resetValidation для очищения инпутов
  avatarFormValidator.resetValidation();
  openPopupAvatar.setSubmit(() => {
    const linkUserAvatar = profileUserAvatarInfo.getUserAvatarInfo();
    openPopupAvatar.renderLoading(true);
    api.redactAvatar(linkUserAvatar)
      .then((res) => {
        profileUserAvatarInfo.setUserInfo({ avatar: res.avatar });
        openPopupAvatar.close();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        openPopupAvatar.renderLoading(false);
      });
  });

});

// Открываем popup для добавления картинок
addBtnProfile.addEventListener('click', function () {
  openPopupAddImage.open();
  // Вызываем на объекте imageFormValidator функцию resetValidation для очищения инпутов
  imageFormValidator.resetValidation();

});

//  Создаем слушателей

openPopupWithImage.setEventListeners();
openPopupProfile.setEventListeners();
openPopupAddImage.setEventListeners();
openPopupAvatar.setEventListeners();
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

