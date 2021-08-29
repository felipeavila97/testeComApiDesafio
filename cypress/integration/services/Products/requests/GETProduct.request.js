// verbo/metodo - endpoint . motivo (request) . extensao
/// <reference types="cypress" />
let payloadProduct = require ('../payloads/add-produto.payload.json');


function pegar() {
    return cy.request({
       method: 'GET',
       url: 'produtos',
       headers: {
           accept: "aplication/json",
           
        },
       failOnStatusCode: false,
       body: payloadProduct
    })
}

export { pegar };