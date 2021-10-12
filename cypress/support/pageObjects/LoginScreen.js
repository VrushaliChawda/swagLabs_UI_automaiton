

const errorMessage = "h3[data-test='error']"
const loginButton = "input[data-test='login-button']"
const inputUsername = "input[data-test='username']"
const inputPassword = "input[data-test='password']"

export function enterUserName(username)
{
    cy.get(inputUsername).type(username)
}

export function enterPassword(password)
{
    cy.get(inputPassword).type(password)
}

export function clickLoginButton()
{
    cy.get(loginButton).click()
}

export
{
    errorMessage
};
