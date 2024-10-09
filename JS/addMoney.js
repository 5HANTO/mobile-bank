
document.getElementById("add-money-btn")
    .addEventListener('click', function(event){
        event.preventDefault();

        const addMoney = getInputFieldValueById("input-add-money");

        const pinNumber = getInputFieldValueById("input-pin-number")
        

        if(pinNumber === 6264){

            const balance = getInputTextValueById("balance");

            const newBalance = addMoney + balance;
          
            document.getElementById("balance").innerText = newBalance;
            

            // Transaction History 

            const p = document.createElement("p");
            p.innerText = `Cash In ${addMoney} tk and New Balance is ${newBalance}`;

            

            document.getElementById("transaction-container").appendChild(p);
      
            

        }
        else{
            alert("Failed To add money! sorry")
        }
        












        
})