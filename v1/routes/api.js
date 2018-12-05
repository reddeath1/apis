const express = require('express');
const router = express.Router();
const path = require('path');
const Users = require(path.join(__dirname,'../modals/users')) ;

// get list users from the db
router.get('/users',(req,res)=>{
     res.send({type:'GET'});
});

router.get('/users/:id',(req,res)=>{
    console.log(req.params);
    res.send({type:'GET'});
});

// add new user
router.post('/users',(req,res,next)=>{
    console.log(req.body);
   // res.send(req.body);
    Users.addUser({
        data:req.body,
        callback:function (data) {
        res.send(data);
    },
      next:errorHandler
    });
});

// update user
router.put('/users/:user/:id',(err,req,res)=>{
    res.send({type:'PUT'});
});

// delete user
router.delete('/users/:user/:id',(req,res)=>{
    res.send({type:'DELETE'});
});

// Error Handler
errorHandler = function(err,req,res,next){
    console.log(err.message)
    next();
};


module.exports = router;