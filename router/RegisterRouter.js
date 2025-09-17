const express=require('express');
const router=express.Router();
const {registerNewUser,addNewBookById}=require('../control/RegisterControl');

router.post('/newUser',registerNewUser);
router.post('/newBook/:id',addNewBookById);


module.exports=router;
