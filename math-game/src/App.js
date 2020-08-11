import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Game from './Components/Game/Game';

function App() {

  return (
    <BrowserRouter>
    
      <Route exact path='/' component={Game}/>
    
    </BrowserRouter>
  );
}

export default App;
