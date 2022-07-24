import '../../Styles/TopMenu.css';
import { Link } from "react-router-dom";


function TopMenu() {
    let handleClick = (activeButton) => {
        let buttons = document.querySelectorAll('.top-menu ul li');
        buttons.forEach((button) => {
            button.classList.remove("active");
        })
        buttons[activeButton].classList.add('active');
    }
    return (
        <div className='top-menu'>
            <div className='task-name'>
                <span className='task-avatar'>A</span>
                <p>«Azshara Palace»</p>
            </div>
            <ul>
                <li className='active' onClick={(e) => handleClick(0)}><Link to="*/task">Задачи</Link></li>
                <li onClick={(e) => handleClick(1)}><Link to="*/chrono">Хронология</Link></li>
                <li onClick={(e) => handleClick(2)}><Link to="*/document">Документация</Link></li>
                <li onClick={(e) => handleClick(3)}><Link to="*/statictic">Затраты</Link></li>
            </ul>
        </div>
    );
}
  
export default TopMenu;