import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Welcome from './Components/Welcome/Welcome';
import Game from './Components/Game/Game';

function App() {

  return (
    <BrowserRouter>

      <Route exact path='/' component={Welcome}/>
    
      <Route exact path='/play' component={Game}/>
    
    </BrowserRouter>
  );
}

export default App;
