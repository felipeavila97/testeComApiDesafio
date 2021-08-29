/// <reference types="cypress" />
//let payloadCarrinho = require('../../Carrinho/payloads/payload.carrinho.json');

function deletarCar(auth) {
    return cy.request({
        method: 'DELETE',
        url: 'carrinhos/cancelar-compra',
        headers: {
            accept: "aplication/json",
            Authorization: auth
        },
        failOnStatusCode: false,
        
        
        
    })
}

export {deletarCar};