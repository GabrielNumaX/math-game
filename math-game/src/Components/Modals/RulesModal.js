import React from 'react';

import css from './RulesModal.module.css';

const RulesModal = (props) => {

    return(
        <div className={css.Modal} onClick={props.close}>

            <div className={css.ModalContent}>

                <h5>Rules</h5>

                <p>You have to solve the math operations before the numbers touch the floor.<br/>
                    You can select from three option, one of which is correct.<br/>
                    After you get a correct answer you get 10 points and the speed
                    increases. <br/>
                    If you chose the wrong answer you lose... but Hey!!! 
                    <br/>Check your Score and Enter your <strong>Name</strong> with your <strong>Position</strong><br/>
                    for the Hall of Players

                </p>

                <button onClick={props.close}>Ok</button>
            </div>


        </div>
    )
}

export default RulesModal;