async function enterIntoSearch(data) {
  await browser.driver.findElement(by.css('.gLFyf')).sendKeys(data)
  await browser.driver.sleep(1000)
  await browser.driver.findElement(by.css('.gNO89b')).click()
  await browser.driver.sleep(1000)
}
// TODO: make better "sleep" mechanism based on element appear

async function getLinkFromSearchResultNum(num) {
  
  let array = await browser.driver.findElements(by.css(`.iUh30`))
  return await array[num-1].getText()
}

async function proceedToSearchResultNum(num) {
  let array = await browser.driver.findElements(by.css(`.S3Uucc`))
  return await array[num-1].click()
}

module.exports = {
  enterIntoSearch,
  getLinkFromSearchResultNum,
  proceedToSearchResultNum
}

