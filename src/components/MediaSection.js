import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MediaSection.css';

function MediaSection() {
  return (
    <div className='media-container'>
        <video src='/videos/Lawnmower.mp4' autoPlay loop muted/>
        <h1>HI</h1>
        <p>bye</p>
        <div>
          <Button className="btn" buttonStyle='btn--outline' buttonSize='btn--large'>
            Call Us
          </Button>
        </div>
    </div>
  )
}

export default MediaSection;