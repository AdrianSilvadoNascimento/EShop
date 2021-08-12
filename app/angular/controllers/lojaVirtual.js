angular.module("lojaVirtual").controller("lojaVirtualCtrl", function($scope){
    $scope.logo="Loja Virtual"

    $scope.localStorageProdutoAComprar = JSON.parse(localStorage.getItem('produtos-a-comprar'));
    $scope.produtosAComprar = localStorage.getItem('produtos-a-comprar') != null ? $scope.localStorageProdutoAComprar : [];

    $scope.updateProdutoAComprar = () => {
        localStorage.setItem('produtos-a-comprar', JSON.stringify($scope.produtosAComprar));
    }

    $scope.produtosLoja = [
        {id: 0, nome: 'camisasaBranca', img: '../images/camisa-branca.jpg', quantidade: 0, preco: 35, estoque: '38', categoria: 'camisa'},
        {id: 1, nome: 'camisaBrancaMulher', img: '../images/camisa-branca-mulher.jpg', quantidade: 0, preco: 30 , estoque: '24', categoria: 'camisa'},
        {id: 2, nome: 'camisaPreta', img: '../images/camisa-preta.jpg', quantidade: 0, preco: 35, estoque: '26', categoria: 'camisa'},
        {id: 3, nome: 'camisaPretaMulher', img: '../images/camisa-preta-mulher.jpg', quantidade: 0, preco: 30, estoque: '31', categoria: 'camisa'},
        {id: 4, nome: 'camisaBranca', img: '../images/camisa-branca.jpg', quantidade: 0, preco: 35, estoque: '38', categoria: 'camisa'},
        {id: 5, nome: 'camisaBrancaMulher', img: '../images/camisa-branca-mulher.jpg', quantidade: 0, preco: 30 , estoque: '24', categoria:'camisa'},
        {id: 6, nome: 'camisaPreta', img: '../images/camisa-preta.jpg', quantidade: 0, preco: 35, estoque: '26', categoria: 'camisa'},
        {id: 7, nome: 'camisaPretaMulher', img: '../images/camisa-preta-mulher.jpg', quantidade: 0, preco: 30, estoque: '31', categoria: 'camisa'},
        {id: 8, nome: 'livroRosa', img: '../images/livro2.jpg', quantidade: 0, preco: 30, estoque: '31', categoria:'livro'},
        {id: 9, nome: 'livroAzul', img: '../images/livro1.jpg', quantidade: 0, preco: 30, estoque: '31', categoria:'livro'},
        {id: 10, nome: 'livroRosa', img: '../images/livro2.jpg', quantidade: 0, preco: 30, estoque: '31', categoria:'livro'},
        {id: 10, nome: 'xicaraCha', img: '../images/cup-tea.jpg', quantidade: 0, preco: 15, estoque: '31', categoria:'livro'},
        {id: 11, nome: 'xicaraCha', img: '../images/cup-tea.jpg', quantidade: 0, preco: 15, estoque: '31', categoria:'livro'}
    ];

    $scope.sacolaVazia = "Sua Sacola de Produtos está vazia";

    $scope.categorias = [
        {nome: 'camisa'},
        {nome: 'livro'}
    ];

    $scope.clientes = [];

    $scope.sacolaProduto = 0;

    $scope.adicionarNaLista = function(produto){
        $scope.produtosLoja.push(angular.copy(produto));
        delete $scope.produto;
    };

    $scope.adicionarProduto = function(produto){
        $scope.sacolaProduto = (produto.quantidade++) + 1;
        $scope.produtosAComprar.push(angular.copy(produto));
        $scope.updateProdutoAComprar();
        console.log("Você adicionou um produto " + $scope.sacolaProduto);
    };

    $scope.removerItem = function (produtoAComprar){
        var produtoRemovido = $scope.produtosAComprar.indexOf(produtoAComprar);
        $scope.produtosAComprar.splice(produtoRemovido, 1);
        $scope.updateProdutoAComprar();
    };

    $scope.adicionarCliente = function(cliente){
        $scope.clientes.push(angular.copy(cliente));
        delete $scope.cliente;
    };
});