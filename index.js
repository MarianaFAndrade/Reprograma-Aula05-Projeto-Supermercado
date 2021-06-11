console.log ('----------------------------------------------------------')
console.log ('              Projeto carrinho de compras')
console.log ('                    Mariana Andrade')
console.log ('----------------------------------------------------------')

const produtos = require ('./database.js');
const read = require('readline-sync');
const carrinho = []

produtos.sort ((a, b) => a.preco - b.preco);

const categoria = read.question('Voce deseja encontrar os produtos por categoria? (S/N)');
console.log ('----------------------------------------------------------')

if (categoria.toUpperCase() === 'S'){
    console.log('Essas são as categorias listadas:');
    console.log('alimento', 'informatica', 'casa', 'higiene', 'bebida');

    const categoria = read.question('Qual categoria voce escolhe?');

    const filtroCategoria = produtos.filter(produtos => produtos.categoria === categoria);

    console.table(filtroCategoria);
    
} else{
    console.log('Essas sao todos os produtos e categorias: ');
    console.table(produtos);

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
            productId = parseInt(read.question('Digite um ID valido '))
        }
    }


    quantidadeItens = parseInt(read.question('Digite a quantidade de itens desejada: '))
    
    for (i=0; i<1000; i++){

        if (quantidadeItens <= 0){
            quantidadeItens = parseInt(read.question('Digite uma quantidade valida a partir de 1: '))

        }else{
            break;
        }
    }
        const produtosDoCarrinho = {...findId, quantidade: quantidadeItens} //ele vai guardar a quantidade de ítens no array pra a gente usar
        carrinho.push(produtosDoCarrinho)

        const continueComprando = (read.question('Deseja adicionar mais produtos? (S/N) '))
        const continueComprandoUpper = continueComprando.toUpperCase()

        if (continueComprandoUpper === 'N'){
            cupomCheck = (read.question('Voce tem um cupom de desconto e deseja incluir? (S/N) '))
            const cupomDeDesconto = cupomCheck.toUpperCase()
                if(cupomDeDesconto === 'S'){
                    cupom = parseInt(read.question('Digite o valor do seu Cupom: '))
                
                }else{
                    compras()
                }
        }else{
            compras()
        }
        for (i=0; i < 1000; i++){
            if(cupom > 15 || cupom < 0){
                cupom = parseInt(read.question('Cupom invalido! Digite um valor de cupom valido: '))
            
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
console.log('Essas são suas compras :')
console.table(order.newProducts);

order.calcSubtotal()
console.log(`Valor do pedido = R$ ${order.subTotal.toFixed(2)}.`);

const desconto = order.subTotal * (cupom/100)
console.table(`O valor do desconto é = R$ ${desconto}`);

const total = order.subTotal - desconto
console.table(`O valor total a pagar é de R$ ${total}.`)

console.log('Obrigada por compar conosco!')

const hoje = new Date()
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const dataHoje = hoje.toLocaleDateString('pt-BR', options)

console.log(dataHoje)