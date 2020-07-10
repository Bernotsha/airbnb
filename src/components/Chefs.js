import React from 'react'
import './myStyle.css'
import chef2 from './chef2.png'
import chef3 from './chef3.jpg'
import chef4 from './chef4.jpg'
import food from './food.jpg'

function Chefs()
{
     return(
        <div className="w3-container bodyleft">
          <div class="w3-row w3-mobile w3-black">
            <div class="w3-container w3-col w3-mobile"  style={{width:"45%"}}>
              <div class="w3-card-2 picmargin w3-round-xlarge">
                <img src={chef2} width="100%"/>
                <div class="w3-container w3-dark-grey ">
                  <p class="imagehead">Online Experiences</p>
                  <p class="imagebody">Unique activities we can do together, led by a world of hosts.</p>
                </div>
                </div>
            </div>
            <div class="w3-container w3-rest w3-mobile ">
              <div class="w3-row">
                <div class="w3-container w3-col w3-mobile" style={{width:"50%"}}>
                  <div class="w3-card-2 picmargin w3-round-xlarge">
                    <img src={food} width="100%"/>
                    <div class="w3-container w3-dark-grey">
                      <p class="imagehead">Nearby gatewaiys</p>
                      <p class="imagebody">Switch off or reconnect on a trip that's just a short drive away.</p>
                    </div>
                    </div>
          
                </div>
                <div class="w3-container w3-col w3-mobile" style={{width:"50%"}}>
                  <div class="w3-card-2 picmargin w3-round-xxlarge">
                    <img src={chef4} width="100%"/>
                    <div class="w3-container w3-dark-grey">
                      <p class="imagehead">Entire homes</p>
                      <p class="imagebody">Comportable private places, with room for friends or family.</p>
                    </div>
                    </div>
                </div>
                <div class="w3-mobile">
                  <div class="w3-card-2 picmargin w3-round-xlarge" style={{marginTop:"380px"}}>
                  <img src={chef3} width="100%"/>
                    <div class="w3-container w3-dark-grey">
                      <p class="imagehead">Entire homes</p>
                      <p class="imagebody">Comportable private places, with room for friends or family.</p>
                    </div>
                    </div>
                </div>
              </div>
            </div>
            </div>
        </div>
     )
}
export default Chefs