const fs = require('fs');

const inputFilename = 'input.json';
const outputFilename = 'result.json';


exports.getJsonData =function() {
    let rawdata = fs.readFileSync(inputFilename);
    let jsonData = JSON.parse(rawdata); 
    return jsonData.email;
  };

 exports.getJsonResult =function (result) {
    var json = JSON.stringify(result);
    fs.writeFile(outputFilename, json, 'utf8', function(err) {
      if (err) throw err;
      console.log('complete');
      });
  }