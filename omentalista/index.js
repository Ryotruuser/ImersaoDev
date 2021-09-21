let clicks = 0;
Chutar = () => {  
  let pcPick = Math.floor(Math.random() * 11);
  let playerPick = parseInt(document.querySelector("input").value);
  if (playerPick !== null) { 
    if (playerPick == pcPick) {
    clicks = 0;
    return (document.querySelector("#resultado").innerHTML =  `parabéns detetive :) , meus parabéns.`);
  }
    if(playerPick > 10){
     document.querySelector("button").disabled = true;
     return (document.querySelector("#resultado").innerHTML = `${playerPick} e bem maior que 10 não acha ?, tente novamente.`);
  }
 
   if (clicks >= 3){
     document.querySelector("button").disabled = true;
     return (document.querySelector("#resultado").innerHTML = 
             `Você perdeu todas as chances, tente novamente.`);
   }
    
    else if (playerPick > pcPick ){
      clicks +=1;
    return (document.querySelector("#resultado").innerHTML = `Errado eu pensei no ${pcPick}`);
  }
   else if (playerPick < pcPick ){
    clicks +=1;
    return (document.querySelector("#resultado").innerHTML = `Errado eu pensei no ${pcPick}`);
  }
  }  
 else
    document.querySelector("button").disabled = true;
     return (document.querySelector("#resultado").innerHTML = 
             `Eu sei até mesmo quando você não digita.`);

};
Reset = () =>{
  clicks = 0;
  document.querySelector("button").disabled = false;
  return (document.querySelector("#resultado").innerHTML = 
             `Vamos la, você tem mais 3 chances.`);
}