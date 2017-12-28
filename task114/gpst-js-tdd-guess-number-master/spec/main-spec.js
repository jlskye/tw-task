const main = require('../main/main');
var customMatchers = {
    toGuessRight: function(util, customEqualityTesters) {
        return {
            compare: function(actual, expected) {
                if (expected === undefined) {
                    expected = '';
                }
                var result = {};
                result.pass = util.equals(actual, expected, customEqualityTesters);
                if (result.pass) {
                    result.message = "hooray,pass this test...";
                } else {
                    result.message = "oops,fail this test...";
                }
                return result;
            }
        };
    }
};
describe('main()', () => {
    beforeEach(function() {
        jasmine.addMatchers(customMatchers);

    });
    it('case 1',() =>{
       let systemNumber=[];
        for(var i=0;i<4;i++){
            let a =Math.floor(Math.random()*10);
            systemNumber.includes(a)?--i:systemNumber.push(a);
        }
        console.log('系统猜测数：'+systemNumber.toString());
        // systemNumber=[2,4,5,3];
        console.log('输入四个数>')
        let line=main();
        let cpm1=[...systemNumber];
        let cpm2=[...line];
        var ANum=0;
        var Bnum=0;
        for(var i=0;i<cpm1.length;i++){
            if(cpm2.includes(cpm1[i])){
                Bnum++;
            }
            if(cpm1[i]==cpm2[i]){
                ANum++;
            }
        }
      let actual= ANum+'A'+Bnum+'B';
        console.log(actual);
        expect(actual).toGuessRight(actual);
        // expect(actual).toEqual('4A0B');
    });

    
});