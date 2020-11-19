import * as urls from '../../test_data/urls'
import * as navigation_menu from '../../test_data/navigation_menu'
import * as main_menu from '../../test_data/main_menu'
import * as search from '../../test_data/search'

describe('Home page', () => {
  beforeEach(() => {
    cy.visit(urls.HOME_PAGE)
    cy.get('#closeNotification', { timeout:10000 })
        .should('be.visible')
        .click()
  })
  
  it('Verify \'CLINICAL SUMMARIES\' section of the navigation menu', () => {
    cy.log('Section \'CLINICAL SUMMARIES\' of the navigation menu contains next items')
    cy.get('#d_base_menu_block_0 ul li:nth-child(11)').click()
    cy.get('#d_base_menu_block_0 ul li:nth-child(11) li').each((item, index) => {
      cy.wrap(item).contains(navigation_menu.CLINICAL_SUMMARIES_SECTION[index])
    })
  })
  
  it('Main menu verification', () => {
    cy.log('Each menu item has appropriate subtitles')
    let index = 0
    for(let i = 1; i <= 3; i++){
      for(let j = 0; j <= 4; j+=2){
        cy.get(`#d_row${i}_block_${j} div div:nth-child(2)`).should('contain', main_menu.SECTION[index])
        index++
      }
    }
  })

  it('Quick search verification', () => {
    cy.get('input.autocomplete').type(search.QUICK_SEARCH)
    cy.get('img.search_icon').click()
    cy.get('#changed-result-block').contains(search.QUICK_SEARCH)
  })

  it('Advanced search verification', () => {
    cy.get('#d_base_search_footer_block_1').click()
    cy.get('input[placeholder="knee"]').type('Knee Joint{esc}')
    cy.get('#advsearch_title_box div:nth-child(2) input').type('Total Knee Arthroplasty{esc}')
    cy.get('input[placeholder="Chan Yoon"]').type('Philippe, DrIng{esc}')
    cy.get('#advsearch_abstract_box div:nth-child(2) input').type('Physiological{esc}')
    cy.get('#advsearch_full_box div:nth-child(2) input').type(search.ADVANCED_SEARCH_FULL_TEXT_FIELD)
    cy.get('div#advsearch_search_button').click()

    search.ADVANCED_SEARCH.forEach(element => {
      cy.get('#changed-result-block').should('contain', element)
    })
  })
})
