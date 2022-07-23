import '../../Styles/SideMenu.css';

function SideMenu() {
    return (
        <div className='side-menu'>
            <div className='task-types'>
                <button></button>
                <button></button>
            </div>
            <ul className='group-lists'>
                <li>
                    <span className='group-avatar'>П</span>
                    <p>Группа «Пик»</p>
                    <ul>
                        <li>
                            <span className='project-avatar'>A</span>
                            <p>«Azshara Palace»</p>
                        </li>
                        <li>
                            <span className='project-avatar'>D</span>
                            <p>«Dragon Castle»</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <span className='group-avatar'>П</span>
                    <p>Группа «Пик»</p>
                </li>
            </ul>
        </div>
    );
}
  
export default SideMenu;