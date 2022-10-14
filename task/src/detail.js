import React, { useEffect } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './detail.css';
import { FaUserEdit } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import Add from './add';
import Log from './add';
import swal from 'sweetalert';




function Detail(props) {
  const [isNew, setIsNew] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState([]);

  
  useEffect(() => {
    setData(props.props);
  })
  const onSubmit = () => {
    swal("",
      "Sucessfully Deleted!",
      "success"
    );
  }
  const Submit = () => {
    swal("",
      "Sucessfully Edited!",
      "success"
    );
  }
  const [searchValue, setSearchValue] = useState("")
 const onInputChange = (e) =>{
      setSearchValue({ searchValue:e})
 }
 console.log('cb',searchValue.searchValue);
 const [isSearch, setIsSearch]= useState("");
 const [sortState, setSortState] = useState("none");
  const data1 = [...data].sort((a, b) => (a.fname < b.fname ? -1 : 1));
  const data2 = [...data].sort((a, b) => (a.fname > b.fname ? -1 : 1));
  const data3 = [...data].sort((a, b) => (a.email < b.email ? -1 : 1));
  const data4 = [...data].sort((a, b) => (a.email > b.email ? -1 : 1));
  return (<>
    <div className="row">
      {/* header start */}

      <div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light" >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="index3.html" className="nav-link">Home</a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="#" className="nav-link">Contact</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                <i className="fas fa-search" />
              </a>
              <div className="navbar-search-block">
                <form className="form-inline">
                  <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                      <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search" />
                      </button>
                      <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                <i className="fas fa-expand-arrows-alt" />
              </a>
            </li>


          </ul>
        </nav>
      </div>

      {/* header end */}

      {/* menu start */}

      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <a href="index3.html" className="brand-link">
            {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> */}
            <span className="brand-text font-weight-light" style={{ marginLeft: '10px' }}><b>NoveltyTechnology</b></span>
          </a>
          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              {/* <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
        </div> */}
              <div className="info">
                <li className="d-block" style={{ color: 'white' }}>Employee Management System</li>
              </div>
            </div>
            <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw" />
                  </button>
                </div>
              </div>
            </div>
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item menu-open">
                  <a href="./index.html" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      Dashboard
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                </li>

                <li className="nav-item">
                  <a href="pages/widgets.html" className="nav-link">
                    {/* <Link to ="/list" className="nav-link">  */}

                    <i className="nav-icon fas fa-th" />

                    Employee List


                  </a>
                </li>


                <li className="nav-header">EXAMPLES</li>
                <li className="nav-item">
                  <a href="pages/calendar.html" className="nav-link">
                    <i className="nav-icon far fa-calendar-alt" />
                    <p>
                      Calendar
                      <span className="badge badge-info right">2</span>
                    </p>
                  </a>
                </li>
                {/* <li className="nav-item">
            <a href="pages/gallery.html" className="nav-link">
              <i className="nav-icon far fa-image" />
              <p>
                Gallery
              </p>
            </a>
          </li> */}
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon far fa-envelope" />
                    <p>
                      Mailbox
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="pages/mailbox/mailbox.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Inbox</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/mailbox/compose.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Compose</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/mailbox/read-mail.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Read</p>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-search" />
                    <p>
                      Search
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="pages/search/simple.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Simple Search</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/search/enhanced.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Enhanced</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-header">MISCELLANEOUS</li>

                <li className="nav-item">
                  <a href="https://noveltytechnology.com/" className="nav-link">
                    <i className="nav-icon fas fa-file" />
                    <p>Documentation</p>
                  </a>
                </li>

                <li className="nav-header">LABELS</li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon far fa-circle text-danger" />
                    <p className="text">Important</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon far fa-circle text-warning" />
                    <p>Warning</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon far fa-circle text-info" />
                    <p>Informational</p>
                  </a>
                </li>


              </ul>
            </nav>
          </div>
        </aside>
      </div>

      {/* menu end */}

      <div className='stable'><br></br>
      <div className='row'>
      <div className='col-md-8'></div>
          <div className='col-md-4'>
          {!isNew && !isEdit && <div className='input-group'>
              <input style={{ float: "right" }} type="text" onChange={(a) => { onInputChange(a.target.value) }} className="form-control" placeholder="Search..." />
              <span className="input-group-btn ml-2">
                <button onClick={() => {
                  setIsSearch(true);
                }} className="btn  btn-primary" type="button">
                  <span className="fa fa-search"></span></button>
              </span>
            </div>
          }
          </div>
      </div>
        <div>
          {!isNew && !isEdit && <button className="addbutton" onClick={() => { setIsNew(true) }}>Add User</button>}
        </div><br></br>
        {isNew && !isEdit && <Log />}

        {!isNew && !isEdit &&
          <div>
             <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
        <option value="none">Sort</option>
        <option value="ascendingname">Ascending Name</option>
        <option value="descendingname">Descending Name</option>
        <option value="ascendingemail">Ascending Email</option>
        <option value="descendingemail">Descending Email</option>
      </select>
      
            <table className="table table-bordered ">

              <thead>
                <tr>
                  <th scope="col">S.N.</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Salary</th>
                  <th scope="col">Action</th>
                </tr>
                {sortState == 'ascendingname' && data1.map((a, index) => {
                  if(searchValue!=""){
                    if (searchValue.searchValue==a.fname){
                  return <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{a.fname}</td>
                      <td>{a.lname}</td>
                      <td>{a.email}</td>
                      <td>{a.salary}</td>
                      <td>&nbsp;<button><u className="bi bi-eye" onClick={Submit} ><FaUserEdit /></u></button>
                        &nbsp;
                        <button><u className="bi bi-eye" onClick={onSubmit} ><FiDelete /></u></button>

                      </td>
                    </tr>
                  </>
                  }
                }
                else{
                  return <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{a.fname}</td>
                    <td>{a.lname}</td>
                    <td>{a.email}</td>
                    <td>{a.salary}</td>
                    <td>&nbsp;<button><u className="bi bi-eye" onClick={Submit} ><FaUserEdit /></u></button>
                      &nbsp;
                      <button><u className="bi bi-eye" onClick={onSubmit} ><FiDelete /></u></button>

                    </td>
                  </tr>
                </>
                }
                })}
                {sortState == 'descendingname' && data2.map((a, index) => {
                  if(searchValue!=""){
                    if (searchValue.searchValue==a.fname){
                  return <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{a.fname}</td>
                      <td>{a.lname}</td>
                      <td>{a.email}</td>
                      <td>{a.salary}</td>
                      <td>&nbsp;<button><u className="bi bi-eye" onClick={Submit} ><FaUserEdit /></u></button>
                        &nbsp;
                        <button><u className="bi bi-eye" onClick={onSubmit} ><FiDelete /></u></button>

                      </td>
                    </tr>
                  </>
                  }
                }
                else{
                  return <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{a.fname}</td>
                    <td>{a.lname}</td>
                    <td>{a.email}</td>
                    <td>{a.salary}</td>
                    <td>&nbsp;<button><u className="bi bi-eye" onClick={Submit} ><FaUserEdit /></u></button>
                      &nbsp;
                      <button><u className="bi bi-eye" onClick={onSubmit} ><FiDelete /></u></button>

                    </td>
                  </tr>
                </>
                }
                })}
                {sortState == 'ascendingemail' && data3.map((a, index) => {
                  if(searchValue!=""){
                    if (searchValue.searchValue==a.fname){
                  return <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{a.fname}</td>
                      <td>{a.lname}</td>
                      <td>{a.email}</td>
                      <td>{a.salary}</td>
                      <td>&nbsp;<button><u className="bi bi-eye" onClick={Submit} ><FaUserEdit /></u></button>
                        &nbsp;
                        <button><u className="bi bi-eye" onClick={onSubmit} ><FiDelete /></u></button>

                      </td>
                    </tr>
                  </>
                  }
                }
                else{
                  return <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{a.fname}</td>
                    <td>{a.lname}</td>
                    <td>{a.email}</td>
                    <td>{a.salary}</td>
                    <td>&nbsp;<button><u className="bi bi-eye" onClick={Submit} ><FaUserEdit /></u></button>
                      &nbsp;
                      <button><u className="bi bi-eye" onClick={onSubmit} ><FiDelete /></u></button>

                    </td>
                  </tr>
                </>
                }
                })}
                {sortState == 'descendingemail' && data4.map((a, index) => {
                  if(searchValue!=""){
                    if (searchValue.searchValue==a.fname){
                  return <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{a.fname}</td>
                      <td>{a.lname}</td>
                      <td>{a.email}</td>
                      <td>{a.salary}</td>
                      <td>&nbsp;<button><u className="bi bi-eye" onClick={Submit} ><FaUserEdit /></u></button>
                        &nbsp;
                        <button><u className="bi bi-eye" onClick={onSubmit} ><FiDelete /></u></button>

                      </td>
                    </tr>
                  </>
                  }
                }
                else{
                  return <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{a.fname}</td>
                    <td>{a.lname}</td>
                    <td>{a.email}</td>
                    <td>{a.salary}</td>
                    <td>&nbsp;<button><u className="bi bi-eye" onClick={Submit} ><FaUserEdit /></u></button>
                      &nbsp;
                      <button><u className="bi bi-eye" onClick={onSubmit} ><FiDelete /></u></button>

                    </td>
                  </tr>
                </>
                }
                })}
                {sortState == 'none' && data.map((a, index) => {
                  if(searchValue!=""){
                    if (searchValue.searchValue==a.fname){
                  return <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{a.fname}</td>
                      <td>{a.lname}</td>
                      <td>{a.email}</td>
                      <td>{a.salary}</td>
                      <td>&nbsp;<button><u className="bi bi-eye" onClick={Submit} ><FaUserEdit /></u></button>
                        &nbsp;
                        <button><u className="bi bi-eye" onClick={onSubmit} ><FiDelete /></u></button>

                      </td>
                    </tr>
                  </>
                  }
                }
                else{
                  return <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{a.fname}</td>
                    <td>{a.lname}</td>
                    <td>{a.email}</td>
                    <td>{a.salary}</td>
                    <td>&nbsp;<button><u className="bi bi-eye" onClick={Submit} ><FaUserEdit /></u></button>
                      &nbsp;
                      <button><u className="bi bi-eye" onClick={onSubmit} ><FiDelete /></u></button>

                    </td>
                  </tr>
                </>
                }
                })}
              </thead>
            </table>
          </div>
        }
      </div>
    </div>
      

  </>
  );
}
export default Detail;