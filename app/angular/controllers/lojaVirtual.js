angular.module("lojaVirtual").controller("lojaVirtualCtrl", function($scope){

    //Iniciando array de usuarios
    $scope.localStorageUsuario = JSON.parse(localStorage.getItem('usuarios-cadastrados'));
    $scope.usuarios = localStorage.getItem('usuarios-cadastrados') != null ? $scope.localStorageUsuario : [];
    //Iniciando array de usuarios
    
    //Atualiza status de usuários no localStorage
    $scope.updateUsuarios = () => {
        localStorage.setItem('usuarios-cadastrados', JSON.stringify($scope.localStorageUsuario));
    };
    //Atualiza status de usuários no localStorage
    
    //Lista de produtos na sacola
    $scope.localStorageProdutoAComprar = JSON.parse(localStorage.getItem('produtos-a-comprar'));
    $scope.produtosAComprar = localStorage.getItem('produtos-a-comprar') != null ? $scope.localStorageProdutoAComprar : [];
    //Lista de produtos na sacola

    //Atualiza status da lista no localStorage
    $scope.updateProdutoAComprar = () => {
        localStorage.setItem('produtos-a-comprar', JSON.stringify($scope.produtosAComprar));
    };
    //Atualiza status da lista no localStorage

    //Produtos da loja > objetos
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
        {id: 11, nome: 'xicaraCha', img: '../images/cup-tea.jpg', quantidade: 0, preco: 15, estoque: '31', categoria:'produtos'},
        {id: 12, nome: 'xicaraCha', img: '../images/cup-tea.jpg', quantidade: 0, preco: 15, estoque: '31', categoria:'produtos'}
    ];
    //Produtos da loja > objetos

    $scope.categorias = [
        {nome: 'camisa'},
        {nome: 'livro'},
        {nome: 'produtos'}
    ];

    //Mensagem quando a sacola está vazia
    $scope.sacolaVazia = "Sua Sacola de Produtos está vazia";
    //Mensagem quando a sacola está vazia
    
    //Quantidade de itens na sacola    
    $scope.sacolaProduto = 0;
    $scope.localStorageSacolaProduto = JSON.parse(localStorage.getItem('quantidade-item-sacola'));
    $scope.sacolaProduto = localStorage.getItem('quantidade-item-sacola') != null ? $scope.localStorageProdutoAComprar : [];
    //Quantidade de itens na sacola

    //Atualiza status da quantidade de itens no localStorage
    $scope.updateSacolaProduto = () => {
        localStorage.setItem('quantidade-item-sacola', JSON.stringify($scope.sacolaProduto));
    };
    //Atualiza status da quantidade de itens no localStorage

    //Adiciona produto na vitrine (adm)
    $scope.adicionarNaVitrine = function(produto){
        $scope.produtosLoja.push(angular.copy(produto));
        delete $scope.produto;
    };
    //Adiciona produto na vitrine (adm)

    //Adiciona produto à sacola
    $scope.adicionarProduto = function(produto){
        $scope.sacolaProduto = ++(produto.quantidade);
        $scope.produtosAComprar.push(angular.copy(produto));
        $scope.updateProdutoAComprar();
        $scope.updateSacolaProduto();
        console.log("Você adicionou um produto " + $scope.sacolaProduto);
    };
    //Adiciona produto à sacola
    
    //Remove produto da sacola
    $scope.removerItem = function (produtoAComprar){
        var produtoRemovido = $scope.produtosAComprar.indexOf(produtoAComprar);
        $scope.produtosAComprar.splice(produtoRemovido, 1);
        $scope.updateProdutoAComprar();
        $scope.updateSacolaProduto();
        document.location.reload(true);
    };
    //Remove produto da sacola

    //Aumenta quantidade de peça
    $scope.aumentarQuantidade = function(produto){
        $scope.produtoAComprar = $scope.produtoAComprar.quantidade + 1;
    };
    //Aumenta quantidade de peça
    
    //Diminui quantidade de peça
    $scope.diminuirQuantidade = function(produto){
        $scope.produtoAComprar = $scope.produtoAComprar.quantidade - 1;
    };
    //Diminui quantidade de peça
    
    //Cadastra usuário
    $scope.adicionarCliente = function(cliente){
        $scope.usuario.push(angular.copy(cliente));
        delete $scope.cliente;
    };
    //Cadastra usuário
});