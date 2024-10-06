document.getElementById("login-btn")
    .addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById("phone-number").value;

    
    const pinNumber = document.getElementById("pin-number").value;

    if(phoneNumber === "01704995750" && pinNumber === "6264"){
        console.log("You are logged in");
        window.location.href = '/home.html';

        
    }
    else{
        alert("Wrong phone number or pin number");
    }
    
})

