import Button from "../Button";

function NavButton(props) {

   let button = props.textButton.post.map( d => <Button id={d.id} aboba={d.aboba}/>)

    return (
     <div>
      {button}
     </div>
    );
  }
  
  export default NavButton;