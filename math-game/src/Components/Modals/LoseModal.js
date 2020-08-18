import React, {useState}from 'react';

// import css from './LoseModal.module.css';

import '../../Sass/LoseModal.scss';

const LoseModal = (props) => {

    const [name, setName] = useState('');

    // useEffect(() => {


    // }, [send])

    const nameSubmit = (e) => {

        e.preventDefault();

        console.log(name);

        // logic with axios to api
    }


    return(
        <div className='Modal'>

            <div className='ModalContent'>

                <div className='DivClose'>
                    <span onClick={props.close}>&times;</span>
                </div>

                <h5>Score</h5>

                <p>You scored <span>{props.points}</span> points!!!</p>

                <p>
                    You are in the <span>{props.points}</span> position
                </p>
                <form className='FormModal' onSubmit={(e) => nameSubmit(e)}>
                    <p>Enter your Name in the Top Players List</p>

                    <div className='FormDivModal'>
                        <label>Name:</label>
                        <input type='text' value={name} placeholder='Your Name here...'
                            onChange={(e) => setName(e.target.value)}></input>
                    </div>

                    <div className='FormDivBtnModal'>
                        <input type='submit' value='Submit Name'></input>
                    </div>   
                </form>
            </div>
        </div>
    )
}

export default LoseModal;