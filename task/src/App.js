import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Sign from './login';
import List from './list';

function App() {
  return (
    <div>
       <BrowserRouter>
            <Switch>
            <Route  path="/"> <Sign />
            </Route> 
            </Switch>
          </BrowserRouter>     
       
          {/* <List />   */}
        {/* <Route path="/list" element={<List />} /> */}
        {/* <Home /> */}
      
      
                   
    </div>
  );
}
ReactDOM.render(<App/>, document.getElementById('root'));
export default App


//NAYA WALA
// import React, { useState } from 'react';
// import ReactDOM from "react-dom";
// import Home from './home';
// import List from './list';
// import Sign from './sign';
// import UserList from './userlist';


//  function App() {
  

//   return (
//     <>
      
//         <Home/>
//     </>
//   );
// }

// ReactDOM.render(<App/>, document.getElementById('root'));

// export default App; 



