import '../../Styles/SideMenu.css';
import SmallPost from './SmallPost';
import arrowDown from '../../Styles/Images/Header/stickDown.svg';
import arrowUp from '../../Styles/Images/Header/stickUp.svg'
import { useState } from 'react';

function BigPost(props) {
    let isActivit = false
    let smallPost = props.title.epochs.map( d => <SmallPost data={d}  isActive={isActivit}/>)

    const [appState, setState]= useState(null)
    const [count, setCount] = useState(1);


    function ButtonRotate(){
        if(count%2==1){
            console.log("enter")
            setState(isActivit=true)
            console.log(isActivit)
        }else{
            setState(isActivit=false)
        }
        setCount(count+1)
    }

    return (
      <li>
        <p onClick={ButtonRotate} className='group-avatar'><span className="spannchik">{props.title.title[0]}</span>
        {props.title.title}
        <button className={"more_button"}>
            <img  src={ appState ? arrowUp : arrowDown}></img></button></p>
        {appState ?  smallPost : ''}
      </li>
    );
  }
  
  export default BigPost;