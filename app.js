let randomcolor;
let colorsarray=['red','green','blue','yellow'];
let userseq=[];
let gameseq=[];
let Gamestart=false;
let level=0;
let body=document.querySelector("body");
let h3=document.querySelector("h3");

document.addEventListener("keydown",gamestart);

function gamestart()
{

    if(Gamestart==false)
    {
        Gamestart=true;
        levelup();
    }
}
function levelup()
{
        userseq=[];
        level++;
        h3.innerText="Level "+level;
        randomcolor=Math.floor(Math.random()*4);
        let genaeratedcolor=colorsarray[randomcolor];
        let generatedcolorid=document.querySelector("."+genaeratedcolor);
        console.log(generatedcolorid);
        gameseq.push(generatedcolorid);
        btnflash(generatedcolorid);
}
function btnflash(btn)
{
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash")
    },200);
}

let btns=document.querySelectorAll(".btn");
for(let btn of btns)
{
    btn.addEventListener("click",userclicked);
}
function userclicked()
{
    let btn=this;
    console.log(btn)
    btnflash(btn);
    userseq.push(btn);
    check(userseq.length-1);  
}
       
    



function check(index)
{
    if(userseq[index]===gameseq[index])
    {
        if(userseq.length==gameseq.length)
        {
            setTimeout(levelup,600);
        }
    }
    else
    {
        body.classList.add("gameover");
        setTimeout(()=>{
            body.classList.remove("gameover");
        },200);
        h3.innerText="Game Over! \n Your Score is "+level;
        userseq=[];
        gameseq=[];
        level=0;
        Gamestart=false;
    }
}









