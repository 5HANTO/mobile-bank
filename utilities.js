function getInputFieldValueById(id){
    
    const inputValue = document.getElementById(id).value; 
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


function getInputTextValueById(id){
    const inputText = document.getElementById(id).innerText;
    const textNumber = parseFloat(inputText);
    return textNumber;
    
}



function showSectionById(id){

        document.getElementById("add-money-form").classList.add("hidden");
        document.getElementById("cash-out-form").classList.add("hidden");
        document.getElementById("transaction-form").classList.add("hidden");

        document.getElementById(id).classList.remove("hidden");

}