import * as config from '../../../cypress/fixtures/ui_config_.json'
import * as inventoryPage from '../../../cypress/support/pageObjects/inventoryPage'
import * as burgerMenuPage from '../../../cypress/support/pageObjects/burgerMenu'
import * as inventoryDetailsPage from "../../../cypress/support/pageObjects/inventoryDetailsPage"
import * as cartPage from "../../../cypress/support/pageObjects/cartPage"
import * as checkoutPage from "../../../cypress/support/pageObjects/checkoutPage"


describe('Burger menu options at swag lab', function () {

    before(('Login to the application'),()=>
    {
        cy.uiLogin(Cypress.env("standard_user_username"),Cypress.env("user_password"));
        cy.verifyUrl(config.inventoryUrl)
        inventoryPage.applogoVisible()
    })

    it('burger menu options should navigate user to respective page',()=> {
        inventoryPage.clickBurgerMenu()
        burgerMenuPage.clickAllItemsLink()
        cy.verifyUrl(config.inventoryUrl)
        burgerMenuPage.clickCloseBurgerMenu()
        inventoryPage.clickBurgerMenu()
        burgerMenuPage.clickAboutLink()
        cy.verifyUrl(config.sauceLabUrl)
        burgerMenuPage.verifySauceLabLogoIsVisible()
        cy.go('back')
        //add item to check reset option
        inventoryPage.clickProductName(config.item1)
        cy.verifyUrl(config.itemDetailsEndpoint)
        inventoryDetailsPage.verifyInventoryName(config.item1Desc.name)
        inventoryDetailsPage.verifyInventoryDesc(config.item1Desc.desc)
        inventoryDetailsPage.verifyInventoryPrice(config.item1Desc.price)
        inventoryDetailsPage.clickAddToCart()
        inventoryDetailsPage.removeButtonIsVisible()
    })

    //this fails due to bug in application
    it('user should be able to reset cart items',()=>
    {
        inventoryPage.clickBurgerMenu()
        burgerMenuPage.clickResetLink()
        burgerMenuPage.clickCloseBurgerMenu()
        inventoryDetailsPage.addToCartIsVisible()

    })

    it('logout of applicaiton',()=>
    {
        cy.uiLogout()
    })



});