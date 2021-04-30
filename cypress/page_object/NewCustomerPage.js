class NewCutomerPage {
  // Warning notification
  warningNotification = 'div#fieldIncorrect'
  
  // Fields for new customer registration
  emailAddressInput = 'input#email.textInput'
  newPasswordInput = 'input#newPassword.textInput'
  confirmNewPasswordInput = 'input#reenterPassword.textInput'
  firstNameInput = 'input#givenName.textInput'
  lastNameInput = 'input#surname.textInput'
  institutionInput = '#JBJSInstitution.text-box'
  professionLabelDDL = 'select#ProfessionId'
  subspecialtyDDL = 'select#SubSpecialtyId'
  secondarySubspecialtyDDL = 'select#SecondarySubSpecialtyId'
  yearsOfExperienceDDL = 'select#YearOfExperience'

  // Create button
  createButton = 'button#continueb'

  typeText(element, text){
    cy.get(element)
      .clear()
      .type(text)
    return this
  }

  selectOption(element, option){
    cy.get(element).select(option)
    return this
  }
}
export default new NewCutomerPage();
