import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

const startScreen = document.querySelector('.screen-start');
const intermediateScreen = document.querySelector('.screen-intermediate');
const homeScreen = document.querySelector('.screen-home');
const intermediateScreenButtons = intermediateScreen.querySelectorAll('.screen-intermediate__button');
const cancelButton = homeScreen.querySelector('.screen-home__header-button');
const contentButtons = homeScreen.querySelectorAll('.screen-home__content-buttons');
const contentMenu = homeScreen.querySelectorAll('.screen-home__content-menu');
const initialCardsBurgers = [
  {
    name: 'Гавайский бургер',
    price: 225
  },
  {
    name: 'Греческий бургер',
    price: 280
  },
  {
    name: 'Тайский бургер',
    price: 250
  },
  {
    name: 'Бургер от шефа',
    price: 350
  },
  {
    name: 'Чизбургер',
    price: 210
  },
  {
    name: 'Вегетарианский бургер',
    price: 185
  }
]
const initialCardsSalads = [
  {
    name: 'Гавайский салат',
    price: 220
  },
  {
    name: 'Греческий салат',
    price: 165
  },
  {
    name: 'Тайский салат',
    price: 180
  },
  {
    name: 'Салат Цезарь',
    price: 290
  },
  {
    name: 'Овощной салат',
    price: 150
  },
]

const initialCardsDrinks = [
  {
    name: 'Гавайский смузи',
    price: 190
  },
  {
    name: 'Греческий кофе',
    price: 105
  },
  {
    name: 'Тайский синий чай',
    price: 140
  },
  {
    name: 'Зелёный чай',
    price: 45
  },
  {
    name: 'Чёрный чай',
    price: 45
  },
  {
    name: 'Молочный коктейль',
    price: 130
  },
  {
    name: 'Лимонад',
    price: 80
  }
]

const formClasses = {
  formSelector: '.coupon',
  inputSelector: '.coupon__input',
  submitButtonSelector: '.coupon__button-submit',
  descriptionButtonSelector: '.coupon__button-description',
  inactiveButtonClass: 'coupon__button-submit_inactive',
  inputErrorClass: 'coupon__input_type_error',
  errorClass: 'coupon__input-error_active'
}

function openScreen(screen) {
  screen.classList.add('screen_opened');
}

function closeScreen(screen) {
  screen.classList.remove('screen_opened');
}

function handleClickOnScreen(evt) {
  if (evt.currentTarget.classList.contains('screen')) {
    closeScreen(evt.currentTarget);
  }
}

function addClassActive(button) {
  contentButtons.forEach((button) => {
    if (button.classList.contains('screen-home__content-buttons_active'))
      return button.classList.remove('screen-home__content-buttons_active');
  })
  button.classList.add('screen-home__content-buttons_active');
  contentMenu.forEach((screen) => {
    if (screen.classList.contains('screen-home__content-menu_display_flex'))
      return screen.classList.remove('screen-home__content-menu_display_flex');
  })
  homeScreen.querySelector(`.screen-home__${button.id}`).classList.add('screen-home__content-menu_display_flex');
}

function cancelFunction() {
  closeScreen(homeScreen);
  addClassActive(contentButtons[0]);
  deleteCard();
}

function initialCards(cards, screenHomeElement) {
  const screenHomeBurgers = document.querySelector(screenHomeElement);
  cards.forEach((item) => {
    const card = new Card(item, '.card-product');
    const cardElement = card.generateCard();
    screenHomeBurgers.append(cardElement);
  });
}

function initialCoupons() {
  const screenHomeCoupons = document.querySelector('.screen-home__coupons');
  const cardCoupon = document.querySelector('.card-coupon').content.querySelector('.coupon').cloneNode(true);
  screenHomeCoupons.append(cardCoupon);
  const formList = Array.from(document.querySelectorAll(formClasses.formSelector));
  formList.forEach((item) => {
    const form = new FormValidator(formClasses, item);
    form.enableValidation();
  });
}

function deleteCard() {
  const products = homeScreen.querySelectorAll('.product');
  const coupon = homeScreen.querySelector('.coupon');
  const orders = homeScreen.querySelectorAll('.order');
  products.forEach((product) => {
    product.remove();
  })
  coupon.remove();
  orders.forEach((order) => {
    order.remove();
  })
}

startScreen.addEventListener('click', (evt) => {
  handleClickOnScreen(evt);
  openScreen(intermediateScreen);
});
intermediateScreenButtons.forEach((button) => {
  button.addEventListener('click', () => {
    closeScreen(intermediateScreen);
    openScreen(homeScreen);
    initialCards(initialCardsBurgers, '.screen-home__burgers');
    initialCards(initialCardsSalads, '.screen-home__salads');
    initialCards(initialCardsDrinks, '.screen-home__drinks');
    initialCoupons();
  })
})
cancelButton.addEventListener('click', () => {
  cancelFunction();
  openScreen(startScreen);
})

contentButtons.forEach((button) => {
  button.addEventListener('click', () => {
    addClassActive(button);
  });
});
