const {alphaflip} = require('./PS1.P1');
const {getOp,parse} = require('./PS1.P2');
const {foo} = require('./PS1.P3');

const {describe,it} = require('mocha');
const {expect} = require('chai');

describe('Test for p1', ()=>{
    it('should make [supercalifragilisticexpialidocious] alphabetical, then reverse it: ', ()=>{
        let res = alphaflip('supercalifragilisticexpialidocious');
        expect(res).to.be.equal('xuutsssrrppoollliiiiiiigfeedcccaaa')
    });

    it('should make [super1234califragilisticexpialidocious] aplhabetical order, then reverse it, ignoring numbers ', ()=>{
        let res = alphaflip('super1234califragilisticexpialidocious');
        expect(res).to.be.equal('xuutsssrrppoollliiiiiiigfeedcccaaa');
    });

});

describe('Test for p2', ()=>{
    it('should return 8 when given \'2*4\': ', ()=>{
        let res = getOp('2*4')(parse('2*4')[0],parse('2*4')[1]);
        expect(res).to.be.equal(8);
    });

    it('should return 2 when given \'4/2\': ', ()=>{
        let res = getOp('4/2')(parse('4/2')[0],parse('4/2')[1]);
        expect(res).to.be.equal(2);
    });

});

describe('Test for p3', ()=>{
    it('should return a list seperated at c when passed supercalifragilisticexpialidocious and the lambda function ', ()=>{
        let res = foo('supercalifragilisticexpialidocious', (inp) => inp.replace(/c/g,",c").split(","));
        expect(res).to.have.ordered.members([ 'super', 'califragilisti', 'cexpialido', 'cious' ]);
    });

    it('should return an object with the original String, modified strring, number replaced, and the length when given supercalifragilisticexpialidocious and the lambda function ', ()=>{
        let res = foo('supercalifragilisticexpialidocious', (inp) => {
                let objectOfStringInfo = {
                    originalString: inp,
                    modifiedString: inp.replace(/a/g,"A"),
                    numberReplaced: inp.replace(/a/g,"A").split("A").length-1,
                    length: inp.length
                };
                return objectOfStringInfo;
            }
        );
        let ans = {
            originalString: 'supercalifragilisticexpialidocious',
            modifiedString: 'supercAlifrAgilisticexpiAlidocious',
            numberReplaced:  3,
            length: 34
        };
        expect(res).to.be.deep.equal(ans);
    });

});