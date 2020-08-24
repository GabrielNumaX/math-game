const { Router} = require('express');
const router = Router();

const {
    getPlayers,
    postPlayer,
    getPoints,
    delPos,
    // postNote, 
    // putNote, 
    // deleteNote
} = require('../controllers/players.controller');

router.get('/', getPlayers);
router.post('/', postPlayer, delPos);
router.get('/position/:points/:level', getPoints);

// router.get('/', getNotes);
// router.post('/', jwtAuth, postNote);


module.exports = router;