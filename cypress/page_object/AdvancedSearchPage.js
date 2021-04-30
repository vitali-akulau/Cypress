class AdvancedSearchPage {
  // Advanced search builder form
  allFieldsInput = 'input[placeholder="knee"]'
  titleInput = '#advsearch_title_box div:nth-child(2) input'
  authorInput = 'input[placeholder="Chan Yoon"]'
  abstractInput = '#advsearch_abstract_box div:nth-child(2) input'
  fullTextInput = '#advsearch_full_box div:nth-child(2) input'
  
  // Search button in advanced search builder form
  searchButton = 'div#advsearch_search_button'

  fillСriteria(element, searchСriteria){
    cy.get(element)
      .clear()
      .type(searchСriteria + '{esc}')
    return this
  }
}
export default new AdvancedSearchPage()
