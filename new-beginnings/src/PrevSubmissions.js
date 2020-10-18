import React from 'react';
import CardItem from './CardItem';
import './PrevSubmissions.css';

function PrevSubmissions() {
  return (
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <h1>Web Development</h1>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
              src='https://img.icons8.com/material/4ac144/256/twitter.png'
              text='Virtual Closet'
              />
            </ul>
          </div>
      </li>
      <li class="list-group-item">
        <h1>Mobile Development</h1>
      </li>
      <li class="list-group-item">
      <h1>Data Science</h1>
      </li>
    </ul>
    // <>
    //   
    // </>




  );
}

export default PrevSubmissions;
