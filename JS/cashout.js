
document.getElementById("cash-out-btn")
.addEventListener('click', function(event){
    event.preventDefault();
    
    const cashOutInput = document.getElementById("input-cash-out").value;
    const cashOutInputNumber = parseFloat(cashOutInput);
    const cashOutPinNumber = document.getElementById("input-cash-out-pin").value;

    
    if(cashOutPinNumber === "6264"){
        console.log("Money is cash out from your wallet");

        const currentBalance = document.getElementById("balance").innerText;
       
        const updateBalance = currentBalance - cashOutInputNumber;
   
        document.getElementById("balance").innerText = updateBalance;


        
        
        
    }
    else{
        alert("Money cannot be cash out your wallet! sorry");
    }



})
