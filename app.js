const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const noOfNotes = document.querySelectorAll(".noNotes");
const button = document.querySelector("#btn");
const message = document.querySelector("#message")


const availableNotes  = [ 2000,500,100,20,10,5,1]

button.addEventListener("click", check)

function check(){
  hideMessage()
  if(billAmount.value>0){
    if(cashGiven.value >= billAmount.value){
        const returnedAmount = cashGiven.value - billAmount.value; 
        returenedNotes(returnedAmount)
    }
    else{
        showMessage("sorry, your billamount value is must be less than cashgiven")
    }
  }
  else{
     showMessage("invalid input")
  }
}

function hideMessage(){
  message.innerHTML = ""
}

function showMessage(msg){
   message.innerHTML = msg
}

function returenedNotes(returnedAmount){
    for(var i = 0; i< availableNotes.length; i++){
       const numberOfNotes = Math.trunc(returnedAmount/availableNotes[i]);

       returnedAmount = returnedAmount % availableNotes[i];

       noOfNotes[i].innerText = numberOfNotes;
    }
}








