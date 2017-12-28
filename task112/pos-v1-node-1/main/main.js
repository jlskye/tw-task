const dat = require('../main/datbase.js');
//use a map to store the type of good with its' quantity
function getItemNumber(inputs) {
    var itemNumber = new Map();
    for (let a of inputs) {
        if (a.length <= 10) {
            if (itemNumber.has(a)) {
                itemNumber.set(a, itemNumber.get(a) + 1);
            } else {
                itemNumber.set(a, 1);
            }
        } else {
            {
                itemNumber.set(a.slice(0, 10), a.slice(11, 12));
            }
        }
    }
    return itemNumber;
}
//print each of the item information in the checklist
function printChecklist(result, promoteName, promoteUnit, totalCost, save) {
    var text2 = '';
    var text4 = '';
    var text1, text3;
    var text5, text6;
    text1 = '***<没钱赚商店>购物清单***\n';

    for (var i = 0; i < result.length; i++) {
        text2 += '名称：' + result[i][0] + '，数量：' +
            result[i][1] + result[i][2] + '，单价：' +
            (result[i][3].toFixed(2)) + '(元)，小计：' +
            (result[i][4].toFixed(2)) + '(元)' + '\n';

    }
    text3 = '----------------------\n' + '挥泪赠送商品：\n';
    for (var j = 0; j < promoteName.length; j++) {
        text4 += '名称：' + promoteName[j] +
            '，数量：1' + promoteUnit[j] + '\n';
    }
    text5 = '----------------------\n';
    text6 = '总计：' + (totalCost.toFixed(2)) +
        '(元)\n' + '节省：' + (save.toFixed(2)) +
        '(元)\n' + '**********************';
    console.log(text1 + text2 + text3 + text4 + text5 + text6);
}
module.exports = function printInventory(inputs) {
    var itemNumber = getItemNumber(inputs);
    var allItems=dat.loadAllItems();
    var allTypes=dat.loadPromotions();
    var promotion=[];
    let isPromotion=false;

    for(let key of itemNumber.keys()){
        (allTypes[0].barcodes.includes(key)&&allTypes[0].type==='BUY_TWO_GET_ONE_FREE')?isPromotion=true:isPromotion=false;
        if((isPromotion)===true){
            promotion.push(key);
        }
    }
    //promotion计算优惠商品：满二送一
    var name, number,price,unit,addUp=0.00;
    var result=[];
    var totalCost=0.00;itemNumber=Array.from(itemNumber);
        console.log('console.log(itemNumber.length);'+itemNumber.length);

    for(var i=0;i<itemNumber.length;i++){
        name='';
        number,price,unit,addUp=0.00;
        number=itemNumber[i][1];
        result[i]=new Array();
        for(let item of allItems){
            if(item.barcode===itemNumber[i][0]&&name===''){
                name=item.name;
                price=item.price;
                unit=item.unit;
            }
        }
        if(promotion.includes(itemNumber[i][0])){
            addUp=price*(number-1);
        }else {
            addUp=price*(number);
        }
        totalCost+=Number(addUp);
        result[i].push(name);result[i].push(number);result[i].push(unit);result[i].push(price);result[i].push(addUp);

    }

//        打印挥泪送商品名称
    var promoteName=[];var promoteUnit=[];var save=0;
    for(let a of promotion){
        for(let item of allItems){
            if(item.barcode===a){
                promoteName.push(item.name);
                promoteUnit.push(item.unit);
                save+=Number(item.price);
            }
        }
    }
    console.log('console.log(result.length);'+result.length+'\n'+result);

    printChecklist(result, promoteName, promoteUnit, totalCost, save);

}
