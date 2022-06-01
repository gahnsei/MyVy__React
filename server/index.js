require(`dotenv`).config();
const express = require(`express`);
const cors = require(`cors`);
const app = express();
const ctrl = require(`./controller`);

const { PORT, PORT_NUMBER } = process.env;

// Middleware

app.use(express.json());
app.use(cors());

// Endpoints

app.get(`/api`, ctrl.welcome);

// Server

const port = PORT || PORT_NUMBER;

app.listen(port, () =>
  console.log(`Have You Boys Seen My Goyard Garments On ${port}`)
);
