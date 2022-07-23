import '../../Styles/SideMenu.css';
import arrow from '../../Styles/Images/Header/bottom-arrow-icon.svg';

function SideMenu() {
    return (
        <div className='side-menu'>
            <div className='side-container'>
                <div className='task-types'>
                    <button>Мои задачи</button>
                    <button>Все задачи</button>
                </div>
                <ul className='group-lists'>
                    <li>
                        <p className='group-avatar'><span>П</span>Группа «Пик» <img src={arrow}></img></p>
                        <ul>
                            <li> 
                                <p className='project-avatar'><span>A</span>«Azshara Palace»</p>
                            </li>
                            <li>
                                <p className='project-avatar'><span>D</span>«Dragon Castle»</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p className='group-avatar'><span>П</span>Группа «Пик» <img src={arrow}></img></p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
  
export default SideMenu;