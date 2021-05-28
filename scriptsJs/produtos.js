const blusasVitrine = [
    {id: 0, nome: 'Blusa-Branca', img: '../images/camisa-branca.jpg', quantidade: 0, categoria: 'camisa', preco: 'R$34,99', estoque: '38'},
    {id: 1, nome: 'Blusa-Branca-Mulher', img: '../images/camisa-branca-mulher.jpg', quantidade: 0, categoria: 'camisa', preco: 'R$29,99' , estoque: '24'},
    {id: 2, nome: 'Blusa-Preta', img: '../images/camisa-preta.jpg', quantidade: 0, categoria: 'camisa', preco: 'R$34,99', estoque: '26'},
    {id: 3, nome: 'Blusa-Preta-Mulher', img: '../images/camisa-preta-mulher.jpg', quantidade: 0, categoria: 'camisa', preco: 'R$29,99', estoque: '31'},
    {id: 4, nome: 'Blusa-Branca', img: '../images/camisa-branca.jpg', quantidade: 0, categoria: 'camisa', preco: 'R$34,99', estoque: '38'},
    {id: 5, nome: 'Blusa-Branca-Mulher', img: '../images/camisa-branca-mulher.jpg', quantidade: 0, categoria: 'camisa', preco: 'R$29,99' , estoque: '24'},
    {id: 6, nome: 'Blusa-Preta', img: '../images/camisa-preta.jpg', quantidade: 0, categoria: 'camisa', preco: 'R$34,99', estoque: '26'},
    {id: 7, nome: 'Blusa-Preta-Mulher', img: '../images/camisa-preta-mulher.jpg', quantidade: 0, categoria: 'camisa', preco: 'R$29,99', estoque: '31'},
    
]

const livrosVitrine = [
    {id: 0, nome: 'Livro-Azul', img: '../images/livro1.jpg', quantidade: 0, categoria: 'livro', preco: 'R$21,99', estoque: '55'},
    {id: 1, nome: 'Livro-Rosa', img: '../images/livro2.jpg', quantidade: 0, categoria: 'livro', preco: 'R$21,99', estoque: '65'},
    {id: 2, nome: 'Livro-Azul', img: '../images/livro1.jpg', quantidade: 0, categoria: 'livro', preco: 'R$21,99', estoque: '65'},
    {id: 3, nome: 'Livro-Rosa', img: '../images/livro2.jpg', quantidade: 0, categoria: 'livro', preco: 'R$21,99', estoque: '65'},
    {id: 4, nome: 'Livro-Azul', img: '../images/livro1.jpg', quantidade: 0, categoria: 'livro', preco: 'R$21,99', estoque: '65'},
]

iniciarLoja = () => {
    let conteudoBlusas = document.getElementById('bg-produtos-blusas');
    let conteudoLivros = document.getElementById('bg-produtos-livros');
    for(i=0; i < blusasVitrine.length; i++){
        conteudoBlusas.innerHTML += `
        <div class="card" id="` + blusasVitrine[i].categoria + `">
            <img src="`+ blusasVitrine[i].img +`" class="img-fluid" alt="camisa">
            <div class="row">
                <div class="col-md-6">
                    <p>Qtd. ` + blusasVitrine[i].estoque + `</p>
                </div>
                <div class="col-md-6">
                    <h3>`+ blusasVitrine[i].preco +`</h3>
                </div>
            </div>                     
            <button key="` + blusasVitrine[i].id + `" class="btn btnBlusas">Adicionar ao Carrinho</button>
        </div>        
        `;
    }

    for(i=0; i<livrosVitrine.length; i++){
        conteudoLivros.innerHTML += `
        <div class="card" id="` + livrosVitrine[i].categoria + `">
            <img src="`+ livrosVitrine[i].img +`" class="img-fluid" alt="camisa">
            <div class="row">
                <div class="col-md-6">
                    <p>Qtd. ` + livrosVitrine[i].estoque + `</p>
                </div>
                <div class="col-md-6">
                    <h3>`+ livrosVitrine[i].preco +`</h3>
                </div>
            </div>                     
            <button chave="`+ livrosVitrine[i].id +`" class="btn btnLivros">Adicionar ao Carrinho</button>
        </div>   
        `;
    }
}
//iniciarLoja();

