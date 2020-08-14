module.exports = function(err, req, res, next) {

    //log the exception
    console.log(err.message);

    res.status(500).send('Something Failed. Try Again');    
}