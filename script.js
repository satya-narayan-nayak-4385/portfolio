// -------------------------------- bar hide and show ------------------------------------------
var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
} 

function hideMenu(){
    navLinks.style.right = "-200px";
}


// ------------------------------------------- typed js -------------------------------------------
const typed = new Typed('.multiple-text', {
    strings:['Satyanarayan Nayak', 'Satya'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop : true
});


// -------------------------------------------- map ------------------------------------------------
function map1(){
    window.open("https://goo.gl/maps/85FyC1CWBVxuXyaC9")
}

function map2(){
    window.open("https://goo.gl/maps/BHdLrcJ2bLJkJEx66")
}