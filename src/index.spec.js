const log = require('@ajar/marker');
const {slugger} = require('./index');

/**
 * @describe [optional] - group of tests with a header to describe them
 */
describe('testing slugger basic functionality', () => {
    /**
     * @it - unit tests can use the 'it' syntax
     */
    it('slugger can slug string with spaces', () => {
        const input = slugger('hi guys', 'dont forget', 'to do your homework')
        const output = 'hi-guys-dont-forget-to-do-your-homework'
        expect(input).toEqual(output);
    })
    /**
     * @test - unit test can use the 'test' syntax
     */
    test('slugger can slug any number of spacy strings', () => {
        const input = slugger('hi guys')
        const output = 'hi-guys'
        expect(input).toEqual(output);
    })
})