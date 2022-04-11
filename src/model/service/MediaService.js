import {initMongodbConnection} from "../../initailization/initMonogdb.js";

let MongoClient

const createorUpdateCollection=async ()=>{
    MongoClient=await initMongodbConnection()
    try {
        let resp=await MongoClient.db("MongoBlog").createCollection("Media")
        console.log(" media collection created succcessfully")
    }catch(err){
        console.log(err)
    }finally {
        MongoClient.close()
    }
}

const addMedia=async(Media)=>{
    try{
        MongoClient=await initMongodbConnection()
        let resp=await MongoClient.db("MongoBlog").collection("media").insertOne(media)
        console.log("media inserted successfully ",resp)
    }catch (err){
        cossole.log(err)
    }finally{
        await MongoClient.close()
        console.log("connection closed")
    }
}

const addManymedia=async(ArrayOfMedias)=>{
    try{
        MongoClient=await initMongodbConnection()
        let resp=await MongoClient.db("MongoBlog").collection("media").insertMany(ArrayOfMedias)
        console.log("arrya of medias inserted successfully ",resp)
    }catch (err){
        cossole.log(err)
    }finally{
        await MongoClient.close()
        console.log("connection closed")
    }
}
const findmediaByName=async(name)=>{
    try{
        MongoClient=await initMongodbConnection()
        let resp=await MongoClient.db("MongoBlog").collection("media").findOne({name:name})
        console.log("media found ",resp)
    }catch (err){
        cossole.log(err)
    }finally{
        await MongoClient.close()
        console.log("connection closed")
    }
}

const deletemediaByName=async(name)=>{
    try{
        MongoClient=await initMongodbConnection()
        let resp=await MongoClient.db("MongoBlog").collection("media").deleteOne({name:name})
        console.log("media found and deleted successfully ",resp)
    }catch (err){
        cossole.log(err)
    }finally{
        await MongoClient.close()
        console.log("connection closed")
    }
}
const updatemedia=async(media)=>{
    try{
        MongoClient=await initMongodbConnection()
        let resp=await MongoClient.db("MongoBlog").collection("media").findOne({name:media.name},{$set:media})
        console.log("media found and updated successfully",resp)
    }catch (err){
        cossole.log(err)
    }finally{
        await MongoClient.close()
        console.log("connection closed")
    }
}
export default{addMedia,addManymedia,updatemedia,deletemediaByName,findmediaByName}