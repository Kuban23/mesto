
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

// const popupDelete = new PopupDelete(popupDeleteSelector, (card) => {
//   api.deleteCard(card.id)
//     .then(() => {
//       card.deleteCard();
//       popupDelete.close();
//     })
//     .catch((error) => console.log(error));
// });


// Функция для создания карточки

function createCard(cardItem) {
  const myId = profileUserInfo.getUserInfo().id
  const card = new Card({
    data: cardItem,

    userId: myId,
    //currentUserId: myProfileId,
    handleCardClick: () => {
      openPopupWithImage.open(cardItem.link, cardItem.name);
    },
    handleDeleteCard: (card) => {
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

    handleSetLike: (card) => {
      api.addLikes(card.getId())
        .then((res) => {
          card.kitInfoLikes(res);
        })
        .catch((error) => console.log(error));
    },

    hendleRemoveLike: (card) => {
      api.deleteLikes(card.getId())
        .then((res) => {
          card.kitInfoLikes(res);
        })
        .catch((error) => console.log(error));
    }

    // handleDeleteCard: (card) => {
    //   popupDelete.open();
    //   popupDelete.setSubmit(() => {
    //     api.deleteCard(card.getId())
    //       .then(() => {
    //         card.deleteCard();
    //         popupDelete.close();
    //       })
    //       .catch((error) => console.log(error));
    //   })
    // }


  }, photoTemplateSelector);

  return card.generateCard();
}


// Добавляем картинки на страницу

const сardList = new Section(
  // {
  //   items: initialCards,
  //   renderer: (cardItem) => {
  //     сardList.addItem(createCard(cardItem));
  //   }
  // }, photoContainer
  {
    renderer: (cardItem) => {
      //const defaultCard = createCard(cardItem);
      сardList.addItem(createCard(cardItem));
    }
  }, photoContainer

);

// отрисовываем все элементы
//сardList.renderItems();


// Создаем карточки ч/з popup

const openPopupAddImage = new PopupWithForm({
  // selectorPopup: popupAddImageSelector,
  // handleFormSubmit: () => {
  //   const cardInfo = {
  //     name: popupInputaddImageTitle.value,
  //     link: popupInputaddImageLink.value
  //   };
  //   const newImage = createCard(cardInfo);
  //   сardList.addItem(newImage);
  //   openPopupAddImage.close();
  // }

  selectorPopup: popupAddImageSelector,
  handleFormSubmit: (data) => {
    openPopupAddImage.renderLoading(true);
    api.addCard(data)
      .then((data) => {
        const cardInfo = {
          name: popupInputaddImageTitle.value,
          link: popupInputaddImageLink.value,

        };
        const newImage = createCard(data, cardInfo);
        сardList.addItem(newImage);
        openPopupAddImage.close();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        openPopupAddImage.renderLoading(false);
      });

  }
});


// Popup редактируем профиль

const openPopupProfile = new PopupWithForm({
  // selectorPopup: popupProfileSelector,
  // handleFormSubmit: ({ name, about }) => {
  //   profileUserInfo.setUserInfo({ name, about });
  //   openPopupProfile.close();
  // }
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
openPupopAvatarBtn.addEventListener('click', () => {
  // openPopupAvatar.open();
  // profileUserAvatarInfo.setUserInfo({ avatar });
  // // Вызываем на объекте imageFormValidator функцию resetValidation для очищения инпутов
  // avatarFormValidator.resetValidation();
  // openPopupAvatar.close();

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




// Включаем валидацию popup профиля
const profFormValidator = new FormValidator(objForm, profileForm);
profFormValidator.enableValidation();

// Включаем валидацию popup добавление карточки
const imageFormValidator = new FormValidator(objForm, addImageForm);
imageFormValidator.enableValidation();

// Включаем валидацию popup аватара
const avatarFormValidator = new FormValidator(objForm, avatarForm);
avatarFormValidator.enableValidation();




// // Данные API
// const api = new Api({
//   address: 'https://mesto.nomoreparties.co/v1/cohort-34',
//   token: '3e73d708-abda-497f-b5cd-226c9c586d8e',
// });


// // Реализация загрузки информации о пользователе и карточек с сервера
// let myProfileId;

// Promise.all([api.getProfileUserInfo(), api.getLoadCards()])
//   .then(([userData, arrayCards]) => {
//     myProfileId = userData._id;
//     profileUserInfo.setUserInfo(userData);
//     сardList.renderItems(arrayCards);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
