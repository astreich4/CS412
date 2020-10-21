var express = require('express');
var router = express.Router();
let pagenum;

/* GET home page. */
router.route('/')
    .get((req,res,next ) => {
console.log(`Gor ${req.query.inptString}${req.url}here`);
res.render('ps3',{page:1, inptString: req.query.inptString})
})

.post((req,res,next) => {
res.render('ps3', {page:2, inptString: req.body.inptString, strLen: req.body.inptString.length})
})

module.exports = router;