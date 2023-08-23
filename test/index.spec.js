const { By, Builder, Browser } = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');
const assert = require("assert");

suite(function(env) {
  describe('First Script', () => {
    let driver;

    before(async function() {
      driver = await new Builder().forBrowser('chrome').build();
    })

    after(async () => await driver.quit());

    it('First Selenium function', async () => {
      await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

      let title = await driver.getTitle();

      assert.equal('Web form', title);

      await driver.manage().setTimeouts({ implicit: 500 });

      console.log('Như ngáo thua Cưởng đẹp trai');

    })
  })
}, { browsers: [Browser.CHROME] });
