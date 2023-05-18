const express = require('express');
const app = express();
const morgan = require('morgan');

// MIDDLEWARES
app.use(morgan('dsev'))

// VARIABLES
app.set('port', 8000);

app.listen(app.get('port'), () => {
    console.log(`API BOMBANDO PAI, PORTA ${app.get('port')}`);
})