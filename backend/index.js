 const express = require("express");
 const mainRouter = require('./routes/index')

 const app = express();
const port = 3000;
 app.use('/api/v1',mainRouter);

 app.use(cors());
 app.use(express.json());

app.listen(port);