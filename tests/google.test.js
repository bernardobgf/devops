
import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

async function testGoogle() {
  const options = new chrome.Options();

  options.addArguments(
    '--headless',
    '--no-sandbox',
    '--disable-dev-shm-usage'
  );

  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    await driver.get('https://www.google.com');

    const searchBox = await driver.wait(
      until.elementLocated(By.name('q')),
      10000
    );

    await searchBox.sendKeys('Selenium WebDriver');
    await searchBox.submit();

    await driver.wait(
      until.titleContains('Selenium'),
      10000
    );
  } finally {
    await driver.quit();
  }
}

test('Google permite pesquisar por Selenium WebDriver', async () => {
  await testGoogle();
}, 20000);
