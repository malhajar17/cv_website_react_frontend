import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import recordingHandler from "../../../handlers/interview/recordingHandler";
import recordingService from "../../../services/recordingService";

import dummyWav from '../../../assets/dummy.wav';

const FooterElement = ({ startInterview, onIsPlayingChange, onStateChange }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const handleRecordingComplete = async (blob) => {
        console.log("Recording stopped. Blob:", blob);
        await recordingService.uploadRecording(blob);
        
        if (!isMobile) {
            // For non-mobile clients, use the previous logic
            const fetchedAudioUrl = await recordingService.fetchAudio();
            // Create new audio object and play it
            let audio = new Audio(fetchedAudioUrl);

            audio.onplay = () => {
                setIsPlaying(true);
                onIsPlayingChange(true);
                onStateChange("speaking");
            };

            audio.onended = () => {
                setIsPlaying(false);
                onIsPlayingChange(false);
                onStateChange("stopped_speaking");
            };

            // Play the audio
            audio.play();
        }
    };

    const playIfMobile = () => {
        if (isMobile) {
            // Create new audio object and start playback with a dummy source
            let audio = new Audio(dummyWav);

            // Start playback immediately
            audio.play().then(() => {
                recordingService.fetchAudio().then(fetchedAudioUrl => {
                    // Replace source when fetch completes
                    audio.src = fetchedAudioUrl;
                    audio.load();
                    audio.onplay = () => {
                        setIsPlaying(true);
                        onIsPlayingChange(true);
                        onStateChange("speaking");
                    };
                    audio.play()
        
                    audio.onended = () => {
                        setIsPlaying(false);
                        onIsPlayingChange(false);
                        onStateChange("stopped_speaking");
                    };
                });
            }).catch(e => console.error('Playback failed:', e));
        }
    };

    const handleStartRecording = () => {
        setIsRecording(true);
        onStateChange("recording");
        recordingHandler.startRecording(handleRecordingComplete);
    };

    const handleStopRecording = () => {
        setIsRecording(false);
        onStateChange("stopped_recording");
        recordingHandler.stopRecording();
        playIfMobile();
    };
    const handleEndInterview = () => {
        setIsRecording(false);
        setIsPlaying(false);
        onStateChange("end_interview");
      };
      
    const startButtonContent = isRecording ? (
        <img
            src="https://img.icons8.com/sf-black-filled/64/stop-circled.png"
            alt="stop-circled"
        />
    ) : (
        <div className="start-recording-button">
            <img src="https://img.icons8.com/retro/32/record.png" alt="record" />
        </div>
    );

    const fade = useSpring({
        opacity: startInterview ? 1 : 0,
        config: { duration: 1000 },
    });
    
    if (!startInterview) {
        return null; // Render nothing if startInterview is false
    }

    
    return (
        <animated.footer style={fade} className="footer">
            <div className="footer-content">
                <div
                    className={`start-recording ${isRecording ? "stop-recording" : ""}`}
                    onClick={isRecording ? handleStopRecording : handleStartRecording}
                >
                    {startButtonContent}
                </div>
                <div className="recording-text" onClick={isRecording ? handleStopRecording : handleStartRecording}>
                    {isRecording ? "Stop Recording" : "Start Recording"}
                </div>
                <div className="end-interview" onClick={handleEndInterview}>
                    End Interview
                </div>
                
            </div>
        </animated.footer>
    );
};

export default FooterElement;
