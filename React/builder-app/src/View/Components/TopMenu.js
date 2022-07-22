import '../../Styles/TopMenu.css';

function TopMenu() {
    return (
        <div className='top-menu'>
            <div className='task-name'>
                <span className='task-avatar'>A</span>
                <p>«Azshara Palace»</p>
            </div>
            <ul>
                <li className='active'><button>Задачи</button></li>
                <li><button>Расписания</button></li>
                <li><button>Документация</button></li>
                <li><button>Статистика</button></li>
            </ul>
        </div>
    );
}
  
export default TopMenu;