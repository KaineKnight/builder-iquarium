import '../../Styles/Header.css';
import logo from '../../Styles/Images/Header/logo.svg';
import search from '../../Styles/Images/Header/search-icon.svg';
import plus from '../../Styles/Images/Header/plus-icon.svg';
import bell from '../../Styles/Images/Header/bell-icon.svg';
import avatar from '../../Styles/Images/Header/avatar.png';
import arrowBottom from '../../Styles/Images/Header/bottom-arrow-icon.svg';

function Header() {
    return (
     <header>
        <div className='container'> 
            <img src={logo} alt="Логотип" className='logo'></img>
            <div className='search-field'>
                <input type="text" placeholder='Искать в Группа «ПИК»'/>
                <button>
                    <img src={search} alt=""></img>
                </button>
            </div>
            <button className='create-button'>
                <img src={plus} alt=""></img>
                <p>Создать</p>
            </button>
            <button className='notify-button'>
                <img src={bell} alt=""></img>
            </button>
            <div className='user'>
                <p>Здравствуйте, Виктор</p>
                <img src={avatar} alt="" id='avatar'></img>
                <img src={arrowBottom} alt=""></img>
            </div>
        </div>
     </header>
    );
  }
  
  export default Header;