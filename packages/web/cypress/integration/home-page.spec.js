describe('Home page', () => {
  it('loads map on the page', () => {
    cy.visit('/');
    cy.get('#map').should('exist');
  });
});
