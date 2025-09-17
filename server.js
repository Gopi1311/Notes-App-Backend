const express =require('express');
const cors=require('cors')
const app=express();
const UserRouter=require('./router/UserRouter');
const RegisterRouter=require('./router/RegisterRouter');
const UpdateRouter=require('./router/UpdateRouter');
const DeleteRouter=require('./router/DeleteRouter');
const SearchRouter=require('./router/SearchRouter');

const PORT=process.env.PORT||5000;

app.use(express.json());
app.use(cors({
    origin:'*',
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
})) 

//Get All User and Specific User
app.use('/api',UserRouter);

// Register a new User
app.use('/api',RegisterRouter);

//Update User and  UserDatas
app.use('/api',UpdateRouter);

//Delete User and UserDatas
app.use('/api',DeleteRouter);

//Search Book By Title or AuthorName
app.use('/api',SearchRouter);


app.listen(PORT,()=>{
    console.log("Server listening in :",PORT);
    
})