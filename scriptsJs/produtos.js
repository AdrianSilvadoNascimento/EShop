const blusasVitrine = [
    {id: 0, nome: 'Blusa-Branca', img: '../images/camisa-branca.jpg', quantidade: 0, preco: 'R$34,99', estoque: '38'},
    {id: 1, nome: 'Blusa-Branca-Mulher', img: '../images/camisa-branca-mulher.jpg', quantidade: 0, preco: 'R$29,99' , estoque: '24'},
    {id: 2, nome: 'Blusa-Preta', img: '../images/camisa-preta.jpg', quantidade: 0, preco: 'R$34,99', estoque: '26'},
    {id: 3, nome: 'Blusa-Preta-Mulher', img: '../images/camisa-preta-mulher.jpg', quantidade: 0, preco: 'R$29,99', estoque: '31'},
    {id: 4, nome: 'Livro-Azul', img: '../images/livro1.jpg', quantidade: 0, preco: 'R$21,99', estoque: '55'},
    {id: 5, nome: 'Livro-Rosa', img: '../images/livro2.jpg', quantidade: 0, preco: 'R$21,99', estoque: '65'},
]
const livrosVitrine = [
    {}
]

iniciarLoja = () => {
    let conteudoProdutos = document.getElementById('bg-produtos');
    for(i=0; i < blusasVitrine.length; i++){
    //produtos.map((val)=>{

        conteudoProdutos.innerHTML += `
        <div class="card">
            <img src="`+ blusasVitrine[i].img +`" class="img-fluid" alt="camisa">
            <div class="row">
                <div class="col-md-6">
                    <p>Qtd. ` + blusasVitrine[i].estoque + `</p>
                </div>
                <div class="col-md-6">
                    <h3>`+ blusasVitrine[i].preco +`</h3>
                </div>
            </div>                     
            <button key="` + blusasVitrine[i].id + `" class="btn">Adicionar ao Carrinho</button>
        </div>        
        `;
    //})
    }
}
iniciarLoja();

atualizaCarrinho = ()=>{
    let conteudoCarrinho = document.getElementById('carrinho');
    conteudoCarrinho.innerHTML = "";
    for(i=0; i<blusasVitrine.length; i++){
        if(blusasVitrine[i].quantidade > 0){    
            conteudoCarrinho.innerHTML += `
            <tr>
                <th>Produto</th>
                <th>Qtd.</th>
                <th>Valor Und.</th>
            </tr>
            <tr>
                <td>`+ blusasVitrine[i].nome +`</td>
                <td>` + blusasVitrine[i].quantidade + `</td>
                <td>` + blusasVitrine[i].preco + `</td>
            </tr>       
            `;
        }
    }
}
var buttons = document.getElementsByClassName('btn');
for(i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        let key = this.getAttribute('key');
        blusasVitrine[key].quantidade++;
        atualizaCarrinho();
    })
}
