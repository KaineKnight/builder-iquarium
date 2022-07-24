import Button from "../Button";
import axios from 'axios';
import { useState, useEffect } from 'react';

function NavButton(props) {
  
  const [appState, setAppState] = useState(null);
  
  useEffect(() => {
    const apiUrl = 'http://10.1.1.40:3000/json';
    axios.get(apiUrl).then((resp) => {
      setAppState(resp.data);
    });
  }, [setAppState]);

  if (!appState) return null;

   //let button = props.textButton.post.map( d => <Button id={d.id} aboba={d.aboba}/>)

    return (
     <div>
      {appState.id}
      {appState.title}
     </div>
    );
  }
  
  export default NavButton;