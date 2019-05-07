module.exports = {
  'List a new space'(browser) {
    browser
      .url('localhost:4567/')
      .waitForElementVisible('list-direct')
      .click('list-direct')
      .waitForElementVisible('body')
      .assert.containsText('body', 'List a Space')
  }
}
