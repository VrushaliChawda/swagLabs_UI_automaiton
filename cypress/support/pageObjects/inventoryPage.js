import * as config from"../../../cypress/fixtures/ui_config_.json"

const productNameLink = "a[id^='item'][id$='title_link']"
const inventoryPriceList = ".inventory_item_price"
const cartCount = "div[id='shopping_cart_container'] > a > span"
const emptyCart = "div[id='shopping_cart_container'] > a"
const burgerMenu = "button[id='react-burger-menu-btn']"
const productSort = "select[data-test='product_sort_container']"
const appLogo = ".app_logo"


export function applogoVisible()
{
    cy.get(appLogo).should('be.visible')
}


export function clickProductName(productName){
    cy.get(productNameLink).each(($element,index)=>
    {
        if($element.text() === productName)
        {
            cy.get($element).click()
        }
    })
}

export function verifyAllProducts(productList)
{
    cy.get(productNameLink).each(($element,index)=>
    {
        expect($element.text()).to.equal(productList[index])
    })

}

export function verifyPriceSorting(priceList)
{
    cy.get(inventoryPriceList).each(($element,index)=>
    {
        expect($element.text()).to.equal(priceList[index])
    })

}

export function applySort(sortOption){
    cy.get(productSort).select(sortOption)
}

export function verifySortOptionSelected(appliedOption){
    cy.verifyText(productSort,appliedOption)
}

export function verifyCartCount(expectedCount){
    cy.get(cartCount).should("have.text",expectedCount)
}

export function verifyCartIsEmpty(){
    cy.get(emptyCart).to.have.property()
}


export function clickBurgerMenu(){
    cy.get(burgerMenu).click()
}
