import React, {useState} from 'react';

import {connect} from 'react-redux';

import css from './Sidebar.module.css';

const Sidebar = (props) => {

    const [digit, setDigits] = useState(null);
    // const [selected, setSelected] = useState(null)

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log( 'digit', digit);
    }

    return(
        <div className={css.DivSidebar}>

            <h1>Your Score</h1>

            <h3>{props.score} : points</h3>

            {/* <div className={css.DivTopPlayers}>
                <h4>numax - score: 100 pts.</h4>
                <h4>numax - score: 110 pts.</h4>
                <h4>numax - score: 120 pts.</h4>
                <h4>numax - score: 130 pts.</h4>
                <h4>numax - score: 140 pts.</h4>
                <h4>numax - score: 150 pts.</h4>
                <h4>numax - score: 160 pts.</h4>
                <h4>numax - score: 170 pts.</h4>
                <h4>numax - score: 180 pts.</h4>
                <h4>numax - score: 190 pts.</h4>
            </div> */}

            <div className={css.DivOption}>

                <form className={css.Form} onSubmit={handleSubmit}>

                    <p>Select Number of Digits:</p>

                    <div className={css.FormDiv}>
                        <input type="radio" value="1" defaultChecked
                            checked={digit === 1}
                            onChange={() => setDigits(1)}/>
                        <label htmlFor="one">One Digit</label>
                    </div>
                    
                    
                    <div className={css.FormDiv}>
                        <input type="radio" value="2"
                            checked={digit === 2}
                            onChange={() => setDigits(2)}/>
                        <label htmlFor="two">Two Digits</label>
                    </div>

                    <div className={css.FormDiv}>
                        <input type="radio" value="3"
                            checked={digit === 3}
                            onChange={() => setDigits(3)}/>
                        <label htmlFor="three">Three Digits</label>
                    </div>

                    <div className={css.FormDivInput}>
                        <input type="submit" value="Save"></input>
                    </div>
                </form>

            </div>


        </div>
    )
}


// this reads from STORE
const mapGlobalStateToProps = (globalState) => {
    return {
        score: globalState.score,
    }
}

export default connect(mapGlobalStateToProps, null)(Sidebar);
// export default Sidebar;