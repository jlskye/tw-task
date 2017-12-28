const main= require('../main/main.js')
describe('99-beer',function () {
    var quantity=0;
    it('when no beer left',function () {
        quantity=0;
        
        spyOn(console, 'log');
        main(quantity);
        var expectText=
            'No more bottles of beer on the wall, no more bottles of beer.'+
            'Go to the store and buy some more, 99 bottles of beer on the wall.';
        expect(console.log).toHaveBeenCalledWith(expectText);
    });
    it('when one beer left',function () {
        quantity=1;

        spyOn(console, 'log');
        main(quantity);
        var expectText=
            '1 bottle of beer on the wall, 1 bottle of beer.'+
            'Take one down and pass it around, no more bottles of beer on the wall.'+
            'No more bottles of beer on the wall, no more bottles of beer.'+
            'Go to the store and buy some more, 99 bottles of beer on the wall.';
        expect(console.log).toHaveBeenCalledWith(expectText);
    });
   it('when two beers left',function () {
        quantity=2;

        spyOn(console, 'log');
        main(quantity);
        var expectText=
            '2 bottles of beer on the wall, 2 bottles of beer.'+
            'Take one down and pass it around, 1 bottle of beer on the wall.'+
            '1 bottle of beer on the wall, 1 bottle of beer.'+
            'Take one down and pass it around, no more bottles of beer on the wall.'+
            'No more bottles of beer on the wall, no more bottles of beer.'+
            'Go to the store and buy some more, 99 bottles of beer on the wall.';
       expect(console.log).toHaveBeenCalledWith(expectText);
    });
   it('when three beers left',function () {
        quantity=3;

        spyOn(console, 'log');
        main(quantity);
        var expectText=
            '3 bottles of beer on the wall, 3 bottles of beer.'+
            'Take one down and pass it around, 2 bottles of beer on the wall.'+
            '2 bottles of beer on the wall, 2 bottles of beer.'+
            'Take one down and pass it around, 1 bottle of beer on the wall.'+
            '1 bottle of beer on the wall, 1 bottle of beer.'+
            'Take one down and pass it around, no more bottles of beer on the wall.'+
            'No more bottles of beer on the wall, no more bottles of beer.'+
            'Go to the store and buy some more, 99 bottles of beer on the wall.';
       expect(console.log).toHaveBeenCalledWith(expectText);
    });
  it('when four beers left',function () {
        quantity=4;

        spyOn(console, 'log');
        main(quantity);
        var expectText=
            '4 bottles of beer on the wall, 4 bottles of beer.'+
            'Take one down and pass it around, 3 bottles of beer on the wall.'+
            '3 bottles of beer on the wall, 3 bottles of beer.'+
            'Take one down and pass it around, 2 bottles of beer on the wall.'+
            '2 bottles of beer on the wall, 2 bottles of beer.'+
            'Take one down and pass it around, 1 bottle of beer on the wall.'+
            '1 bottle of beer on the wall, 1 bottle of beer.'+
            'Take one down and pass it around, no more bottles of beer on the wall.'+
            'No more bottles of beer on the wall, no more bottles of beer.'+
            'Go to the store and buy some more, 99 bottles of beer on the wall.';
       expect(console.log).toHaveBeenCalledWith(expectText);
    });

});