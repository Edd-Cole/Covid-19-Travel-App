const express = require('express');
const apiRouter = require('./routers/api-router');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);

export default app;