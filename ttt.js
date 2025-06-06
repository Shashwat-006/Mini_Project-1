let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset-btn");
let newGame= document.querySelector("#new-game");
let hidden= document.querySelector(".hidden");
let msg= document.querySelector("#msg");

let moves=0;



const winning_patterns=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

const enable_buttons=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disable_buttons=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const resetfunc = () => {
    moves = 0;
    enable_buttons();
    hidden.style.display="none";
};

const newgamefunc = () => {
    moves = 0;
    enable_buttons();
    hidden.style.display="none";
    reset.style.display="unset";
};

const winner_check=()=>{
    for(let wins of winning_patterns){
        let posi0=boxes[wins[0]].innerText;
        let posi1=boxes[wins[1]].innerText;
        let posi2=boxes[wins[2]].innerText;
        if(posi0!="" && posi1!="" && posi2!=""){
            if(posi0===posi1 && posi1===posi2){
                msg.innerText=`Player ${posi0} wins.`;
                disable_buttons();
                hidden.style.display="unset";
                reset.style.display="none";
            }
        }
    }
};

const play=(box)=>{
    if(moves%2==0){   
        box.innerText="X";
        box.style.color="rgb(182, 9, 9)";
        moves++;
        box.disabled=true;
    }
    else{
        box.innerText="O";
        box.style.color="rgb(0, 187, 116)";
        moves++;
        box.disabled=true;
    }
} 

boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        play(box);
        winner_check();
    })
});

reset.addEventListener("click",resetfunc);
newGame.addEventListener("click",newgamefunc);

