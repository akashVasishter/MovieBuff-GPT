const validateCredentials = (email, password,phone,name) => {

    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email) 
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)

//early return condition
    if(!email && !password && !name) return "Please fill all the fields"
    if(!emailRegex) return "Email is not valid"
    if(!passwordRegex) return "Password is not valid"

    return null;
    
}


export default validateCredentials;