import yacht1 from '../../images/yacht1.png';
import yacht2 from '../../images/yacht2.png';
import yacht3 from '../../images/yacht3.png';
import phonomania1 from '../../images/phonomania1.png';
import phonomania2 from '../../images/phonomania2.png';
import phonomania3 from '../../images/phonomania3.png';
import wordpress1 from '../../images/wordpress1.png';
import wordpress2 from '../../images/wordpress2.png';
import wordpress3 from '../../images/wordpress3.png';
import transport1 from '../../images/transport1.png';
import transport2 from '../../images/transport2.png';
import transport3 from '../../images/transport3.png';

import ucl1 from '../../images/ucl1.png';
import ucl2 from '../../images/ucl2.png';
import ucl3 from '../../images/ucl3.png';
import dream1 from '../../images/dream11.png';
import dream2 from '../../images/dream11two.png';
import dream3 from '../../images/dream11three.png';

const ProjectData = [
    {
        id:'first',
        img1:yacht1,
        img2:yacht2,
        img3:yacht3,
        name:'Yacht Voyage',
        description:'Full Stack Web Development Project',
        features:`Different Admin and User Interace. Private Route. Fully Dynamic Website. Users Can write Review. User Can see Order Status Filtered by User Email. Admin Can Add, Edit or Delete Service. Admin Can Change Status of Order. Credit Card Payment Method Added .All the Information Saved in Database. Full responsive Design.`,
        technology:`React.js, JavaScript, Node.js, Express.js, MongoDB, Bootstrap Firebase, Stripe ,Heroku.`,
        liveSite:'https://yachts-voyage.web.app/',
        codeClient:'https://github.com/AhsanSium/yacht-voyage-full-stack-client',
        codeServer:'https://github.com/AhsanSium/yacht-voyage-full-stack-server',
    },
    {
        id:'second',
        img1:phonomania1,
        img2:phonomania2,
        img3:phonomania3,
        name:'PhonoMania',
        description:`Semi E-commerce Website`,
        features:`User Can Order SmartPhone. Order Page is secured with Firebase Auth .Order Information is saved on Database. User Can See Order Information in Oders Page. Admin can add , Remove , Edit Product. Full Responsive UI`,
        technology:`React.js, JavaScript, Node.js, Express.js, MongoDB, Bootstrap Firebase, Stripe ,Heroku.`,
        liveSite:'https://phonomania-e5c3e.web.app/',
        codeClient:'https://github.com/AhsanSium/phono-mania-full-stack-client',
        codeServer:'https://github.com/AhsanSium/phono-mania-full-stack-server',
    },
    {
        id:'third',
        img1:wordpress1,
        img2:wordpress2,
        img3:wordpress3,
        name:'Portfolio Website',
        description:`Wordpress Theme Development`,
        features:`Dynamic Home Page, Dynamic Blog Section, Dynamic Contact Page, Responsive Design`,
        technology:`1.PHP

        2.Wordpress
        
        3.Jquery
        
        4.MySQL
        
        5.XAMPP`
        ,
        liveSite:'https://ahsansium.github.io/portfolioPreview/index.html',
        codeClient:'https://github.com/AhsanSium/portfolioPreview',
        codeServer:null,
    },
    {
        id:'fourth',
        img1:transport1,
        img2:transport2,
        img3:transport3,
        name:'City Transport',
        description:`Simple React App Using Firebase Auth`,
        features:`1. Used Google Firebase

        2. User Login and Sign Up
        
        3. E-mail Password Login and Sign Up
        
        4. Email and Password Validation added
        
        5. Google Sign Up
        
        6. React Route
        
        7. Private Route Implementation
        
        8. Responsive Design
        
        9. Added Here Maps
        
        10. Added Maps Drag and Zoom Functionality`,
        technology:`: React.js, JavaScript, Material UI, Font-Awesome, Here Maps.`,
        liveSite:'https://city-transport-1e21a.web.app/',
        codeClient:'https://github.com/AhsanSium/city-transport-react-auth',
        codeServer:null,
    },
    {
        id:'fifth',
        img1:ucl1,
        img2:ucl2,
        img3:ucl3,
        name:'Champions League Info',
        description:`This is a simple React App showing UEFA Champions League Team Infos`,
        features:`1. Load Data from Thesportdb API , shown in Cards

        2. Used React Router for viewing Detail Team info in a different Route
        
        3. Used Route Parameter and load data using dynamic Route Parameter
        
        4. Live Site Hosted in Netlify
        
        Live Site Link: https://champions-league-info-by-ahsansium.netlify.app/
        
        5. Used Conditional Formatting for male and female players
        
        6. Used Bootstrap to make the site Responsive.
        
        7. Applied some design.
        
        8. Used De-structuring method while reading data.
        
        9. Added Read Me file in Github.
        
        10. Used font awesome.`,
        technology:`React.js , API, React-Router, Bootstrap, Netlify`,
        liveSite:' https://champions-league-info-by-ahsansium.netlify.app/',
        codeClient:'https://github.com/AhsanSium/champions-league-info-react-app',
        codeServer:null,
    },
    {
        id:'sixth',
        img1:dream1,
        img2:dream2,
        img3:dream3,
        name:'Dream 11 Football',
        description:`Football Team Selection React APP`,
        features:`1. 15 Players INFO Shown in Card Format

        2. Realistic Photo Name Salary Used
        
        3. On Button press Players can be selected
        
        4. Shown Selected Players Name , Salary and Total
        
        5. Used Fakedata and useEffect Hook
        
        6. Used meaningful project names
        
        7. Used Meaningful Component names
        
        8. Kept Component in different file-size
        
        9. Used De-structuring
        
        10. Used BootStrap
        
        11. Used Font Awesome`,
        technology:`React.js , API, React-Router, Bootstrap, Netlify, FontAwesome`,
        liveSite:'https://ahsansium-dream11-react-project.netlify.app/',
        codeClient:'https://github.com/AhsanSium/dream11-football-team-react-app',
        codeServer:null,
    },
]
export default ProjectData;