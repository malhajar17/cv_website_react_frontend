const recordingHandler = {
    mediaRecorder: null,
    chunks: [],

    startRecording: (onComplete) => {
        navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then((stream) => {
            let options;

            if (MediaRecorder.isTypeSupported('audio/webm')) {
                options = {mimeType: 'audio/webm'};
            } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
                options = {mimeType: 'audio/mp4'};
            } else {
                console.error("No suitable mimeType found for this device");
            }

            const mediaRecorder = new MediaRecorder(stream, options);
            recordingHandler.mediaRecorder = mediaRecorder;
            recordingHandler.chunks = [];

            mediaRecorder.addEventListener("dataavailable", recordingHandler.handleDataAvailable);
            mediaRecorder.addEventListener("stop", () => {
                recordingHandler.handleRecordingStop(onComplete);
            });

            mediaRecorder.start(1000);
        });
    },

    stopRecording: () => {
        recordingHandler.mediaRecorder?.stop();
    },

    handleDataAvailable: (event) => {
        recordingHandler.chunks.push(event.data);
    },

    handleRecordingStop: (onComplete) => {
        const blob = new Blob(recordingHandler.chunks, { type: recordingHandler.mediaRecorder.mimeType });
        recordingHandler.chunks = [];

        if (typeof onComplete === "function") {
            onComplete(blob, recordingHandler.mimeType);
        }
    },
};

export default recordingHandler;
