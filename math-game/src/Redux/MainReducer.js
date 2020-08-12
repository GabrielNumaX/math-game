const initialState = {
    score: 0,
    gameToggle: false
  }

  const MainReducer = (previousState = initialState, action) => {
    if(action.type === 'ADD_SCORE'){

      previousState.score += action.scoreFromGame
       return {...previousState};
    }
    else if (action.type === 'RESET_SCORE'){

      previousState.score = 0
      return {...previousState}
    }
    else if(action.type === 'GAME_TOGGLE'){
        previousState.gameToggle = !previousState.gameToggle
    }

    return {...previousState}
  }
  
  export default MainReducer;