const express=require('express');
const router=express.Router();
const {getAllUser,getUserById}=require('../control/UserContorl');


router.get('/users',getAllUser);
router.get('/user/:id',getUserById);



module.exports=router;