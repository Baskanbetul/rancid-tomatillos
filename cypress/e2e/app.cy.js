
describe('App', () => {
  beforeEach('The user should see the main page', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    fixture: "movies.json",
    statusCode: 200
  })
  cy.visit('http://localhost:3000/')
})


it('Moldy Pears should be the header', () => {
  cy.get('header').within(() => {
    cy.get('button').contains('Moldy Pears')
  })
})

it('User should see all movies', () => {
  cy.get('.movie-container').within(() => {
    cy.get('.card').should('have.length', 6)
    cy.get('.card').eq(0).contains('Money Plane')
    cy.get('.card').eq(2).find('.movie-poster').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg')
  })
})

it('Should show error message if server is down', () => {
  cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    statusCode: 500
  })
})
})
