let objectState = {}
let myChannel = null;

window.myLocalAudio =null

function createChannel(channel_name){
    if(!myChannel){
        myChannel = new AgoraAudioHandler();
        myChannel.createChannel(channel_name);
    }
}

function leaveChannel(obj_name){
    console.log("Recive Leave Request(JavaScript)!");
    let agHandler = objectState[obj_name];
    if(agHandler){
        agHandler.leaveChannel()
        delete objectState[obj_name];
    }
}

function joinChannel(obj_name,channel_name){
    let agHandler = objectState[obj_name];
    if(agHandler){
        agHandler.joinChannel(channel_name)
    }else{
        agHandler = new AgoraAudioHandler();
        agHandler.joinChannel(channel_name);
        objectState[obj_name] = agHandler;
    }
}

function setAudioLevel(obj_name,level){
    let agHandler = objectState[obj_name];
    if(agHandler){
        agHandler.setVolume(level);
    }    
}
