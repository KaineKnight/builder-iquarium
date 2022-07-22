import './../Styles/App.css';
import Header from './Components/Header';
import TopMenu from './Components/TopMenu';
import SideMenu from './Components/SideMenu';
import Tasks from './Components/Tasks';

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
    </div>
  );
}

export default App;
