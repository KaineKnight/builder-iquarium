
import "./../../Styles/Statistic.css"

function rowDocument(props) {
    return (
    <div className='statistic-container'>
        <div className="statistic-description">
                <div className="statistic-nomer">{props.data.items[0].id}</div>
                <div className="nomenclatyra">{props.data.items[0].nomenclature}</div>
                <div className="work">{props.data.target}</div>
                <div className="count">{props.data.amount}</div>
                <div className="measurement">{props.data.measuringType}</div>
                <div className="price">{props.data.price}</div>
                <div className="money">{props.data.totalPrice}</div>
                <div className="chelovek">{props.data.receiver}</div>
        </div>
    </div>
    );
}

export default rowDocument;