import React from 'react';
import './Cards.css'

function CardItem(props) {
    return (


            <div class="card text-center">
                <img class="card-img-top rss opacity }" src={props.src} alt="Card image" ></img>
                <div class="card-body text-right">
                    <h5 class="card-title text-left lead">{props.text}</h5>
                    <a href="#" class="btn btn-style ">More</a>
                </div>
            </div>


    )
}

export default CardItem
