import React from 'react';
import {
  Navbar,
  Announcement,
  Slider,
  Categories,
  Products,
  NewsLetter,
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
    </div>
  );
};

export default Home;
