describe('My Second Test', function() {
    before(() => {
        cy.visit('https://docs.cypress.io/api/api/table-of-contents.html');
    })
    
    it('Assertions page', function() {
        // Click on side bar menu
        cy.get('.sidebar-title:nth-child(3) > strong').click();
        // Go to assertions page
        cy.get('.sidebar-li-assertions > .sidebar-link').click();
        // Verify url
        cy.url().should('contain', 'https://docs.cypress.io/api/assertions/assertions.html');
        // Verify title
        cy.title().should("include", "Assertions")
    })
})