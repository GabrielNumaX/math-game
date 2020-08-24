import React, {useState, useEffect}from 'react';
import axios from 'axios';

import '../../Sass/LoseModal.scss';

import API from '../../Api/Api';

const LoseModal = (props) => {

    const [name, setName] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [showAnimation, setShowAnimation] = useState(true);
    const [noScore, setNoScore] = useState(false);
    const [save, setSave] = useState('Submit Name');

    const nameSubmit = (e) => {

        e.preventDefault();

        if(name === ''){

            alert('Plese enter your Name.');

            return;
        }

        setSave('Saving...')

        axios.post(API.GET_POST_PLAYER, {
            player: name,
            points: props.points,
            level: props.level
        })
        .then(res => {
            props.close();
            props.resetScore();
            props.gameReset();
        })
        .catch(err => {
            alert('Something Failed. Try Again!');
        })
    }

    useEffect(() => {

        if(props.points === 0) {

            setShowAnimation(false);
            setNoScore(true);
        }
        else {

            axios.get(API.GET_POINTS+`${props.points}/${props.level}`)
                .then(res => {

                    // console.log(res.data);
                        

                    if(res.data.message){

                        setShowAnimation(false);
                        setShowInput(true);
                    }
                    else {
                        setShowAnimation(false);
                        setNoScore(true);
                    }
                })
                .catch(err => {
                    alert('Something Failed. Try Again!');
                })
        }
        
    }, [props.level, props.points]);

    const playAgain = () => {
        props.close();
        props.resetScore();
        props.gameReset();
    }


    return(
        <div className='Modal'>

            <div className='ModalContent'>

                <h5>Game Over</h5>

                <p>You scored <span>{props.points}</span> points!!!</p>

                {
                    showAnimation
                    ?
                    <p className='PositionCheck'>

                        <span className='Span1'>W</span>
                        <span className='Span2'>e </span>

                        <span className='Span1'>a</span>
                        <span className='Span2'>r</span>
                        <span className='Span1'>e </span>

                        <span className='Span2'>C</span>
                        <span className='Span1'>h</span>
                        <span className='Span2'>e</span>
                        <span className='Span1'>c</span>
                        <span className='Span2'>k</span>
                        <span className='Span1'>i</span>
                        <span className='Span2'>n</span>
                        <span className='Span1'>g </span>

                        <span className='Span2'>Y</span>
                        <span className='Span1'>o</span>
                        <span className='Span2'>u</span>
                        <span className='Span1'>r </span>

                        <span className='Span2'>p</span>
                        <span className='Span1'>o</span>
                        <span className='Span2'>i</span>
                        <span className='Span1'>n</span>
                        <span className='Span2'>t</span>
                        <span className='Span1'>s</span>
                        <span className='Span2'>.</span>
                        <span className='Span1'>.</span>
                        <span className='Span2'>.</span>
                    </p>
                    :
                    null
                }

                {
                    noScore 
                    ?
                    <div className='DivLowScore'>
                        <p>Your Score is Low</p>
                        
                        <button className='BtnPlayAgain' 
                                                onClick={playAgain}>
                                                    Play Again
                        </button>
                    </div>
                    :
                    null
                }
                
                {
                    showInput
                    ?
                    <form className='FormModal' onSubmit={(e) => nameSubmit(e)}>
                        <p>Enter your Name in the Top Players List</p>

                        <div className='FormDivModal'>
                            <label>Name:</label>
                            <input type='text' value={name} placeholder='Your Name here...'
                                onChange={(e) => setName(e.target.value)}></input>
                        </div>

                        <div className='FormDivBtnModal'>
                            <input type='submit' value={save}></input>
                        </div>   
                    </form>
                    : 
                    null
                }
                
            </div>
        </div>
    )
}

export default LoseModal;