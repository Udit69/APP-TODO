const express = require('express');
const app = express();
const port = 3000;
require("./Connection/connection");
const userRouter = require("./routes/routes");


app.use(express.json());
app.use("/todo", userRouter); // Corrected route path
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
