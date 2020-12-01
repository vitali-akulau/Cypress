import * as url from '../test_data/urls';
import * as new_customer from '../test_data/new_customer_data';
import HomePage from '../page_object/HomePage';
import SignInPage from '../page_object/SignInPage'
import NewCutomerPage from '../page_object/NewCustomerPage';

describe('New customer Page', () => {
  beforeEach(() => {
    HomePage.openPage(url.HOME_PAGE);
    cy.get(HomePage.registerLoginButton)
      .should('be.visible')
      .click();
  });

  it('Impossible to create new user with invalid email', () => {
    cy.get(SignInPage.registerButton).click();
    NewCutomerPage.typeText(NewCutomerPage.emailAddressInput, new_customer.EMAIL_ADDRESS)
                  .typeText(NewCutomerPage.newPasswordInput, new_customer.NEW_PASSWORD)
                  .typeText(NewCutomerPage.confirmNewPasswordInput, new_customer.CONFIRM_NEW_PASSWORD)
                  .typeText(NewCutomerPage.firstNameInput, new_customer.FIRST_NAME)
                  .typeText(NewCutomerPage.lastNameInput, new_customer.LAST_NAME)
                  .typeText(NewCutomerPage.institutionInput, new_customer.INSTITUTION)
                  .selectOption(NewCutomerPage.professionLabelDDL, new_customer.PROFESSIONAL_LABEL)
                  .selectOption(NewCutomerPage.subspecialtyDDL, new_customer.SUBSPECIALTY)
                  .selectOption(NewCutomerPage.secondarySubspecialtyDDL, new_customer.SECONDARY_SUBSPECIALTY)
                  .selectOption(NewCutomerPage.yearsOfExperienceDDL, new_customer.YEARS_OF_EXPERIANCE);
    cy.get(NewCutomerPage.createButton).click();

    cy.getText(NewCutomerPage.warningNotification).should('eq', new_customer.WARNING_NOTIFICATION);
  });
});
