let lol = document.querySelector("#lolBtn");

function changeColor(){
    if(lol.style.color != "yellow"){
        lol.style.color = "yellow";
        lol.innerText = "clicked";
    }
    else{
        lol.style.color = "black"
        lol.innerText = "lol";
    }
}

function changeBackground1(){
    lol.style.backgroundColor = "blue";
}
function changeBackground2(){
    lol.style.backgroundColor = "white";
}
lol.addEventListener("mouseover", changeBackground1);
lol.addEventListener("mouseout", changeBackground2);
lol.addEventListener("click", changeColor);
