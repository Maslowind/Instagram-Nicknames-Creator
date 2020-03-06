  exports.getNicknameSymbols =function (email) {
    return email.substr(0, email.indexOf('@'))    
  };
  
  
  exports.getNicknamesList =  function (nickname) {
    let nicknameList = [];
    let dataset=getDataset(nickname.length + 1);
  
    for (let j = 0; j < Math.pow(2, nickname.length +1 ); j++) {
      arrTestNickname = getWorkArray(nickname);
       for (let i = 0; i < nickname.length + 1; i++) {       
         if (dataset[i][j] == 0) arrTestNickname[2 * i] = '';
         else if (dataset[i][j] == 1) arrTestNickname[2 * i] = '.';
       }
       let another_one_nickname = arrTestNickname.join('');
       nicknameList.push (another_one_nickname);         
     }
  
     return  nicknameList;  
  };
  

  function getWorkArray(nickname) {
    let arrNickname = nickname.split('');
    let arrTestNickname = [];
  
    for(let i = 0; i < arrNickname.length; i++) {
      arrTestNickname[2*i] = ' ';
      arrTestNickname[2*i+1] = arrNickname[i];
    }
  
    arrTestNickname[2*arrNickname.length] = ' '; 
    return arrTestNickname;   
  };
 
  
  function getDataset(count) {
    let numbers = [];
  
    for(let i = 0; i < count; i++) {
      numbers[i] = [];
      let counter = 0;
      for (let j = 0; j < Math.pow (2, count); j++) {
        if (j % (Math.pow(2, i)) == 0) {        
          if (counter === 0) counter = 1;
          else if(counter===1) counter = 0;
        }
        numbers[i][j] = counter;
      }
    }
    
    return numbers;
  }
  
  
   