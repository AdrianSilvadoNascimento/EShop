//Chamar bag-drop JS puro
var abrir = document.getElementById('abrir-drop'),
    fechar = document.getElementById('fechar-drop'),
    card = document.getElementById('card-drop'),
    bag = document.getElementById('bag');

function contar(){
    setTimeout(function (){
        if(hasClass()){
            card.style.display = 'none';
            return bag.classList.remove('bag-drop');
        }
    },3000);
}
function addClass(){
    if(!hasClass()){
        card.style.display = 'block';
        contar();
        return bag.classList.add('bag-drop');
    }
}
function removeClass(){
    if(hasClass()){
        card.style.display = 'none';
        return bag.classList.remove('bag-drop');
    }
}
function hasClass(){
    return bag.classList.contains('bag-drop');
}
abrir.addEventListener('click', addClass);
fechar.addEventListener('click', removeClass);
//Chamar bag-drop JS puro