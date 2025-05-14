let gameSeq = [];
let userSeq = [];
let btns = ["yellow","green","red","blue"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function (){
    if ( started == false ){
        console.log("game is started");
        started= true;

        levalUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");

    },250);
}

function levalUp(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");

    },250);
}

function levalUp(){
    userSeq =[];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randcolor = btns[randIdx];
    let ranBtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(ranBtn);
}

function checkAns(idx){
    if (userSeq[idx] === gameSeq[idx]){
if (userSeq.length == gameSeq.length){
    setTimeout(levelUp, 1000);
}
    }else{
        h2.innerHTML =`Game Over! <b> ${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.color = "white";
        },150);
        resizeTo();

    }
}
    

