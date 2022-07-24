import './../Styles/App.css';
import Header from './Components/Header';
import TopMenu from './Components/TopMenu';
import SideMenu from './Components/SideMenu';
import Tasks from './Components/Tasks';
import PopUpScript from './Components/PopUpScrit';
import {  Route,Routes } from "react-router-dom";
import Document from './Document';
import Chorono from './Chorono';
import Statistic from './Statistic';

function App(props) {

  return (
    <div>
      <Header/>
      <div className='main'>
        <SideMenu data={props.data}/>
        <TopMenu/>
        <div className='content'>
          <Routes>
            <Route path="*/task" element={<Tasks data={props.data}/>}/>
            <Route path="*/chrono" element={<Chorono/>}/>
            <Route path="*/document" element={<Document/>}/>
            <Route path="*/statictic" element={<Statistic/>}/>
          </Routes>
        </div>
      </div>
      <footer className="foo"><p className="fooText">© 2022 builger.com. Все права защищены.</p></footer>
      <script src={PopUpScript}></script>
    </div>
  );
}

export default App;
