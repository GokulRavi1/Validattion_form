var nameError=document.getElementById('name-error')
var phoneError=document.getElementById('Phone-error')
var emailError=document.getElementById('email-error')
var messageError=document.getElementById('message-error')
var submitError=document.getElementById('submit-error')

function validation(){
    var name =document.getElementById('contact-name').value;
    if (name.length==0) {
        nameError.innerHTML='name is requried ';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML='Enter the fullname';
        return false;
        
    }
    nameError.innerHTML='valid';
    return true;
}
function validatePhone(){
    var phone=document.getElementById('contact-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML='Enter the number ';
        return false;
        
    }
    if(phone.length !== 10){
        phoneError.innerHTML='Enter the full number';
        return false;
        

    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML='Phone no is requred';
        return false;
    }
    phoneError.innerHTML='valid';
    return true;
}
function validateEmail(){
    var email=document.getElementById('contact-email').value;
    if (email.length==0) {
        emailError.innerHTML='enter your email id';
        return false;
        
    }
    if (!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,5}]$/)) {
        emailError.innerHTML='email Invalid';
        return false;
        
    }
    emailError.innerHTML='valid';
    return true;    
}
function validatemessage(){
    var message=document.getElementById('contact-message').value;
    var requred=30;
    var left=requred-message.length;
    if (left>0) {
        messageError.innerHTML=left+' enter your message ';
       return false;
        
    }
    messageError.innerHTML='valid';
    return true;
    // if (message.length==0) {
    //     messageError.innerHTML=' enter your message ';
    //     return false;
        
    // }
    // if (!message.match(/^[A-Za-z]\._\-[0-9]$/)) {
    //     messageError.innerHTML='  message invaild ';
    //     return false;
    // }
    // messageError.innerHTML='valid';
    // return true;


}
function validateFor(){
    if (!validation()||!validatePhone()||!validateEmail()||!validatemessage()) {
       submitError.style.display="block";
        submitError.innerHTML='Please fix the error'
setTimeout(() => {
    submitError.style.display="none";
    
}, 3000);
        return false;
    }
}