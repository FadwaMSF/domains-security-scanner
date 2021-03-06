//Importing packages into our file
// import `name` from "package name" is the same like const name = require('package name')
import express from "express";
import bodyParser from "body-parser";
import routes from "./src/routes";
import domainRoute from "./src/routes/allDomains";

// To be able to use variables in .env file
require("dotenv").config();

//Initializing the server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//giving the server access to routes
app.use(routes);
app.use("/domain", domainRoute);

const port = process.env.PORT || 8000;

app.listen({ port }, () => {
  console.log(`🚀 Server ready at ${port}`);
});
