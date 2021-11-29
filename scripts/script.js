
//  Находим кнопки
const editBtnProfile = document.querySelector('.profile__edit-button');
const closeBtnPopupProfile = document.querySelector('.popup_type_profile .popup__close');
const closeBtnPopupAddImage = document.querySelector('.popup_type_addImage .popup__close');
const closeBtnPopupImage = document.querySelector('.popup_type_image .popup__close');
const profileForm = document.querySelector('.popup__form');
const addBtnProfile = document.querySelector('.profile__add-button');
const addBtnCard = document.querySelector('.popup__submit-button');


//  Находим popup
const popupList = document.querySelectorAll('.popup');
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

// Функция которая заполняет Инпуты содержимым из профиля, имя и профессия (перед валидацией)
const initEditForm = () => {
  popupInputTypeName.value = profileName.textContent;
  popupInputTypeProfession.value = profileProfession.textContent;
};




//  Функции для открытия и закрытия popup profile
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', function (evt) {
    if (evt.key == 'Escape') {
      // for (let i = 0; i < popupList.length; i++) {
      //   popupList[i].classList.remove('popup_opened');
      // }
      popupList.forEach(function (popupElement) {
        popupElement.classList.remove('popup_opened');
      });
    }
  });

  document.addEventListener('mousedown', function (evt) {
    if (evt.target.classList.contains('popup_opened')) {
      popupList.forEach(function (popupElement) {
        popupElement.classList.remove('popup_opened');
      });
    }
  });

}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');

  document.removeEventListener('keydown', function (evt) {
    if (evt.key = 'Escape') {
      popupList.forEach(function (popupElement) {
        popupElement.classList.remove('popup_opened');
      });
    }
  });
}

//  Функция отправки формы (пока форму никуда не отправляем)
function formSubmitHandler(evt) {
  evt.preventDefault();

  // Вставляем новые значения в поля профиля имя и профессия
  profileName.textContent = popupInputTypeName.value;
  profileProfession.textContent = popupInputTypeProfession.value;

  // Закрываем popup
  closePopup(popupProfile);
}

// Получаем содержимое template обращаясь к св-ву content
const photoTemplate = document.querySelector('.photo-template').content;


// Функция для добавления картинок из массива на страницу
function addImageHtml(element) {
  const photoElement = photoTemplate.querySelector('.photo').cloneNode(true);
  const photoImage = photoElement.querySelector('.photo__image');

  photoImage.src = element.link;
  photoImage.alt = element.name;
  photoElement.querySelector('.photo__text').textContent = element.name;

  // Реализация лайков
  photoElement.querySelector('.photo__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('photo__like_active');
  });

  // Реализация удаления карточек
  const photoBtnTrash = photoElement.querySelector('.photo__trash');
  photoBtnTrash.addEventListener('click', function () {
    const listItem = photoBtnTrash.closest('.photo');
    listItem.remove();
  });

  // Реализация просмотра картинок
  photoImage.addEventListener('click', function () {
    openPopup(popupImageViewing);
    popupImageViewing.querySelector('.popup__image').src = photoImage.src;
    popupImageViewing.querySelector('.popup__image').alt = photoImage.alt;
    popupImageViewing.querySelector('.popup__title-image').textContent = element.name;
  });

  return photoElement;

}

// Перебираем массив и добавляем карточку
initialCards.forEach((cardInfo) => photoContainer.append(addImageHtml(cardInfo)));

// Функция для создания карточки ч/з popup
function createCard(cardInfo) {
  const addCard = addImageHtml(cardInfo);
  photoContainer.prepend(addCard);
}
function handler(evt) {
  evt.preventDefault();
  // Создали объект который получает данные из Input добавления карточки
  const cardInfo = {
    name: popupInputaddImageTitle.value,
    link: popupInputaddImageLink.value
  };

  createCard(cardInfo);
  popupInputaddImageTitle.value = '';
  popupInputaddImageLink.value = '';
  closePopup(popupAddImage);
};

//  Создаем слушателя для кнопок

editBtnProfile.addEventListener('click', function () {            // Открываем popup profile
  openPopup(popupProfile);
});

addBtnProfile.addEventListener('click', function () {  // Открываем popup для добавления картинок
  openPopup(popupAddImage);
});

closeBtnPopupProfile.addEventListener('click', function () { // Закрываем popup profile
  closePopup(popupProfile);
});

closeBtnPopupAddImage.addEventListener('click', function () { // Закрываем popup для добавления карточек
  closePopup(popupAddImage);
});

closeBtnPopupImage.addEventListener('click', function () { // Закрываем popup для просмотра увеличенной картинки

  closePopup(popupImageViewing);
});

profileForm.addEventListener('submit', formSubmitHandler); // Кпнопка сохранения popup profile (отправка формы)

addImageForm.addEventListener('submit', handler);

