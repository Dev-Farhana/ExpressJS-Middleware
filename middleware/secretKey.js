const path = require('path')

function secretKey(req,res,next) {
    const key = "123";
    const user_Key = req.query.key;

    if (user_Key && (user_Key === key)){
    
        next();
    } 
    else{
        // res.send({ msage : "Errror 404"})
        // res.status(404).sendFile(path.join(__dirname, '../views/error.ejs'))
        res.status(404).render('error', { title: 'Error 404' });

    }
    
}

module.exports = secretKey

