describe("Google Test", () => {
  it('Shows Google', () => {
    cy.visit('https://www.http://typingx0.net/sushida/')

    cy.title().should("include", "寿司打")
  })
})
