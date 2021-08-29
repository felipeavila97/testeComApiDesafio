import produtosSchema from '../contracts/produtos.contract';
import * as GETProduct from '../requests/GETProduct.request';

describe('GET Produto', () => {
    it('Listar os produtos com sucesso', () => {
     GETProduct.pegar().should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.not.null;
     })   
});
    
    it('Validar o contrato da lista de produtos', () => {
        GETProduct.pegar().should((response) => {
            return produtosSchema.validateAsync(response.body)
        })
    });
});