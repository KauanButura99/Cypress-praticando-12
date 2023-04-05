/// <reference types='cypresss' />
const perfil = require("../fixtures/perfil.json")

describe('Funcionalidade de Login', () => {

  beforeEach(() => {
    cy.visit("minha-conta/")
  });

  it('deve fazer login com sucesso', () => {
    cy.get('#username').type('josegabriel@gmail.com')
    cy.get('#password').type("12345")
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
  });

  it('Deve fazer login com sucesso - Usando dados do perfil', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
  })

  it.only('Deve fazer login com sucesso - Usando fixture', () => {
    cy.fixture('perfil').then(dados => {
      cy.get('#username').type(dados.usuario)
      cy.get('#password').type(dados.senha)
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    })
  })

})
