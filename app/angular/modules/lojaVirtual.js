angular.module("lojaVirtual").controller("lojaVirtualCtrl", function($scope){
    $scope.logo="Loja Virtual"

    $scope.produtosLoja = [
        {id: 0, nome: 'camisasaBranca', img: '../images/camisa-branca.jpg', quantidade: 0, preco: 'R$34,99', estoque: '38', categoria: 'camisa'},
        {id: 1, nome: 'camisaBrancaMulher', img: '../images/camisa-branca-mulher.jpg', quantidade: 0, preco: 'R$29,99' , estoque: '24', categoria: 'camisa'},
        {id: 2, nome: 'camisaPreta', img: '../images/camisa-preta.jpg', quantidade: 0, preco: 'R$34,99', estoque: '26', categoria: 'camisa'},
        {id: 3, nome: 'camisaPretaMulher', img: '../images/camisa-preta-mulher.jpg', quantidade: 0, preco: 'R$29,99', estoque: '31', categoria: 'camisa'},
        {id: 4, nome: 'camisaBranca', img: '../images/camisa-branca.jpg', quantidade: 0, preco: 'R$34,99', estoque: '38', categoria: 'camisa'},
        {id: 5, nome: 'camisaBrancaMulher', img: '../images/camisa-branca-mulher.jpg', quantidade: 0, preco: 'R$29,99' , estoque: '24', categoria:'camisa'},
        {id: 6, nome: 'camisaPreta', img: '../images/camisa-preta.jpg', quantidade: 0, preco: 'R$34,99', estoque: '26', categoria: 'camisa'},
        {id: 7, nome: 'camisaPretaMulher', img: '../images/camisa-preta-mulher.jpg', quantidade: 0, preco: 'R$29,99', estoque: '31', categoria: 'camisa'},
        {id: 8, nome: 'livroRosa', img: '../images/livro2.jpg', quantidade: 0, preco: 'R$29,99', estoque: '31', categoria:'livro'},
        {id: 9, nome: 'livroAzul', img: '../images/livro1.jpg', quantidade: 0, preco: 'R$29,99', estoque: '31', categoria:'livro'},
        {id: 10, nome: 'livroRosa', img: '../images/livro2.jpg', quantidade: 0, preco: 'R$29,99', estoque: '31', categoria:'livro'}
    ];

    $scope.categorias = [
        {nome: 'camisa'},
        {nome: 'livro'}
    ];

    $scope.adicionarNaLista = function(produto){
        $scope.produtosLoja.push(angular.copy(produto));
        delete $scope.produto;
        console.log($scope.produtosLoja);
    };

    $scope.adicionaQuantidade = function(produto){
        $scope.produto.quantidade + 1;
    };
    
    $scope.sumirForm = function(){
        $scope.sumirForm = 'sumirBaixo';
    }
});