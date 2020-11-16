import React from 'react';
import './pages.css';
import Stack from '../tech-stack';
import Link from '../links';
const About=()=>{
    return(
        <div>
        <h2>Margo Astreyko</h2>
        <h2>Junior FrontEnd Developer</h2>
        <h3>Previous Working Experience</h3>
        <ul>
            <li>
                <p>
                    30.06.2020 - now
                </p>
                <span>FrontEnd Trainee<br/>
                AIS Novations<br/>
                During the last month I have been working on exam-project for GitHub activity analytics (desktop/web application).
               Desktop part is bild on Electron and web is on React using MongoDB. Roles: FullStack dev, PM, DevOps. 
               Most of my duties connected with development of the desktop app, but also include some project management, deployment on company's server.
              How does it works: you can examin any repo located on your PC and get statistics common and time interval restricted on stack used, % of changes made by each contributor, each commit. 
                </span>
            </li>
              <li>
                <p>
                    01.09.2019 - now
                </p>
                <span>Economist<br/>
                IE<br/>
               Working with documents
                </span>
            </li>
                    <li>
                <p>
                    13.10.2018 - 01.09.2020 
                </p>
                <span>Economist/Recruiter<br/>
                Administrative resource<br/>
                </span>
            </li>
                    <li>
                <p>
                    10.09.2017 - 13.10.2018 
                </p>
                <span>Economist<br/>
                PoPuti<br/>
                </span>
            </li>


        </ul>
        
        <h3>Education</h3>
        <p id='edu'>2014-2018 BSU Economic faculty, Economist-analytic </p>
        <Stack/>
        <Link/>

        </div>
    )
}

export default About;