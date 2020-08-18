import React, {useState} from 'react';

import {Link} from 'react-router-dom'

import RulesModal from '../Modals/RulesModal';

// import css from './Welcome.module.css';

import '../../Sass/Welcome.scss';

const Welcome = () => {

    const [modal, setModal] = useState(false);

    return(

        <div className='DivWelcome'>

            <div className='DivTitle'>

                <h1>Welcome To MathTrix</h1>
                <h2>A Math Game for Children</h2>

                <div className='DivBtns'>

                    <button onClick={() => setModal(true)}>Rules</button>

                    <Link className='Link' to='/play'>
                        Play
                    </Link>

                    <Link className='Link' to='/top-players'>
                        Top Players
                    </Link>

                </div>


            </div>
            
            <footer>
                <a href='mailto:g.numa10@hotmail.com'>&copy; NumaX</a>
            </footer>

            {
                modal ? <RulesModal close={() => setModal(false)}/> : null
            }
        </div>

    )
}

export default Welcome;