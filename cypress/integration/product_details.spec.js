describe('Home Page', () => {
  it('should visit the home page', () => {
    // Visit the home page
    cy.visit('/');
  })
  it("can navigate to product details page by clicking on alt element", () => {
    cy.get("[alt='Giant Tea']").click();

    cy.contains(".product-detail", "Scented Blade").should("exist");
  })
})