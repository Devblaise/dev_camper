const express = require('express');
const dotenv = require('dotenv');

const app = express();

//Load env variables
dotenv.config({ path: './config/config.env' });


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`App listening in ${process.env.NODE_ENV} mode on port ${PORT}!`);
});