// import './fixtures/.movies.json' 

describe('App', () => {
  beforeEach('The user should see the main page', () => {
    cy.visit('http://localhost:3000/')
  })


it('Moldy Pears should be the header', () => {
  cy.contains('Moldy Pears')
})

it('User should see all movies', () => {
  cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: "movies.json" })
    statusCode: 200
    .get('div').should('have.class', 'card').should('have.length',6)
  })


it('Should show error message if server is down', () => {
  cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    statusCode: 500
  })
})
})
