const vitrineCategorias = [
    {image: '../images/camisa-branca.jpg', descricao: 'CAMISETAS'},
    {image: '../images/livro2.jpg', descricao: 'LIVROS'},
    {image: '../images/camisa-branca-mulher.jpg', descricao: 'CAMISETAS'},
    {image: '../images/livro1.jpg', descricao: 'LIVROS'},
    {image: '../images/camisa-preta.jpg', descricao: 'CAMISETAS'},
    {image: '../images/livro2.jpg', descricao: 'LIVROS'},
    {image: '../images/camisa-preta-mulher.jpg', descricao: 'CAMISETAS'},
    {image: '../images/livro1.jpg', descricao: 'LIVROS'}
];

iniciarCategorias = () => {
    let categoriasConteudo = document.getElementById('linha-categorias');
    for(i=0; i < vitrineCategorias.length; i++){
        categoriasConteudo.innerHTML += `
        <div class="categorias">
            <img src="` + vitrineCategorias[i].image + `" class="img-fluid" alt="categorias">
            <h3>` + vitrineCategorias[i].descricao + `</h3>
        </div>
        `;
    }
}
iniciarCategorias();