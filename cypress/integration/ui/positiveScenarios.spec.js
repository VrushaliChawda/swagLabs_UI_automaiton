import * as config from '../../../cypress/fixtures/ui_config_.json'
import * as inventoryPage from '../../../cypress/support/pageObjects/inventoryPage'
import * as inventoryDetailsPage from "../../../cypress/support/pageObjects/inventoryDetailsPage"
import * as cartPage from "../../../cypress/support/pageObjects/cartPage"
import * as checkoutPage from "../../../cypress/support/pageObjects/checkoutPage"


describe('Place order at swag lab', function () {

    before(('Standard user - End to end flow'),()=>
    {
        cy.uiLogin(Cypress.env("standard_user_username"),Cypress.env("user_password"));
        cy.verifyUrl(config.inventoryUrl)
        inventoryPage.applogoVisible()
    })

    it("Select product and confirm order",()=>
    {
        //verify sorting
        inventoryPage.verifyAllProducts(config.defaultProductList)

        inventoryPage.applySort(config.decendingSort)
        inventoryPage.verifyAllProducts(config.decendingProductList)

        inventoryPage.applySort(config.lowToHighSort)
        inventoryPage.verifyPriceSorting(config.lowToHighProductList)

        inventoryPage.applySort(config.highToLowSort)
        inventoryPage.verifyPriceSorting(config.highToLowProductList)

        //verify inventory details on inventory detail screen and add item to cart
        inventoryPage.clickProductName(config.item1)
        cy.verifyUrl(config.itemDetailsEndpoint)
        inventoryDetailsPage.verifyInventoryName(config.item1Desc.name)
        inventoryDetailsPage.verifyInventoryDesc(config.item1Desc.desc)
        inventoryDetailsPage.verifyInventoryPrice(config.item1Desc.price)
        inventoryDetailsPage.clickAddToCart()
        inventoryPage.verifyCartCount(config.cartInventoryQty[0])


        //verify Item details in cart
        cartPage.navigateToCart()
        cy.verifyUrl(config.cartEndpoint)
        cartPage.verifyCartItems()

        //verify checkout step one information
        cartPage.clickCheckout()
        cy.verifyUrl(config.checkoutStepOneEndPoint)
        checkoutPage.enterFirstName(config.firstName)
        checkoutPage.enterLastName(config.lastName)
        checkoutPage.enterPostalCode(config.postalCode)

        //verify checkout step two information
        checkoutPage.clickContinue()
        cy.verifyUrl(config.checkoutStepTwoEndPoint)
        cartPage.verifyCartItems()
        checkoutPage.verifyPaymentInformation()
        checkoutPage.verifyShippingInformation()

        //verify checkout completion
        checkoutPage.clickFinish()
        checkoutPage.verifyOrderCompleteHeader()
        checkoutPage.verifyorderDispatchMessage()
        checkoutPage.clickBackToHome()

        //logout of application
        cy.uiLogout()
        cy.get(".login_logo").should('be.visible');
    })



});