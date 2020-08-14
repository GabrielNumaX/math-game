require('dotenv').config();

const mongoose = require('mongoose');

//aca ira la url de la bdd y el pass esto para mlab
const URI = process.env.MONGODB_URI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true, //this is to avoid deprecation warning
});

const connection = mongoose.connection;

connection.once('open', () => {

    console.log('DB is running');
})