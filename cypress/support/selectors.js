// cypress/support/selectors.js
module.exports = {
  login: {
    username: '#user-name',
    password: '#password',
    submitBtn: '#login-button',
  },
  products: {
    productTitle: '.inventory_item_name', // product title on inventory page
    inventoryList: '.inventory_list',
    cartIcon: '.shopping_cart_link',
    addToCart: 'button[data-test^="add-to-cart"]',
  },
  common: {
    headerTitle: '.title',
  },
};
