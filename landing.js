alert("Click on either sides to Play!");

let rps=document.querySelector("#left");
let ttt=document.querySelector("#right");

rps.onclick=(e)=>{
    window.open('rps.html','_self');
}

ttt.onclick=(e)=>{
    window.open("ttt.html","_self");
}
