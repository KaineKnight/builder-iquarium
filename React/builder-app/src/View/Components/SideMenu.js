import '../../Styles/SideMenu.css';
import BigProject from './BigProject';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
                    <button>Мои задачи</button>
                    <button>Все задачи</button>
                </div>
                <ul className='group-lists'>
                    {bigProject}
                </ul>
            </div>
        </div>
    );
}
  
export default SideMenu;