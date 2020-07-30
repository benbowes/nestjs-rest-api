require('dotenv').config();

export default {
  mongoURI: process.env.DB_CONNECTION_STRING,
};
