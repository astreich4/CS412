
const alphaflip = (inpt) => {
    return inpt.split("").sort().reverse().toString().replace(/[^A-Za-z]/g,'');
}

//console.log(aplhaflip('supercalifragilisticexpialidocious'));

module.exports = {alphaflip}

