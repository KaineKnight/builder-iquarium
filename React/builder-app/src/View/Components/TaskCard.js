import '../../Styles/TaskCard.css';
import Edit from "./../../Styles/Images/Compopents/edit.svg" 
import Man from "./../../Styles/Images/Compopents/microchel.png"
import Chel from "./../../Styles/Images/Compopents/chel.svg"
import light from '../../Styles/Images/Tasks/lightning-icon.svg';
import clock from '../../Styles/Images/Tasks/clock-icon.svg';
import brock from '../../Styles/Images/Tasks/brock-icon.svg';
import exclaim from '../../Styles/Images/Tasks/exclaim-icon.svg';


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

    function TagGenerator(tagId){
        switch(tagId){
            case 0:
                return (
                    <div className='bb'>
                        <img src={clock} alt="Просрочено"></img>
                        <button className='late tag'>Просрочено</button>
                    </div>
                );
                break;
            case 1:
                return (
                    <div className='bb'>
                        <img src={light} alt="Срочно" className='light'></img>
                        <button className='fast tag'>Срочно</button>
                    </div>
                );
                break;
            case 2:
                return (
                    <div className='bb'>
                        <img src={exclaim} alt="Затруднения"></img>
                        <button className='difficult tag'>Затруднения</button>
                    </div>
                );
                break;
            case 3:
                return (
                    <div className='bb'>
                        <img src={brock} alt="Срочно" ></img>
                        <button className='fast tag'>Срочно</button>
                    </div>
                );
                break;

        }
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
                {TagGenerator(props.data.tagId)}
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