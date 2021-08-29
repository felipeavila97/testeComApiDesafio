/// <reference types="cypress" />

function pegarCarrinho(_id) {
    return cy.request({
        method: 'GET',
        url: `carrinhos/${_id}`,
        headers: {
            aceppt: "aplication/json"
        },
        failOnStatusCode: false
    })
}

export {pegarCarrinho};