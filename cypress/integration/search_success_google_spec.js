describe('Search success Google', () => {
    
    it('Successfully loads Google.com', () => {
        cy.visit('https://www.google.com') 
    })

    it('Search for a video', () => {
        cy.get('[name="q"]')
        .type('help the beatles youtube')
        .should('have.value', 'help the beatles youtube')
        .type('{enter}')
    })
  })