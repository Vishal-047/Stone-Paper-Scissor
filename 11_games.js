let userscore=0;
let compscore=0;

let objects=document.querySelectorAll(".object1");

const gencompchoice=()=>{
    let options=["rock","paper","scissor"]
    let rand=Math.floor(Math.random()*3)//Math.floor removes the decimal value.... and we multipled with 3 because we need to generate random value between 0 to 3...
    return options[rand]
}
const msg=document.querySelector("#mesg")
const userchoicepara=document.querySelector("#You")
const compchoicepara=document.querySelector("#comp")

let drawgame=()=>{
    console.log("Game was draw")
    msg.innerText="Game was draw"
    msg.style.backgroundColor="blue"
}

let result=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userchoicepara.innerText=userscore;
        msg.innerText=`You Won!! your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor="green"
    }
    else{
        compscore++;
        compchoicepara.innerText=compscore;
        msg.innerText=`You lost. ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor="red"
    }
}


const playgames=(userchoice)=>{
    console.log("User clicked: ",userchoice);
    //Now we have to generate computer choice....
    const compchoice=gencompchoice()
    console.log("computer choice is ",compchoice)

    if(userchoice==compchoice){
        drawgame()
    }
    else{
        let userwin=true;
        if(userchoice=="rock"){
            userwin=compchoice=="paper"?false:true;
        }
        else if(userchoice=="paper"){
            userwin=compchoice=="rock"?true:false;
        }
        else{
            userwin=compchoice=="rock"?false:true;
        }
        result(userwin, userchoice,compchoice)
    }
}

objects.forEach((object1) => {
    object1.addEventListener("click",()=>{
        const userchoice=object1.getAttribute("id") //accessing the id of each(stone paper scissor).....
        playgames(userchoice)
    })
});