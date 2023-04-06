/// <reference types='cypress' />
import endereçoPage from "../support/page-objects/endereço-page";

describe('Funcionalidade Faturamento e Entrega', () => {
  beforeEach(() => {
    cy.visit('minha-conta/')
    cy.login('josegabriel@gmail.com', '12345')
  });

  it.only('Deve fazer cadastro de faturamento com sucesso', () => {
    endereçoPage.editarEndereçoFaturamento("Kauan", "Butura", "Ebac", "Inajar de Souza", "apartamento",
      "São Paulo", "São Paulo", "02721-200", "2728474837", "josemario@gmail.com")

    cy.get('.woocommerce-message').should('contain', "Endereço alterado com sucesso.")
  });
});