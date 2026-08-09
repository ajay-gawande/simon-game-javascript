
let gameSeq = [];
let userSeq = [];

let h2 = document.querySelector("h2");
let btns = ['red','yellow','green','purple'];

let started = false;
let level = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        clickBtn();
        levelUp();
    }
    
  

})

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText =`Level ${level}`;


    let radInd = Math.floor((Math.random()*4))
    let radColor = btns[radInd];
    let radbtn = document.querySelector(`.${radColor}`);
    console.log(radbtn);
    
    gameSeq.push(radColor);
    console.log("gameSeq",gameSeq);

    gameFlash(radbtn);
}

function gameFlash(btn){
     btn.classList.add("flash")
     setTimeout(function(){
        btn.classList.remove("flash")
    },250);

    
}

function userFlash(btn){
     btn.classList.add("flash")
     setTimeout(function(){
        btn.classList.remove("flash")
    },250);

    
}

function clickBtn(){
    let allBtn = document.querySelectorAll(".btn");
    for(btn of allBtn){
        btn.addEventListener("click",btnPress)
    }
}


function btnPress(){
    let userbtn = this;
    userFlash(userbtn);
    let userColor = userbtn.getAttribute("id");
    
    userSeq.push(userColor);
    console.log("userSeq",userSeq);

    checkAns(userSeq.length-1);
}

function checkAns(Ind){
    if(gameSeq[Ind]===userSeq[Ind]){
        if(gameSeq.length==userSeq.length){
           setTimeout(levelUp,500);
        }
    }else{
        console.log("game over");
        h2.innerText ="Game over";
        reset();
        
    }
}

function removeClickBtn(){
    let allBtn = document.querySelectorAll(".btn");
    for(btn of allBtn){
        btn.removeEventListener("click",btnPress)
    }
}

function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    removeClickBtn();

}

