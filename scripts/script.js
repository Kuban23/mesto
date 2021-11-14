// находим блок photo -------------------------------------------------------------------------------
const photoContainer = document.querySelector('.galery');

// Берем форму popup картинок
const addImageForm = document.querySelector('.popup_type_addImage .form__image');

// Находим Инпуты popup для добавления карточек
const popupInputaddImageTitle = document.querySelector('.popup__input_type_title');
const popupInputaddImageLink = document.querySelector('.popup__input_type_link');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const photoTemplate = document.querySelector('.photo-template').content;


// Функция для добавления картинок из массива на страницу
function addImageHtml(element) {
  const photoElement = photoTemplate.querySelector('.photo').cloneNode(true);

  photoElement.querySelector('.photo__image').src = element.link;
  photoElement.querySelector('.photo__text').textContent = element.name;

  photoContainer.append(photoElement);

  // Реализация лайков
  photoElement.querySelector('.photo__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('photo__like_active');
  });

  // реализация удаления карточек

  const photoBtnTrash = photoElement.querySelector('.photo__trash');

  photoBtnTrash.addEventListener('click', function () {
  const listItem = photoBtnTrash.closest('.photo');
    listItem.remove();
  });



  // Реализация просмотра картинок
   const photoImage = photoElement.querySelector('.photo__image');


  photoImage.addEventListener('click', function () {
    // createProfilePopup(photoElement);
    photoElement.classList.remove('popup_opened');
  });



}



// Перебираем массив и добавляем картинки
initialCards.forEach(addImageHtml);


// Функция для добавления картинок через popup
function addElemets(evt) {
  evt.preventDefault();
  const photoElement = photoTemplate.querySelector('.photo__element').cloneNode(true);

  photoElement.querySelector('.photo__image').src = popupInputaddImageLink.value;
  photoElement.querySelector('.photo__text').textContent = popupInputaddImageTitle.value;

  photoContainer.prepend(photoElement);

  closeProfilePopup(popupAddImage);

  // console.log(photoElement);
};



// -----------------------------------------------------------------------------------------------

//  находим кнопоки
const editBtnProfile = document.querySelector('.profile__edit-button');
const closeBtnPopupProfile = document.querySelector('.popup_type_profile .popup__close');
const closeBtnPopupAddImage = document.querySelector('.popup_type_addImage .popup__close');
const closeBtnPopupImage = document.querySelector('.popup_type_image .popup__close');
const profileForm = document.querySelector('.popup__form');
const addBtnProfile = document.querySelector('.profile__add-button');

// Находим картинку для последующего клика по ней
// const photoImage = document.querySelector('.photo__image');

//  находим popup
const popupProfile = document.querySelector('.popup_type_profile');
const popupAddImage = document.querySelector('.popup_type_addImage');
// const popupImageViewing = document.querySelector('.popup_type_image');

//  находим Инпуты в popup
const popup = document.querySelector('.popup');
const popupInputTypeName = document.querySelector('.popup__input_type_name');
const popupInputTypeProfession = document.querySelector('.popup__input_type_profession');

//  находим имя и профессию в блоке profile
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

//  функции для открытия и закрытия popup profile
function createProfilePopup(popupElement) {
  popupElement.classList.add('popup_opened');

  //  заполняем Инпуты содержимым из профиля, имя и профессия
  popupInputTypeName.value = profileName.innerHTML;
  popupInputTypeProfession.value = profileProfession.innerHTML;
}

function closeProfilePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

//  функции для открытия и закрытия popup addImage

// function createAddImagePopup() {
//   popupAddImage.classList.add('popup_opened');
// }

// function closeAddImagePopup() {
//   popupAddImage.classList.remove('popup_opened');
// }



//  функция отправки формы (пока форму никуда не отправляем)
function formSubmitHandler(evt) {
  evt.preventDefault();

  // Вставляем новые значения в поля профиля имя и профессия
  profileName.textContent = popupInputTypeName.value;
  profileProfession.textContent = popupInputTypeProfession.value;

  // закрываем popup
  closeProfilePopup(popupProfile);
}



//  создали слушателя для кнопок
editBtnProfile.addEventListener('click', function () { // Открываем popup profile
  createProfilePopup(popupProfile);
});

addBtnProfile.addEventListener('click', function () {  // Открываем popup для добавления картинок
  createProfilePopup(popupAddImage);
});

// photoImage.addEventListener('click', function () {  // Открываем popup картинки для увеличенного просмотра
//   createProfilePopup(popupImageViewing);
// });



closeBtnPopupProfile.addEventListener('click', function () { // Закрываем popup profile
  closeProfilePopup(popup);
});

closeBtnPopupAddImage.addEventListener('click', function () { // Закрываем popup для добавления карточек
  closeProfilePopup(popupAddImage);
});

closeBtnPopupImage.addEventListener('click', function () { // Закрываем popup для просмотра увеличенной картинки
  closeProfilePopup(popupImageViewing);
});



profileForm.addEventListener('submit', formSubmitHandler); // Кпнопка сохранения popup profile (отправка формы)

addImageForm.addEventListener('submit', addElemets); // Кпнопка добавления из popup image картинки по ссылке

// photoBtnTrash.addEventListener('click', deleteFoto); // Кнопка удаления карточки



