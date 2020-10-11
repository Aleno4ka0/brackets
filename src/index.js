module.exports = function check(str, bracketsConfig) {
  var bracket1 = ''
  var bracket2 = ''
  var bracket3 = ''
  var bracket4 = ''
  var bracket5 = ''
  var bracket6 = ''
  var bracket7 = ''
  var arrString = str + bracketsConfig
  arrString = arrString.split('')
  for(var i = 0; i < arrString.length; i++){
      if(arrString[i] == '('){
          bracket1 += arrString[i]
      }
      if(arrString[i] == ')'){
          bracket2 += arrString[i]
      }
      if(arrString[i] == '['){
          bracket3 += arrString[i]
      }
      if(arrString[i] == ']'){
          bracket4 += arrString[i]
      }
      if(arrString[i] == '{'){
          bracket5 += arrString[i]
      }
      if(arrString[i] == '}'){
          bracket6 += arrString[i]
      }
      if(arrString[i] == '|'){
          bracket7 += arrString[i]
      }
      
  }
  if(bracket1.length == bracket2.length && bracket3.length == bracket4.length && bracket5.length == bracket6.length && bracket7.length % 2 == 0){
      return true
  } else{
      return false
  }
}
