import {hop} from "./hopSDK.js";
import { ChannelType } from "@onehop/js";
import express from 'express';
import http from 'http'
import { Server } from "socket.io";
const app = express();
const server = http.createServer(app);
const io = new Server(server)

/*const channel = await hop.channels.create(
    ChannelType.UNPROTECTED,
    "group_chat_123", 
    {
        state: {
            message: 'This was sent from the Hop Channel enabled backend',
            myCustomValue: 123
        }
    }
)*/


app.get('/',(req,res) => {
    hop.channels.publishMessage("group_chat_123","MESSAGE_CREATE",{
        content: "Hello hop",
        author: "Backend",
        key:"e"
    }).then(() => {
        res.sendStatus(200)
    })
})

/*io.on('connection', (socket) => {
    console.log('Connection made')
   
})*/



server.listen(3000, () => {
    console.log('Listening on port 3000')
})