module.exports = {
  'Test Infrastructure'(browser) {
    browser
    .url('localhost:4567/')
    .assert.containsText('html', 'Hello World');
  }
}
