const express = require('express');


const app = express();

app.use((req, res) => {
  res.json({ message: "Hello World" })
})

app.post("/hello", (req, res) => {
  res.json({ message: "You said hello" })
})

if (!module.parent) {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

module.exports = app;