export const addMovie = (
  name: string,
  year: number,
  rating: number,
  director: string,
) => {
  cy.get('[placeholder="Movie name"]').type(name, {delay: 0})
  cy.get('[placeholder="Movie year"]')
    .clear()
    .type(`${year}{backspace}`, {delay: 0})
  cy.get('[placeholder="Movie rating"]').clear().type(`${rating}`, {
    delay: 0,
  })
  cy.get('[placeholder="Movie director"]').clear().type(director, {delay: 0})
}
