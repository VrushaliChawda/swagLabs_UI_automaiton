// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import * as config from"../../cypress/support"
// ui login method
Cypress.Commands.add("uiLogin",(username,password)=>
{
    cy.visit('/');
    cy.get("input[data-test='username']").type(username);
    cy.get("input[data-test='password']").type(password);
    cy.get("input[data-test='login-button']").click();
})

Cypress.Commands.add("uiLogout",()=>
{
    cy.get("button[id='react-burger-menu-btn']").click()
    cy.get("a[id='logout_sidebar_link']").click();
})


Cypress.Commands.add("verifyUrl",(expectedEndpoint)=>
{
    cy.url().should("include",expectedEndpoint)
})

Cypress.Commands.add("verifyText",(element,expectedText)=>
{
    cy.get(element).should("have.text",expectedText)
})

Cypress.Commands.add("clickElement",(element)=>
{
    cy.get(element).click()
})