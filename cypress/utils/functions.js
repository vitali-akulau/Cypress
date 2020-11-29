import * as url from '../test_data/urls';

// Get items to array
export function getItemsToArray(element){
  let array = new Array();
  cy.get(element).each(item => {
    cy.wrap(item).invoke('text').then(text => {
      array.push(text.toUpperCase());
    });
  });
  return cy.wrap(array);
}

// Open link in the same tab
export function openPageInTheSameTab(element){
  cy.get(element).invoke('attr', 'href').then(href => {
    cy.visit(url.HOME_PAGE + '/' + href);
  });
}
