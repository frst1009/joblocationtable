const express = require('express');
const cors = require('cors')
const { db } = require('./config/db');
const { locationRoutes } = require('./routes/locationRoutes');
const app = express();
const port = 8080;

db.connect();

app.use(express.json())
app.use(cors());

app.use('/api/locations', locationRoutes)
app.use('/api/jobs',jobRoutes)
app.get('/', async (req, res) => {
    res.send('OK!')
})


app.listen(port, () => {
    console.log(`Server is running...${port}`);
})