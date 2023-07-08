const recordingHandler = {
    mediaRecorder: null,
    chunks: [],

    startRecording: (onComplete) => {
        navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then((stream) => {
            const mediaRecorder = new MediaRecorder(stream);
            recordingHandler.mediaRecorder = mediaRecorder;
            recordingHandler.chunks = [];

            mediaRecorder.addEventListener("dataavailable", recordingHandler.handleDataAvailable);
            mediaRecorder.addEventListener("stop", () => {
                recordingHandler.handleRecordingStop(onComplete);
            });

            mediaRecorder.start(1000); // modified line
        });
    },


    stopRecording: () => {
        recordingHandler.mediaRecorder?.stop();
    },

    handleDataAvailable: (event) => {
        recordingHandler.chunks.push(event.data);
    },

    handleRecordingStop: (onComplete) => {
        const blob = new Blob(recordingHandler.chunks, { type: "audio/mp3" });
        recordingHandler.chunks = [];

        if (typeof onComplete === "function") {
            onComplete(blob);
        }
    },
};

export default recordingHandler;
