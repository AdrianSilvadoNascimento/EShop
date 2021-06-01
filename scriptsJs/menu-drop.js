let buttonDrop = document.getElementById('menuSmall').style;
let menuAberto = false;

function abrirMenuDrop(){
    if(menuAberto == false){
        buttonDrop.display = 'block';
        return menuAberto = true;
    }
    if(menuAberto == true){
        buttonDrop.display = 'none';
        return menuAberto = false;
    }
    
}
/*function fecharMenuDrop(){
    if(menuAberto == true){
        buttonDrop.display = 'none';
        return menuAberto = false;
    }
}

function sairMenuDrop(){
    buttonDrop.display = 'none';
}*/