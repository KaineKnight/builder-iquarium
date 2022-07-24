import '../../Styles/SideMenu.css';
import BigProject from './BigProject';
import { useState, useEffect } from 'react';
import axios from 'axios';
import allTasks from './../../Styles/Images/Header/all-tasks-icon.svg'
import myTasks from './../../Styles/Images/Header/my-tasks-icon.svg'

function SideMenu(props) {
    let data = props.data;

    const [appState, setAppState] = useState(null);

    const GetAnswer = async () => { 
         await axios.get("http://10.1.1.40:3000/projects/projects").then((resp) => {
             setAppState(resp.data);
      });
    }

    useEffect( () =>  {
        GetAnswer()
    }, []);


    if (!appState) return null;

    let bigProject = appState.map( (d) => <BigProject title={d} />)

    return (
        <div className='side-menu'>
            <div className='side-container'>
                <div className='task-types'>
                    <button><img src={allTasks}></img>Все задачи</button>
                    <button><img src={myTasks}></img>Мои задачи</button>
                </div>
                <ul className='group-lists'>
                    <p className='section-header'>сообщества</p>
                    {bigProject}
                </ul>
            </div>
        </div>
    );
}
  
export default SideMenu;