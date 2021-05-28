angular.module("lojaVirtual").controller("lojaVirtualCtrl", function($scope){
    $scope.logo="Loja Virtual"

    $scope.blusas = [
        {id: 0, nome: 'Blusa-Branca', img: '../images/camisa-branca.jpg', quantidade: 0, preco: 'R$34,99', estoque: '38'},
        {id: 1, nome: 'Blusa-Branca-Mulher', img: '../images/camisa-branca-mulher.jpg', quantidade: 0, preco: 'R$29,99' , estoque: '24'},
        {id: 2, nome: 'Blusa-Preta', img: '../images/camisa-preta.jpg', quantidade: 0, preco: 'R$34,99', estoque: '26'},
        {id: 3, nome: 'Blusa-Preta-Mulher', img: '../images/camisa-preta-mulher.jpg', quantidade: 0, preco: 'R$29,99', estoque: '31'},
        {id: 4, nome: 'Blusa-Branca', img: '../images/camisa-branca.jpg', quantidade: 0, preco: 'R$34,99', estoque: '38'},
        {id: 5, nome: 'Blusa-Branca-Mulher', img: '../images/camisa-branca-mulher.jpg', quantidade: 0, preco: 'R$29,99' , estoque: '24'},
        {id: 6, nome: 'Blusa-Preta', img: '../images/camisa-preta.jpg', quantidade: 0, preco: 'R$34,99', estoque: '26'},
        {id: 7, nome: 'Blusa-Preta-Mulher', img: '../images/camisa-preta-mulher.jpg', quantidade: 0, preco: 'R$29,99', estoque: '31'}
    ];
        
});