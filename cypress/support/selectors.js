// cypress/support/selectors.js
module.exports = {
  login: {
    username: '#user-name',
    password: '#password',
    submitBtn: '#login-button',
  },
  products: {
    productTitle: '.product_label', // example
    cartIcon: '.shopping_cart_link',
  },
  common: {
    headerTitle: '.title',
  },
};
