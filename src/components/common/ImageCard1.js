import React from 'react'
import bng1 from '../assets/bng1.jpeg'
function ImageCard1({cards})
{
    return(
            <div class="w3-third w3-round-xlarge">
              <div class="w3-card-2 picmargin w3-round-xlarge">
              <img src={bng1} alt="Alps" style={{width: "100%"}}/>
              <div class="w3-container">
                <p class="pichead">{cards.head}</p>
                <p class="picbody">{cards.body}</p>
              </div>
              </div>
            </div>
    )
}
export default ImageCard1