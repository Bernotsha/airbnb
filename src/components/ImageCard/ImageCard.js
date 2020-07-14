import React from 'react'
import './ImageCard.css'
import ImageCard1 from '../common/ImageCard1'
import bmb2 from '../assets/bmb2.png'
import bnb3 from '../assets/bnb3.jpg'
import bng1 from '../assets/bng1.jpeg'

function ImageCard()
{
  const card =[
    {
      src:'bng1',
      head:'Nearby gateways',
      body:"Switch off or reconnect on a trip that's just a short drive away"
    },
    {
      src:'bmb2',
      head:'Online Experiences',
      body:'Unique activities we can do together, led by a world of hosts.'
    },
    {
      src:'bnb3',
      head:'Entire homes',
      body:'Comportable private places, with room for friends or family.'
    }
  ]

  const carditems = card.map(cards=> <ImageCard1 cards={cards}></ImageCard1>)
  return(
    <div class="w3-row w3-container">
      <div>{carditems}</div>
    </div>
  )
   

}
export default ImageCard