import React from 'react';
import { Parallax } from 'react-parallax';
import './Home.css';

const image1="https://i.imgur.com/xHGk91K.png"
const image2="https://i.imgur.com/Mu8NwCq.png"
const image3="https://i.imgur.com/NFALSQx.png"
const image4="https://i.imgur.com/jT8xF5q.png"

function Home() {
  return (


    <div className="Home">
        {/* <div className='hero-image'>
          <h1> New Beginnings </h1>
          <p>Believe In Yourself and What You Are Capable Of</p>
        </div> */}



      <Parallax bgImage={image1} strength={10}>
        <div style={{height:735}}>
        </div>
      </Parallax>
      <h1>  </h1>
      <Parallax bgImage={image2} strength={0}>
        <div style={{height:725}}>
        </div>
      </Parallax>
      <h1>  </h1>
      <Parallax bgImage={image3} strength={100}>
        <div style={{height:725}}>
        </div>
      </Parallax>
      <Parallax bgImage={image4} strength={120}>
        <div style={{height:800}}>
        </div>
      </Parallax>

    </div>

  );
}

export default Home;
