 const express=require('express');
 const router=express.Router();
 const {deleteUserAccountById,deleteBookByUserId}=require('../control/DeleteUser');

 router.delete('/user/:id',deleteUserAccountById);
 router.delete('/user/:id/book/:title',deleteBookByUserId);

 module.exports=router;