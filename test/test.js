const sum = require('../app');

describe('Sum API',()=>{
    test('adss 1+2 to equal 3', ()=>{
        expect(sum(1,2)).toBe(3);
    });
});


