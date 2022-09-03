import { useReadChannelState,useChannelMessage } from "@onehop/react";
import { useEffect } from "react";
import { hop } from '@onehop/client';
const channelId = 'group_chat_123'

export default function TempStuff() {

    const client = hop.init({
        projectId: "project_NTA1MTQwOTkyNDU4ODM1OTc"
    })
    
    client.on('MESSAGE',({event,data}) => console.log(event,data))

    const {state} = useReadChannelState(channelId)


    if(!state) return <p>Loading...</p>
    return (
        <>
        <p>State stuff: {state.message}</p>
        </>
    )
}