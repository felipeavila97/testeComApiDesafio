let payloadLogin = {
    email: "beltrano@bilbo.com.br",
    password: "teste"
}


function entrar(auth) {
   return cy.request({
       method: 'POST',
       url: "login",
       headers: {
        accept: "aplication/json",
        Authorization: auth
      },
      failOnStatusCode: false,
      body: payloadLogin
    }) 
}

export {entrar}