import '../../Styles/Header.css';
import logo from '../../Styles/Images/Header/logo.svg';
import search from '../../Styles/Images/Header/search-icon.svg';
import plus from '../../Styles/Images/Header/plus-icon.svg';
import bell from '../../Styles/Images/Header/bell-icon.svg';
import avatar from '../../Styles/Images/Header/avatar.png';
import arrowBottom from '../../Styles/Images/Header/bottom-arrow-icon.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectData from '../../Model/DataApp';

function Header() {

    const [post, setPost] = React.useState(1);
    const [inputOne, setInputOne] = useState('');
    const [inputTwo, setInputTwo] = useState('');
    const [inputThree, setInputThree] = useState('');
    const [inputFour, setInputFour] = useState('');


    function CreateProject() {
        axios.post('http://10.1.1.40:3000/projects/createProject', {
            title: inputOne,
            moneyAmount: inputTwo,
            startPlanDate: inputThree,
            endPlanDate: inputFour
        }).then((response) => {
            setPost(response.data);
            console.log(response.data)
        });
      }

      if (!post) return "No post!"

    return (
     <header>
        <div className='container'> 
            <img src={logo} alt="Логотип" className='logo'></img>
            <div className='search-field'>
                <input type="text" placeholder='Искать в Группа «ПИК»'/>
                <button>
                    <img src={search} alt=""></img>
                </button>
            </div>
            <button className='create-button'>
                <img src={plus} alt=""></img>
                <p>Создать</p>
                <div className='form'>
                    <input type="text" name="input1" value={inputOne} onChange={(event) => setInputOne(event.target.value)}></input>
                    <input type="text" name="input2" value={inputTwo} onChange={(event) => setInputTwo(event.target.value)}></input>
                    <input type="text" name="input3" value={inputThree} onChange={(event) => setInputThree(event.target.value)}></input>
                    <input type="text" name="input4" value={inputFour} onChange={(event) => setInputFour(event.target.value)}></input>
                    <input type="submit" value="Отправить" onClick={CreateProject}></input>
                </div>
            </button>
            <button className='notify-button'>
                <img src={bell} alt=""></img>
            </button>
            <div className='user'>
                <p>Здравствуйте, Виктор </p>
                <img src={avatar} alt="" id='avatar'></img>
                <img src={arrowBottom} alt=""></img>
            </div>
        </div>
     </header>
    );
  }
  
  export default Header;