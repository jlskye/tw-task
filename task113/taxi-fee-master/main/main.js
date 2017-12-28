module.exports = function main(distance,waitTime) {
    var waitUnit=0.25;
    var waitCost=waitUnit*waitTime;
   if(distance<=2){
       return Math.round(6+0.25*waitTime);
   }else if(distance>8){
       return Math.round(6+0.8*8+0.8*(1+0.5)*(distance-8)+0.25*waitTime);
   }else {
       return Math.round(6+0.8*(distance-2)+0.25*waitTime);

   }
};