import '../../Styles/TopMenu.css';
import { Link } from "react-router-dom";


function TopMenu() {
    return (
        <div className='top-menu'>
            <div className='task-name'>
                <span className='task-avatar'>A</span>
                <p>«Azshara Palace»</p>
            </div>
            <ul>
                <li><Link to="*/task">Задачи</Link></li>
                <li><Link to="*/chrono">Хронология</Link></li>
                <li><Link to="*/document">Документация</Link></li>
                <li><Link to="*/statictic">Статистика</Link></li>
            </ul>
        </div>
    );
}
  
export default TopMenu;