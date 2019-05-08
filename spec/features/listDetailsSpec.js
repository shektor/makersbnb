module.exports = {
  'Add a name, short desciption and a price to the space'(browser) {
    browser
      .url('localhost:4567/spaces/new')
      .waitForElementVisible('body')
      .setValue('input[name="name"]', ['Castle Black'])
      .setValue('input[name="description"]', ['Jon Snow lives here'])
      .setValue('input[name="price"]', ['1 arm'])
      .click('.post-space')
      .assert.containsText('body', 'Castle Black')
      .assert.containsText('body', 'Jon Snow lives here')
      .assert.containsText('body', '1 arm')
  }
}
