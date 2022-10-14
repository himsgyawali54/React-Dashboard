import React, { useState, useEffect} from 'react';

import "./login.css";
import pic from "./images/icon1.png"

 import Home from "./home";
 import swal from 'sweetalert';
function Sign() {
  const initialvalues= {username:"", password:""};
  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});
  
  const handleChange = (e) =>{
    const{name,value} = e.target;
    setFormValues({...formValues, [name]: value});
    console.log(formValues)
    
  };

  const getName =  localStorage.getItem('name');
  const getPassword = localStorage.getItem('password');

  const handleSubmit = () =>{ 
     
    setFormErrors(Validate(formValues));

    if( formValues.username == "Admin" && formValues.password == "Shar@12ma")
    {
    localStorage.setItem('name',"Admin");
    localStorage.setItem('password',"Shar@12ma");
    }
    else{
      swal("Oops...", "Unauthorized Access", "error");
    }
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 )
    {
      console.log(formValues)
    }

  },[formErrors]);

  const Validate = (values) =>{
    const regex = /(?=.*[A-Z])/;
    const passregex = /(?=.*\W)/;
    const pasregex = /(?=.*[0-9])/;
    const errors = {};
    if (!values.username) {
        errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
   } else if (values.password.length < 8)
    {
    errors.password = "Password must be 8 characters long.";
   } else if (!regex.test(values.password)) 
   {
     errors.password = "Password must contain one uppercase letter.";
   } else if (!passregex.test(values.password)) 
   {
     errors.password = "Password must contain one special character.";
   } else if (!pasregex.test(values.password)) 
   {
    errors.password = "Password must contain single digit from 0-9.";
   }
    return errors;
  };
   

  
  return (
    <>
    {/* {isSubmit && <Home/>}
    {!isSubmit && */}
    { getName && getPassword && <Home />}
     { !getName && !getPassword &&
     <form onSubmit={handleSubmit}>
          <div className='main'>
            <div className='sub-main'>
              <div>
                <div className='imgs'>
                  <div className='container-imgs'>
                    <img src={pic} alt="pic" className='pic' />
                  </div>
                </div>
                <h1>Login page</h1>
                <div>
                  <div>
                    <input type="text" name="username" placeholder='Username' className='name' autoComplete='off'
                      value={formValues.username} onChange={handleChange} />
                  </div>
                  <p className='error'>{formErrors.username}</p>
                  <div className='second-input'>
                    <input type="text" name="password" placeholder='Password' className='name' autoComplete='off'
                      value={formValues.password} onChange={handleChange} />
                  </div>
                  <p className='error'>{formErrors.password}</p>
                  <div className='login-button'>
                    <button onClick={handleSubmit}>
                      Login</button>
                  </div>


                </div>
              </div>

            </div>
          </div>

        </form>
}
    
  
    </>
    
  );
}

   




export default Sign;