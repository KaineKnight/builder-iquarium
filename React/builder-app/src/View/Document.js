import rowDocument from "./Components/rowDocument";
import { useState } from 'react';
import axios from 'axios';
import "../Styles/Document.css"

function Document(props) {

    const [appState, setAppState] = useState(null);

    const NewDocument = async () => { 
        await axios.get("http://10.1.1.40:3000/tasks/epochID/2").then((resp) => {
            setAppState(resp.data)
     });
   }

   //let document = appState.map( d => <rowDocument/>)

    return (
        <div className='document_container'>
            <div className="description">
                <div className="nomer">№</div>
                <div className="name_document">Название документа</div>
                <div className="chel">Прикрепил</div>
                <div className="file">Файл</div>
                <div className="status">Статус</div>
            </div>
            
        </div>
    );
}

export default Document;