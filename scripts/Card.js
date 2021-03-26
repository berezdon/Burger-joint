import {Order} from './Order.js';

export class Card {
  constructor(data, cardSelector) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._price = data.price;
  }

  _getTemplate() {
    this._element = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.product')
      .cloneNode(true);
  }

  _setEventListeners() {
    this._element.querySelector('.product__button').addEventListener('click', () => {
      this._handleTheAddToOrderButton();
    });
  }

  _handleTheAddToOrderButton() {
    this._element.classList.add('product_add-to-order');
    this._element.querySelector('.product__button_add-to-order').classList.add('product__button_display_none');
    this._element.querySelector('.product__button_added-to-order').classList.remove('product__button_display_none');
    const name = this._name;
    const quantity = 1;
    const orderContent = document.querySelector('.screen-home__order-content');
    const order = new Order({name, quantity});
    const cardElement = order.generateCard();
    orderContent.append(cardElement);
  }

  generateCard() {
    this._getTemplate();

    this._element.querySelector('.product__text_name').textContent = this._name;
    this._element.querySelector('.product__price').textContent = this._price;

    this._setEventListeners();

    return this._element;
  }
}
