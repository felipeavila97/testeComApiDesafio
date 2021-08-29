/// <reference types="cypress" />
import * as payloadProduct from require('../payloads/add-produto.payload.json');
//let faker = require('faker');

function adicionar(auth) {
  //payloadProduct.nome = faker.commerce.product();
    return cy.request({
        method: 'POST',
        url: 'produtos',
        headers: {
            accept: "aplication/json",
            authorization: auth
        },
        failOnStatusCode: false,
        body: payloadProduct
    })
}

export {adicionar};