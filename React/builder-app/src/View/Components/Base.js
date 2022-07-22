import { Link } from "react-router-dom";

function Base() {
    return (
     <div>
        <Link to="/navButton">Invoices </Link>
        <Link to="/navDocument">Expenses</Link>
     </div>
    );
  }
  
  export default Base;