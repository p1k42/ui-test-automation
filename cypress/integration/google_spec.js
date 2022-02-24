describe("Google Test", () => {
  it('Shows Google', () => {
    cy.visit('http://typingx0.net/sushida/')

    cy.title().should("include", "寿司打")
  })
})
