import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      
      <h1>RICH JAMISON</h1>
      {/* <p>Full Stack Developer</p> */}
      <Typed
      className='typed-text'
      strings={["Full Stack Developer", "Coder", "Musician", "Tinkerer"]}
      typeSpeed={70}
      backSpeend={160}
      loop
      />
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          RESUME
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;