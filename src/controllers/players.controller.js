// const arrayMove = require('array-move');
const playersModel = require('../models/players.model');

const playersController = {};



playersController.getPlayers = async (req,res) => {

    const level1 = await playersModel
                            .find({level: 1})
                            .sort({points: -1})
                            .limit(10);
    
    const level2 = await playersModel
                            .find({level: 2})
                            .sort({points: -1})
                            .limit(10);

    const level3 = await playersModel
                            .find({level: 3})
                            .sort({points: -1})
                            .limit(10);



    let levelArray = [];

    levelArray.push(level1, level2, level3)
    // console.log(players);
    // res.json(level1);
    // res.json(level2)
    // res.json(level3);
    res.send(levelArray);
}


playersController.postPlayer = async (req, res) => {

    const {player, points, level} = req.body;

    const newPlayer = new playersModel({
        player: player,
        points: points,
        level: level,
    });

    await newPlayer.save();

    res.json(newPlayer);
}

playersController.getPoints = async (req, res) => {

    const {level} = req.params;
    const {points} = req.params;

    const checkPoints = await playersModel
                            .find({level: level})
                            .sort({points: -1})
                            .limit(10)

    if(checkPoints.length < 10){

        res.json({message: true});
    }
    else if(points > checkPoints[checkPoints.length - 1].points){

        res.json({message: true});
    }
    else {

        res.json({message: false});
    }

    // console.log('points', points)

    // console.log(checkPoints[checkPoints.length - 1].points)

    // console.log('arr.length')
    // console.log(checkPoints.length)

}

// async function processPos(array, obj) {

//     newArray = [];
//     auxArray = [];

//     array.map((item, pos) => {

//         if(item.points >= obj.points){

//             newArray.push(item);
//         }
//     })

// }

// notesController.getNotes = async (req, res) => {

//     const idUser = req.user._id;

//     const userNotes = await userModel
//                         .findById(idUser)
//                         .populate('notes')
//                         .select('notes');

//     res.json(userNotes)
// };

// notesController.getNote = async (req, res) => {

//     const idNote = req.params.id;

//     const note = await notesModel
//                         .findById(idNote)

//     res.json(note);
                        
// }

// notesController.postNote = async (req, res) => {

//     //id from token
//     const {_id} = req.user;
//     //new note
//     const newNote = new notesModel(req.body);
//     //user to note relation
//     const user = await userModel.findById(_id);

//     newNote.author = user;

//     await newNote.save();
//     //note to user relation
//     user.notes.push(newNote);

//     await user.save();
//     //sends new note
//     res.json({
//         _id: newNote._id,
//         note: newNote.note,
//         date: newNote.date,
//         author_id: newNote.author._id,
//         author: newNote.author.user
//     });

// }

// notesController.putNote = async (req, res) => {

//     const idNote = req.params.id;

//     const {note} = req.body;

//     const putNote = await notesModel.findByIdAndUpdate({_id: idNote}, {
//         note,
//     }, {new: true});

//     res.json(putNote);
// };

// notesController.deleteNote = async (req, res) => {

//     const idNote = req.params.id;

//     await notesModel.findByIdAndDelete(idNote);

//     res.json({
//         notes: 'Note Deleted'
//     });
// };

module.exports = playersController;