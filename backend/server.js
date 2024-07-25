const express = require("express")
const { graphqlHTTP } = require("express-graphql"); // Correct import
import { GraphQLSchema,GraphQLObjectType ,GraphQLString} from "graphql";

const app = express()
const squema = new GraphQLSchema({query:new GraphQLObjectType({name:"hello-world",fields:()=>{message:{type:GraphQLString}}})})
app.use("/graphql", graphqlHTTP({ graphiql: true }));
app.listen(5000.,()=>console.log("server running"))