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
import Man from "./../../Styles/Images/Compopents/microchel.png";
import Chel from "./../../Styles/Images/Compopents/chel.svg";
import task from '../../Styles/Images/PopUp/files-icon.svg';
import message from '../../Styles/Images/PopUp/com1-icon.svg';
import anotherClip from '../../Styles/Images/PopUp/interface-icon.svg';
import trashCan from '../../Styles/Images/PopUp/can-icon.svg';


function Tasks() {

    function closePopUp() {
        let popUp = document.querySelector(".pop-up");
        popUp.classList.add('hidden');
    }

    let handleClick = (activeName, activeButton) => {
        let newActive = document.querySelector(activeName);
        let buttons = document.querySelectorAll('.menu button');
        let displays = document.querySelectorAll(".displays > div");
        buttons.forEach((button) => {
            button.classList.remove("active");
        })
        displays.forEach((display) => {
            display.classList.remove("active");
        })
        newActive.classList.add("active");
        buttons[activeButton].classList.add('active');
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
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    </ul>
                </li>
                <li className='line'></li>
                <li className='section'>
                    <h2>В процессе</h2>
                    <ul className='section-items'>
                        
                    </ul>
                </li>
                <li className='line'></li>
                <li className='section'>
                    <h2>Завершено</h2>
                    <ul className='section-items'>
  
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
                        <div className='menu'>
                            <button className='active' onClick={(e) => handleClick(".small-tasks", 0)}>
                                <img src={task}></img>
                                <p>Подзадачи</p>
                            </button>
                            <button onClick={(e) => handleClick(".files", 1)}>
                                <img src={anotherClip}></img>
                                <p>Файлы</p>
                            </button>
                            <button onClick={(e) => handleClick(".comments", 2)}>
                                <img src={message}></img>
                                <p>Комментарии</p>
                            </button>
                        </div>
                        <div className='displays'>
                            <div className='small-tasks active'>
                                <ul className='task-list'>
                                    <li>
                                        <input type="checkbox" id="1" disabled></input>
                                        <label for="1">Постелить полы в спальной комнате</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="2" checked disabled></input>
                                        <label for="2">Установить щеколды на дверях</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="3" checked disabled></input>
                                        <label for="3">Покрасить стены</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="4" checked disabled></input>
                                        <label for="4">Укладка плитки</label>
                                    </li>
                                </ul>
                            </div>
                            <div className='files'>
                                <table>
                                    <tr className='tip'>
                                        <td>№</td>
                                        <td>Название файла</td>
                                        <td>Файл</td>
                                        <td>Прикрепил</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Акт о завершении работы</td>
                                        <td><a href='#'>Акт_подтверждения_работы.docx</a></td>
                                        <td>Курыс В.Р.</td>
                                        <td><button className='deleteBtn'><img src={trashCan}></img></button></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Акт о завершении работы</td>
                                        <td><a href='#'>Акт_подтверждения_работы.docx</a></td>
                                        <td>Курыс В.Р.</td>
                                        <td><button className='deleteBtn'><img src={trashCan}></img></button></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Акт о завершении работы</td>
                                        <td><a href='#'>Акт_подтверждения_работы.docx</a></td>
                                        <td>Курыс В.Р.</td>
                                        <td><button className='deleteBtn'><img src={trashCan}></img></button></td>
                                    </tr>
                                </table>
                                <button className='add'>
                                    <img src={anotherClip}></img>
                                    <p>Прикрепить</p>
                                </button>
                            </div>
                            <div className='comments'></div>
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