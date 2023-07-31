describe('Test For ToDo', () => {
  let TODO_ITEM_ONE = "Make every second count";
  let TODO_ITEM_TWO = "Invest in yourself";
  let TODO_ITEM_THREE = "Learn Cypress";

  beforeEach(() => {
    cy.visit("http://localhost:8888");
  });

  it('displays ToDo', () => {
    cy.get(".new-todo").type(TODO_ITEM_ONE).type("{enter}");
    cy.get(".new-todo").type(TODO_ITEM_TWO).type("{enter}");
    cy.get(".new-todo").type(TODO_ITEM_THREE).type("{enter}");
  });
  it('Checks if 3rd item Completed', () => {
    cy.marksTodoAsCompleted(2);
    cy.get('.completed:nth-child(2)').should('exist');
});
});
