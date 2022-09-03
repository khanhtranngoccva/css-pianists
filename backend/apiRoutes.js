import express from "express";
import {hop} from "./hopSDK.js";
import {ChannelType} from "@onehop/js";

const router = express.Router();

try {
    const channel = await hop.channels.create(ChannelType.UNPROTECTED, "__default__", );
} catch (e) {
}


router.get("/getTime", (req, res) => {
    res.status(200).send({
        success: true,
        time: +new Date(),
    })
});


router.post("/sendNote", async (req, res) => {
    const body = req.body;
    console.log(body.note, new Date(body.timestamp));
    res.status(200).send({
        success: true,
    });
    hop.channels.publishMessage("__default__", "MESSAGE_CREATE", {
        ...body,
        timestamp: body.timestamp + 5000,
    });
});

export default router;