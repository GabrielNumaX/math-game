const { Router} = require('express');
const router = Router();

const {
    getPlayers,
    postPlayer
    // getNote,
    // postNote, 
    // putNote, 
    // deleteNote
} = require('../controllers/players.controller');


router.get('/', getPlayers);
router.post('/', postPlayer);
// router.get('/', getNotes);
// router.post('/', jwtAuth, postNote);


module.exports = router;