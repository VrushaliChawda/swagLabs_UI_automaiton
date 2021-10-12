import * as config from "../../../cypress/fixtures/ui_config_.json"

const inputFirstName = "input[data-test='firstName']"
const inputLastName = "input[data-test='lastName']"
const inputPostalCode ="input[data-test='postalCode']"
const buttonContinue = "input[data-test='continue']"
const paymentInformationLabel = ".summary_info_label"
const paymentInformationValue = ".summary_value_label"
const shippingInformationLabel = ".summary_info_label"
const shippingInformationValue = ".summary_value_label"
const finishButton = "button[data-test='finish']"
const orderCompleteHeader = ".complete-header"
const orderDispatchMessage =".complete-text"
const backToHomeButton = "button[data-test='back-to-products']"


export function enterFirstName(firstName)
{
    cy.get(inputFirstName).type(firstName)
}

export function enterLastName(lastName)
{
    cy.get(inputLastName).type(lastName)
}

export function enterPostalCode(postalCode)
{
    cy.get(inputPostalCode).type(postalCode)
}

export function clickContinue()
{
    cy.clickElement(buttonContinue)
}

export function clickFinish()
{
    cy.clickElement(finishButton)
}


export function verifyPaymentInformation()
{
    cy.get(paymentInformationLabel).first().should("have.text","Payment Information:")
    cy.get(paymentInformationValue).first().should("have.text", config.paymentMethod)

}

export function verifyShippingInformation()
{
    cy.get(shippingInformationLabel).last().should("have.text","Shipping Information:")
    cy.get(shippingInformationValue).last().should("have.text", config.shippingMethod)

}

export function verifyOrderCompleteHeader(){
    cy.verifyText(orderCompleteHeader,"THANK YOU FOR YOUR ORDER")
}

export function verifyorderDispatchMessage(){
    cy.verifyText(orderDispatchMessage,"Your order has been dispatched, and will arrive just as fast as the pony can get there!")
}

export function clickBackToHome(){
    cy.clickElement(backToHomeButton)
}