const data=require('../models/DataBase');

const deleteUserAccountById=(req,res)=>{
    try{
        const userId=parseInt(req.params.id);
        const userIndex=data.findIndex(user=>user.id===userId);
        if(userIndex===-1){
            return res.status(404).json("User Not Found");
        }
        const deleteUser=data.splice(userIndex,1);
        console.log("Delete User: ",deleteUser);
        return res.status(200).json({message:"user Deleted",User:deleteUser[0]});

    }catch(err){
        console.log("Error Occur During Delete User Account :",err);
        return res.status(500).json("Error Occur During Delete User Account ");
    }
}

const deleteBookByUserId=(req,res)=>{
    try{
        const userId=parseInt(req.params.id);
        const bookTitle=req.params.title;
    
        const user=data.find(user=>user.id===userId);
        if(!user){
            return res.status(404).json("User Not Found");
        }
        const bookIndex=user.book.findIndex(book=>book.title===bookTitle);
        if(bookIndex===-1){
            return res.status(404).json("Book Not Found");
        }
        const [deleteBook] = user.book.splice(bookIndex,1);
        return res.status(200).json({ message: "Book Deleted", book: deleteBook });

    }catch(err){
        console.log("Error Occur During Delete User Account :",err);
        return res.status(500).json("Error Occur During Delete Book ");
    }
}


module.exports={deleteUserAccountById,deleteBookByUserId};