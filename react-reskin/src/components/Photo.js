import React from 'react';
import '../styles/Photo.css';
import jk from '../assets/jk.png';

const Photo = () => {
  return (
    <figure>
      <img alt="Johnny Karate (with nunchucks)" src={jk} height="400"/>
    </figure>
  )
}

export default Photo;