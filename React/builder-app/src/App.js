import './App.css';
import { Routes, Route } from "react-router-dom";
import NavButton from "./View/Components/NavButton";
import NavDocuments from "./View/Components/NavDocuments";
import Base from './View/Components/Base';

function App(props) {
  return (
    <div>
      <Base/>
    <Routes>
      <Route path="navButton" element={<NavButton textButton={props.data}/>} />
      <Route path="navDocument" element={<NavDocuments textDocuments={props.data}/>} />
    </Routes>
    </div>
  );
}

export default App;
