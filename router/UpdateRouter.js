const express=require('express');
const router=express.Router();
const {editUserById,updateBooksById}=require('../control/UpdateUser');


router.put('/update/:id',editUserById);
router.put('/book/:id',updateBooksById)

module.exports=router;