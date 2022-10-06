const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
const rootDir = require("./util/path");
const errorController = require("./controllers/error");

// //setting default template engine to pug
// app.set("view engine", "pug");
// //setting views folder =>
// //don't have to do that because it is in the root folder and it is called views
// app.set("views", "views");

//setting default template engine to handlebars
// const expressHbs = require("express-handlebars");
// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );
// app.set("view engine", "hbs");

//setting default template engine to ejs
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

//filter path to only go here with /admin > then goes into adminRoutes
app.use("/admin", adminData);
app.use(shopRoutes);

//adding a 404 not found page
app.use(errorController.get404);

app.listen(3000);

//app.get only fires for get requests
//app.post only fires for post requests
//app.delete only fires for delete requests
//app.put only fires for put requests (edit)
//app.patch >> the PATCH method is a request method in HTTP
//>>>>>>>>>>>> for making partial changes to an existing resource

//>>>>>>>>>>>>>>>>>
//PUT ::is a method of modifying resource where the client sends data
//that updates the entire resource.
//PATCH ::is a method of modifying resources where the client sends partial
//data that is to be updated without modifying the entire data