let newArr=[]
let x;

function switchFunc(num){
  let newString;
  switch(num){
    case 0:newString='';break;
    case 1:newString='bir';break;
    case 2:newString='ikki';break;
    case 3:newString='uch';break;
    case 4:newString='to`rt';break;
    case 5:newString='besh';break;
    case 6:newString='olti';break;
    case 7:newString='yetti';break;
    case 8:newString='sakkiz';break;
    case 9:newString='to`qqiz';break;
    case 10:newString='o`n';break;
    case 20:newString='yigirma';break;
    case 30:newString='o`ttiz';break;
    case 40:newString='qirq';break;
    case 50:newString='ellik';break;
    case 60:newString='oltmish';break;
    case 70:newString='yetmish';break;
    case 80:newString='sakson';break;
    case 90:newString='to`qson';break;
  }
  return newString;
}

function stringToNumber(num){
  let newNum=num
  let q1,q2,q3
  let arr=[]
  q1=num/1000
  num=num%1000
  if(q1>=1){
    arr.push(switchFunc(Number.parseInt(q1))+' ming')
  }
  q2=num/100
  num=num%100
  if(q2>=1){
    arr.push(switchFunc(Number.parseInt(q2))+' yuz')
  }
  q3=num/10
  num=num%10
  if(q3>=1){
    arr.push(switchFunc(Number.parseInt(q3)*10))
  }
  num
  if(num>=0){
    arr.push(switchFunc(num)+`${newNum<=99?'':'inchi'}`)
  }
  return arr.join(' ')
}

function numberChange(params) {
  params=params.replace('-',' ')
  newArr=params.split(' ')
  for(let i=0;i<newArr.length;i++){
    x=Number(newArr[i]%2)
    if(x===0 || x===1){
      newArr[i]=stringToNumber(Number(newArr[i]))
    }
  }
  return newArr.join(' ')
}
console.log(numberChange('Men 2000-yil tug`ilganman 5 yildan buyon Toshkentdan yashayman'))