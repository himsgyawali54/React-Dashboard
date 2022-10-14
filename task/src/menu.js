import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import List from './list';


function Menu() {
// let history = useHistory();
const [isGoToList,setIsGoToList] = useState(false)
 const setGoToList = ()=> {setIsGoToList(true)};
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
          <span className="brand-text font-weight-light" style={{ marginLeft: '10px' }}><b>NoveltyTechnology</b></span>
        </a>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">

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

              <li className="nav-item" >
                     <a href="/list" className="nav-link ">      
                     {/* <Link to ="/list" className="nav-link">      */}
                  Employee List
                    
              </a>  
              </li>

              <li className="nav-item">
                <a href="pages/gallery.html" className="nav-link">
                  <i className="nav-icon far fa-image" />
                  <p>
                    Gallery
                  </p>
                </a>
              </li>
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

  );
}
export default Menu;


