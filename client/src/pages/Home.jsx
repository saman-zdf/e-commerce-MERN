import React from 'react';
import {
  Navbar,
  Announcement,
  Slider,
  Categories,
  Products,
  NewsLetter,
  Footer,
} from '../components';
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
