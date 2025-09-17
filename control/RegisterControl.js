const data=require('../models/DataBase');

const registerNewUser=(req,res)=>{
   try{
        const newUser=req.body;
        if(!newUser){
            return res.status(400).json("Request Body is Missing");
        }
        if(!newUser.id || !newUser.name || !newUser.email || !newUser.book){
            return res.status(406).json("Some User Deatils Is Missing");
        }
        if(data.some(user=>user.email===newUser.email)){
            return res.status(208).json('User Already Exists');
        }
        data.push(newUser);
        return res.status(201).json({message:'New User Added',user:newUser});
   }catch(err){
        return res.status(404).json("Error Occur At Add New User",err);
   }
}

const addNewBookById=(req,res)=>{
    try{
        const newBook=req.body;
        const userId=parseInt(req.params.id);
        console.log("Id: ",userId,"\nbook",newBook);
        const user=data.find(user=>user.id===userId);
        if(!user){
            return res.status(404).json("User Not Found");
        }
         if(!newBook){
            return res.status(400).json("Request Body is Missing");
        }
        if( !newBook.title || !newBook.description || !newBook.date ){
            return res.status(406).json("Some Book Deatils Is Missing");
        }
       
        if(user.book.some(book=>book.title===newBook.title)){
            return res.status(409).json("Book already Exists");
        }
        user.book.push(newBook);
        return res.status(201).json({Message:"New Book Added",newBook:newBook});

    }catch(err){
       return res.status(500).json({ message: "Error occurred while adding new book", error: err.message });
    }
}

module.exports={registerNewUser,addNewBookById};