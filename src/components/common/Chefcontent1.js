import React from 'react'
import food from '../assets/food.jpg'

const Greet = props =>{
  console.log(props)
  return(
    <div class="w3-container w3-col w3-mobile" style={{width:"50%"}}>
    <div class="w3-card-2 picmargin w3-round-xlarge">
      <img src={require(`../assets/${props.src}`)} width={props.width} alt="Image not found"/>
      <div class="w3-container w3-dark-grey">
        <p class="imagehead">{props.head}</p>
        <p class="imagebody">{props.body}</p>
      </div>
    </div>       
  </div>
)
}

export default Greet