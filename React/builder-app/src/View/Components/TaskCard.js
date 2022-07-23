import '../../Styles/TaskCard.css';
import Edit from "./../../Styles/Images/Compopents/edit.svg"
import Light from "./../../Styles/Images/Compopents/light.svg" 
import Man from "./../../Styles/Images/Compopents/microchel.png"
import Chel from "./../../Styles/Images/Compopents/chel.svg"



function TaskCard(props) {
    function showPopUp() {
        let popUp = document.querySelector(".pop-up");
        popUp.classList.remove('hidden');
    }

    function DateFormatter(date){
        let year, month, day
        year = date.slice(0, 4);
        month = date.slice(5, 7);
        day = date.slice(8, 10);
        return day + '.' + month + '.' + year;

    }


    return (
      <div className="card">
        <div className="card_margin">
            <div className="title">
                <p className="title_text">{props.data.title}</p>
                <p className="pro">0%</p>
            </div>

            <div className="active_buton">
                <button className="btn_edit" onClick={showPopUp}><img src={Edit}/></button> 
                <button className='fast'>Срочно</button>
                <img src={Light} alt="Срочно" className='light'></img>
            </div>

            <div className="card_footer">
                <div className="photos">
                    <button className="photo"><img  src={Man}/></button> 
                    <button className="photo"><img  src={Man}/></button>
                    <button className="photo"><img  className="dolboeb" src={Chel}/></button> 
                </div>
                <p className="data">{DateFormatter(props.data.endPlanDate)}</p>
            </div>
        </div>
      </div>
    );
  }

  export default TaskCard;