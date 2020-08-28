const express = require("express");
const port = 8000;
const app = express();

//Middleware to Use Express Router

app.use("/", require("./routes"));


app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running server ${err}`);
  }
  console.log(`Server is running on port ${port}`);
});
