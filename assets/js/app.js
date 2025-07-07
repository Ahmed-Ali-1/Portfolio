var menubtn = document.getElementById("menubtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.top = "-280px"; // initially hidden

menubtn.onclick = function(){
    if(sideNav.style.top == "-280px"){
        sideNav.style.top = "0";
        menu.src = "cross.png";
    }
    else{
        sideNav.style.top = "-280px";
        menu.src = "menu.png";
    }
}