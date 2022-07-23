import '../../Styles/SideMenu.css';
import { useState } from 'react';
import axios from 'axios';


function SmallPost(props) {

    const [appState, setAppState] = useState(null);

    const NewButtonTask = async () => { 
         await axios.get("http://10.1.1.40:3000/tasks/epochID/2").then((resp) => {
             setAppState(resp.data)
             props.data1.dataTask = resp.data
      });
    }
    
    return (
      <ul>
        <li>
            <p onClick={NewButtonTask} className='project-avatar'><span>{props.data.title[0]}</span>{props.data.title}</p>
        </li>
      </ul>
    );
  }
  
  export default SmallPost;