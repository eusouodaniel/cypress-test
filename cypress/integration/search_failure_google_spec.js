describe('Search fail Google', () => {
    
    it('Successfully loads Google.com', () => {
        cy.visit('https://www.google.com') 
    })

    it('Search for something strange', () => {
        cy.get('[name="q"]')
        .type('Brincando com o Cypress')
        .should('have.value', 'Brincando com o Cypress')
        .type('{enter}')
    })

    it('Expect more than 1000 results', () => {
        cy.get('[id="result-stats"]').contains('Aproximadamente 1.160.000 resultados')
    })
  })
