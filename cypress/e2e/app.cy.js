// import './fixtures/.movies.json' 

describe('App', () => {
  beforeEach('The user should see the main page', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    statusCode: 200,
    fixture: "movies.json" 
  })  
})


it('Moldy Pears should be the header', () => {
  cy.visit('http://localhost:3000/');
  cy.contains('Moldy Pears')
})

it('User should see all movies', () => {
  cy.get('div').should('have.class', 'card').should('have.length',6)
  })


it('Should show error message if server is down', () => {
  cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    statusCode: 500
  })
})
})
