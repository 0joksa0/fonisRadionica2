import React from 'react'

import { Nav } from './components/nav/Nav';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Shop } from './components/shop/Shop';
import { Comments } from './components/comments/Comments';
import { Footer } from './components/footer/Footer';

export const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Shop />
      <Comments />
      <Footer />
    </>
  )
}
