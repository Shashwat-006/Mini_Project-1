let userScore=0;

let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userPoint=document.querySelector("#user-score");
let compPoint=document.querySelector("#comp-score");

const genCompChoice=()=>{
    let ran=Math.random();
    if(ran<1/3){
        return "rock";
    }
    else if(ran<2/3){
        return "paper";
    }
    else{
        return "scissor";
    }
};

const gameMech=(uc,cc)=>{
    if(uc===cc){
        return "draw";
    }
    else if(uc==="rock"){
        if(cc==="paper") return "loss";
        return "win";
    }
    else if(uc==="paper"){
        if(cc==="rock") return "win";
        return "loss";
    }
    else if(uc==="scissor"){
        if(cc==="paper") return "win";
        return "loss";
    }
};

const workOutput=(out,userChoice,compChoice)=>{
    if(out==="win") {
        userScore++;
        userPoint.innerText=`${userScore}`;
        msg.innerText=`You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } 
    else if(out==="draw"){
        msg.innerText="It's a Tie";
        msg.style.backgroundColor="gray";
    } 
    else {
        compScore++;
        compPoint.innerText=`${compScore}`;
        msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}` ;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{

    let compChoice=genCompChoice();

    let out=gameMech(userChoice,compChoice);

    workOutput(out,userChoice,compChoice);
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})