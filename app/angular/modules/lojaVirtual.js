angular.module("lojaVirtual").controller("lojaVirtualCtrl", function($scope){
    $scope.logo="Loja Virtual"

    $scope.blusas = [
        {id: 0, nome: 'camisasaBranca', img: '../images/camisa-branca.jpg', quantidade: 0, preco: 'R$34,99', estoque: '38'},
        {id: 1, nome: 'camisaBrancaMulher', img: '../images/camisa-branca-mulher.jpg', quantidade: 0, preco: 'R$29,99' , estoque: '24'},
        {id: 2, nome: 'camisaPreta', img: '../images/camisa-preta.jpg', quantidade: 0, preco: 'R$34,99', estoque: '26'},
        {id: 3, nome: 'camisaPretaMulher', img: '../images/camisa-preta-mulher.jpg', quantidade: 0, preco: 'R$29,99', estoque: '31'},
        {id: 4, nome: 'camisaBranca', img: '../images/camisa-branca.jpg', quantidade: 0, preco: 'R$34,99', estoque: '38'},
        {id: 5, nome: 'camisaBrancaMulher', img: '../images/camisa-branca-mulher.jpg', quantidade: 0, preco: 'R$29,99' , estoque: '24'},
        {id: 6, nome: 'camisaPreta', img: '../images/camisa-preta.jpg', quantidade: 0, preco: 'R$34,99', estoque: '26'},
        {id: 7, nome: 'camisaPretaMulher', img: '../images/camisa-preta-mulher.jpg', quantidade: 0, preco: 'R$29,99', estoque: '31'}
    ];

    $scope.adicionarNaLista = function(blusa){
        $scope.blusas.push(angular.copy(blusa));
        delete $scope.blusa;
        console.log($scope.blusas);
    }
        
});