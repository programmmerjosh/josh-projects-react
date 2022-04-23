
// Font Awesome Icons
import bootstrap from '../faBrandIcons/bootstrap.svg';
import css from '../faBrandIcons/css3-alt.svg';
import html from '../faBrandIcons/html5.svg';
import react from '../faBrandIcons/react.svg';
import swift from '../faBrandIcons/swift.svg';
import wordpress from '../faBrandIcons/wordpress.svg';
import dart from '../faBrandIcons/dart-programming-language.svg';
import c from '../faBrandIcons/c-program.svg'; // C Programming language
import xcode from '../faBrandIcons/xcode.svg';
import flutter from '../faBrandIcons/flutter-svgrepo-com.svg';
import jquery from '../faBrandIcons/jquery.svg';
import js from '../faBrandIcons/js-square.svg';
import ml from '../faBrandIcons/learning-machine-ai.svg';
import php from '../faBrandIcons/php.svg';
import coreData from '../faBrandIcons/coreData.svg';
import firebase from '../faBrandIcons/firebase-1.svg';
import api from '../faBrandIcons/api-svgrepo-com.svg';
import mysql from '../faBrandIcons/mysql.svg';
import realm from '../faBrandIcons/realm.svg';
// import python from '../faBrandIcons/python.svg';
// import google from '../faBrandIcons/google.svg';

export function FaIcon(props) {
    return <img src={props.svg} className="faIcon" alt={props.alt} />
}

