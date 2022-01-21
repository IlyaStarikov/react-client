import React from "react";
import logo from './123.jpg';

const Card = () => {
    return   <div class="row">
                <div class="">
                <div class="card">
                    <div class="card-image">
                    <img alt="" src={logo}/>
                    <span class="card-title">Card Title</span>
                    </div>
                    <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div class="card-action">
                    <a href="123">This is a link</a>
                    </div>
                </div>
                </div>
            </div>
};

export default Card;