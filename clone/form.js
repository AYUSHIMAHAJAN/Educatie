function seterror(id,error){

    element=document.getElementById(id);
    element.getElementsByClassName('form-error')[0].innerHTML=error;

}



function validate(){
    var returnval=true;
  
    var email = document.forms['form']['email'].value;
    
    if(email.length>30 ){
        seterror("email","*Email is too long");
        returnval=false;
    }
    var password = document.forms['form']['password'].value;
    
    if(password.length>14 ){
        seterror("email","*Password is too long");
        returnval=false;
    }

    


    return returnval;
    
}

