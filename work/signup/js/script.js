
//clear when input is correct

function clearErrors(){

    errors = document.getElementsByClassName('error');
    for(let item of errors){
        item.innerHTML = "";
    }
}

function error(id , error){
    element = document.getElementById(id);
    element.getElementsByClassName('error')[0].innerHTML = error;

}




function FormValidation() {
    
    var returnValue= true;
    clearErrors();
    
    //validation for first name
    var fname = document.forms["signup"]["FirstName"].value;
    var alpha = /^[a-zA-Z]+$/;
    
    if(!(fname.match(alpha))){
        error("FirstName","*First Name should have alphabets without space!");
        returnValue= false;
    }
    if (fname.length < 5 ){
        error("FirstName","*First Name should have minimum 5 letters!");
        returnValue= false;
    }
    if ( fname.length > 20  ){
        error("FirstName","*First Name should have maximum 20 letters!");
        returnValue= false;
    } 
  //validation for last name
    var lname = document.forms["signup"]["LastName"].value;
    if (!(lname.match(alpha))){
        error("LastName","*First Name should have alphabets without space!");
        returnValue= false;
    }
    if(lname.length < 5 ){
          error("LastName","*last Name should have minimum 5 letters !");
          returnValue= false;
    }
    if(lname.length > 20){
        error("LastName","*last Name should have maximum 20 letters!");
        returnValue= false;
    }
  
   //validation for email
    var email = document.forms["signup"]["email"].value;
    if(email ==""){
        error("Email","*Email cannot be empty!");
        returnValue= false;
    }
   
    if(email.length > 40){
        error("Email","*Email length is too long!");
        returnValue= false;
    }
    
    //validation for date of birth
    
    var date = document.forms["signup"]["date"].value;
     if(date = ""){
        error("Email","*date of birth cannot be empty!");
        returnValue= false;
    }
    
    // validation for age
     var age = document.forms["signup"]["Age"].value;
    if(age < 18){
        error("Age","*your age must be above 18!");
        returnValue= false;;
    }
    
    
    //validation for mobile number number
    var num = document.forms["signup"]["number"].value;
    if(num.length!=10){
        error("number","*number must be of 10 digit!");
        returnValue= false;
    }
    
    //validation for pssword and comfirm password
    var pass = document.forms["signup"]["pass"].value;
    if(pass.length<=8){
        error("pass","*password must be atleast 8 character!");
        returnValue= false;
    }
    
    var cpass = document.forms["signup"]["cpass"].value;

    if(cpass != pass){
        error("cpass","*confirm password must be same as password!");
        returnValue= false;
    }
    return returnValue;
  
}

