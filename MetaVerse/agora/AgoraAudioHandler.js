class AgoraAudioHandler{

    client = null
    agoraToken=""
    localAudioTrack=null
    
    constructor(){
        this.client = AgoraRTC.createClient({  mode: "rtc", codec: "vp8" });

        this.client.on("user-published", async (user, mediaType) => {

            // Subscribe to a remote user.
            await this.client.subscribe(user, mediaType);

            // If the subscribed track is audio.
            if (mediaType === "audio") {
              const remoteAudioTrack = user.audioTrack;
              remoteAudioTrack.play()
            }
        });

        this.client.on("user-unpublished", user => {
            // Get the dynamically created DIV container.
            const playerContainer = document.getElementById(user.uid);
            // Destroy the container.
            if(playerContainer){
                playerContainer.remove();
            }
        });
    }


    async leaveChannel(){
        await (this.client).leave();
    }

    async createChannel(channel_name){
        if(window.myLocalAudio==null){
            document.exitPointerLock();
            window.myLocalAudio = await AgoraRTC.createMicrophoneAudioTrack();  
        }
        this.localAudioTrack = window.myLocalAudio;
        await this.client.join(this.agoraToken,channel_name,null,null);
        this.client.publish([this.localAudioTrack]);  
    }

    async joinChannel(channel_name){
        await this.client.join(this.agoraToken,channel_name,null,null);
    }

}

