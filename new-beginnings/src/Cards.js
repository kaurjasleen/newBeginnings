import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
    return (
        <div className='cards'>
            <h1>Web Development</h1>
            <div className='cards__container'>
             <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
              src='./Users/jacqueline/Downloads/new_begin_home.jpg' 
              text='Virtual Closet'
              />
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Cards
