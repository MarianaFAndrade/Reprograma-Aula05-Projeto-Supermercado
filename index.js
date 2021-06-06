console.log ('----------------------------------------------------------')
console.log ('              Projeto carrinho de compras')
console.log ('                    Mariana Andrade')
console.log ('----------------------------------------------------------')

const produtos = require ('./database.js');

produtos.sort ((a, b) => a.preco - b.preco);

const pegarEntrada = require('readline-sync');

const categoria = pegarEntrada.question('Voce deseja encontrar os produtos por categoria? (S/N)');
console.log ('----------------------------------------------------------')

if (categoria.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias listadas:');
    console.log('alimento', 'informatica', 'casa', 'higiene', 'bebida');

    const categoria = pegarEntrada.question('Qual categoria voce escolhe?');
    console.log ('----------------------------------------------------------')

    const filtroCategoria = produtos.filter(produtos => produtos.categoria === categoria);

    console.table(filtroCategoria);
    console.log ('----------------------------------------------------------')
    
} else{
    console.log('Essas sao todos os produtos e categorias: ');
    console.table(produtos);
    console.log ('----------------------------------------------------------')

}

const questionId = pegarEntrada.question('Digite o ID do produto desejado: ');
    if (questionId != produtos.id) {
        return 'Digite um ID válido'
    }

const quantidade = pegarEntrada.question('Digite a quantidade desejada do produto: ');
    console.log('Incluindo ítens no carrinho')
    console.log ('----------------------------------------------------------')





