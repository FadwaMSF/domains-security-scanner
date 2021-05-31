//Importing packages into our file
// import `name` from "package name" is the same like const name = require('package name')
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// To be able to use variables in .env file
require("dotenv").config();

//Initializing the server
const app = express();
