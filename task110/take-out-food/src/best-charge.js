var items=require('./items.js')
var promotions=require('./promotions.js')
module.exports=function bestCharge(selectedItems) {
  /*create a map to store each of these items with its quantity*/
  var itemNumber=new Map();
  for(let a of selectedItems){
    itemNumber.set(a.slice(0,8),a.slice(11,12));
  }

  /*pick out HalfOff item and set the half-off item with the flag:isHalfOff*/
  var allItems=items.loadAllItems();
  var twoTypes=promotions.loadPromotions();
  var halfOff=[];
  let isHalfOff=false;
  var result;
  var text1='';var text2=''; var text3=''; var text4=';'

  for(let key of itemNumber.keys()){
    (twoTypes[1].items.includes(key))?isHalfOff=true:isHalfOff=false;
    if(isHalfOff==true){
      halfOff.push(key);
    }
  }
  result=analyze_items(itemNumber,allItems);
  
  /*get print info*/
  var totalCost=0;//via addup----result[j][3]
  for(var i=0;i<result.length;i++){
    text2+=result[i][1]+' x '+result[i][2]+' = '+result[i][3]+'元\n';
    totalCost+=result[i][3];
  }
  var originCost=totalCost;var halfItem=[]; var save=0;
  for(var j=0;j<result.length;j++){
    if(halfOff.includes(result[j][0])){
      result[j][3]=0.5*result[j][3];
      save+=result[j][3];halfItem.push(result[j][1]);
    }
    totalCost+=result[j][3];
  }
  text3='-----------------------------------\n使用优惠:\n指定菜品半价('+halfItem.join('，')+')，省'+save+'元\n-----------------------------------\n';
  if(originCost>=30&&(isHalfOff==true)&&(save<6)){
    save=6;text3='-----------------------------------\n使用优惠:\n满30减6元，省6元\n-----------------------------------\n';
  }
  if(save==0){
    text3='-----------------------------------\n';
  }
  text1='============= 订餐明细 =============\n';
  text4='总计：'+(originCost-save)+'元\n==================================='
  return text1+text2+text3+text4;
}


/*use a double loop to analyze each item with its id,name,number,price,addUp*/
function analyze_items(itemNumber,allItems) {
  itemNumber=Array.from(itemNumber);//transfer to array
  var id,name='';
  var number,price,addUp=0;
  var result=new Array();
  for(var i=0;i<itemNumber.length;i++) {
    result[i]=new Array();
    number = itemNumber[i][1];
    name = '';
    id = '';
    price = 0;
    addUp = 0;
    for (let item of allItems) {
      if (item.id === itemNumber[i][0]) {
        id = itemNumber[i][0];
        name = item.name;
        price = item.price;
        addUp = number * price;
        break;
      }
    }
    result[i].push(id);
    result[i].push(name);
    result[i].push(number);
    result[i].push(number * price);
  }
    return result;
}
