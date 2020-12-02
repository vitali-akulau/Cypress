import * as url from '../test_data/urls';
import * as signInData from '../test_data/signIn_data';
import HomePage from '../page_object/HomePage';
import SignInPage from '../page_object/SignInPage';

describe('Sign in page', () => {
  beforeEach(() => {
    HomePage.openPage(url.HOME_PAGE);
    cy.get(HomePage.registerLoginButton)
      .should('be.visible')
      .click();
  });

  it('Impossible to login with INVALID credentials', () => {
    SignInPage.typeText(SignInPage.emailAddressInput, signInData.INVALID_EMAIL_ADDRESS)
              .typeText(SignInPage.passwordInput, signInData.INVALID_PASSWORD);
    cy.get(SignInPage.signInButton).click();

    cy.get(SignInPage.warningNotification).should('be.visible');
    cy.getText(SignInPage.warningNotification).should('eq', signInData.WARNING_NOTIFICATION);
  });

  it('Possible to login with VALID credentials', () => {
    SignInPage.typeText(SignInPage.emailAddressInput, signInData.EMAIL_ADDRESS)
              .typeText(SignInPage.passwordInput, signInData.PASSWORD);
    cy.get(SignInPage.signInButton).click();
    /**
     * The test does not work correctly for security reasons.
     * VPN connection is required for correct operation.
     */
  });
});
