import './../Styles/App.css';
import Header from './Components/Header';
import TopMenu from './Components/TopMenu';
import SideMenu from './Components/SideMenu';
import Tasks from './Components/Tasks';
import PopUpScript from './Components/PopUpScrit';

function App(props) {
  return (
    <div>
      <Header/>
      <div className='main'>
        <SideMenu/>
        <TopMenu/>
        <div className='content'>
          <Tasks/>
        </div>
      </div>
      <footer className="foo"><p className="fooText">© 2022 builger.com. Все права защищены.</p></footer>
      <script src={PopUpScript}></script>
    </div>
  );
}

export default App;
