import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';


export const links = [
/*
This is the array where all the sublinks of the navbar are mentioned.
On Click the page will eb redirected to coresponding page of the navbar.
The links are with compliance to KubixSquare site.  
*/
  {
    id: 1,
    url: '/index.html',
    text: 'Home',
  },
  {
    id: 2,
    url: '/about.html',
    text: 'About Us',
  },
  {
    id: 3,
    url: '/services.html',
    text: 'Services',
  },
  {
    id: 4,
    url: '/events.html',
    text: 'Events',
  },
  {
    id: 5,
    url: '/contact.html',
    text: 'Contact Us',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/kubixsquare/',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.instagram.com/kubixsquare/',
    icon: <FaInstagram />,
    
  },
  {
    id: 3,
    url: 'https://twitter.com/kubixsquare/',
    icon: <FaTwitter />,
  },
  {
    id: 4,
    url: 'https://www.linkedin.com/company/kubixsquare/',
    icon: <FaLinkedin />,
  },
];
