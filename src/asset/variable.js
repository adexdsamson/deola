import React, { Fragment } from "react";
// import Eapay from './portfolio/beetle.jpg';
import port3 from './portfolio/port3.png';
import port from './portfolio/port1.png';
import port2 from './portfolio/port2.png';
import port4 from './portfolio/cruxcotech.png';
import port5 from './portfolio/jsn.png';


export const work = [
    {
        title: 'Sound Enginee', 
        date: 'July 2014 - 2018', 
        contentHead: 'Oracle Christian Center O2C',
        content: 'Coordinate a team of technical sound engineers, to provide an excellent sound to the church', 
        icon: ''
    },
    {
        title: 'Internship', 
        date: '6 months', 
        contentHead: 'FIIRO',
        content: 'Assisted with the processing of foodstuffs into granular and preserved state.', 
        icon: ''
    },
    {
        title: 'Internship', 
        date: '05 May 2018 - 05 Oct 2018', 
        contentHead: 'NIMET',
        content: 'Assisted in reading, calculate and measuring the current state of weather and also predicting the weather outcomes.', 
        icon: ''
    },
    {
        title: 'Internship', 
        date: '1 Sept 2021 - present', 
        contentHead: 'Alabian Solutions',
        content: 'Assisted in developing the company\'s client website and also design some website with figma.', 
        icon: ''
    },
]

export const Education = [
    {
        title: 'Bachelor Degree', 
        date: 'December 2014 - June 2018', 
        contentHead: 'Federal University of Agriculture, Abeokuta',
        content: 'Studied Physics in Federal University of Agriculture Abeokuta.', 
        icon: ''
    },
    {
        title: 'Cerification of completion by Andela', 
        date: 'May 2018 - August 201', 
        contentHead: 'Android Development Beginner Bundle',
        content: 'Andela Learning Community (ALC) combines Andela\'s learning science with Udacity online curriculum.\
        ALC is a network of people technology and tech enthusiasts across Africa dedicated to learning how to use technology to solve humanity\'s problem', 
        icon: ''
    },
    {
        title: 'Self Taught', 
        date: 'Active', 
        contentHead: 'Front-end - Reactjs',
        content: '', 
        icon: ''
    },
]


export const folio = [
  {
    title: "Eapay",
    body:
      "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
    type: "Website",
    img: port,
    category: "Web Development",
    link: "http://eapay-website.firebaseapp.com",
    modal: "modal-01",
  },
  {
    title: "Cream Bakery Admin",
    body:
      "A simple administration landing page for a bakery company, showcase different flavour and types of products available to customers.",
    type: "Website",
    img: port2,
    category: "Web Development",
    link: "http://cream-bakery.firebaseapp.com",
    modal: "modal-02",
  },
  {
    title: "Cream Bakery",
    body:
      "A simple landing page for a bakery company, showcase different flavour and types of products available to customers.",
    type: "Website",
    img: port2,
    category: "Web Development",
    link: "http://cream-bakery.firebaseapp.com",
    modal: "modal-02",
  },
  {
    title: "Curl Chat",
    body:
      "A simple chat platform with facebook login authentication to access the platform.",
    type: "Website",
    img: port3,
    category: "Web Development",
    link: "http://www.behance.net",
    modal: "modal-03",
  },
  {
    title: "Cruxcohtech college",
    body:
      "Cruxcohtech is a college of health technology built with standard clinic to train student in health.",
    img: port4,
    type: "Website",
    category: "Web Development",
    link: "https://cruxcotech-web-app.herokuapp.com",
    modal: "modal-04",
  },
  {
    title: "Justice Support Network",
    body:
      "The Justice Support Network is here to bridge the gap between the Underserved, Vulnerable and Indigent within in our society and those who are willing to assist them by providing legal and other services on a pro Bono basis.",
    img: port5,
    type: "Website",
    category: "Web Development",
    link: "#",
    modal: "modal-04",
  },
];

export const serv = [
    {
        title: 'Responsive Website', 
        body: 'Develop websites that retains consistent and appealing design across all device.'
    },
    {
        title: 'Static or Dynamic Websites', 
        body: 'Develop static site for personal or business use.', 
    },
    {
        title: 'Progressive web app', 
        body: 'Design and develop installable web app.'
    },
]


export const info = [
    {
        title: 'Where to find me', 
        body: (
           <Fragment>
                26 Okeowo-Somorin street<br/>
                Ifako Gbagada, Lagos<br/>
                Nigeria NG.
           </Fragment>
        ), 
        icon: 'icon-pin'
    },
    {
        title: 'Email Me At', 
        body: (
           <Fragment>
                adediran.dbs@gmail.com<br/>
			   	adexdsamson@gmail.com
           </Fragment>
        ), 
        icon: 'icon-mail'
    },
    {
        title: 'Call Me At', 
        body: (
           <Fragment>
                Phone: (+243) 816 062 2940<br/>
			   	Mobile: (+63) 815 637 7167<br/>
           </Fragment>
        ), 
        icon: 'icon-phone'
    },
  
  
]