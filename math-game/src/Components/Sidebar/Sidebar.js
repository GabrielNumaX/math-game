import React, {useState, useEffect} from 'react';

import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import '../../Sass/Sidebar.scss';

const Sidebar = (props) => {

    const [digit, setDigits] = useState(null);
    // const [selected, setSelected] = useState(null)

    // const handleSubmit = (e) => {

    //     e.preventDefault();

    //     if(digit === null) {

    //         alert('Please select number of digits');
    //     }
    //     else {
    //         props.setDigit(digit);

    //         alert('Done!!!');
    //     }   
    // }

    useEffect(() => {

        setDigits(1);

    },[]);

    useEffect(() => {

        props.setDigit(digit)

    },[digit, props])

    // console.log('sidebar', digit)
    return(
        <div className='DivSidebar'>

            <div className='DivSidebarBtn'>

                <Link to='/'>Home</Link>

                <Link to='/top-players'>Top Players</Link>
                
            </div>

            <div className='DivScoreAndOptionContainer'>
                
                <div className='DivScore'>
                    <h1>Your Score</h1>

                    <h3>{props.score} : points</h3>
                </div>

                <div className='DivOption'>

                    <form className='Form '
                        // onSubmit={handleSubmit}
                        >
                        <p>Select Number of Digits:</p>

                        <div className='FormDivContainer'>

                            <div className='FormDiv'>
                                <input type="radio" value="1"
                                    checked={digit === 1}
                                    onChange={() => {setDigits(1); props.setDigit(1)}}/>
                                <label htmlFor="one">One Digit</label>
                            </div>
                            
                            
                            <div className='FormDiv'>
                                <input type="radio" value="2"
                                    checked={digit === 2}
                                    onChange={() => {setDigits(2); props.setDigit(2)}}/>
                                <label htmlFor="two">Two Digits</label>
                            </div>

                            <div className='FormDiv'>
                                <input type="radio" value="3"
                                    checked={digit === 3}
                                    onChange={() => {setDigits(3); props.setDigit(3)}}/>
                                <label htmlFor="three">Three Digits</label>
                            </div>

                        </div>
                    </form>
                </div>

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

// this writes to STORE
const mapDispatchToProps = (dispatch) => {
    return {
    //NOMBRE PROP - NOM PARAM
        setDigit: (digit) => {
            dispatch({type: 'SET_DIGIT', digitAction: digit})
        },
        resetScore: () => {
            dispatch({type: 'RESET_SCORE'})
        },
    }
}

export default connect(mapGlobalStateToProps, mapDispatchToProps)(Sidebar);
// export default Sidebar;