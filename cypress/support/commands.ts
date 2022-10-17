import * as LOC from "./helpers/locators/component.locators"

/**
 * Custom command to type a few random words into input elements
 * @example cy.get('input').typeRandomWords()
 */
export const proceed_to_checkout = () => {
    cy.get(LOC.T_SHIRT_CATEGORY.PROCEED_TO_CHECKOUT).click() 
}
Cypress.Commands.add('proceed_to_checkout', proceed_to_checkout)
