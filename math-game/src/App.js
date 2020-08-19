import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Welcome from './Components/Welcome/Welcome';
import Game from './Components/Game/Game';
import TopPlayers from './Components/TopPlayers/TopPlayers';

function App() {

  return (
    <BrowserRouter>

      <Route exact path='/' component={Welcome}/>
    
      <Route exact path='/play' component={Game}/>

      <Route exact path='/top-players' component={TopPlayers}/>
    
    </BrowserRouter>
  );
}

export default App;
