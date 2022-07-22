import './../Styles/Splash.css';
import logo from '../Styles/Images/Header/logo.svg'
import imgButton from "../Styles/Images/Splash/imgButton.svg"
import { Link } from "react-router-dom";

function Splash(props)  {
    return (
      <div>
        <div className="containerSplash">
          <div className="body">
            <img className="bodyLogo" src={logo} alt="test"/>
            <p className="text">Платформа <span className="colortext">для удобного планирования</span> и запуска строительных работ</p>
            <p className="text1">Отслеживание задач, согласование<br/> документов и бюджета, создание команды<br/> для компании застройщика и подрядчиков</p>
            <div className="btn">
              <Link to="/main" className="btn_a"><img className="iButton" alt="test" src={imgButton}/> Попробовать</Link>
            </div>
          </div>
        </div>
        <footer className="foo"><p className="fooText">© 2022 builger.com. Все права защищены.</p></footer>
      </div>
    );
  }
  
  export default Splash;