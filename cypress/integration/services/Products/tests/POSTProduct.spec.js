import * as POSTProduct from '../requests/POSTProduct.request';
import * as POSTLogin from '../../login/request/POSTLogin.request';

describe('Post Produtos', () => {
    it('Adicionar um novo produto', () => {
        POSTLogin.entrar().should((resEntrar) => {
            expect(resEntrar.status).to.eq(200)
            POSTProduct.adicionar(resEntrar.body.authorization).should((resProdutos) => {
                expect(resProdutos.status).to.eq(201)
                expect(resProdutos.body.message).to.eq("Cadastro realizado com sucesso")
            })
            
        })
    });
});