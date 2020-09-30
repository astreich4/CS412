const foo = (inpt_s,inpt_f) => {
    return inpt_f(inpt_s);
}
console.log( foo('supercalifragilisticexpialidocious', (inp) => inp.replace(/c/g,",c").split(",")));

console.table(
foo('supercalifragilisticexpialidocious', (inp) => {
    let temp = {
        originalString: inp,
        modifiedString: inp.replace(/a/g,"A"),
        numberReplaced: inp.replace(/a/g,"A").split("A").length-1,
        length: inp.length
    };
return temp;
}
)
);

module.exports = {foo}