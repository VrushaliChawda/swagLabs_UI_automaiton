import * as config from "../../../cypress/fixtures/ui_config_.json"


const cartItemList = "div[class='cart_item']"
const inventoryName = "div[class='inventory_item_name']"
const inventoryDesc = "div[class='inventory_item_desc']"
const inventoryPrice ="div[class='inventory_item_price']"
const inventoryQty = "div[class='cart_quantity']"
const removebutton = "button[data-test^='remove']"
const checkoutButton = "button[data-test='checkout']"
const continueShoppingButton = "button[data-test='continue-shopping']"
const cartLink = ".shopping_cart_link"



export function verifyCartItems()
{
    cy.get(cartItemList).each(($element,index)=>
    {
        cy.get('.cart_quantity').should("have.text",config.cartInventoryQty[index])
        cy.get('.inventory_item_name').should("have.text",config.cartInventoryNames[index])
        cy.get('.inventory_item_desc').should("have.text",config.cartInventoryDesc[index])
        cy.get('.inventory_item_price').should("have.text",config.cartInventoryPrice[index])
    })
}
export function verifyCartInventoryNames()
{
    cy.get(inventoryName).each(($element,index)=>
    {
        cy.get($element).should("have.text",config.cartInventoryNames[index])
    })
}

export function verifyCartInventoryDesc()
{
    cy.get(inventoryDesc).each(($element,index)=>
    {
        cy.get($element).should("have.text",config.cartInventoryDesc[index])
    })
}

export function verifyCartInventoryQty()
{
    cy.get(inventoryQty).each(($element,index)=>
    {
        cy.get($element).should("have.text",config.cartInventoryQty[index])
    })
}

export function verifyCartInventoryPrice()
{
    cy.get(inventoryPrice).each(($element,index)=>
    {
        cy.get($element).should("have.text",config.cartInventoryPrice[index])
    })
}

export function navigateToCart(){

    cy.clickElement(cartLink)
}

export function clickCheckout()
{
    cy.clickElement(checkoutButton)
}