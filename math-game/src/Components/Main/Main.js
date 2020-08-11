import React, { Component } from 'react';

import css from './Main.module.css';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animation: false,
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

    // onLose = (ref) => {

    //     ref.style.backgroundColor = 'red'
    // }

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

        if(rect.top >= (window.innerHeight * 78) / 100){

            el.style.backgroundColor = 'red';
            // el.style.display = 'none';
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

        this.setState({
            res1: res,
            res2: wrong1,
            res3: wrong2
        })

        console.log('result');

        this.setPos()

    }

    setPos = () => {
        const one = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

        const two = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

        const three = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

        // console.log(res)

        if(one !== two && one !== three && three !== two) {

            console.log('pos')

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

    

    render() {

        
        console.log('render')
        console.log(this.state);

        if(this.state.animation) {
            this.getPosition();
        }

        return(
            <div className={css.DivMain}>

                <div className={css.ImgGame}>

                </div>

                <span ref={this.opRef} className={css.Operation} 
                    onAnimationStart={() => {this.setState({animation: true}); this.setResult()}}
                    onAnimationEnd={() => this.setState({animation: false})}

                    >
                    {`${this.state.num1} +  ${this.state.num2}`}
                </span>

                <div className={css.Result}>

                    <span className={css.Res1}>
                        {this.state.pos1}
                    </span>

                    <span className={css.Res2}>
                        {this.state.pos2}
                    </span>

                    <span className={css.Res3}>
                        {this.state.pos3}
                    </span>

                </div>

            </div>
        )
    }
}

export default Main;

