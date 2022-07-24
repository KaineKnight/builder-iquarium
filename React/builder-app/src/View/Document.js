
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./../Styles/Document.css"
import Documents from "./Components/rowDocument";

function Document(props) {

    const [appState, setAppState] = useState(null);

    const NewDocument = async () => { 
        await axios.get("http://10.1.1.40:3000/documents").then((resp) => {
            setAppState(resp.data)
            console.log(resp.data)
     });
   }
    useEffect( () =>  {
        NewDocument()
    }, []);

    if (!appState) return null;

     let document = appState.map( d => <Documents data={d}/>)

    return (
        <div className='document_container'>
            <div className="description">
                <div className="nomer">№</div>
                <div className="name_document">Название документа</div>
                <div className="chel">Прикрепил</div>
                <div className="file">Файл</div>
                <div className="status">Статус</div>
            </div>
            {document}
        </div>
    );
}

export default Document;