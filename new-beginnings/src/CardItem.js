import React from 'react';
import './Cards.css'

function CardItem(props) {
    return (

        
            <div class="card text-center">
                <img class="card-img-top" src={props.src} alt="Card image" ></img>
                <div class="card-body text-right">
                    <h5 class="card-title text-left">{props.text}</h5>
                    <a href="#" class="btn btn-primary ">More</a>
                </div>
            </div>

           
    )
}

export default CardItem
