import '../../Styles/SideMenu.css';
import { useState } from 'react';
import axios from 'axios';
import TaskCard from './../Components/TaskCard';
import { Link } from "react-router-dom";
import Man from "./../../Styles/Images/Compopents/microchel.png"
import Chel from "./../../Styles/Images/Compopents/chel.svg"

function SmallPost(props) {

    return (
      <ul>
        <li>
            <Link to="*/task"  className='project-avatar'><span>{props.data.title[0]}</span><p className='truncate'>{props.data.title}</p></Link>
        </li>
        <div className='side-menu-members'>
          <p>Участники</p>
          <div className="photos">
                  <button className="photo"><img  src={Man}/></button> 
                  <button className="photo"><img  src={Man}/></button>
                  <button className="photo"><img  className="dolboeb" src={Chel}/></button> 
          </div>
        </div>
      </ul>
    );
  }
  
  export default SmallPost;