const myProjects = [
    {
        id: 1,
        type: "Mobile Application",
        source: "Josh",
        title: "Goal Symmetry",
        description: "Josh wanted to create the ultimate goal setting, self-studying, personal development blueprint tool. So, here it is! He's also got some exciting updates already lined up for 2022. Available on App Store AND Play Store.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/goal_symmetry-public",
        directLinkUrl: "https://www.sagaciousapps.com/apps",
        iconSvgs: [flutter, dart, xcode, firebase, api],
    },
    {
        id: 2,
        type: "Website",
        source: "Josh",
        title: "Sagacious Apps LTD",
        description: "Business website of a mobile application development limited company. Josh actually started this company himself in October 2021.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/sagacious-apps",
        directLinkUrl: "https://www.sagaciousapps.com",
        iconSvgs: [html, css, jquery, bootstrap],
    },
    {
        id: 3,
        type: "Website",
        source: "Josh",
        title: "Freelancer Website",
        description: "Web developer freelancer website built for and by myself.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/freelancer2021",
        directLinkUrl: "https://www.developerforlife.com",
        iconSvgs: [html, css, jquery, bootstrap],
    },
    {
        id: 4,
        type: "Website",
        source: "Josh",
        title: "Résumé",
        description: "Résumé/portfolio website built for and by myself. Every developer needs a portfolio to showcase and demonstrate some skills and previous projects, so here you go.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/programmmerjosh.github.io",
        directLinkUrl: "https://www.joshua-resume.com",
        iconSvgs: [html, css, jquery, bootstrap],
    },
    {
        id: 5,
        type: "Website",
        source: "Josh",
        title: "Truth & Critical Thinking",
        description: "When you've got or you've discovered something important to share with the world, you should share it. This website was built specifically for the purpose of sharing factual and/or experiential information however controversial some of it may be. Check it out.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/josh-blog",
        directLinkUrl: "https://www.think-write-grow.com",
        iconSvgs: [html, css, jquery, bootstrap],
    },
    {
        id: 6,
        type: "Mobile Application",
        source: "Josh",
        title: "Ready Set Goals",
        description: "If you saw Goal Symmetry, Ready Set Goals is where it all started. This was Josh's first goal setting app. It's not quite as nifty and feature full as Goal Symmetry, but it works. Available on the App Store.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/ready-set-goals-public",
        directLinkUrl: "https://apps.apple.com/gb/app/ready-set-goals/id1200446891",
        iconSvgs: [swift, xcode, realm],
    },
    {
        id: 7,
        type: "Mobile Application",
        source: "Josh",
        title: "Socks - Bill Assigning Tool",
        description: "Socks - Bill Assigning Tool is exactly what it sounds like. It's an application that simplifies the process of assigning the amounts each person needs to contribute towards the restaurant check/bill. Available on the App Store.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/sock-bill-assigning-tool-public",
        directLinkUrl: "https://apps.apple.com/gb/app/socks-bill-assigning-tool/id1193167667",
        iconSvgs: [swift, xcode],
    },
    {
        id: 8,
        type: "Website",
        source: "Course",
        title: "Bootstrap To Wordpress",
        description: "A static webpage (HTML, CSS, JS & Bootstrap) converted into a dynamic WordPress site.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/BootstrapToWordPress",
        directLinkUrl: "https://www.udemy.com/course/bootstrap-to-wordpress/",
        iconSvgs: [html, css, jquery, wordpress, bootstrap],
    },
    {
        id: 9,
        type: "Mobile Application",
        source: "Josh",
        title: "Norris 25",
        description: "Norris 25 was one of Josh's very first apps. Norris 25 is a survey/questionaire type app. It serves the user with several questions on a particular topic and the then calculates the user's score based on their answers. Available on the App Store.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/norris25-public",
        directLinkUrl: "https://apps.apple.com/gb/app/norris-25/id1201671410",
        iconSvgs: [swift, xcode],
    },
    {
        id: 10,
        type: "Website",
        source: "Course",
        title: "LoopLab",
        description: "This is a Bootstrap Theme - followed & coded along with the course.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/Looplab-Bootstrap-theme",
        directLinkUrl: "https://www.udemy.com/course/bootstrap-4-from-scratch-with-5-projects/",
        iconSvgs: [html, css, jquery, bootstrap],
    },
    {
        id: 11,
        type: "Website",
        source: "Course",
        title: "Mizuxe",
        description: "This is a Bootstrap Theme - followed & coded along with the course.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/Mizuxe-Bootstrap-theme",
        directLinkUrl: "https://www.udemy.com/course/bootstrap-4-from-scratch-with-5-projects/",
        iconSvgs: [html, css, jquery, bootstrap],
    },
    {
        id: 12,
        type: "Website",
        source: "Course",
        title: "Blogen",
        description: "This is a Bootstrap Theme - followed & coded along with the course.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/Blogen-Bootstrap-theme",
        directLinkUrl: "https://www.udemy.com/course/bootstrap-4-from-scratch-with-5-projects/",
        iconSvgs: [html, css, jquery, bootstrap],
    },
    {
        id: 13,
        type: "Website",
        source: "Course",
        title: "Glozzom",
        description: "This is a Bootstrap Theme - followed & coded along with the course.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/Glozzom-Bootstrap-theme",
        directLinkUrl: "https://www.udemy.com/course/bootstrap-4-from-scratch-with-5-projects/",
        iconSvgs: [html, css, jquery, bootstrap],
    },
    {
        id: 14,
        type: "Website",
        source: "Course",
        title: "Portfoligrid",
        description: "This is a Bootstrap Theme - followed & coded along with the course.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/Portfoligrid-Bootstrap-theme",
        directLinkUrl: "https://www.udemy.com/course/bootstrap-4-from-scratch-with-5-projects/",
        iconSvgs: [html, css, jquery, bootstrap],
    },
    {
        id: 15,
        type: "Mobile Application",
        source: "Course",
        title: "Twittermenti",
        description: "This app produces a response based on twitter responses from real people. Machine Learning technology.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/Twittermenti",
        directLinkUrl: "https://www.udemy.com/course/ios-13-app-development-bootcamp/",
        iconSvgs: [swift, xcode, ml],
    },
    {
        id: 16,
        type: "Mobile Application",
        source: "Course",
        title: "Seefood",
        description: "Take a photo and the app will tell you if the main object in the picture is a hotdog or not. Machine Learning technology. This app was cloned from an episode of the popular series, Silicon Valley.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/Seefood",
        directLinkUrl: "https://www.udemy.com/course/ios-13-app-development-bootcamp/",
        iconSvgs: [swift, xcode, ml],
    },
    {
        id: 17,
        type: "Mobile Application",
        source: "Course",
        title: "Clima Clone",
        description: "A cloned version of a weather app called Clima. Uses the weather-map api.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/Clima",
        directLinkUrl: "https://www.udemy.com/course/ios-13-app-development-bootcamp/",
        iconSvgs: [swift, xcode, api],
    },
    {
        id: 18,
        type: "Mobile Application",
        source: "Course",
        title: "Todoey Clone",
        description: "A cloned version of the popular Todoey - ToDo list app.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/Todoey",
        directLinkUrl: "https://www.udemy.com/course/ios-13-app-development-bootcamp/",
        iconSvgs: [swift, xcode, coreData],
    },
    {
        id: 19,
        type: "Mobile Application",
        source: "Course",
        title: "Flappy Bird Clone",
        description: "A cloned version of the famous Flappy Bird mobile app.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/FlappyBird",
        directLinkUrl: "https://www.udemy.com/course/ios-13-app-development-bootcamp/",
        iconSvgs: [swift, xcode],
    },
    {
        id: 20,
        type: "Terminal Application",
        source: "Course",
        title: "Spell Checker",
        description: "CS50 Problem Set 5: Implementing a spell checker",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/cs50-pset5",
        directLinkUrl: "https://discover.edx.org/xgs/course/introduction-computer-science-harvardx-cs50x?hs-referral=Course-Card&hsLang=en",
        iconSvgs: [c],
    },
    {
        id: 21,
        type: "Web Server",
        source: "Course",
        title: "Basic Web Server",
        description: "CS50 Problem Set 6: Implementing a web server.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/cs50-pset6",
        directLinkUrl: "https://discover.edx.org/xgs/course/introduction-computer-science-harvardx-cs50x?hs-referral=Course-Card&hsLang=en",
        iconSvgs: [c, html, php],
    },
    {
        id: 22,
        type: "Web Application",
        source: "Course",
        title: "Stocks & Shares",
        description: "CS50 Problem Set 7: A mock website that allows you to buy fake amounts of stocks and shares using fake money.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/cs50-pset7",
        directLinkUrl: "https://discover.edx.org/xgs/course/introduction-computer-science-harvardx-cs50x?hs-referral=Course-Card&hsLang=en",
        iconSvgs: [php, mysql, html, css],
    },
    {
        id: 23,
        type: "Website",
        source: "Course",
        title: "Google Maps Feature",
        description: "CS50 Problem Set 8: A mashup of Google Maps and Google News",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/cs50-pset8",
        directLinkUrl: "https://discover.edx.org/xgs/course/introduction-computer-science-harvardx-cs50x?hs-referral=Course-Card&hsLang=en",
        iconSvgs: [php, api, html, css],
    },
    {
        id: 24,
        type: "Web Application",
        source: "Course",
        title: "React & Firebase Intorduction",
        description: "Add meetup locations to firebase DB, fetch those locations and display favorites.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/react-firebase-crud",
        directLinkUrl: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
        iconSvgs: [html, css, react, firebase],
    },
    {
        id: 25,
        type: "Web Application",
        source: "Course",
        title: "React & Bootstrap Tutorial",
        description: "Simple tutorial I found I YouTube on how to add Bootstrap to a React App",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/react-bootstrap-tutorial",
        directLinkUrl: "https://www.youtube.com/watch?v=8pKjULHzs0s",
        iconSvgs: [html, css, react, bootstrap],
    },
    {
        id: 26,
        type: "Web Application",
        source: "Course",
        title: "Keeper App Clone",
        description: "Keeper note taking web app clone. No backend implemented.",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/keeper-app-clone",
        directLinkUrl: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
        iconSvgs: [html, css, react],
    },
    {
        id: 27,
        type: "Web Application",
        source: "Course",
        title: "Simple Drum Kit",
        description: "SPA that a user can interact with by clicking on buttons OR pressing specific keyboard keys to produce a particular drum sound",
        imageUrl: "",  // TODO
        gitHubUrl: "https://github.com/programmmerjosh/SimpleDrumKit",
        directLinkUrl: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
        iconSvgs: [html, css, js],
    },
    {
        id: 28,
        type: "Web Application",
        source: "Josh",
        title: "Josh's Projects",
        description: "React app that displays my portfolio projects",
        imageUrl: "",  // TODO
        gitHubUrl: "", // TODO
        directLinkUrl: "",
        iconSvgs: [html, css, react, bootstrap],
    },
];
export default myProjects;