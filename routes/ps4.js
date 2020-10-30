let express = require('express');
let request = require('request');
let apicall = require('../config/URLEndpoints');

let router = express.Router();



/* GET home page. */
router.route('/')
    .get((req,res,next)=>{
        res.render('ps4',{page:1})
    })

.post((req,res,next) => {
    //apicall.url = apicall.url + req.body.name;
    doReq(req)
        .then(value => {
            console.log(value)
            res.render('ps4',{page: 2, val: value })
        })



    //res.render('ps4',{page: 2, val: response.body.age })
})

const doReq = (parms) =>{
    return new Promise(((resolve, reject) => {
        apicall.url = apicall.url + parms.body.name;
        request(apicall, function (error, response) {
            if (error) throw new Error(error);
            //response.body;
            resolve(response.body)
        });
    }))
}






module.exports = router;