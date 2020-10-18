import React from 'react';
import CardItem from './CardItem';
import './PrevSubmissions.css';

function PrevSubmissions() {
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <h1>Web Development</h1>
        <div className='cards__wrapper d-flex flex-row bd-highlight mb-3' >
            <div class="p-2 bd-highlight">
              <CardItem
              src='https://img.icons8.com/material/4ac144/256/twitter.png'
              text='Virtual Closet'
              />
            </div>
            <div class="p-2 bd-highlight">
              <CardItem
              src='https://img.icons8.com/material/4ac144/256/twitter.png'
              text='Virtual Closet'
              />
            </div>
          </div>
      </li>
      <li className="list-group-item">
        <h1>Mobile Development</h1>
      </li>
      <li className="list-group-item">
      <h1>Data Science</h1>
      </li>
    </ul>
    // <>
    //
    // </>




  );
}

export default PrevSubmissions;
