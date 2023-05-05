document.getElementById("myForm").addEventListener("submit", 
function(event){
    event.preventDefault();
    checkEligiblity();
});



function checkEligiblity(){

    let age = document.getElementById("userAge").value;
    let membershipStatus =   document.getElementById("Member").value;
    let outputElement= document.getElementById("output");
    
    if(age >= 65){
        let output = "You are eligible for a Senior discount";
        document.getElementById("output").innerHTML =output;
    }
    else if (document.getElementById("Member").checked && age>=18){
        let output = "You are eligible for a Member discount";
        document.getElementById("output").innerHTML =output;
    }
    else{
        let output = "You are not eligible for a Member discount";
        document.getElementById("output").innerHTML =output;
    }
}
