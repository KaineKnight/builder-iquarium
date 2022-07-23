import '../../Styles/Tasks.css';
import light from '../../Styles/Images/Tasks/lightning-icon.svg';
import clock from '../../Styles/Images/Tasks/clock-icon.svg';
import brock from '../../Styles/Images/Tasks/brock-icon.svg';
import exclaim from '../../Styles/Images/Tasks/exclaim-icon.svg';
import union from '../../Styles/Images/Tasks/union-icon.svg';
import TaskCard from './TaskCard';
import exclaim2 from '../../Styles/Images/PopUp/status2-icon.svg';
import executor from '../../Styles/Images/PopUp/com2-icon.svg';
import port from '../../Styles/Images/PopUp/general-icon.svg';
import clip from '../../Styles/Images/PopUp/status-icon.svg';
import Man from "./../../Styles/Images/Compopents/microchel.png"
import Chel from "./../../Styles/Images/Compopents/chel.svg"

function Tasks() {
    function closePopUp() {
        let popUp = document.querySelector(".pop-up");
        popUp.classList.add('hidden');
    }
    return (
        <div className='tasks'>
            <div className='sort'>
                <p>Сортировать по:</p>
                <button className='active'>срок давности</button>
                <button>завершенность</button>
            </div>
            <ul className='tags'>
                <li>
                    <button className='fast'>Срочно</button>
                    <img src={light} alt="Срочно" className='light'></img>
                </li>
                <li>
                    <button className='late'>Просрочено</button>
                    <img src={clock} alt="Просрочено"></img>
                </li>
                <li>
                    <button className='later'>Отложено</button>
                    <img src={brock} alt="Просрочено"></img>
                </li>
                <li>
                    <button className='difficult'>Затруднения</button>
                    <img src={exclaim} alt="Затруднения"></img>
                </li>
            </ul>
            <ul className='section-list'>
                <li className='section'>
                    <h2>Выполнить</h2>
                    <ul className='section-items'>
                        <li><TaskCard/></li>
                        <li><TaskCard/></li>
                        <li><TaskCard/></li>
                    </ul>
                </li>
                <li className='line'></li>
                <li className='section'>
                    <h2>В процессе</h2>
                    <ul className='section-items'>
                        <li><TaskCard/></li>
                        <li><TaskCard/></li>
                        <li><TaskCard/></li>
                    </ul>
                </li>
                <li className='line'></li>
                <li className='section'>
                    <h2>Завершено</h2>
                    <ul className='section-items'>
                        <li><TaskCard/></li>
                        <li><TaskCard/></li>
                        <li><TaskCard/></li>
                    </ul>
                </li>
                <li className='line'></li>
            </ul>
            <div className='pop-up hidden'>
                <div className='main'>
                    <div className='pop-up-container'>
                        <button className='close-btn' onClick={closePopUp}>
                            <img src={union}></img>
                        </button>
                        <div className='title'>
                            <h2 className='task-name'>«Azshara Palace». Внутренняя отделка</h2>
                            <span><img src={exclaim2}></img><p>Необходимо провести косметический ремонт в квартирах домового комлекса Азшара. Заменить плиточное покрытие на кухнях, установить кухонный гарнитур. По завершению работы приложить соответствующий акт.</p></span>
                        </div>
                        <div className='info'>
                            <div>
                                <span>
                                    <img src={executor} className="icon"></img>
                                    <p>Исполнители</p>
                                </span>
                                <div className="photos">
                                    <button className="photo"><img  src={Man}/></button> 
                                    <button className="photo"><img  src={Man}/></button>
                                    <button className="photo"><img  className="dolboeb" src={Chel}/></button> 
                                </div>
                            </div>
                            <div>
                                <span>
                                    <img src={port} className="icon"></img>
                                    <p>Сроки исполнения</p>
                                </span>
                                <p className='date'>До: 06.12.2021 14:00</p>
                            </div>
                            <div>
                                <span>
                                    <img src={clip} className="icon"></img>
                                    <p>Теги</p>
                                </span>
                                <button className='fast'><img src={light} alt="Срочно" className='light'></img>Срочно</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <button className='dark' onClick={closePopUp}>
                </button>
            </div>
        </div>
    );
}
  
export default Tasks;