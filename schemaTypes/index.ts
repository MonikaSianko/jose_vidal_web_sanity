import homePage from "./documents/homePage";
import author from "./documents/author";
import course from "./documents/course";
import testimonial from "./documents/testimonial";
import social from "./documents/social";
import header from "./documents/header";

import link from "./objects/link";
import imageWithAlt from "./objects/imageWithAlt";
import video from "./objects/video";
import address from "./objects/address";
import valueWithLabel from "./objects/valueWithLabel";
import sectionMeta from "./objects/sectionMeta";

import homeCoursesLabels from "./sections/home/objects/labelsCourses";
import homeSocial from "./sections/home/objects/social";
import homeContactDetails from "./sections/home/objects/contactDetails";

import homeHero from "./sections/home/homeHero";
import homeAbout from "./sections/home/homeAbout";
import homeCourses from "./sections/home/homeCourses";
import homeTestimonials from "./sections/home/homeTestimonials";
import homeAuthor from "./sections/home/homeAuthor";
import homeCTA from "./sections/home/homeCTA";
import homeContact from "./sections/home/homeContact";
import icon from "./objects/icon";

export const schemaTypes = [
  // documents
  homePage,
  author,
  course,
  testimonial,

  social,
  header,

  // objects (global)
  link,
  imageWithAlt,
  video,
  address,
  sectionMeta,
  icon,
  valueWithLabel,

  // home sections
  homeHero,
  homeAbout,
  homeTestimonials,
  homeAuthor,
  homeCourses,
  homeCTA,
  homeContact,

  // home objects
  homeCoursesLabels,
  homeSocial,
  homeContactDetails,
];
