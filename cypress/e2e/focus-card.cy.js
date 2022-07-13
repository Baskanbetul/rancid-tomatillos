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

it('Should see movie poster and title about movie after click it', () => {
  cy.get('.focus-card').within(() => {
    cy.get('.movie-poster-large').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg');
    cy.contains('Mulan'); 
  })
})

it('Should see extra info about movie after click it', () => {
  cy.get('.movie-specs').within(() => {
		cy.get('.details').eq(1).contains('Released: 2020-09-04');
		cy.get('.details').eq(2).contains('Runtime: 115');
		cy.get('.details').eq(3).contains('Budget: 200000000');
		cy.get('.details').eq(4).contains('Revenue: 57000000');
    cy.get('.details').eq(5).contains('Rating: 5.1');
	});
})

it('Should have a trailer if there is one', () => {
  cy.get('.focus-card').within(() => {
    cy.get('.movie-overview').within(() => {
      cy.get('MovieTrailer');
    })
  })
})
})

//click moldpear go back to main page 


	// "id": 337401,
	// 		"poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
	// 		"backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
	// 		"title": "Mulan",
	// 		"average_rating": 4.909090909090909,
	// 		"release_date": "2020-09-04"
