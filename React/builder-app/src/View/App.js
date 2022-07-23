import './../Styles/App.css';
import { Routes, Route } from "react-router-dom";
import NavButton from "./Components/NavButton";
import NavDocuments from "./Components/NavDocuments";
import Base from './Components/Base';
import Header from './Components/Header';


function App(props) {
  return (
    <div>
      <Header/>
      <div className="container">
        <Base/>
        <Routes>
          <Route path="navButton" element={<NavButton textButton={props.data}/>} />
          <Route path="navDocument" element={<NavDocuments textDocuments={props.data}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
