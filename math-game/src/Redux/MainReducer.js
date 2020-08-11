const initialState = {
    score: 0
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
    
    return {...previousState}
  }
  
  export default MainReducer;