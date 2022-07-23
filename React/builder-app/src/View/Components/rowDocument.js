import "../../Styles/Document.css"

function rowDocument(props) {
    return (
        <div className='document_container'>
            <div className="description">
                <div className="nomer">{props.data.id}</div>
                <div className="name_document">{props.data.title}</div>
                <div className="chel">{props.data.sender}</div>
                <div className="file">{props.data.file}</div>
                <div className="status">{props.data.status}</div>
            </div>
        </div>
    );
}

export default rowDocument;