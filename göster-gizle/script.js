let b1 = document.getElementsByClassName("b1")[0];
let b2 = document.getElementsByClassName("b2")[0];
let b3 = document.getElementsByClassName("b3")[0];
let d1 = document.getElementsByClassName("d1")[0];
let d2 = document.getElementsByClassName("d2")[0];
b1.addEventListener("click", goster);
function goster() {
d1.style.display = "block";
d2.style.display = "block";
}
b2.addEventListener("click", gizle);
function gizle() {
d1.style.display = "none";
d2.style.display = "none";
}

b3.addEventListener("click", gecis);
function gecis() {
    if(d1.style.display =="none"||d2.style.display == "none"){
        d1.style.display = "block";
        d2.style.display = "block";
    }
    else{
        d1.style.display = "none";
        d2.style.display = "none";
    }
}