const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");
const route = require("./routes");
const db = require("./config/db");
const app = express();

const port = process.env.PORT || 8800;

//Connect db
db.connect();

// Configure static file
app.use(express.static(path.join(__dirname, "public")));

// middleware formsubmit
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//HTTP Logger
// app.use(morgan("combined"));

// Template Engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Route Define
route(app);

app.listen(port, () => console.log(`Application is running at PORT ${port}`));
