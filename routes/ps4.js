let express = require('express');
let request = require('request');
let apicall = require('../config/URLEndpoints');

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');

const asyncSet = promisify(client.set).bind(client);
const asyncGet = promisify(client.get).bind(client);
const asyncExists = promisify(client.exists).bind(client);
const asyncExpire = promisify(client.expire).bind(client);

let router = express.Router();


client.flushdb((err, success) => {
    if (err) {
        throw new Error(err)
    }
});

/* GET home page. */
router.route('/')
    .get((req,res,next)=>{
        res.render('ps4',{page:1})
    })

.post(async (req,res,next) => {
    //apicall.url = apicall.url + req.body.name;
    if ( await asyncExists(req.body.name)){
        let value = await asyncGet(req.body.name);
        let response = {
            key: req.body.name,
            value: value,
            cashed: true
        }
        console.log(response)
        res.json(response)
    } else{
        doReq(req)
            .then(async value => {
                console.log(value);
                let response = {
                    key: req.body.name,
                    value:value,
                    cashed: false
                }

                let status = await asyncSet(req.body.name, value);
                await asyncExpire(req.body.name,15);
                console.log(status);
                res.json(response);

            })



    }





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