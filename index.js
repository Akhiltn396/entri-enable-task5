const express = require("express")
const db = require("./dbConnect")
const { createUser } = require("./controllers/User")
const { createBlog } = require("./controllers/Blog")
const { createComment } = require("./controllers/Comments")
const app = express()
const dotenv = require("dotenv").config()



app.use("/api/user",createUser)
app.use("/api/blog",createBlog)
app.use("/api/comments",createComment)


app.listen(3000,()=>{
    console.log(`Server started at port number 3000`);
})