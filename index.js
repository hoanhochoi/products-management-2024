const express = require("express");
const routes = require("./routes/client/index.routes");
const app = express();
require("dotenv").config();
const port = process.env.PORT;


// cấu hình pug
app.set("views","./views");
app.set("view engine","pug");

// routes
routes(app);


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  });
