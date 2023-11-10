describe('Home Page', () => {
  it('should visit the home page', () => {
    // Visit the home page
    cy.visit('/');
  })
  it("should add a product to the cart and update the cart count", () => {
    cy.contains('My Cart (0)')
    
    cy.contains('Add').first().click({force: true})

    cy.contains('My Cart (1)')
  })

});