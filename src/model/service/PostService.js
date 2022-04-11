import {initMongodbConnection} from "../../initailization/initMonogdb.js";
import {Post} from "../dto/dbModelDto.js";


let MongoClient
const addPost=async(post)=>{
    try{
        MongoClient=await initMongodbConnection()
        let resp=await MongoClient.db("MongoBlog").collection("post").insertOne(post)
        console.log("post inserted successfully ",resp)
    }catch (err){
        cossole.log(err)
    }finally{
        await MongoClient.close()
        console.log("connection closed")
    }
}

const addManyPost=async(ArrayOfPosts)=>{
    try{
        MongoClient=await initMongodbConnection()
        let resp=await MongoClient.db("MongoBlog").collection("post").insertMany(ArrayOfPosts)
        console.log("arrya of posts inserted successfully ",resp)
    }catch (err){
        cossole.log(err)
    }finally{
        await MongoClient.close()
        console.log("connection closed")
    }
}
const findPostByName=async(name)=>{
    try{
        MongoClient=await initMongodbConnection()
        let resp=await MongoClient.db("MongoBlog").collection("post").findOne({name:name})
        console.log("post found ",resp)
    }catch (err){
        cossole.log(err)
    }finally{
        await MongoClient.close()
        console.log("connection closed")
    }
}

const deletePostByName=async(name)=>{
    try{
        MongoClient=await initMongodbConnection()
        let resp=await MongoClient.db("MongoBlog").collection("post").deleteOne({name:name})
        console.log("post found and deleted successfully ",resp)
    }catch (err){
        cossole.log(err)
    }finally{
        await MongoClient.close()
        console.log("connection closed")
    }
}
const updatePost=async(post)=>{
    try{
        MongoClient=await initMongodbConnection()
        let resp=await MongoClient.db("MongoBlog").collection("post").findOne({name:post.name},{$set:post})
        console.log("post found and updated successfully",resp)
    }catch (err){
        cossole.log(err)
    }finally{
        await MongoClient.close()
        console.log("connection closed")
    }
}

addPost(new Post("cold water bath","psycology","effects of cold water on performance","cold water effeciency",
    "keiadmin","4434334","4322344"))

export default{addPost,addManyPost,updatePost,deletePostByName,findPostByName}