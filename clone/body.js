function seterror(id,error){

    element=document.getElementById(id);
    element.getElementsByClassName('form-error')[0].innerHTML=error;

}

function validateForm(){
    var returnval=true;
    var name = document.forms['myform']['name'].value;
    
    if(name.length<5){
        seterror("name","*Name is too small");
        returnval=false;
    }
    
    var email = document.forms['myform']['email'].value;
    
    if(email.length>30 ){
        seterror("email","*Email is too long");
        returnval=false;
    }

    
    var phonei = document.forms['myform']['phone'].value;

    if(phonei.length!=10  || isNaN(phonei)){
        seterror("phone","*Enter a valid phone number");
        returnval=false;
    }
   
    var messi=document.forms['myform']['message'].value
    if(messi.length<10){
        seterror("message","*Enter the message of atleast 10 characters");
        returnval=false;
    }


    return returnval;
    
}
// const btn = document.getElementById('btn');

// btn.addEventListener('click', function handleClick(event) {
 
//   event.preventDefault();

//   const inputs = document.querySelectorAll('#fname, #fphone,#femail,#fmessage');

//   inputs.forEach(input => {
//     input.value = '';
//   });
// });
// function openPopup(){
//     document.getElementById("popup").classList.add("open-popup");
// }

// function closePopup(){
//     document.getElementById("popup").classList.remove("open-popup");
// }