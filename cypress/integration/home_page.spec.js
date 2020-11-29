import * as url from '../test_data/urls';
import * as search from '../test_data/search';
import * as main_menu from '../test_data/main_menu';
import * as navigation_menu from '../test_data/navigation_menu';
import HomePage from '../page_object/HomePage';
import SearchResultPage from '../page_object/SearchResultPage';
import AdvancedSearchPage from '../page_object/AdvancedSearchPage';

describe('Home page', () => {
  beforeEach(() => {
    cy.log('Open Home page');
    HomePage.openPage(url.HOME_PAGE);
  });
  
  it('Verify \'CLINICAL SUMMARIES\' section of the navigation menu', () => {
    cy.get(HomePage.clinicalSummariesSection).click();
    cy.get(HomePage.clinicalSummariesSectionItems).each((item, index) => {
      cy.wrap(item).invoke('text').then(text => {
        expect(text).to.equal(navigation_menu.CLINICAL_SUMMARIES_SECTION[index]);
      });
    });
  });
  
  it('Main menu verification', () => {
    cy.log('Each menu item has appropriate subtitles');
    for (let i = 0; i < main_menu.SECTION.length; i++){
      cy.get(HomePage.mainMenuItems[i]).each(item => {
        cy.wrap(item).invoke('text').then(text => {
          expect(text).to.equal(main_menu.SECTION[i]);
        });
      });
    }
  });

  it('Quick search verification', () => {
    HomePage.executeQuickSearch(search.QUICK_SEARCH);
    cy.get(SearchResultPage.searchResultText, { timeout:5000 })
      .should('be.visible')
      .should('contain', search.QUICK_SEARCH);
  });

  it('Advanced search verification', () => {
    cy.log('Execute find through some criterias');
    cy.get(HomePage.advancedSearchLink).click();
    AdvancedSearchPage.fillСriteria(AdvancedSearchPage.allFieldsInput, search.ADVANCED_SEARCH[0])
                      .fillСriteria(AdvancedSearchPage.titleInput, search.ADVANCED_SEARCH[1])
                      .fillСriteria(AdvancedSearchPage.authorInput, search.ADVANCED_SEARCH[2])
                      .fillСriteria(AdvancedSearchPage.abstractInput, search.ADVANCED_SEARCH[3])
                      .fillСriteria(AdvancedSearchPage.fullTextInput, search.ADVANCED_SEARCH[4]);
    cy.get(AdvancedSearchPage.searchButton).click();
    
    for (let i = 0; i < search.ADVANCED_SEARCH.length; i++) {
      cy.get(SearchResultPage.searchResultText).each(item => {
        cy.wrap(item).invoke('text').then(text => {
          expect(text).to.contain(search.ADVANCED_SEARCH[i])
        });
      });
    }
  });
});
