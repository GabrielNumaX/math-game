import React, { Component } from 'react';

import {connect} from 'react-redux';

import LoseModal from '../Modals/LoseModal';

import '../../Sass/Main.scss';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            start: false,
            animation: false,
            animationPlay: false,
            animationPause: false,
            animationDuration: 10000,
            num1: null,
            num2: null,
            res1: null,
            res2: null,
            res3: null,
            rightRes: null,
            pos1: null,
            pos2: null,
            pos3: null,
            sign: null,
            loseModal: false,
        }

        this.opRef = React.createRef();

    }

    componentDidMount() {

        this.opRef.current.style.animationDuration = `${this.state.animationDuration}ms`;

    }

    componentDidUpdate(prevProps, prevState) {

       
        if(prevState.rightRes !== this.state.rightRes) {
            // console.log('didUp res')

            this.setPos();
        }
        else if(prevProps.gameToggleProps !== this.props.gameToggleProps){

            console.log('didUp Game toggle');

            this.setNumber();

            this.setState({
                animation: true,
                animationPause: false,
                animationPlay: true,
            })

            this.opRef.current.style.animationDuration = `${this.state.animationDuration}ms`;

        }
    }

    /*
    *    this gets the position of the animation upon being animated
    *    and checks if it reaches the bottom
    */

    getPosition = () => {

        const el = this.opRef.current;
        const rect = el.getBoundingClientRect();


        // this is for cell phone on portrait
        if(window.innerWidth <= 480){

            // console.log(window.innerHeight);
            // console.log(rect.bottom);

            // const height = window.innerHeight;

            if(rect.bottom >= (window.innerHeight - 60)){

                // console.log(window.innerHeight);
                // console.log(rect.top);

                el.style.backgroundColor = 'red';

                this.setState({
                    animation: false,
                    animationPause: true,
                    loseModal: true,
                    // start: false,
                })
            }

        }
        else{

            if(rect.top >= (window.innerHeight * 75) / 100){

                el.style.backgroundColor = 'red';

                // console.log('before');
                // console.log(this.state)

                console.log('STOP');

                this.setState({
                    animation: false,
                    animationPause: true,
                    // animationPlay: false,
                    loseModal: true,
                    // start: false,
                })

                // console.log('after');
                // console.log(this.state);
            }
        }

        if(this.state.animation) {
            window.requestAnimationFrame(this.getPosition);

        }
    }

    /*
    *    this function set the numbers for the calculation
    *   upon the number of digits (1, 2 or 3)
    */

    setNumber = () => {

        let num1, num2 = null;

        if(this.props.digitProp === 1) {

            num1 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            num2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
        }
        else if(this.props.digitProp === 2){

            num1 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
            num2 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

            console.log('num1, num2');
            console.log(num1, num2)
        }
        else if(this.props.digitProp === 3){

            num1 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
            num2 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        }

        this.setState({
            num1: num1,
            num2: num2,
        })
    }


    /**
     * this function sets the sing (+ or -) upon a random number (0 or 1)
     */

    setSign = () => {

        const num = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

        if(num === 0){

            this.setState({sign: '+'})
        }
        else{

            this.setState({sign: '-'})
        }
    }

    /**
     * this one set the rightRes and two wrong results upon random 
     * numbers, if's are to check for NO negative numbers on rightRes or wrong 
     * answers
     */

    setResult = () => {

        let res = null;
        let wrong1,wrong2 = null;

        if(this.props.digitProp === 1) {

            wrong1 = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
            wrong2 = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

            if(this.state.sign === '+'){

                res = this.state.num1 + this.state.num2;

                wrong1 = res + wrong1;
                wrong2 = res + wrong2;
            }
            else if(this.state.sign === '-'){
                
                if(this.state.num1 > this.state.num2){
    
                    res = this.state.num1 - this.state.num2

                    if(res > wrong1){

                        wrong1 = res - wrong1;
                    }
                    else {
                        wrong1 = wrong1 - res;
                    }

                    if(res > wrong2) {

                        wrong2 = res - wrong2;
                    }
                    else {
                        wrong2 = wrong2 - res;
                    }

                }
                else {
    
                    res = this.state.num2 -  this.state.num1
                }
            }
        }
        else if(this.props.digitProp === 2 || this.props.digitProp === 3) {

            wrong1 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            wrong2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;

            if(this.state.sign === '+'){

                res = this.state.num1 + this.state.num2;

                wrong1 = res + wrong1;
                wrong2 = res + wrong2;
            }
            else if(this.state.sign === '-'){
                
                if(this.state.num1 > this.state.num2){
    
                    res = this.state.num1 - this.state.num2

                    if(res > wrong1){

                        wrong1 = res - wrong1;
                    }
                    else {
                        wrong1 = wrong1 - res;
                    }

                    if(res > wrong2) {

                        wrong2 = res - wrong2;
                    }
                    else {
                        wrong2 = wrong2 - res;
                    }

                }
                else {
    
                    res = this.state.num2 -  this.state.num1

                    if(res > wrong1){

                        wrong1 = res - wrong1;
                    }
                    else {
                        wrong1 = wrong1 - res;
                    }

                    if(res > wrong2) {

                        wrong2 = res - wrong2;
                    }
                    else {
                        wrong2 = wrong2 - res;
                    }
                }
            }
        }

        if(wrong1 === res || wrong2 === res || wrong1 === wrong2){

            this.setResult()
        }
        else {

            this.setState({
                rightRes: res,
                res2: wrong1,
                res3: wrong2,
            })
        }
    }

    /**
     * This function set random positions for the rightRes and wrong answers
     * which are rendered on screen
     */

    setPos = () => {
        const one = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

        const two = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

        const three = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

        if(one !== two && one !== three && three !== two) {

            this.setState({
                ['pos'+one]: this.state.rightRes,
                ['pos'+two]: this.state.res2,
                ['pos'+three]: this.state.res3,
            })
        }
        else {

            this.setPos();     
        }
    }

    /**
     * this just starts the game, sets the sign and numbers
     * and checks that numbers of digits where selected
     */

    gameStart = () => {

        if(this.props.digitProp === null){

            alert('Please select number of digits');
        }
        else {

            this.setSign();
            this.setNumber();

            this.setState({
                start: true,
                animationPlay: true,
            })
        }

        console.log(this.state);
    }

    gameReset = () => {

        this.opRef.current.style.backgroundColor = 'cornsilk';

        this.opRef.current.style.animationPlayState = 'running';

        this.setState({
            start: false,
            animation: false,
            animationPlay: false,
            animationPause: false,
            animationDuration: 10000,
            num1: null,
            num2: null,
            res1: null,
            res2: null,
            res3: null,
            rightRes: null,
            pos1: null,
            pos2: null,
            pos3: null,
            sign: null,
            loseModal: false,
        });
    }

    /**
     * this function checks that random position equals rightRes
     * then pauses animation, changes color of animation and increments score
     * it also sets sign again, decrements animation duration
     * and after 330ms continues game,
     * 
     */

    onScore = (pos) => {

        if(pos === this.state.rightRes){

            this.opRef.current.style.backgroundColor = 'green';

            this.setState({
                animation: false,
                animationPause: true,
            });

            this.props.addScore(10);

            this.setSign();

            if(this.state.animationDuration > 50){

                this.setState({
                    animationDuration: this.state.animationDuration - 50,
                })
            }

            setTimeout(() => { 
              
                this.opRef.current.style.backgroundColor = 'cornsilk';

                this.setState({
                    animationPlay: false,
                })

                this.props.gameToggle();

            }, 330);
        }
        else {
            this.opRef.current.style.backgroundColor = 'red';

            this.setState({
                animation: false,
                animationPause: true,
                start: false,
                loseModal: true,
            })

            this.opRef.current.style.animationPlayState = 'paused';

            // setTimeout(() => { 
            //     // this.opRef.current.style.animation = 'none';
              
            //     // this.opRef.current.style.backgroundColor = 'cornsilk';

            //     // ESTO SE DEJA COMENTADO HASTA HACER EL GAME OVER
            //     // this.setState({
            //     //     start: false,
            //     // })

            //     // this.props.gameToggle();

            // }, 330);
        }
    }

    render() {

        console.log('render');

        if(this.state.animation) {
            this.getPosition();
        }

        let game = ['StartGame']

        let operation = ['OperationNoShow'];

        let result = ['ResultNoShow'];

        if(this.state.start) {

            game.push('StartGameNoShow')

            operation.push('Operation');

            result.push('Result')
        }
        
        if(this.state.animationPlay) {

            operation.push('OperationAnimation')
        }

        if(this.state.animationPause) {
            
            operation.push('OperationAnimationPause')
        }

        console.log('OPERATION ARR')
        console.log(operation);

        return(
            <div className='DivMain'>

                <div className='ImgGame'>

                </div>

                <div className={game.join(' ')}>

                    <button className='StartBtn' onClick={this.gameStart}>Start Game</button>

                </div>

                <div ref={this.opRef} className={operation.join(' ')} 
                    onAnimationStart={() => {this.setState({animation: true}); this.setResult()}}
                    onAnimationEnd={() => this.setState({animation: false})}>

                    <span>
                        {
                            this.state.num1 >= this.state.num2 
                            ? 
                            this.state.num1
                            :
                            this.state.num2
                        }
                    </span>

                    <span className='SpanSign'>{this.state.sign}</span>

                    <span>
                        {
                            this.state.num2 <= this.state.num1 
                            ? 
                            this.state.num2
                            :
                            this.state.num1
                        }
                    </span>
                </div>

                <div className={result.join(' ')}>

                    <span className='Res1' onClick={this.state.animation ? () => this.onScore(this.state.pos1) : null}>
                        {this.state.pos1}
                    </span>

                    <span className='Res2' onClick={this.state.animation ? () => this.onScore(this.state.pos2) : null}>
                        {this.state.pos2}
                    </span>

                    <span className='Res3' onClick={this.state.animation ? () => this.onScore(this.state.pos3) : null}>
                        {this.state.pos3}
                    </span>

                </div>

                {
                    this.state.loseModal ? 
                        <LoseModal 
                            close={() => this.setState({loseModal: false})}
                            points={this.props.score}
                            level={this.props.digitProp}
                            resetScore={() => this.props.resetScore()}
                            gameReset={() => this.gameReset()}/>          
                    : 
                    null
                }

            </div>
        )
    }
}


// this reads from STORE
const mapGlobalStateToProps = (globalState) => {
    return {
        gameToggleProps: globalState.gameToggle,
        digitProp: globalState.digits,
        score: globalState.score,
    }
}

// this writes to STORE
const mapDispatchToProps = (dispatch) => {
    return {
	//NOMBRE PROP - NOM PARAM
        addScore: (points) => {
 			//nom ACTION	nom-param reducer
            dispatch({type: 'ADD_SCORE', scoreFromGame: points})        
        },
        resetScore: () => {
            dispatch({type: 'RESET_SCORE'})
        },
        gameToggle: () => {
            dispatch({type: 'GAME_TOGGLE'})
        },
        checkTask: (pos) => {
            dispatch({type: 'TODAY_TASK_CHECKED', index: pos})
        },
        deleteTask: (filterObj, pos) => {
            dispatch({type: 'DELETE_TODAY_TASK', obj: filterObj, index: pos})
        },
        fillGlobalState: (prodArr) => {
            dispatch({type: 'FILL_GLOBAL_STATE', arr: prodArr})
        }
    }
}
export default connect(mapGlobalStateToProps, mapDispatchToProps)(Main);

