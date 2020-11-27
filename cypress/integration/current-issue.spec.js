import * as url from '../test_data/urls';
import * as customFunction from '../utils/functions';
import HomePage from '../page_object/HomePage';
import CurrentIssuePage from '../page_object/CurrentIssuePage';
import LinkPage from '../page_object/LinkPage';

describe('Current Issue page', () => {
  beforeEach(() => {
    cy.log('Open Current Issue page');
    HomePage.openPage(url.HOME_PAGE);
    cy.get(HomePage.mainMenuItems[4])
      .should('be.visible')
      .click();
  });

  it('\'JUMP TO\' drop-down menu verification', () => {
    customFunction.getItemsToArray(CurrentIssuePage.jumpToDropDownItems).then((jumpToArray) => {
      customFunction.getItemsToArray(CurrentIssuePage.currentIssueSections).then((displaySectionsArray) => {
        for (let i = 0; i < jumpToArray.length; i++){
          expect(jumpToArray[i]).to.equal(displaySectionsArray[i]);
        }
      });
    });
  });

  it('Checking link work', () => {
    cy.get(CurrentIssuePage.firstScientificArticlesLink).then((element) => {
      let textInLink = element.text();
      customFunction.openPageInTheSameTab(CurrentIssuePage.firstScientificArticlesLink);
      cy.getText(LinkPage.articleTitle).should('eq', textInLink);
    });
  });
});
