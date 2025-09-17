const data=require('../models/DataBase');

//Update Only for User Details Not for Book
const editUserById=(req,res)=>{
   try{
        const userId=parseInt(req.params.id);

        const updateData=req.body;
        if(!updateData){
            return res.status(400).json("Request Body is Missing");
        }

        const indexOfUser=data.findIndex(user=>user.id===userId);
         if(indexOfUser===-1){
            return res.status(404).json("User Not Found");
        }

        data[indexOfUser]={...data[indexOfUser],...updateData};
        return res.status(202).json({Message:"Update User",user:data[indexOfUser]});

   }catch(err){
        console.error("Error Occur While Update User",err);
        return res.status(500).json({message:"Error Occur While Update User",error:err});
   }
}

const updateBooksById=(req,res)=>{
    try{
        const userId=parseInt(req.params.id);
    
        const updateBook=req.body;
        
         if(!updateBook){
            return res.status(400).json("Request Body is Missing");
        }
        const user=data.find(user=>user.id===userId);
         if(!user){
            return res.status(404).json("User Not Found");
        }
        
        const book=user.book.find(book=>book.title===updateBook.title);
        if(!book){
            return res.status(404).json("Book Not Found");
        }
        Object.assign(book,updateBook);
        return res.status(202).json({Message:"Update Book",UpdatedBook:book});

    }catch(err){
        console.error("Error Occur While Update Book",err);
        return res.status(500).json({message:"Error Occur While Update Book",error:err});
    }
}

module.exports={editUserById,updateBooksById};