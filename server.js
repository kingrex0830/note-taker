const express = require("express");
const apiroutes = require("./routes/api-routes");
const htmlroutes = require("./routes/html-routes");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(htmlroutes);
app.use(apiroutes);

app.listen(PORT, () => {
    console.log("Server running on http://localhost:${PORT}");
});
