
import "./../../Styles/Statistic.css"

function rowDocument(props) {
    return (
    <tr className="statistic-description">
                <td className="statistic-nomer">{props.data.id}</td>
                <td className="nomenclatyra">{props.data.nomenclature}</td>
                <td className="work">{props.data.target}</td>
                <td className="count">{props.data.amount}</td>
                <td className="measurement">{props.data.measuringType}</td>
                <td className="price">{props.data.price}</td>
                <td className="money">{props.data.totalPrice}</td>
                <td className="chelovek">{props.data.receiver}</td>
    </tr>
    );
}

export default rowDocument;