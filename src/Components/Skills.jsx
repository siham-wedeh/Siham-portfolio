import React, { useState } from 'react';
import Main_title from '../Context/Main_title.jsx';
import Data_skills from '../Context/Data_skills.jsx';
import Skill from '../Context/skill.jsx';

function Skills() {
    const [openSkills, setOpenSkills] = useState({
        frontend: false,
        backend: false
    });

    const toggleSkills = (section) => {
        setOpenSkills((prevState) => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    // const animateSkills = (section) => {
    //     const skillBars = document.querySelectorAll(`.skill-progress-${section}`);
    //     skillBars.forEach((bar) => {
    //         const skillLevel = bar.getAttribute('data-skill');
    //         bar.style.width = skillLevel;

    //         const rateSpan = bar.nextElementSibling;
    //         let percent = 0;
    //         const target = parseInt(skillLevel);

    //         const interval = setInterval(() => {
    //             if (percent >= target) {
    //                 clearInterval(interval);
    //             } else {
    //                 percent++;
    //                 rateSpan.textContent = percent + '%';
    //             }
    //         }, 10);
    //     });
    // };

    return (
        <div className="skills" id="skills">
            <div className="content" data-aos="fade-up" >
                <Main_title title="Skills" sub_title="My Technical Skills" />
                <div className="flex_row">
                    <div className="content_front">
                        <div className="title_type_skill" onClick={() => {
                            toggleSkills('frontend');
                            
                            
                        }}>
                            <div className="first">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" className="w-full h-auto !w-8 ">
                                    <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd">
                                    </path>
                                </svg>
                                <span>Frontend Stack</span>
                            </div>
                            <div className={`second ${openSkills.frontend ? 'active' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(234, 179, 8)" width="24" height="24" className={`w-full h-auto transition-transform !w-8 fill-primary ${openSkills.frontend ? 'rotate' : ''}`}>
                                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className={`rows ${openSkills.frontend ? 'open' : ''}`} >
                            {Data_skills.Front_end.map((skill, index) => (
                                <Skill
                                    key={index}
                                    lable={skill.lable}
                                    rate={skill.rate}
                                    progress={skill.progress}
                                    isVisible={openSkills.frontend} // Pass state
                                />
                            ))}
                        </div>
                    </div>

                    <div className="content_backend content_front">
                        <div className='title_type_skill' onClick={() => {
                            toggleSkills('backend');
                           
                        }}>
                            <div className="first">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" className="w-full h-auto !w-8 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z">
                                    </path>
                                </svg>
                                <span>Backend Stack</span>
                            </div>

                            <div className={`second ${openSkills.backend ? 'active' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(234, 179, 8)" width="24" height="24" className={`w-full h-auto transition-transform !w-8 fill-primary ${openSkills.backend ? 'rotate' : ''}`}>
                                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className={`rows ${openSkills.backend ? 'open' : ''}`}>
                            {Data_skills.Back_end.map((skill, index) => (
                                <Skill
                                    key={index}
                                    lable={skill.lable}
                                    rate={skill.rate}
                                    progress={skill.progress}
                                    isVisible={openSkills.backend} // Pass state
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
