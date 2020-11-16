import React, {Component} from 'react';
import './app-header.css';
import { Link } from 'react-router-dom';


class AppHeader extends Component{
 render(){
    return(
        <div id="header" >
            <ul className='appHeader'>
               <Link to={'/personalPage/'} className="link"> <li className='float-left apphli'>Personal Info</li></Link>
                <Link to={'/contacts'} className="link"><li className='apphli'>Contacts</li></Link>
                <a target='_blank'href="https://honey-badger1.github.io/portfolio/"><li className='apphli'>Projects</li></a>
            </ul>
            
        </div>
    )
 }
}


export default AppHeader;
