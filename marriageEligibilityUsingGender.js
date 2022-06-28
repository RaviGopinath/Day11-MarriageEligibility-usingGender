let age, gender,male,female;
gender = prompt("Please Enter the Gender");
age = parseInt(prompt("Please Enter the Age"));


if(gender == "male" && age >= 18){
    alert("He is Eligible for Marriage");}
    

    else if (gender == "male" && age < 18) {
        alert("He is not Eligible for Marriage");
        
    }
     else if(gender == "female" && age >= 18){
        alert("She is Eligible for Marriage");
        
    }
    else {
        alert("She is not Eligible for Marriage");
        
    }
    
