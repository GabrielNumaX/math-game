const initialState = {
    score: 0,
    gameToggle: false,
    digits: null,
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
    else if(action.type === 'SET_DIGIT'){
      previousState.digits = action.digitAction
    }

    return {...previousState}
  }
  
  export default MainReducer;