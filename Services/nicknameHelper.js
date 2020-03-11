  exports.getNicknameSymbols =function (email) {
    return email.substr(0, email.indexOf('@'))    
  };
  


  
  exports.getNicknamesList =  function (nickname) {
    let nicknameList = [];
    arrTestNickname = getWorkArray(nickname);//Получаем массив элементов никнейма с местами под пропуски для потенциальных точек
    for (let j = 0; j < Math.pow(2, nickname.length - 1); j++) { 
      let dotBinary=j.toString(2);//Получаем порядковый номер очередной комбинации в двоичной форме
      for (let i = 0; i <  nickname.length - 1; i++) {
        if (dotBinary[dotBinary.length - i - 1] == 1) arrTestNickname[2 * i + 1] = '.';//расставляем точки
        else if (dotBinary[dotBinary.length - i - 1] == 0) arrTestNickname[ 2 * i + 1] = '';//расставляем пропуски        
      }
       let another_one_nickname = arrTestNickname.join('');//соединяем очередной никнейм воедино
       nicknameList.push (another_one_nickname); //добавляем в список
     }
  
     return  nicknameList;  
  };

  function getWorkArray(nickname) {
    let arrNickname = nickname.split('');
    let arrTestNickname = [];
  
    for(let i = 0; i < arrNickname.length; i++) {
      arrTestNickname[2*i] = arrNickname[i];
    }
    return arrTestNickname;   
  };
 
  
 
  
  
   