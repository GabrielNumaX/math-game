import React from 'react';

import css from './Game.module.css';

import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';


const Game = (props) => {

    return(
        <div className={css.GameContainer}>

            <Sidebar className={css.Sidebar}/>
            <Main className={css.Main}/>
        </div>
    )
}

export default Game;