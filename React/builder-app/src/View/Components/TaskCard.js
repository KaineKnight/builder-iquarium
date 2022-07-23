import '../../Styles/TaskCard.css';
import Edit from "./../../Styles/Images/Compopents/edit.svg"
import Light from "./../../Styles/Images/Compopents/light.svg" 
import Man from "./../../Styles/Images/Compopents/microchel.png"
import Chel from "./../../Styles/Images/Compopents/chel.svg"

function TaskCard(props) {
    return (
      <div className="card">
        <div className="card_margin">
            <div className="title">
                <p className="title_text">Внутренняя отделка</p>
                <p className="pro">0%</p>
            </div>

            <div className="active_buton">
                <button className="btn_edit"><img src={Edit}/></button> 
                <button className='fast'>Срочно</button>
                <img src={Light} alt="Срочно" className='light'></img>
            </div>

            <div className="card_footer">
                <div className="photos">
                    <button className="photo"><img  src={Man}/></button> 
                    <button className="photo"><img  src={Man}/></button>
                    <button className="photo"><img  className="dolboeb" src={Chel}/></button> 
                </div>
                <p className="data">06.12.2021</p>
            </div>
        </div>
      </div>
    );
  }

  export default TaskCard;