const produtos = [
    {id: 0, nome: 'Blusa-Branca', img: '../images/camisa-branca.jpg', quantidade: 0, valor: 'R$34,99', estoque: '38'},
    {id: 1, nome: 'Blusa-Branca-Mulher', img: '../images/camisa-branca-mulher.jpg', quantidade: 0, valor: 'R$29,99', estoque: '24'},
    {id: 2, nome: 'Blusa-Preta', img: '../images/camisa-branca.jpg', quantidade: 0, valor: 'R$34,99', estoque: '26'},
    {id: 3, nome: 'Blusa-Preta-Mulher', img: '../images/camisa-preta-mulher.jpg', quantidade: 0, valor: 'R$29,99', estoque: '31'},
    {id: 4, nome: 'Livro-Azul', img: '../images/livro1.jpg', quantidade: 0, valor: 'R$21,99', estoque: '55'},
    {id: 5, nome: 'Livro-Rosa', img: '../images/livro2.jpg', quantidade: 0, valor: 'R$21,99', estoque: '65'}
]

iniciarLoja = () => {
    let conteudoProdutos = document.getElementById('bg-produtos');
    for(i=0; i<produtos.length; i++){
    //produtos.map((val)=>{

        conteudoProdutos.innerHTML = `
        <div class="card">
            <img src="`+ produtos[i].img +`" class="img-fluid" alt="camisa">
            <div class="row">
                <div class="col-md-6">
                    <p>Qtd. ` + produtos[i].estoque + `</p>
                </div>
                <div class="col-md-6">
                    <h3>`+ produtos[i].valor +`</h3>
                </div>
            </div>                     
            <button key="` + produtos[i].id + `" class="btn">Adicionar ao Carrinho</button>
        </div>        
        `;
    //})
    }
}
iniciarLoja();

atualizaCarrinho = ()=>{
    //Event.preventDefault();
    console.log(produtos);
}
var buttons = document.getElementsByClassName('btn');
for(i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        let key = this.getAttribute('key');
        produtos[key].quantidade++;
        atualizaCarrinho();
    })
}
