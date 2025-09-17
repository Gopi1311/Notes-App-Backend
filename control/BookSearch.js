const data = require("../models/DataBase");

const searchBookByAuthor = (req, res) => {
  try {
    const keySearch = req.body.keySearch;
    const serchedBook=data.flatMap(user=>{
        if(user.name.toLowerCase().includes(keySearch.toLowerCase())){
            return user.book.map(book=>{
                return {AuthorName:user.name,...book}
            });
        }
        return user.book.filter(book=>book.title.toLowerCase().includes(keySearch.toLowerCase())).map(book=>({
            AuthorName:user.name,
            ...book
        }))
    })
    if (serchedBook.length===0) {
      return res.status(404).json("Book Will Not Found ");
    }
    return res.status(302).json({ message: "Book will Available", books: serchedBook });
  } catch (err) {
    console.error("Error Occur During Book Search : ",err);
    
    return res.status(500).json("Error Occur During Book Search");
  }
};

module.exports={searchBookByAuthor};
