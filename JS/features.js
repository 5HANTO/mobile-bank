
// document.getElementById("cash-out")
// .addEventListener('click', function(){

    
//     document.getElementById("cash-out-form").classList.remove('hidden');

//     document.getElementById("add-money-form").classList.add('hidden');
// })



// document.getElementById("add-money")
// .addEventListener('click', function(){
    
//     document.getElementById("add-money-form").classList.remove('hidden');
    
//     document.getElementById("cash-out-form").classList.add('hidden');
// })

document.getElementById("add-money").addEventListener('click', function(){
    showSectionById("add-money-form");
})


document.getElementById("cash-out").addEventListener('click', function(){
    showSectionById("cash-out-form");
})


document.getElementById("transaction-history").addEventListener('click', function(){
    showSectionById("transaction-form");
})