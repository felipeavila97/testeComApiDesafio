import * as GETCarrinho from '../requests/GETCarrinho.request';

describe('GET Carrinho', () => {
    it('Listar todos os carrinhos', () => {
        GETCarrinho.pegarCarrinho().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        })
    });
});