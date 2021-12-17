const cors = require('cors');

const corsOptions = {
  origin: "https://fs-forms-ek.herokuapp.com",
  optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions)