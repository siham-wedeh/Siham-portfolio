import img_p1 from '../assets/images/project_img_1.png';
import driftx_img from '../assets/images/driftx_img.png';
import almasref_img from '../assets/images/almasref_img.png';
import LEGO_img from '../assets/images/lego.png';
import bank_img from '../assets/images/OAB.png';
import meerab_img from '../assets/images/meerab.png';
import elevatia_img from '../assets/images/elevatia.png';
import tickdot_img from '../assets/images/tickdot.png';
import protfolio_mr from '../assets/images/protfolio_mr.png';
const Data_projects = [
    {
        title: "ELEVATIA",
        description: "ELEVATIA is a real estate website I worked on as a freelance frontend developer . The project was built using Laravel on the backend, while I handled the frontend design and development .",
        img:elevatia_img,
        tags: '#HTML #CSS #JS #Laravel',
        link: 'https://elevatiaproperties.com/',
    },
    {
        title: "GIFIS",
        description: "GIFIS is a dynamic web platform that supports government efforts to enhance industrial safety. It is developed using Laravel for backend operations and Strapi as a headless CMS to manage content and form submissions efficiently ",
        img:img_p1,
        tags: '#Laravel #Strapi',
        link: 'https://industrialsafetyinitiative.com/',
    },
    {
        title: "DriftX",
        description: " DriftX is a dynamic web platform developed using Laravel and Nova , designed to manage and showcase content related to motorsport events and media. It includes features like media galleries, event schedules, and partner showcases, providing a seamless experience for both administrators and users.",
        img:driftx_img,
        tags: '#Laravel #Nova',
        link: 'https://driftx.com/',

    },
    {
        title: "Meerab Properties LLC",
        description: "Mareeb Real Estate is a real estate website I worked on as a freelance frontend developer . The project was built using Laravel on the backend, while I handled the frontend design and development .",
        img:meerab_img,
        tags: '#HTML #CSS #JS #Laravel',
        link: 'https://meerabproperties.com/',

    },
    {
        title: "Mohammad Farhat - Marketing Consultant",
        description: "A professional portfolio website for Mohammad Farhat, a digital marketing consultant with expertise in digital strategy, market research, e-commerce, and real estate marketing in Dubai. The portfolio highlights his proven track record, global client base, and achievements across multiple digital channels.",
        img: protfolio_mr, 
        tags: '#Portfolio #Marketing',
        link: 'https://siham-wedeh.github.io/protfolio_new/',

    },
    {
        title: "ALMASREF",
        description: "Al MASRAF is a dynamic web platform developed using Laravel and Nova, designed to provide world-class banking and trade finance services in the Gulf region. ",
        img:almasref_img,
        tags: '#Laravel #Nova #Tailwind',
        link: 'https://almasraf.ae/',

    },
    {
        title: "ATM screen (ALIZZ Bank) and (OAB Bank)",
        description: "I develop custom ATM screen interfaces that feature secure login systems , virtual keyboards , and smooth user interaction flows . ",
        img:bank_img,
        tags: '#HTML #CSS #JS',

    },
    {
        title: "Landing page like TickDot",
        description: "Ensure the Tickdot screen is fully responsive across all screen sizes and supports seamless language switching for multilingual users.",
        img:tickdot_img,
        tags: '#HTML #CSS #JS #Laravel',
        link: 'https://tickdot.app/en',

    },

    {
        title: "LEGOLAND®",
        description: "Designed and developed responsive email templates for LEGOLAND® Dubai and LEGOLAND® Water Park,promoting LEGO®-themed attractions and events to families. Focused on creating engaging, brand-consistent, and mobile-friendly emails.",
        img:LEGO_img,
       

    }
]
export default Data_projects;