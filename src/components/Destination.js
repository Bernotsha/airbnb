import React from 'react'
import './myStyle.css'

function Destination()
{
    return(
        <div className="w3-container bodyleft">
          <div><p id="tour">Destination for future trips</p></div>
          <div class="w3-row">
            <div class=" w3-container w3-quarter">
              <p class="pblock w3-border-bottom"><a href="#" class="placeunderline">San Francisco</a></p>
              <p class="pblock w3-border-bottom"><a href="#" class="placeunderline">Denver</a></p>
              <p class="pblock w3-border-bottom"><a href="#" class="placeunderline">Houston</a></p>
            </div>
            <div class=" w3-container w3-quarter">
              <p class="pblock w3-border-bottom"><a href="#" class="placeunderline">Los Angeles</a></p>
              <p class="pblock w3-border-bottom"><a href="#" class="placeunderline">Washington DC</a></p>
              <p class="pblock w3-border-bottom"><a href="#" class="placeunderline">New Orleans</a></p>
            </div>
            <div class=" w3-container w3-quarter">
              <p class="pblock w3-border-bottom"><a href="#" class="placeunderline">New York</a></p>
              <p class="pblock w3-border-bottom"><a href="#" class="placeunderline">Pheonix</a></p>
              <p class="pblock w3-border-bottom"><a href="#" class="placeunderline">Boston</a></p>
            </div>
            <div class=" w3-container w3-quarter">
              <p class="pblock w3-border-bottom"><a href="#" class="placeunderline">Seattle</a></p>
              <p class="pblock w3-border-bottom"><a href="#" class="placeunderline">Austin</a></p>
              <p class="pblock w3-border-bottom"><a href="#" class="placeunderline">Miami</a></p>
            </div>
          </div>
        </div>

    )
}
export default Destination