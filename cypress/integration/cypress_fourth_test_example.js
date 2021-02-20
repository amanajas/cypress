describe('My Fourth Test', () => {
    before(() => {
      cy.viewport(550, 750)
    })
    beforeEach(() => {
        cy.visit('https://docs.cypress.io/api/api/table-of-contents.html');
    })
    
    it('Assertions page mobile', function() {
        // Go to assertions page
        cy.get('.api-li-assertions > .api-link').click();
        // Verify url
        cy.url().should('contain', 'https://docs.cypress.io/api/assertions/assertions.html');
        // Verify title
        cy.title().should("include", "Assertions")
    })
})