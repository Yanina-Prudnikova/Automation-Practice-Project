describe('SauceDemo Login Test', () => {
  it('should open the homepage', () => {
    cy.visit('/'); // Переходит на https://www.saucedemo.com
    cy.contains('Swag Labs'); // Проверка, что страница загрузилась
  });

  it('should login with valid credentials', () => {
    cy.visit('/');
    cy.get('#user-name').type('standard_user'); // ввод логина
    cy.get('#password').type('secret_sauce');   // ввод пароля
    cy.get('#login-button').click();            // клик по кнопке

    // Проверяем, что перешли на страницу продуктов
    cy.url().should('include', '/inventory.html');
    cy.contains('Products');
  });
});
