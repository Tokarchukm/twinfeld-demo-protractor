const enterIntoSearch = require('./helper').enterIntoSearch
const getLinkFromSearchResultNum = require('./helper').getLinkFromSearchResultNum
const proceedToSearchResultNum = require('./helper').proceedToSearchResultNum

const chai = require('chai')
const expect = chai.expect
browser.driver.ignoreSynchronization = true


describe('Search "Twinfield" on google leads to:', function() {
    
    beforeEach( async function() {
        await browser.driver.get('http://www.google.com')
        await enterIntoSearch('Twinfield')
    })
    

    it('first link of search result is as expected', async function() {

        const link = await getLinkFromSearchResultNum(1)
        expect(link).to.equal('https://www.twinfield.co.uk/')
     
    })

// I would never design this kind of test that asserts "all in one test". My heart is crying, but i do AS REQUIRED
    it('all result titles contains "twinfield"', async function() {

      await proceedToSearchResultNum(1)
      expect(await browser.driver.getTitle()).to.include('Twinfield')
      await browser.driver.navigate().back()

      await proceedToSearchResultNum(2)
      expect(await browser.driver.getTitle()).to.include('Twinfield')
      await browser.driver.navigate().back()

      await proceedToSearchResultNum(3)
      expect(await browser.driver.getTitle()).to.include('Twinfield')
      await browser.driver.navigate().back()
      
      await proceedToSearchResultNum(4)
      expect(await browser.driver.getTitle()).to.include('Twinfield')
      await browser.driver.navigate().back()

      await proceedToSearchResultNum(5)
      expect(await browser.driver.getTitle()).to.include('Twinfield')
      await browser.driver.navigate().back()

      await proceedToSearchResultNum(6)
      expect(await browser.driver.getTitle()).to.include('Twinfield')
      await browser.driver.navigate().back()

      await proceedToSearchResultNum(7)
      expect(await browser.driver.getTitle()).to.include('Twinfield')
      await browser.driver.navigate().back()

      await proceedToSearchResultNum(8)
      expect(await browser.driver.getTitle()).to.include('Twinfield')
      await browser.driver.navigate().back()

      await proceedToSearchResultNum(9)
      expect(await browser.driver.getTitle()).to.include('Twinfield')
      await browser.driver.navigate().back()

      await proceedToSearchResultNum(10)
      expect(await browser.driver.getTitle()).to.include('Twinfield')
      await browser.driver.navigate().back()

    })
  })