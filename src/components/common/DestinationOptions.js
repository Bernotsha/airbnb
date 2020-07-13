import React from 'react'

function DestinationOptions({option}){
    return(
        <div class=" w3-container w3-quarter">
        <p class="pblock w3-border-bottom"><a href="/#" class="placeunderline">{option.destination1}</a></p>
        <p class="pblock w3-border-bottom"><a href="/#" class="placeunderline">{option.destination2}</a></p>
        <p class="pblock w3-border-bottom"><a href="/#" class="placeunderline">{option.destination3}</a></p>
      </div>
    )
}
export default DestinationOptions