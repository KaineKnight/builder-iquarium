import '../../Styles/Tasks.css';
import light from '../../Styles/Images/Tasks/lightning-icon.svg';
import clock from '../../Styles/Images/Tasks/clock-icon.svg';
import brock from '../../Styles/Images/Tasks/brock-icon.svg';
import exclaim from '../../Styles/Images/Tasks/exclaim-icon.svg';
import { useState, useEffect } from 'react';
import DataTask from './../../Model/DataApp'
import TaskCard from './../../View/Components/TaskCard'

function Tasks(props) {

    //let taskCard = .map( d => <TaskCard />
        
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
        </div>
    );
}
  
export default Tasks;