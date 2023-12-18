// HeroSection.js

import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="Videos/foodie-video.mp4" autoPlay loop muted />
      <h1>YOU SEEM HUNGRY</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button buttonStyle='btn--outline' buttonSize='btn--large' to='https://tazz.ro/arad/foodie-the-van/16673/restaurant'>
          ORDER NOW
        </Button>
        <Button buttonStyle='btn--primary' buttonSize='btn--large' to='/menu'>
          EXPLORE MENU
        </Button>
      </div>
      
    </div>
  );
}
