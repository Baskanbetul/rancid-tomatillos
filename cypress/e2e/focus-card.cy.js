describe('Focus Card', () => {
  beforeEach('The user should see the main page', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    fixture: "movies.json",
    statusCode: 200
  })
  cy.visit('http://localhost:3000/')
  cy.get('.movie-container').within(() => {
    cy.get('.card').eq(1).click()
  })
})

it('Should have the Moldy Pears Header', () => {
  cy.get('header').contains('Moldy Pears')
})
})
