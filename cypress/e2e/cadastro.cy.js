/// <reference types='cypress' />
import { faker } from '@faker-js/faker';

beforeEach(() => {
  cy.visit('minha-conta/')
});

describe('Funcionalidade de pré-cadastro', () => {

  it('Deve fazer o pré-cadastro com sucesso ', () => {
    let senhaFaker = faker.internet.password()
    let nameFaker = faker.name.firstName()
    let sobrenomeFaker = faker.name.lastName()
    let emailFaker = faker.internet.email(nameFaker)

    cy.get('#reg_email').type(emailFaker)
    cy.get('#reg_password').type(senhaFaker)
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

    cy.get('#account_first_name').type(nameFaker)
    cy.get('#account_last_name').type(sobrenomeFaker)
    cy.get('.woocommerce-Button').click()

    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
  });

  it.only('Deve fazer cadastro com comandos customizados', () => {
    let emailFaker2 = faker.internet.email()
    cy.preCadastro(emailFaker2, '12345', 'Cristiano', 'Ronaldo')

    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
  });
});