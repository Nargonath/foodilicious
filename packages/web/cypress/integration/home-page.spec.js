describe('Home page', () => {
  it('loads map on the page', () => {
    cy.visit('/');
    cy.get('#map').should('exist');
  });

  it('loads markers for all places', () => {
    cy.visit('/');
    // dirty selector but didn't find a proper way to identify a marker on the map other than changing icon or stuff like that
    cy.get('img[src*="spotlight"]').should('exist');
  });
});
