import isEmail from "validator/lib/isEmail";

const Validator = (form) => {
    const {email, password, confirmpassword, username } = form
    
  if(!email || !password || !confirmpassword || !username ) return "Please Fill all fields";

    

  if(password !== confirmpassword) return "Password not match";
  if(password.length < 4) return "Please Enter Password greater than 4 characters";
  if(!isEmail(email)) return "Email Id not Valid";

};

export default Validator;
