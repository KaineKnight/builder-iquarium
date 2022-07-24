
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./../Styles/Statistic.css"
import Statistics from './Components/rowStatistic'

function Statistic() {

    const [appState, setAppState] = useState(null);

    const NewStatistic = async () => { 
        await axios.get("http://10.1.1.40:3000/items").then((resp) => {
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
        <table className='statistic-container'>
            <tr className="statistic-description">
                <td className="statistic-nomer">№</td>
                <td className="nomenclatyra">Номенклатура</td>
                <td className="work">Назначение</td>
                <td className="count">Количество</td>
                <td className="measurement">Единица измерения</td>
                <td className="price">Цена</td>
                <td className="money">Стоимость</td>
                <td className="chelovek">Получатель</td>
            </tr>
            {statistic}
        </table>
    );
}

export default Statistic;