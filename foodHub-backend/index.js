const express = require("express");
require("dotenv").config();
const userSchema = require("./models/user");
const adminSchema = require("./models/restaurantAdmin")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
