let sinon = require("sinon");
let main = require("../lib/main");

describe('main()', () => {

    it('should display main menu once started', () => {
        sinon.spy(console, 'log');
        main();
        // expect(console.log.args.join()).toBe(`         成绩单         `);
    });

});
