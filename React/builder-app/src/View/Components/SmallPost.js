import '../../Styles/SideMenu.css';

function SmallPost(props) {
    return (
      <ul>
        <li>
            <p className='project-avatar hidden'><span>{props.data.title[0]}</span>{props.data.title[0]}</p>
        </li>
      </ul>
    );
  }
  
  export default SmallPost;