import React from 'react'
import chef2 from '../assets/chef2.png'

function Chefscontent(){
    return(
    <div class="w3-container w3-col w3-mobile"  style={{width:"45%"}}>
    <div class="w3-card-2 picmargin w3-round-xlarge">
      <img src={chef2} width="100%" alt="Image not found"/>
      <div class="w3-container w3-dark-grey ">
        <p class="imagehead">Online Experiences</p>
        <p class="imagebody">Unique activities we can do together, led by a world of hosts.</p>
      </div>
    </div>
    </div>
    )
}
export default Chefscontent