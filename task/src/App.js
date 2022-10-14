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
             {/* <Route  path="/"> <List />  */}
            </Route> 
            </Switch>
          </BrowserRouter>     
                     
    </div>
  );
}
ReactDOM.render(<App/>, document.getElementById('root'));
export default App








