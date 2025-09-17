const express=require('express');
const router=express.Router();
const {searchBookByAuthor}=require('../control/BookSearch');

router.get('/search',searchBookByAuthor);

module.exports=router;