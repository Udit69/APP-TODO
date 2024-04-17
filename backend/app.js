const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3000;
require("./Connection/connection");
const userRouter = require("./routes/routes");

app.use(express.json());
app.use(cors()); // Use the cors middleware to enable CORS for all routes
app.use("/todo", userRouter);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
