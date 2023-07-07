function seterror(id,error){

    element=document.getElementById(id);
    element.getElementsByClassName('form-error')[0].innerHTML=error;

}

function validateForm(){
    var returnval=true;
    var name = document.forms['myform']['fname'].value;
    
    if(name.length<5){
        seterror("name","*Name is too small");
        returnval=false;
    }
    
    var email = document.forms['myform']['femail'].value;
    
    if(email.length>30 ){
        seterror("email","*Email is too long");
        returnval=false;
    }

    
    // var phonei = document.forms['myform']['fphone'].value;

    // if(phonei.length!=10){
    //     seterror("phone","*Enter a valid 10 digit phone number");
    //     returnval=false;
    // }

    // var messi=document.forms['myform']['fmessage'].value
    // if(messi.length<10){
    //     seterror("message","*Enter the message of atleast 10 characters");
    //     returnval=false;
    // }


    return returnval;
    
}