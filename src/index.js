const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
// HTTP Logger
app.use(morgan("combined"));
// Template engine
app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources/views"));
// giong ResquetsMapping trong Spring MVC( truyền địa chỉ vào '\' vd: '\tintuc\devleo')
app.get("/", (req, res) => {
    return res.render("home");
});
app.get("/news", (req, res) => {
    return res.render("news");
});
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});