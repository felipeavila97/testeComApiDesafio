/// <reference types="cypress" />

const payloadCarrinho = require('../../Carrinho/payloads/add-carrinho.payload.json');


function criar(auth) {
   return cy.request({
       method: "POST",
       url: "carrinhos",
       headers: {
         accept: "aplication/json",
         Authorization: auth
        },
        failOnStatusCode: false,
        body: payloadCarrinho
    }) 
}

export {criar};