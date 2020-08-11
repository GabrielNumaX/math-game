import React, { Component } from 'react';

import {connect} from 'react-redux';

import css from './Main.module.css';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            start: false,
            animation: false,
            animationPlay: false,
            animationPause: false,
            num1: null,
            num2: null,
            res1: null,
            res2: null,
            res3: null,
            pos1: null,
            pos2: null,
            pos3: null,
        }

        this.opRef = React.createRef();

    }

    componentDidMount() {

        this.setNumber();

    }

    componentDidUpdate(prevProps, prevState) {

        if(prevState.res1 !== this.state.res1) {
            console.log('didUp')

            this.setPos();
        }
    }


    getPosition = () => {

        const el = this.opRef.current;
        const rect = el.getBoundingClientRect();

        if(rect.top >= (window.innerHeight * 77) / 100){

            el.style.backgroundColor = 'red';

            this.setState({
                animation: false,
                animationPause: true,
            })
        }

        if(this.state.animation) {
            window.requestAnimationFrame(this.getPosition);

        }
    }

    setNumber = () => {
        // const num = Math.floor(Math.random() * (max - min + 1)) + min;

        const num1 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
        const num2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;

        this.setState({
            num1: num1,
            num2: num2
        })
    }

    setResult = () => {

        const res = this.state.num1 + this.state.num2;

        const wrong1 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;

        const wrong2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;

        // console.log(res, wrong1, wrong2)

        // this.setPos(res, wrong1, wrong2)

        if(wrong1 === res || wrong2 === res || wrong1 === wrong2){

            this.setResult()
        }
        else {

            this.setState({
                res1: res,
                res2: wrong1,
                res3: wrong2,
            })
        }
    }

    setPos = () => {
        const one = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

        const two = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

        const three = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

        if(one !== two && one !== three && three !== two) {

            // console.log('pos')

            this.setState({
                ['pos'+one]: this.state.res1,
                ['pos'+two]: this.state.res2,
                ['pos'+three]: this.state.res3,
            })
        }
        else {

            this.setPos();     
        }
    }

    gameStart = () => {

        this.setState({
            start: true,
            animationPlay: true,
        })
    }

    onGame = (pos) => {

        if(pos === this.state.num1 + this.state.num2 ){

            this.opRef.current.style.backgroundColor = 'green';

            this.setState({
                animation: false,
                animationPause: true,
            })
        }
        else {
            this.opRef.current.style.backgroundColor = 'red';

            this.setState({
                animation: false,
                animationPause: true,
            })
        }
    }

   

    

    render() {

        
        console.log('render')
        // console.log(this.state);

        if(this.state.animation) {
            this.getPosition();
        }

        let game = [css.StartGame]

        let operation = [css.OperationNoShow];

        let result = [css.ResultNoShow];

        // let animation = [];

        if(this.state.start) {

            game.push(css.StartGameNoShow)

            operation.push(css.Operation);

            result.push(css.Result)
        }
        
        if(this.state.animationPlay) {

            operation.push(css.OperationAnimation)
        }

        if(this.state.animationPause) {
            
            operation.push(css.OperationAnimationPause)
        }

        return(
            <div className={css.DivMain}>

                <div className={css.ImgGame}>

                </div>

                <div className={game.join(' ')}>

                    <button className={css.StartBtn} onClick={this.gameStart}>Start Game</button>

                </div>

                <span ref={this.opRef} className={operation.join(' ')} 
                    onAnimationStart={() => {this.setState({animation: true}); this.setResult()}}
                    onAnimationEnd={() => this.setState({animation: false})}

                    >
                    {`${this.state.num1} +  ${this.state.num2}`}
                </span>

                <div className={result.join(' ')}>

                    <span className={css.Res1} onClick={this.state.animation ? () => this.onGame(this.state.pos1) : null}>
                        {this.state.pos1}
                    </span>

                    <span className={css.Res2} onClick={this.state.animation ? () => this.onGame(this.state.pos2) : null}>
                        {this.state.pos2}
                    </span>

                    <span className={css.Res3} onClick={this.state.animation ? () => this.onGame(this.state.pos3) : null}>
                        {this.state.pos3}
                    </span>

                </div>

            </div>
        )
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
export default connect(null, mapDispatchToProps)(Main);