function cadastrarProduto(){
    let id = parseInt(document.getElementById('idProduto').value);
    let nome = document.getElementById('nomeProduto').value;
    let img = document.getElementById('caminhoFotoProduto').value;
    let quantidade = parseInt(document.getElementById('quantidadeProduto').value);
    let categoria = document.getElementById('categoriaProduto').value;
    let preco = document.getElementById('precoProduto').value;
    let estoque = parseInt(document.getElementById('estoqueProduto').value);
    let tipo = document.getElementById('tipoProduto').value;


    if(tipo.value == "livrosVitrine"){
        livrosVitrine.push({id, nome, img, quantidade, categoria, preco, estoque});
    }
    let conteudoLivros = document.getElementById('bg-produtos-livros');
    conteudoLivros.innerHTML = '';
    for(i=0; i < livrosVitrine.length; i++){
        conteudoLivros.innerHTML += `
        <div class="card" id="` + livrosVitrine[i].categoria + `">
            <img src="`+ livrosVitrine[i].img +`" class="img-fluid" alt="camisa">
            <div class="row">
                <div class="col-md-6">
                    <p>Qtd. ` + livrosVitrine[i].estoque + `</p>
                </div>
                <div class="col-md-6">
                    <h3>`+ livrosVitrine[i].preco +`</h3>
                </div>
            </div>                     
            <button chave="` + livrosVitrine[i].id + `" class="btn btnLivros">Adicionar ao Carrinho</button>
        </div>        
        `;
    }

    if(tipo.value == "blusasVitrine"){
        blusasVitrine.push({id, nome, img, quantidade, categoria, preco, estoque});
    }
    let conteudoBlusas = document.getElementById('bg-produtos');
    conteudoBlusas.innerHTML = '';
    for(i=0; i < blusasVitrine.length; i++){
        conteudoBlusas.innerHTML += `
        <div class="card" id="` + blusasVitrine[i].categoria + `">
            <img src="`+ blusasVitrine[i].img +`" class="img-fluid" alt="camisa">
            <div class="row">
                <div class="col-md-6">
                    <p>Qtd. ` + blusasVitrine[i].estoque + `</p>
                </div>
                <div class="col-md-6">
                    <h3>`+ blusasVitrine[i].preco +`</h3>
                </div>
            </div>                     
            <button key="` + blusasVitrine[i].id + `" class="btn btnBlusas">Adicionar ao Carrinho</button>
        </div>        
        `;
    }
}
atualizaCarrinho = ()=>{
    let conteudoCarrinho = document.getElementById('carrinho');
    conteudoCarrinho.innerHTML = "";
    for(i=0; i<blusasVitrine.length; i++){
        if(blusasVitrine[i].quantidade > 0){    
            conteudoCarrinho.innerHTML += `
            <tr>
                <th>Produto</th>
                <th>Qtd.</th>
                <th>Und.</th>
            </tr>
            <tr>
                <td>`+ blusasVitrine[i].nome +`</td>
                <td>` + blusasVitrine[i].quantidade + `</td>
                <td>` + blusasVitrine[i].preco + `</td>
            </tr>       
            `;
        }
    }
    for(i=0; i<livrosVitrine.length; i++){
        if(livrosVitrine[i].quantidade > 0){    
            conteudoCarrinho.innerHTML += `
            <tr>
                <th>Produto</th>
                <th>Qtd.</th>
                <th>Und.</th>
            </tr>
            <tr>
                <td>`+ livrosVitrine[i].nome +`</td>
                <td>` + livrosVitrine[i].quantidade + `</td>
                <td>` + livrosVitrine[i].preco + `</td>
            </tr>       
            `;
        }
    }
}
var buttonsBlusas = document.getElementsByClassName('btnBlusas');
var buttonLivros = document.getElementsByClassName('btnLivros');
for(i=0; i < buttonsBlusas.length; i++){
    buttonsBlusas[i].addEventListener('click', function(){
        let key = this.getAttribute('key');
        blusasVitrine[key].quantidade++;
        atualizaCarrinho();
    })
}
for(i=0; i < buttonLivros.length; i++){
    buttonLivros[i].addEventListener('click', function(){
        let chave = this.getAttribute('chave');
        livrosVitrine[chave].quantidade++;
        atualizaCarrinho();
    })
}