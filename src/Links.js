import React from 'react';
import Paper from './Paper';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import Inputs from './Inputs';
import App from './App';

export const Links = () =>{
  return(
    <div>
      <h1>Welcome User</h1>
      <table><tr>
       <Link to="/blankpage">  
      <Paper name="Blank Page" thumbnail={"blank.png"} />
      </Link>
      <Link to="/questionpaper1"> 
      <Paper name="Question Paper 1" thumbnail={"question1.jpg"} />
      </Link>
      <Link to="/questionpaper2">
      <Paper name="Question Paper 2" thumbnail={"question1.jpg"}/>
      </Link>
      </tr></table>
    </div>
       
  )
}
 export const Home = () =>{
   return 0
 }