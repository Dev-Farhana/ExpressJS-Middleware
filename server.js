const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
console.log('Ejs is working');

// My middleware:
const keyMiddleware = require('./middleware/secretKey');

// // My-Routes :
const mainRouter = require('./routes/routes');


app.use('/sign', keyMiddleware)
app.use(mainRouter);

app.listen(port, () => {
    console.log(`server started on ${port}`);
})

