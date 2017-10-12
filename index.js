const express = require('express');

const app = express();

app.get("/", function(req, res) {
    console.log("GET REQUEST: ");
    res.send({name: "Rehan"});
});


app.listen(process.env.port || '4000',  function() {
    console.log("listeninig to requests");
});
