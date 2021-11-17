import React from "react";
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Banner from './components/Banner/Banner';
import Content from './components/Content/Content';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer'

import "./style.css";

export default function App() {
  return (
    <div className='Container'>
      <Header />
      <Menu />
      <Banner />
      <Content />
      <Gallery />
      <Footer />
    </div>
  );
}
