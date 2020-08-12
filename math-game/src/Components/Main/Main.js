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
            animationDuration: 10000,
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

        this.opRef.current.style.animationDuration = `${this.state.animationDuration}ms`;

    }

    componentDidUpdate(prevProps, prevState) {

        if(prevState.res1 !== this.state.res1) {
            console.log('didUp res')

            this.setPos();
        }

        // else if(prevState.animationPlay !== this.state.animationPlay ) {
            
        //     console.log('didUpAnimation');
        //     this.setNumber();

        //     this.gameStart();

        //     console.log(this.opRef.current);

        //     // this.opRef.current.style.animation = 'opDown';
        // }

        else if(prevProps.gameToggleProps !== this.props.gameToggleProps){

            console.log('didUp Game toggle');

            this.setNumber();

            this.setState({
                animation: true,
                animationPause: false,
                animationPlay: true,
            })

            this.opRef.current.style.animationDuration = `${this.state.animationDuration}ms`

            console.log(this.opRef.current.style.animationDuration)
        }

        console.log('didUpOut');

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

        console.log(rect);

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

    onScore = (pos) => {

        if(pos === this.state.num1 + this.state.num2 ){

            this.opRef.current.style.backgroundColor = 'green';

            this.setState({
                animation: false,
                animationPause: true,
            });

            this.props.addScore(10);

            if(this.state.animationDuration > 50){

                this.setState({
                    animationDuration: this.state.animationDuration - 50,
                })
            }

            setTimeout(() => { 
                // this.opRef.current.style.animation = 'none';
              
                this.opRef.current.style.backgroundColor = 'cornsilk';

                this.setState({
                    animationPlay: false,
                })

                this.props.gameToggle();

                console.log('CLICK');

            }, 330);

            
            
        }
        else {
            this.opRef.current.style.backgroundColor = 'red';

            this.setState({
                animation: false,
                animationPause: true,
            })

            this.opRef.current.style.animationPlayState = 'paused';

            setTimeout(() => { 
                // this.opRef.current.style.animation = 'none';
              
                // this.opRef.current.style.backgroundColor = 'cornsilk';

                // ESTO SE DEJA COMENTADO HASTA HACER EL GAME OVER
                // this.setState({
                //     start: false,
                // })

                // this.props.gameToggle();

            }, 330);
        }
    }

   

    render() {

        
        console.log('render')

        // console.log(this.props.gameToggleProps);
        // console.log(this.state);

        if(this.state.animation) {
            this.getPosition();
        }

        let game = [css.StartGame]

        let operation = [css.OperationNoShow];

        let result = [css.ResultNoShow];

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

                    <span className={css.Res1} onClick={this.state.animation ? () => this.onScore(this.state.pos1) : null}>
                        {this.state.pos1}
                    </span>

                    <span className={css.Res2} onClick={this.state.animation ? () => this.onScore(this.state.pos2) : null}>
                        {this.state.pos2}
                    </span>

                    <span className={css.Res3} onClick={this.state.animation ? () => this.onScore(this.state.pos3) : null}>
                        {this.state.pos3}
                    </span>

                </div>

            </div>
        )
    }
}


// this reads from STORE
const mapGlobalStateToProps = (globalState) => {
    return {
        gameToggleProps: globalState.gameToggle,
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

