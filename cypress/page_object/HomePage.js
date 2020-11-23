class HomePage {
  // Cookies notification pop-up menu
  acceptCookiesNotification = '#closeNotification';

  // Clinical summaries section of the main navigation menu
  clinicalSummariesSection = '#d_base_menu_block_0 ul li:nth-child(11)';
  clinicalSummariesSectionItems = this.clinicalSummariesSection + ' li';

  // Quick search 
  inputField = 'input.autocomplete';
  searchIcon = 'img.search_icon';

  // Advanced search
  advancedSearchLink = '#d_base_search_footer_block_1';

  // Main menu elements
  mainMenuItems = [
    '#d_row1_block_0 div div:nth-child(2)',
    '#d_row1_block_2 div div:nth-child(2)',
    '#d_row1_block_4 div div:nth-child(2)',
    '#d_row2_block_0 div div:nth-child(2)',
    '#d_row2_block_2 div div:nth-child(2)',
    '#d_row2_block_4 div div:nth-child(2)',
    '#d_row3_block_0 div div:nth-child(2)',
    '#d_row3_block_2 div div:nth-child(2)',
    '#d_row3_block_4 div div:nth-child(2)'
  ];

  openPage(url){
    cy.visit(url);
    cy.get(this.acceptCookiesNotification, { timeout:10000 })
      .should('be.visible')
      .click();
  };

  executeQuickSearch(text){
    cy.get(this.inputField)
      .clear()
      .type(text);
    cy.get(this.searchIcon).click();
  };
};
export default new HomePage();
