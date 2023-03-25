var nameRegEx = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
var emailRegEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var passwordRegEx = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

let validateForPost = (fields)=>{
    let fullName = fields.fullName;
    let isValid = false;
    let email = fields.email;
    let password = fields.password;
    
    if(fullName.match(nameRegEx)) {
        isValid = true;
    }
    else {
        return {"message":"Hey, no jokes! Put valid name!"};
    }
    if(email.match(emailRegEx)) {
        isValid = true;
    }
    else {
        return {"message":"Check your email address once again and change please!"};
    }
    if(password.match(passwordRegEx)) {
        isValid = true;
    }
    else {
        return {"message":"Strong passwords should have 1 or more Caps | at least 1 lowercase, 1 special chars and 1 or more numerals | Don't forget to have minimum 8 characters in length!"};
    }

    if(isValid) {
        return {"message": true};
    }
}

let validateForPut = (fields)=>{
    let fullName = fields.fullName;
    let isValid = false;
    let password = fields.password;
    let passwordValidation = false;
    
    if(fullName.match(nameRegEx)) {
        isValid = true;
    }
    else {
        return {"message":"Put valid name!"};
    }
    if(password.match(passwordRegEx)) {
        isValid = true;
    }
    else {
        return {"message":"Strong passwords should have 1 or more Caps | at least 1 lowercase, 1 special chars and 1 or more numerals | Don't forget to have minimum 8 characters in length!"};
    }

    if(isValid) {
        return {"message": true};
    }
}

let validateForDelete = (fields)=>{
    let email = fields;
    
    if(email.match(emailRegEx)) {
        return {"message": true};
    }
    else{
        return {"message": "Please send the prper email address"};
    }
}

module.exports = {validateForPost, validateForPut, validateForDelete};