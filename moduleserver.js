let bodyParser = require('body-parser');
let express = require("express");
let app = express();
app.use(express.static(__dirname +"/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", async (req, response)=> {
    response.sendFile(path.join(__dirname + "/index.html"));

});

app.listen(8000);