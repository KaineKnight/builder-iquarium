
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./../Styles/Statistic.css"
import Statistics from './Components/rowStatistic'

function Statistic() {

    const [appState, setAppState] = useState(null);

    const NewStatistic = async () => { 
        await axios.get("http://10.1.1.40:3000/items/epochId/2").then((resp) => {
            setAppState(resp.data)
            console.log(appState)
     });
    }

    useEffect( () =>  {
        NewStatistic()
    }, []);

    if (!appState) return null;

   let statistic = appState.map( d => <Statistics data={d}/>)

    return (
        <div className='statistic-container'>
            <div className="statistic-description">
                <div className="statistic-nomer">№</div>
                <div className="nomenclatyra">Номенклатура</div>
                <div className="work">Назначение</div>
                <div className="count">Количество</div>
                <div className="measurement">Единица измерения</div>
                <div className="price">Цена</div>
                <div className="money">Стоимость</div>
                <div className="chelovek">Получатель</div>
            </div>
            {statistic}
        </div>
    );
}

export default Statistic;