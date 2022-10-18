import { Post } from "../model/dto/dbModelDto.js"
import PostService from "../model/service/PostService.js"
// export const addPost=async(req,reply)=>{
//     console.log("create apost is called")
//     const post=new Post(req.body.name,
//         req.body.category,
//         req.body.description,
//         req.body.content,
//         req.body.author,
//     )
//     try {
//         const findpost=await PostService.findPostByDetails({name:req.body.name})
//         if(findpost){
//             throw new Error("this post with this name is created before")
//         }
//         post.createDate=Date.now().toString()
//         post.lastUpdate=Date.now().toString()
//         let resp= await PostService.addPost(post)
//         reply.send(JSON.stringify({message:"data inserted successfully"}))

//     }catch (err){
//         console.log(err)
//     }

// }
export const findPost=async(req,reply)=>{
    let details=req.body.details
    console.log(details);
    let post=await PostService.findPostByDetails(details)
    console.log("found post",post);
    reply.send(JSON.stringify(post))
}

export default{addPost,findPost}