import React from 'react'
import './ImageCard.css'
import bmb2 from '../assets/bmb2.png'
import bnb3 from '../assets/bnb3.jpg'
import bng1 from '../assets/bng1.jpeg'

function ImageCard()
{
    return(

        <div class="w3-row w3-container">
            <div class="w3-third w3-round-xlarge">
              <div class="w3-card-2 picmargin w3-round-xlarge">
              <img src={bng1} alt="Alps" style={{width: "100%"}}/>
              <div class="w3-container">
                <p class="pichead">Nearby gatewaiys</p>
                <p class="picbody">Switch off or reconnect on a trip that's just a short drive away.</p>
              </div>
              </div>
            </div>
            <div class="w3-third w3-round-xlarge">
              <div class="w3-card-2 picmargin w3-round-xlarge">
              <img src={bmb2} alt="Alps" style={{width: "100%"}}/>
              <div class="w3-container">
                <p class="pichead">Online Experiences</p>
                <p class="picbody">Unique activities we can do together, led by a world of hosts.</p>
              </div>
              </div>
            </div>
            <div class="w3-third">
              <div class="w3-card-2 picmargin w3-round-xlarge">
              <img src={bnb3} alt="Alps" style={{width: "100%"}}/>
              <div class="w3-container">
                <p class="pichead">Entire homes</p>
                <p class="picbody">Comportable private places, with room for friends or family.</p>
              </div>
              </div>
            </div>
            </div>
    )

}
export default ImageCard