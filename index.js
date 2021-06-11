console.log ('----------------------------------------------------------')
console.log ('              Projeto carrinho de compras')
console.log ('                    Mariana Andrade')
console.log ('----------------------------------------------------------')

const produtos = require ('./database.js');
const read = require('readline-sync');
const carrinho = []

produtos.sort ((a, b) => a.preco - b.preco);

// const verCategoria = read.question('Voce deseja encontrar os produtos por categoria? (S/N) ')
// const categorias = produtos.filter(item => item.categoria === verCategoria);
// console.table(categorias);

const categoria = read.question('Voce deseja encontrar os produtos por categoria? (S/N)');
console.log ('----------------------------------------------------------')

if (categoria.toUpperCase() === 'S'){
    console.log('Essas são as categorias listadas:');
    console.log('alimento', 'informatica', 'casa', 'higiene', 'bebida');

    const categoria = read.question('Qual categoria voce escolhe?');
    console.log ('----------------------------------------------------------')

    const filtroCategoria = produtos.filter(produtos => produtos.categoria === categoria);

    console.table(filtroCategoria);
    console.log ('----------------------------------------------------------')
    
} else{
    console.log('Essas sao todos os produtos e categorias: ');
    console.table(produtos);
    console.log('----------------------------------------------------------')

}

const array = new Array()

class Pedido{
    constructor(array){
        this.productor = array
        this.subTotal = 0
        this.valorTotal = 0
        this.totalItens = 0
    }
}

const compras = () =>{
    productId = parseInt (read.question('Digite o ID do produto desejado: '))

    for (i=0; i<1000; i++){
        findId = produtos.find(item => item.id === productId)

        if (findId){
            break;

        }else{
            productId = parseInt(read.question('Digite um ID válido '))
        }
    }


    quantidadeItens = parseInt(read.question('Digite a quantidade de ítens desejada: '))
    
    for (i=0; i<1000; i++){

        if (quantidadeItens > 0){
            break;

        }else{
            quantidadeItens = parseInt(read.question('Digite uma quantidade válida a partir de 1: '))
        }
    }
        const produtosDoCarrinho = {...findId, quantidade: quantidadeItens} //ele vai guardar a quantidade de ítens no array pra a gente usar
        carrinho.push(produtosDoCarrinho)

        const continueComprando = (read.question('Deseja adicionar mais produtos? (S/N) '))
        const continueComprandoUpper = continueComprando.toUpperCase() === 'N'

        if (continueComprandoUpper === 'N'){
            // cupomCheck = (read.question('Deseja incluir um cupom de desconto? (S/N) '))
            // const cupomDeDesconto = cupomCheck.toUpperCase() === 'S'
            //     if(cupomDeDesconto === 'S'){
            //         cupom = parseInt(read.question('Digite o valor do seu Cupom: '))

            //     }else{
            //         compras
            //     }
            cupom = parseInt(read.question('Deseja incluir cupom de desconto? Se sim digite o valor: '))
        }else{
            compras()
        }
        for (i=0; i < 1000; i++){
            if(cupom > 15 || cupom < 0){
                cupom = parseInt(read.question('Cupom inválido! Digite um valor de cupom válido: '))
            
            }else{
                break;
            }
        }

    }
compras()

class Order{
    constructor(carrinho){
        this.newProducts = carrinho
        this.subTotal = 0
    }
    calcSubtotal(){
        this.subTotal = this.newProducts.reduce((acumulator, item) =>acumulator + (item.preco * item.quantidade), 0)
    }
}

const order = new Order(carrinho)
console.table(order.newProducts);

order.calcSubtotal()
console.log(`Valor do pedido = R$ ${order.subTotal.toFixed(2)}.`);

const desconto = order.subTotal * (cupom/100)
console.table(`O valor do desconto é = R$ ${desconto}`);

const total = order.subTotal - desconto
console.table(`O valor total a pagar é de R$ ${total(2)}.`)

console.log('Obrigada por compar conosco!')