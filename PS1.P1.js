
const aplhaflip = (inpt) => {
    return inpt.split("").sort().reverse().toString().replace(/[^A-Za-z]/g,'');
}
