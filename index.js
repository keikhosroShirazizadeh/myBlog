
import fastify from "fastify";
import {routes} from "./src/routes/user.js"
import fastifySwagger from "fastify-swagger";
import {swaggerOptions} from "./src/consfiguration/swagger.js"

const app=fastify({
    logger:true
})

app.register(fastifySwagger,swaggerOptions)

routes.forEach((route,index)=>{
    app.route(route)
})

const startServer=async ()=>{
    try{
        await app.listen(3000)
        app.swagger()
        app.log.info(`server is running on ${app.server.address()}`)
    }catch (err){
        console.log(err)
        process.exit(1)
    }
}
startServer()