const express = require('express');
let app = express();

const jsonHelper = require('./Services/jsonHelper');
const nicknameHelper = require('./Services/nicknameHelper.js');


app.get('/', function(req, res) {
    const email = jsonHelper.getJsonData();
    const nickname = nicknameHelper.getNicknameSymbols(email);
    const finalList = nicknameHelper.getNicknamesList(nickname);
    jsonHelper.getJsonResult(finalList); 
    res.send(finalList);    
});
    

 let server = app.listen(3000, function() {
      console.log('Server is running!');
  });
 
