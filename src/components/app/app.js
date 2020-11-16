import React, {Component} from 'react';
import './app.css';
import { Route, Switch } from 'react-router-dom';
import AppHeader from '../app-header';
import {About, Contacts} from '../pages';



class App extends Component{
  
   render(){

    return(
        
        <div className="">
         <AppHeader/>
        <Switch>
        <Route path='/' exact component={About}/>
        <Route exact component={About}/>
        <Route path='/contacts' exact component={Contacts}/>
        </Switch>
        </div>
    )
   }


   
   }



export default App;