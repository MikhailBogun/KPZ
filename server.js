let bodyParser = require('body-parser');
let express = require("express");
let app = express();
app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


let square = {
    height: 200,
    width: 200,
    Yposition: 100,
    Xposition: 100
}

app.get("/", async (req, response)=> {
    response.sendFile(path.join(__dirname + "/../client/index.html"));

});
app.get("/getDataSquare", async(require, response)=> {
    console.log("Hello")
    console.log(require.query)
    response.json({square:square})
})


app.use(function (err, request, response, next) {
    if (err === "MyError1") {
        response.status(400).send("Error!");
    } else if (err === "MyError2") {
        response.status(401).send("Error!");
    }
});

app.listen(3000);
console.log(square)