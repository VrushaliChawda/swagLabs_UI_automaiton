
const allItemsLink = "a[id='inventory_sidebar_link']"
const aboutLink = "a[id='about_sidebar_link']"
const resetLink = "a[id='reset_sidebar_link']"
const sauceLabLogo = ".nav-image"
const closeburgerMenu ="button[id='react-burger-cross-btn'"

export function clickAllItemsLink()
{
    cy.get(allItemsLink).click()
}
export function clickCloseBurgerMenu()
{
    cy.get(closeburgerMenu).click()
}

export function clickAboutLink()
{
    cy.get(aboutLink).click()
}

export function clickResetLink()
{
    cy.get(resetLink).click()
}

export function verifySauceLabLogoIsVisible()
{
    cy.get(sauceLabLogo).should("be.visible")
}
