//Chamar bag-drop JS puro
var abrir = document.getElementById('abrir-drop'),
    fechar = document.getElementById('fechar-drop'),
    bag = document.getElementById('bag');
function addClass(){
    bag.style.display='show';
    if(!hasClass()){
        setTimeout(function (){
            if(hasClass()){
                bag.style.display='none';
                return bag.classList.remove('bag-drop');
            }
        },3000);
        return bag.classList.add('bag-drop');
    }
}
function removeClass(){
    if(hasClass()){
        bag.style.display='none';
        return bag.classList.remove('bag-drop');
    }
}
function hasClass(){
    return bag.classList.contains('bag-drop');
}
abrir.addEventListener('click', addClass);
fechar.addEventListener('click', removeClass);
//Chamar bag-drop JS puro