import React from 'react';
import pinLocationImg from '../images/location-pin.svg';


function formatDate(dateString) {
  const date = new Date(dateString);

  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

export default function Destination(props) {
  const startDate = formatDate(props.startDate);
  const endDate = formatDate(props.endDate);

  return (
    <section className='container'>
      <img className='destination-img' src={props.imgUrl} alt={`Place in ${props.title}`}/>
      <div className='destination-text'>
        <div className='location-div'>
          <img src={pinLocationImg} alt=''/>
          <span className='country-span'>{props.location} </span>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div> {/* close location-div */}
        <h2 className='destination-title'>{props.title}</h2>
        <p className='trip-duration'>
          <time datetime={startDate}>{props.startDate} </time>
          -
          <time datetime={endDate}> {props.endDate}</time>
        </p>
        <p className='destination-desc'>{props.description}</p>
      </div> {/* close destination-div */}
    </section>
  )
}