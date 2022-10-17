import { contains } from 'cypress/types/jquery'
import { Context } from 'mocha'
import * as LOC from 'support/helpers/locators/component.locators'
describe('Component - cart', function () {
	context('ADD TO CART - CATEGORY PAGE FLOW', () => {
		const category_url = '?id_category=5&controller=category'
		beforeEach(() => {
			cy.visit(category_url)
			cy.get(LOC.T_SHIRT_CATEGORY.ADD_TO_CART).click()
		})
		it(`
	GIVEN: a shopping item in T-SHIRTS PAGE
	WHEN: A user adds an item in cart
	AND: clicks on continue page
	THEN: item details should be visible in the Cart on mouse hoover`, () => {
			cy.get(LOC.T_SHIRT_CATEGORY.CONTINUE_SHOPPING).click()
			cy.get(LOC.T_SHIRT_CATEGORY.PRODUCT_QUANTITY).should('have.text', 1)
			cy.get(LOC.T_SHIRT_CATEGORY.VIEW_CART).trigger('mouseover')
			//verify details in cart
			cy.get(LOC.CART.SHIPPING_COST).should('have.text', '$2.00')
			//TODO: same verification for remaing elements
		})

		it(`
	GIVEN: a shopping item in T-SHIRTS PAGE
	WHEN: A user adds an item in cart
	AND: clicks on proceed to checkoout
	THEN: item details should be visible in the Cart on mouse hoover`, () => {
			cy.proceed_to_checkout()
			//verify details in cart
			cy.get(LOC.CART.PRODCUT_DESCRIPTION).should(
				'have.text',
				'Faded Short Sleeve T-shirts'
			)
			//TODO: same verification for remaing elements
		})
	})
	context('ADD TO CART - PRODUCT PAGE FLOW', () => {
		const product_url = '?id_product=3&controller=product'
		const checkout_url = '?controller=order'
		beforeEach(() => {
			cy.visit(product_url)
			cy.get(LOC.PRODUCT.ADD_TO_CART).click()
			cy.get(LOC.T_SHIRT_CATEGORY.CONTINUE_SHOPPING).click()
		})
		it(`
	GIVEN: a shopping item in CART
	WHEN:A user increate Quanitiy of item in cart  
	THEN: item should be added in cart summary
	AND: Cart item should be updated on cart modal on Page`, () => {
			cy.get(LOC.T_SHIRT_CATEGORY.PRODUCT_QUANTITY).should('have.text', 1)
			cy.visit(checkout_url)
			cy.get(LOC.CART.PRODCUT_DESCRIPTION).should('have.text', 'Printed Dress')
		})
	})
})
