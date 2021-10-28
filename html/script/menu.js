var btnMobile = document.getElementById("btn-mobile");  
btnMobile.addEventListener("click",toggleMenu);
btnMobile.addEventListener('touchstart',toggleMenu);

function toggleMenu(){
    if(event.type === 'touchstart'){
        event.preventDefault();
    }
    var Nav = document.getElementById("nav");
    Nav.classList.toggle("active");
    ;
};

function texte(){
    alert("aqui")
}









