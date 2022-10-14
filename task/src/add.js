import React,{useState,useEffect} from "react";

import swal from 'sweetalert';

function Log(){


const [firstName,setFirstName] = useState("");
const [lastName,setLastName] = useState("");
const [email,setEmail] = useState("");
const [salary,setSalary] = useState(0);
const item1 = { 
 fname:firstName,
 lname: lastName,
 email: email,
 salary: salary,

}

  const onSubmit = () =>
 {
  localStorage.setItem('item', JSON.stringify(item1));
  localStorage.getItem('item');
  if(item1.firstName!="" && item1.lastName!="" && item1.email!="" && item1.salary!=0){
  swal({
    title: "",
    text: "Added Successfully!",
    icon: "success",
    button: false,
  });
}
}
 
 
    return(

      <><div>
        <button id="btnStart" type="button" className="btn btn-primary" data-toggle="modal" data-target="#formModal">Click</button> &nbsp;
        
        <div className="modal fade" id="formModal" tabIndex={-1} role="dialog" aria-labelledby="formModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="formModalLabel">Adding User</h3>
                <button type="button" className="close" data-dismiss="modal" aria-label="close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <form id="formAwesome">
                <div className="modal-body">
                  <div className="form-group row">
                    <label htmlFor="firstName" className="col-sm-6 col-form-label">
                      First name
                    </label>
                    <div className="col-sm-6">
                      <input type="text" className="form-control" id="firstName" onChange={(a)=>{setFirstName(a.target.value)}} autocomplete='new-name' required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="lastName" className="col-sm-6 col-form-label">
                      Last name
                    </label>
                    <div className="col-sm-6">
                      <input type="text" className="form-control" id="lastName" onChange={(a)=>{setLastName(a.target.value)}} autoComplete='new-name' required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="email" className="col-sm-6 col-form-label">
                      E-mail address
                    </label>
                    <div className="col-sm-6">
                      <input type="email" className="form-control" id="email" onChange={(a)=>{setEmail(a.target.value)}} autoComplete='new-email' required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="salary" className="col-sm-6 col-form-label">
                      Salary
                    </label>
                    <div className="col-sm-6">
                      <input type="number" min="20000" max="100000" className="form-control" id="salary" onChange={(a)=>{setSalary(a.target.valueAsNumber)}} required />
                    </div>


                  </div>


                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
                  
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
      
     
      </>

    );
}
export default Log;
