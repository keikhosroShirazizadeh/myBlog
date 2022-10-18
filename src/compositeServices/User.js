import PostService from "../model/service/PostService.js";
import {Post} from "../model/dto/dbModelDto.js";
const createPost=async(req,reply)=>{
    console.log("create apost is called")
    const newpost=new Post(req.body.name,
        req.body.category,
        req.body.description,
        req.body.content,
        req.body.author,
        req.body.createdDate,
        req.body.lastUpdate
        )
    const post=PostService.findPostByDetails({name:newpost.name,title:newpost.title})
    if(post){
        console.log("throw new error");
        throw new Error("a post with this name and title is created before")
        
    }else{
        try {
            let resp= await PostService.addPost(newpost)
            reply.send("inserted")
    
        }catch (err){
            console.log(err)
        }

    }

    

}

export default{createPost}