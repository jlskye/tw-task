const main = require('../main/main');

describe('taxi fee', function () {
    var waitUnit=0.25;


    it('spec1:when distance less than 2 miles',function () {
    
        let waitCost=waitUnit*3;
        let expectCost = Math.round(6+waitCost);
        let actualCost = main(1,3);
        expect(actualCost).toEqual(expectCost);
    });
    it('spec2:when distance larger than 2 miles and less than 8 miles',function () {
         let waitCost=waitUnit*4;
        let expectCost = 6+0.8*(7-2)+waitCost;
        let actualCost = main(7,4);
        expect(actualCost).toEqual(expectCost);
    });
    it('spec3:when distance larger than 8 miles',function () {
        let waitCost=waitUnit*4;
        let expectCost = Math.round(6+0.8*8+0.8*(1+0.5)*(16-8)+waitCost);
        let actualCost = main(16,4);
        expect(actualCost).toEqual(expectCost);
    });
    it('spec4:when distance larger than 8 miles',function () {
        let waitCost=waitUnit*5;
        let expectCost = Math.round(6+0.8*8+0.8*(1+0.5)*(16-8)+waitCost);
        let actualCost = main(16,5);
        expect(actualCost).toEqual(expectCost);
    });
});
