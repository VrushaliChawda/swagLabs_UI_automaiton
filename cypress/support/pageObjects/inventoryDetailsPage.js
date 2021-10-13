
const inventoryName = ".inventory_details_name"
const inventoryDesc = ".inventory_details_desc"
const inventoryPrice = ".inventory_details_price"
const inventoryImage = ".inventory_details_img_container > img"
const backToProductButton = "button[data-test='back-to-products']"
const addToCart = "button[data-test^='add-to-cart']"
const removeButton = "button[data-test^='remove']"

export function verifyInventoryName(expectedName){
    cy.get(inventoryName).should("have.text",expectedName)
}

export function removeItem(){
    cy.get(removeButton).click()
}

export function removeButtonIsVisible(){
    cy.get(removeButton).should("be.visible")
}

export function verifyInventoryDesc(expectedDesc){
    cy.get(inventoryDesc).should("have.text",expectedDesc)
}
export function verifyInventoryPrice(expectedPrice){
    cy.get(inventoryPrice).invoke('text').invoke('replace', /\u00a0/g, ' ').should('eq',expectedPrice)
}

export function verifyInventoryImage(expectedImage){
    cy.get(inventoryImage).should("have.text",expectedImage)
}

export function verifyBackToProductsButton(){
    cy.get(backToProductButton).should("have.text","Back to products")
}

export function clickBackToProductsButton(){
    cy.get(backToProductButton).click()
}

export function addToCartIsVisible(){
    cy.get(addToCart).should("be.visible")
}


export function clickAddToCart(){
    cy.get(addToCart).click()
}
export function navigateToCart(){
    cy.get(addToCart).click()
}