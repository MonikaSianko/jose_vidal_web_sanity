import homePage from './documents/homePage'
import author from './documents/author'
import book from './documents/book'
import course from './documents/course'
import testimonial from './documents/testimonial'
import contact from './documents/contact'
import social from './documents/social'
import header from './documents/header'
import footer from './documents/footer'

import link from './objects/link'
import imageWithAlt from './objects/imageWithAlt'
import video from './objects/video'
import address from './objects/address'

import homeHero from './sections/home/homeHero'
import homeAbout from './sections/home/homeAbout'
import homeCourses from './sections/home/homeCourses'
import homeCoursesLabels from './sections/home/objects/labelsCourses'
import homeSocial from './sections/home/objects/social'
import homeEditorial from './sections/home/objects/editorial'
import sectionMeta from './objects/sectionMeta'
import homeTestimonials from './sections/home/homeTestimonials'
import homeAuthor from './sections/home/homeAuthor'
import homeCTA from './sections/home/homeCTA'
import homeContact from './sections/home/homeContact'
import icon from './objects/icon'

export const schemaTypes = [
  // documents
  homePage,
  author,
  book,
  course,
  testimonial,
  contact,
  social,
  header,
  footer,

  // objects (global)
  link,
  imageWithAlt,
  video,
  address,
  sectionMeta,
  icon,

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
  homeEditorial,
]
