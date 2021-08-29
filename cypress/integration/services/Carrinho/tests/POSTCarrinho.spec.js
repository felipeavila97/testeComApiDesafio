import * as POSTCarrinho from '../requests/POSTCarrinho.request';
import * as POSTLogin from '../../login/request/POSTLogin.request';
import * as GETProduct from '../../Products/requests/GETProduct.request';
import * as DELETECarrinho from '../../Carrinho/requests/DELETECarrinho.request';

describe('Post Carrinho', () => {
    it('Adicionar um carrinho', () => {
        POSTLogin.entrar().should((resEntrar) => {
           expect(resEntrar.status).to.eq(200)
           
           GETProduct.pegar().should((resProduct) => {
                   expect(resProduct.status).to.eq(200)

                   POSTCarrinho.criar(resEntrar.body.authorization).should((resCarrinho) => {
                       expect(resCarrinho.status).to.eq(201)
                       expect(resCarrinho.body.message).to.eq("Cadastro realizado com sucesso")

                       DELETECarrinho.deletarCar(resEntrar.body.authorization).should((resExcluir) => {
                        expect(resExcluir.status).to.eq(200)
                        expect(resExcluir.body.message).to.eq("Registro excluído com sucesso. Estoque dos produtos reabastecido")
                       
                   })
               })
           })
            
        })
    });
});


