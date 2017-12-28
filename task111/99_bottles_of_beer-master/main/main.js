function formatter(quantity,text) {
    if(quantity===2) {
       return text +=
           '2 bottles of beer on the wall, 2 bottles of beer.'+
           'Take one down and pass it around, 1 bottle of beer on the wall.'+
            '1 bottle of beer on the wall, 1 bottle of beer.'+
            'Take one down and pass it around, no more bottles of beer on the wall.';
    }else{
        text +=
            quantity + ' bottles of beer on the wall, ' + quantity + ' bottles of beer.' +
            'Take one down and pass it around, ' + (quantity - 1) + ' bottles of beer on the wall.';
        return formatter(quantity-1,text);
    }
    }
/**
 * Created by skyee on 2017/12/9.
 */
module.exports=function main(quantity) {
    var text='';
    if(quantity===0){
          text =
             'No more bottles of beer on the wall, no more bottles of beer.'+
            'Go to the store and buy some more, 99 bottles of beer on the wall.';
    }
    if(quantity===1){
          text =
              '1 bottle of beer on the wall, 1 bottle of beer.'+
              'Take one down and pass it around, no more bottles of beer on the wall.'+
              'No more bottles of beer on the wall, no more bottles of beer.'+
              'Go to the store and buy some more, 99 bottles of beer on the wall.';
    }
  
    if(quantity>1){
         text = formatter(quantity,text)+
        'No more bottles of beer on the wall, no more bottles of beer.'+
        'Go to the store and buy some more, 99 bottles of beer on the wall.';    
    }
 
    console.log(text);
}