let boxes= document.querySelectorAll(".box");
let resetbtn=document.querySelector('#reset-btn');
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newgame=document.querySelector("#new-btn");
let resetgm=document.querySelector("#reset-btn");
let sound=new Audio("click.mp3");
let winner =new Audio("wineffect.mp3");
let lost=new Audio("losteffect.mp3");
// turn 1st payerO
let turno=true;

const win =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8] ,   
];

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
     console.log("cliked");
     sound.play();
     // box.innerHTML="ab";
     if(turno===true){
        box.innerHTML="O";  // turn of plyer O
        turno=false;
     }
     else{
        box.innerHTML="X";  // turn of plyer X
        turno=true;
     }
     box.disabled= true;
     checkpattern();
  });
})
const checkpattern =()=>{
 for(pattern of win){
 //  console.log(pattern[0],pattern[1],pattern[2]); // pattern dekhar jonno
  // console.log(boxes[pattern[0]].innerHTML, boxes[pattern[1]].innerHTML, boxes[pattern[2]].innerHTML); // boxer modhe kon position ota
 let pos1val=boxes[pattern[0]].innerHTML;
 let pos2val=boxes[pattern[1]].innerHTML;
 let pos3val=boxes[pattern[2]].innerHTML;
if(pos1val!="" && pos2val !="" && pos3val !=""){
   if(pos1val=== pos2val && pos2val===pos3val){
      console.log("winner",pos1val);
      disabledbtn();
      showwinner(pos1val);   
      
   }
   
}
}};
const showwinner=(pos1val)=>{                // show winner function
     msg.innerHTML=`the winner is ${pos1val}`;
     msgcontainer.classList.remove("hide");
     winner.play();
}
const disabledbtn =()=>{                    // afetr win aplayer all butttons will be disable
   for(box of boxes){
      box.disabled=true;
   }
}

const resetgame=()=>{                   // reset game
   lost.play();
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
const enableboxes =()=>{                    // after reset all button will be reset
   for(box of boxes){
      box.disabled=false;
      box.innerHTML= "";
   }
}
newgame.addEventListener("click",resetgame);
resetgm.addEventListener("click",resetgame);
