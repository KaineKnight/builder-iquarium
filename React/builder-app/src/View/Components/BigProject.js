import '../../Styles/SideMenu.css';
import SmallPost from './SmallPost';

import arrowDown from '../../Styles/Images/Header/stickDown.svg';

function BigPost(props) {


    function ButtonClick(){
        

    } 

    let smallPost = props.title.epochs.map( d => <SmallPost data={d}/>)

    return (
      <li>
        <p className='group-avatar'><span className="spannchik">{props.title.title[0]}</span>{props.title.title}<button className="more_button" onClick={ButtonClick} ><img src={arrowDown}></img></button></p>
        {smallPost}
      </li>
    );
  }
  
  export default BigPost;