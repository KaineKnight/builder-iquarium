import '../../Styles/SideMenu.css';
import { useState } from 'react';
import axios from 'axios';
import TaskCard from './../Components/TaskCard';
import { Link } from "react-router-dom";

function SmallPost(props) {

    const [appState, setAppState] = useState(null);

    return (
      <ul>
        <li>
            <Link to="*/task" className='project-avatar'><span>{props.data.title[0]}</span>{props.data.title}</Link>
        </li>
      </ul>
    );
  }
  
  export default SmallPost;