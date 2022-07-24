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
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom'
import { createContext, useContext } from "react";



function Tasks(props) {
   
 
    
    const [appState, setAppState] = useState(null);
    


    const NewButtonTask =  async() => { 
        await axios.get("http://10.1.1.40:3000/tasks/epochID/2").then((resp) => {
            setAppState(resp.data)
            console.log(appState)
     });
   }


    useEffect( () =>  {
         NewButtonTask()
    }, []);

    if (!appState) return null;

    let taskCard0 = appState.map( d => d.status===0 && <TaskCard data={d}/>)
    let taskCard1 = appState.map( d => d.status===1 && <TaskCard data={d}/>)
    let taskCard2 = appState.map( d => d.status===2 && <TaskCard data={d}/>)


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

    let tagSort = (activeTag) => {
        let newActive = document.querySelectorAll('.section-list '+activeTag);
        let cards = document.querySelectorAll('.section-list .card');
        console.log(cards);
        cards.forEach((card) => {
            card.classList.add("hidden");
        })
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
                    <button onClick={(e) => tagSort} className='fast'>Срочно</button>
                    <img src={light} alt="Срочно" className='light'></img>
                </li>
                <li onClick={(e) => tagSort}>
                    <button className='late'>Просрочено</button>
                    <img src={clock} alt="Просрочено"></img>
                </li>
                <li onClick={(e) => tagSort}>
                    <button className='later'>Отложено</button>
                    <img src={brock} alt="Просрочено"></img>
                </li>
                <li onClick={(e) => tagSort}>
                    <button className='difficult'>Затруднения</button>
                    <img src={exclaim} alt="Затруднения"></img>
                </li>
            </ul>
            <ul className='section-list'>
                <li className='section'>
                    <h2>Выполнить</h2>
                    <ul className='section-items'>
                    {taskCard0}
                    </ul>
                </li>
                <li className='line'></li>
                <li className='section'>
                    <h2>В процессе</h2>
                    <ul className='section-items'>
                    {taskCard1}
                    </ul>
                </li>
                <li className='line'></li>
                <li className='section'>
                    <h2>Завершено</h2>
                    <ul className='section-items'>
                    {taskCard2}
                    </ul>
                </li>
                <li className='line'></li>
            </ul>
            <div className='pop-up hidden'>
                <div className='main'>
                    <div className='pop-up-container'>
                        <div className='title'>
                            <h2 className='task-name'>«Azshara Palace». Внутренняя отделка</h2>
                            <span><img src={exclaim2}></img><p>Необходимо провести косметический ремонт в квартирах домового комлекса Азшара. Заменить плиточное покрытие на кухнях, установить кухонный гарнитур. По завершению работы приложить соответствующий акт.</p></span>
                        </div>
                        <button className='close-btn' onClick={closePopUp}>
                            <img src={union}></img>
                        </button>
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
                                    <li class="add-task">
                                        <button>
                                            <img src={union}></img>
                                            <p>Добавить новую подзадачу</p>
                                        </button>
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
                        <button className='end-button'>Завершить</button>
                    </div>
                </div>
                <button className='dark' onClick={closePopUp}>
                </button>
            </div>
        </div>
    );
}
  
export default Tasks;