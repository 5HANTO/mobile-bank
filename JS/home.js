document.getElementById("add-money-btn")
.addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById("input-add-money").value;
  
    const addPinNumber = document.getElementById("input-pin-number").value;


    if(addPinNumber === "6264"){
        console.log("Adding money to your wallet");

        const currentBalance = document.getElementById("balance").innerText;
        const balanceNumber = parseFloat(currentBalance);
        const addMoneyNumber = parseFloat(addMoneyInput);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);
        document.getElementById("balance").innerText = newBalance;
        
    }
    else{
        alert("Failed to add money! please try again")
    }

    
})