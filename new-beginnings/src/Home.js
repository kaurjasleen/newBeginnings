import React from 'react';
import { Parallax } from 'react-parallax';
import './Home.css';

const image1="https://i.pinimg.com/originals/de/f7/21/def7210d0eb8f98ca7c7459f952c4018.jpg"
const image2="https://www.itl.cat/pngfile/big/32-322680_plant-aesthetic-desktop-wallpaper-hd-plant.jpg"

const inlineStyle = {
  background: '#fff',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)'
}
function Home() {
  return (
    // <div className='hero-container'>
    //     <h1> New Beginnings </h1>
    //     <p>Believe In Yourself and What You Are Capable Of</p>
    // </div>

    <div className="Home">
      <Parallax bgImage={image1} strength={750}>
        <div style={{height:800}}>
          <div style={inlineStyle}>
            <h1> New Beginnings </h1>
            <p>Believe In Yourself and What You Are Capable Of</p>
          </div>
        </div>
      </Parallax>
      <h1>  </h1>
      <Parallax bgImage={image2} strength={750}>
        <div style={{height:800}}>
          <div style={inlineStyle}>New Beginnings</div>
        </div>
      </Parallax>



      <div style={{height:'100vh'}}></div>
    </div>

  );
}

export default Home;
