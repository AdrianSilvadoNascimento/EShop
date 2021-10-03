//Chamar bag-drop JS puro
var abrir = document.getElementById('abrir-drop'),
    fechar = document.getElementById('fechar-drop'),
    bag = document.getElementById('bag');

function showHide(){
    if(bag.style.display="none"){
        bag.style.display="show";
    }else if(bag.style.display="show"){
        bag.style.display="none";
    }
}
function addClass(){
    if(!hasClass()){
        setTimeout(function (){
            if(hasClass()){
                showHide();
                return bag.classList.remove('bag-drop');
            }
        },3000);
        showHide();
        return bag.classList.add('bag-drop');
    }
}
function removeClass(){
    if(hasClass()){
        showHide();
        return bag.classList.remove('bag-drop');
    }
}
function hasClass(){
    return bag.classList.contains('bag-drop');
}
showHide();
abrir.addEventListener('click', addClass);
fechar.addEventListener('click', removeClass);
//Chamar bag-drop JS puro