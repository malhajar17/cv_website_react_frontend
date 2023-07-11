import React, { useState } from 'react';
import HomeSection from '../components/Sections/HomeSection';
import ExperienceSection from '../components/Sections/ExperienceSection';
import CertificatesSection from '../components/Sections/CertificatesSection';
import AboutMeSection from '../components/Sections/AboutMeSection';
import SchedInterviewSection from '../components/Sections/SchedInterviewSection';
import startUpService from "../services/startupService"

import '.././styles/Contact.css';
import '.././styles/About.css';
import '.././styles/nicepage.css';
import '.././styles/Post-Template.css';
import '.././styles/Home.css';
import '.././styles/Blog-Template.css';
import '.././styles/Interview.css';

import '../assets/images.png';

function App() {
    const [startInterview, setStartInterview] = useState(false);    
    useEffect(() => {
        startUpService.warmupModel()
            .then((response) => console.log(response))
            .catch((error) => console.error(error));
    }, []);
    
    return (
        <div data-home-page="Home.html" data-home-page-title="Home" class="u-body u-xl-mode" data-lang="en">
            <link
                id="u-theme-google-font"
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i|Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
            />
            <link
                id="u-page-google-font"
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i|Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
            />
            <link rel="stylesheet" href="nicepage.css" media="screen" />
            <link rel="stylesheet" href="Home.css" media="screen" />
            <script className="u-script" type="text/javascript" src="jquery.js" defer=""></script>
            <script className="u-script" type="text/javascript" src="../jsIncluded/nicepage.js" defer=""></script>
            <div>
                {startInterview ? (
                    <HomeSection startInterview={startInterview} setStartInterview={setStartInterview} />
                ) : (
                    <>
                        <HomeSection startInterview={startInterview} setStartInterview={setStartInterview} />
                        <ExperienceSection />
                        <CertificatesSection />
                        <AboutMeSection />
                        <SchedInterviewSection />
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
