describe('My Third Test', function() {
    before(() => {
        cy.visit('https://docs.cypress.io/api/api/table-of-contents.html');
    })

    beforeEach(() => {
        cy.url().should("contains", "https://docs.cypress.io/")
    })
    
    it('Assertions page', function() {
        // Click on side bar menu
        cy.get('.sidebar-title:nth-child(3) > strong').click();
        // Go to assertions page
        cy.get('.sidebar-li-assertions > .sidebar-link').click();
        // Verify url
        cy.url().should('contain', 'api/assertions/assertions.html')
        // Verify title
        cy.title().should("include", "Assertions")
    })
})