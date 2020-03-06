  exports.getNicknameSymbols =function (email) {
    return email.substr(0, email.indexOf('@'))    
  };
  


  exports.getNicknamesList =  function (nickname) {
    let nicknameList = [];
    arrTestNickname = getWorkArray(nickname);
    for (let j = 0; j < Math.pow(2, nickname.length - 1); j++) {      
      for (let i = 0; i < nickname.length - 1; i++) {
        if (j % (Math.pow(2, i)) == 0) {        
          if (arrTestNickname[2 * i + 1] === '') arrTestNickname[2 * i + 1] = '.';
          else if (arrTestNickname[2 * i + 1] === '.') arrTestNickname[2 * i + 1] = '';
        }      
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
      arrTestNickname[2*i] = arrNickname[i];
      arrTestNickname[2*i+1] = '';
      
    }
    return arrTestNickname;   
  };
 
  
 
  
  
   