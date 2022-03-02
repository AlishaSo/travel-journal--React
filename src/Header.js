import React from 'react';
import globeImg from './images/globe.png';

export default function Header() {
  return (
    <header>
      <img className='header-img' src={globeImg} alt=''/>
      <span className='header-text'>my travel journal</span>
    </header>
  )
}