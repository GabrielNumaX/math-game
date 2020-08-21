require('express-async-errors');
require('dotenv').config();
const error = require('./middleware/error');
const express = require('express');
const cors = require('cors');
const appEx = express();
// const path = require('path')

appEx.set('port', process.env.PORT || 3030);

//MIDDLEWARE
appEx.use(cors());
appEx.use(express.json());

//ROUTES
appEx.use('/mathtrix/hall', require('./routes/players.route'));
// appEx.use('/mathtrix/hall/position', require('./routes/players.route'));
// appEx.use('/api/notes', require('./routes/notes.route'));


//checks if it's running in heroku
if(process.env.NODE_ENV === 'production') {

    //serves react app  
      appEx.use(express.static('./math-game/build'));
    }

//ERROR HANDLING
appEx.use(error);



module.exports = appEx;