
document.getElementById("cash-out-btn")
    .addEventListener('click', function(event){
        event.preventDefault();

       const withdrawMoney = getInputFieldValueById("input-cash-out");
       const withdrawPinNumber = getInputFieldValueById("input-pin-number")

        if(withdrawPinNumber === 6264){
            const accountBalance = getInputTextValueById("balance");
            const newBalance = accountBalance - withdrawMoney;
            console.log("Nai tk nai shor");
            
            
            document.getElementById("balance").innerText = newBalance;
            
        }
        else{
            alert("There is no money in this wallet");
        }
       

    })

