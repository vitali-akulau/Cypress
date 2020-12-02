class SignInPage {
  registerButton = 'button#register';
  warningNotification = '.error.pageLevel p';
  emailAddressInput = '#logonIdentifier';
  passwordInput = '#password';
  signInButton = '.buttons #next';

  typeText(element, text){
    cy.get(element)
      .clear()
      .type(text);
    return this;
  };
};
export default new SignInPage();
