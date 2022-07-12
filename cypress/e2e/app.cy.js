describe('App', () => {
  beforeEach('The user should see the main page', () => {
    cy.visit('http://localhost:3000/')
  })

it('Moldy Pears should be the header', () => {
  cy.contains('Moldy Pears')
})

it('Should show error message if server is down', () => {
  cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    statusCode: 500
  })
})
})
