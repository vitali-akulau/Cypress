Cypress.Commands.add("getText", locator => {
  return cy.get(locator)
    .scrollIntoView()
    .then(object => {
    return cy.wrap(object.text())
  });
});
