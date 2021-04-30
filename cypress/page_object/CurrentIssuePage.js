class CurrentIssuePage {
  jumpToDropDown = '.issue.desktop.dropdown select'
  jumpToDropDownItems = this.jumpToDropDown + ' option'
  currentIssueSections = 'div.grouptitle .text'
  firstScientificArticlesLink = 'li:nth-child(2) > ul > li:nth-child(1) > a'
}
export default new CurrentIssuePage()
