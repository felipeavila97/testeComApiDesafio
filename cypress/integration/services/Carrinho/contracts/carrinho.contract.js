import Joi from 'joi';

const carrinhoSchema = Joi.object({
    quantidade: Joi.number(),
    carrinho: Joi.object(),
    produtos: Joi.array().items(
        Joi.object({
            idProduto: Joi.string(),
            quantidade: Joi.number(),
            precoUnitario: Joi.number()
        })
    )
})

export default carrinhoSchema;