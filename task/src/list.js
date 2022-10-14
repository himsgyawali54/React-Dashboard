import React,  {useState, useEffect}  from "react";
import Detail from "./detail";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
function List() {
  const [items, setItems] = useState([]);
  //const [item, setItem] = useState<any>();
  
  useEffect(() => {
    localStorage.setItem("item",(JSON.stringify(info)))
    setItems(localStorage.getItem('item'));
  
    
   }, []);
  let info = [
    {
      fname:'Gita',
      lname:'Sharma',
      email:'gta1234@gmail.com',
      salary: 'Rs 50,0000',
      
    },
    {
      fname:'Bita',
      lname:'Thapa',
      email:'rita1234@gmail.com',
      salary: 'Rs 40,0000',        },
    {
      fname:'Sita',
      lname:'Gurung',
      email:'sita1234@gmail.com',
      salary: 'Rs 45,0000',        }
   ];
    return(
      <><div>
        <Detail props={info}></Detail>
      </div>
      
            
      </>
    );
}
export default List;