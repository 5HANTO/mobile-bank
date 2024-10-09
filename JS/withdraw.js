
document.getElementById("cash-out-btn")
    .addEventListener('click', function(event){
        event.preventDefault();

       const withdrawMoney = getInputFieldValueById("input-cash-out");
       const withdrawPinNumber = getInputFieldValueById("input-pin-number")

        if(withdrawPinNumber === 6264){
            const accountBalance = getInputTextValueById("balance");
            console.log(accountBalance);
            
            if(withdrawMoney > accountBalance){
                alert("You are not sufficient balance!!");
                return;
            }
            const newBalance = accountBalance - withdrawMoney;
            
            
            document.getElementById("balance").innerText = newBalance;


            // transaction History 
            const p = document.createElement("p");
            p.innerText = `Cash Out ${withdrawMoney} tk and New Balance is ${newBalance}`;

            

            document.getElementById("transaction-container").appendChild(p);
            
        }
        else{
            alert("There is no money in this wallet");
        }
       

    })

