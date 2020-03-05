let email, nickname;

function GetJsonData(){
  let rawdata = fs.readFileSync('input.json');
  let jsonData = JSON.parse(rawdata); 
  return jsonData.email;
};

function GetNicknameSymbols(email){
  return email.substr(0, email.indexOf('@'))    
};
 
function GetWorkArray(nickname){
  let arr_nickname= nickname.split('');
  let arr_test_nickname = [];
  for(let i= 0; i<arr_nickname.length; i++)  
  {
    arr_test_nickname[2*i]=' ';
    arr_test_nickname[2*i+1]=arr_nickname[i];
  }
  arr_test_nickname[2*arr_nickname.length]=' '; 
  return arr_test_nickname;   
};
function GetDataset(count)
{
  let numbers =[];
  for(let i=0; i<count; i++)
  {
    numbers[i]=[];
    for (let j=0; j<Math.pow(2,count); j++)
    {
      numbers[i][j]=0;
    }
  }
  for(let i=0; i< count; i++)
  {
    let counter=0;
    for(let j=0; j< Math.pow(2,count); j++)
    {
      if(j%(Math.pow(2,i))==0)
      {
        
        if(counter==0) counter=1;
        else if(counter==1) counter =0
      }
      numbers[i][j]=counter;
    }  
  }
  return numbers;
}
 function GetNicknamesList(nickname){
  nickname_list=[];
  let dataset=GetDataset(nickname.length+1);
  for(let j=0; j< Math.pow(2,nickname.length+1); j++)
   {
    arr_test_nickname=GetWorkArray(nickname);
     for(let i=0; i< nickname.length+1; i++)
     {       
       if(dataset[i][j]==0) arr_test_nickname[2*i]='';
       else if(dataset[i][j]==1) arr_test_nickname[2*i]='.';
     }
     let another_one_nickname=arr_test_nickname.join('');
     nickname_list.push (another_one_nickname);         
   }
   return  nickname_list;  
};
function GetJsonResult(result){
  var json = JSON.stringify(result);
  fs.writeFile('result.json', json, 'utf8', function(err) {
    if (err) throw err;
    console.log('complete');
    });
}
  const express = require('express');
  const fs = require('fs');
  let app = express();

app.get('/', function(req, res) { 
    email=GetJsonData();
    nickname=GetNicknameSymbols(email);
    let final_list=GetNicknamesList(nickname);
    res.send(final_list);
    GetJsonResult(final_list); 
    });
    
    let server = app.listen(3000, function() {
      console.log('Server is running!');
  });
 
