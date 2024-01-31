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

function stringFunc(num,str,val){
  let q1,q2,q3
  let arr=[]
  q1=num.toString().length
  q2=num/100
  num=num%100
  if(q2>=1){
    arr.push(switchFunc(Number.parseInt(q2))+`${q1===3?' yuz':''}`)
  }
  q3=num/10
  num=num%10
  if(q3>=1){
    arr.push(switchFunc(Number.parseInt(q3)*10))
  }
  num
  if(num>=0){
    arr.push(switchFunc(num)+`${val===0?'':str}`)
  }
  return arr.join(' ')
}

function stringToNumber(num){
  let a=num.toString().length/3
  let newArr=[]
  let newArr1=[]
  let newArr2=[]
  for(let i=0;i<a;i++){
    newArr.push(num%1000)
    num=(num-num%1000)/1000
  }
  if(newArr[0]){
    newArr1.push(stringFunc(newArr[0],'yuz',0))
  }
  if(newArr[1]){
    newArr1.push(stringFunc(newArr[1],' ming',1))
  }
  if(newArr[2]){
    newArr1.push(stringFunc(newArr[2],' million',2))
  }
  if(newArr[3]){
    newArr1.push(stringFunc(newArr[3],' milliard',3))
  }
  for(let i=newArr1.length;i>=0;i--){
    newArr2.push(newArr1[i])
  }
  // console.log(newArr2)
  return newArr2.join(' ')
}
// console.log(stringToNumber(763340007007))

function numberChange(params) {
  params=params.replace('-',' inchi ')
  newArr=params.split(' ')
  for(let i=0;i<newArr.length;i++){
    x=Number.parseInt(newArr[i]%2)
    if(x===0 || x===1){
      newArr[i]=stringToNumber(Number(newArr[i]))
    }
  }
  for(let i=0;i<newArr.length;i++){
    if(newArr[i]==='inchi'){
      newArr[i]=newArr[i-1]+newArr[i]
      newArr[i-1]=''
    }
  }
  // console.log(newArr)
  return newArr.join(' ')
}
console.log(numberChange('Menda 300010000110 so`m pul bor'))