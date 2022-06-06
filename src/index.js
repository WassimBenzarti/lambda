const express = require('express');


const app = express();

app.post("/", (req, res) => {
  res.json({ message: "Hello World" })
})

app.listen(3000);