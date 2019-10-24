const express = require('express');
const app = express();
var cors = require('cors')
require('./Routes/index.js')(app)

app.use(cors())

const Port = process.env.PORT || 5000
app.listen(Port, () => console.log(`Listening to ${Port}`))
