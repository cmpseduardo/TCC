const express = require('express');
const cors = require('cors');
const router = require('./src/routes/routes')
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.listen(3300, () => { console.log("vai que vai"); })