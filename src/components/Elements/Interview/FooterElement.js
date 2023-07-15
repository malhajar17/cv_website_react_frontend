import React, { useState ,useContext} from "react";
import { useSpring, animated } from "react-spring";
import UserContext from "../../../contexts/UserContext";
import recordingHandler from "../../../handlers/interview/recordingHandler";
import recordingService from "../../../services/recordingService";
import endinterviewService from "../../../services/endInterviewService"

import dummyWav from '../../../assets/dummy.wav';

const FooterElement = ({ startInterview, onIsPlayingChange, onStateChange }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const { userSessionInfo,updateUserSessionInfo } = useContext(UserContext);
    const { sequence } = userSessionInfo;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    React.useEffect(() => {
        const handleBeforeUnload = async (event) => {
          event.preventDefault();
          // Get the sessionID from the userSessionInfo context
          const sessionID = userSessionInfo.sessionID;
    
          await endinterviewService.postEndInterviewRequest({ sessionID, review: '' });
    
          // Older browsers require returnValue to be set
          event.returnValue = '';
        };
    
        // Add the beforeunload event listener when the component mounts
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        // Remove the event listener when the component unmounts
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
      }, []);

      
    const handleRecordingComplete = async (blob) => {
        console.log("Recording stopped. Blob:", blob);
        await recordingService.uploadRecording(blob,userSessionInfo.accountID, userSessionInfo.sessionID,userSessionInfo.sequence);
        
        if (!isMobile) {
            // For non-mobile clients, use the previous logic
            const fetchedAudioUrl = await recordingService.fetchAudio(userSessionInfo.accountID, userSessionInfo.sessionID,userSessionInfo.sequence);
            updateUserSessionInfo({
                  sequence: sequence+1,
                });
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
                recordingService.fetchAudio(userSessionInfo.accountID, userSessionInfo.sessionID,userSessionInfo.sequence).then(fetchedAudioUrl => {
                    updateUserSessionInfo({
                        sequence: sequence+1,
                      });
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
