const express = require("express");

const app = express();
app.set("view engine", "ejs");
const port = 3000;
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.status(200).render("index");
});
app.get("/about", (req, res) => {
  res.status(200).render("about");
});

app.listen(port, () => {
  console.log(`Uygulama ${port}'da çalıştı`);
});
