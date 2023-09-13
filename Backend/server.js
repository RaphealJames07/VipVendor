require('./database/database')
const express = require('express');
const morgan = require('morgan');

const PORT = 4000;

const app = express();

app.use(morgan('dev'))
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server is listening to PORT: ${PORT}`);
})