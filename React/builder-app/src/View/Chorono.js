import sideBar from './../Styles/Images/Tasks/chrono-side-bar.png'
import contentAble from './../Styles/Images/Tasks/chrono-content-able.png'
import contentDisable from './../Styles/Images/Tasks/chrono-content-disable.png'
import './../Styles/Chrono.css'
import { useState, useEffect } from 'react';

function Chorono() {
    const [appState, setAppState] = useState(null);
    const [appState1, setAppState1] = useState(null);
    const [appState2, setAppState2] = useState(null);

    let isAble

    let Sort = () => {
        setAppState2(isAble=false)
        let checkbox
        setAppState(checkbox = document.querySelector(".top-menu-chrono .check label:last-of-type input"))
        let img 
        setAppState1(img = document.querySelector(".top-menu-chrono .content"))

        console.log(appState1);

        appState1.src=contentAble;

        console.log(appState1);
        console.log(appState.checked);
        isAble = appState.checked;
    }
    return (
        <div className='top-menu-chrono'>
            <div className='check'>
                <label>
                    <input type='checkbox' checked></input> Отобразить период выполнения
                </label>
                <label onClick={Sort}>
                    <input type='checkbox'></input> Наложить фактический период
                </label>
            </div>
            <img className='sidebar' src={sideBar}></img>
            <img className='content' src={appState2 ? contentAble : contentDisable}></img>
        </div>
    );
}

export default Chorono;