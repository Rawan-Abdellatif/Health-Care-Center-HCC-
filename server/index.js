"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const port = 8888;
const app = express();
// Below are methods that are included in express(). We chain them for convenience.
//

// This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
app.use(morgan("tiny"));
app.use(express.json());

// Any requests for static files will go into the public folder
app.use(express.static("public"));

//
// ---------------------------------
// add new endpoints here 👇

// add new endpoints here ☝️
// ---------------------------------
//

// this is our catch all endpoint.
app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
