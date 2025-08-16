const express = require("express");
const app = express();
const userModel = require("./model/user");
const dbconnection = require("./config/db");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//middleware
app.use((req, res, next) => {
  console.log("running middleware");
  //   res.send("erroe code 404");
  return next();
});
//
app.get("/", (req, res) => {
  res.render("index");
});
///
app.post("/submit-data", (req, res) => {
  const { fname, lname, email, dob, gender, country, bio } = req.body;
  userModel.create({
    fname: fname,
    lname: lname,
    email: email,
    dob: dob,
    gender: gender,
    country: country,
    bio: bio,
  });
  res.send("data received");
});
// app.get("/about", (req, res) => {
//   res.send("i am about page");
// });
// app.get("/home", (req, res) => {
//   res.send("i am home page");
// });

app.listen(3000);
