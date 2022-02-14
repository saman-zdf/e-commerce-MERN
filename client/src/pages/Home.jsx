import React from 'react';
import { Navbar, Announcement, Slider, Categories } from '../components';
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
