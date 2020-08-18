import React from 'react';

// import css from './Game.module.css';

import '../../Sass/Game.scss'

import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';


const Game = (props) => {

    return(
        <div className='GameContainer'>

            <Sidebar className='Sidebar'/>
            <Main className='Main'/>
        </div>
    )
}

export default Game;