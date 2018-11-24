const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const app = express();
const notes = require('./routers/notes');

let port = 5000 || process.env.PORT;
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

app.use('/notes', notes);

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
