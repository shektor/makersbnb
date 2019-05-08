module.exports = {
  'List a new space'(browser) {
    browser
      .url('localhost:4567/')
      // /spaces
      .waitForElementVisible('.list-direct')
      .click('.list-direct')
      // /spaces/new
      .waitForElementVisible('body')
      .assert.containsText('body', 'List your Space')
  }
}
