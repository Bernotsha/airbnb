import React from 'react'
import food from '../assets/food.jpg'
function Chefcontent1()
{
    return(
        <div class="w3-container w3-col w3-mobile" style={{width:"50%"}}>
        <div class="w3-card-2 picmargin w3-round-xlarge">
          <img src={food} width="100%" alt="Image not found"/>
          <div class="w3-container w3-dark-grey">
            <p class="imagehead">Nearby gatewaiys</p>
            <p class="imagebody">Switch off or reconnect on a trip that's just a short drive away.</p>
          </div>
        </div>       
      </div>
    )
}
export default Chefcontent1