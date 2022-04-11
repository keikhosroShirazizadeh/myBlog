import User from "../compositeServices/User.js"

export const routes=[
    {
        method:"POST",
        url:"/api/user/createPost",
        handler:User.createPost,
        schema:{
            body:{
                type:'object',
                required:['name','title','author'],
                properties:{
                    name:{type:"string"},
                    title:{type:"string"},
                    description:{type:"string"},
                    content:{type:"string"},
                    category:{type:"string"},
                    author:{type:"string"},
                    createdDate:{type:"string"},
                    lastUpdate:{type:"string"},
                }
            },
            response:{
                200:{
                    type:'object',
                    Properties:{
                        hello:{type:'string'}
                    }
                }
            }
        }
    }
]

export default{routes}