export class Order {
  constructor(data) {
    this._name = data.name;
    this._quantity = data.quantity;
  }

  _getTemplate() {
    this._element = document
      .querySelector('.card-order')
      .content
      .querySelector('.order')
      .cloneNode(true);
  }

  _setEventListeners() {
    //this._element.querySelector('.product__button').addEventListener('click', this._handleTheAddToOrderButton);
  }

  _handleTheAddToOrderButton() {
    //this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  generateCard() {
    this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.order__name').textContent = this._name;
    this._element.querySelector('.order__quantity').textContent = this._quantity;

    return this._element;
  }

}
