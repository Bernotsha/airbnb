import React from 'react'
import chef4 from '../assets/chef4.jpg'

function Chefcontent2(){
    return(
        <div class="w3-container w3-col w3-mobile" style={{width:"50%"}}>
                  <div class="w3-card-2 picmargin w3-round-xxlarge">
                    <img src={chef4} width="100%" alt="Image not found"/>
                    <div class="w3-container w3-dark-grey">
                      <p class="imagehead">Entire homes</p>
                      <p class="imagebody">Comportable private places, with room for friends or family.</p>
                    </div>
                  </div>
                </div>
    )
}
export default Chefcontent2