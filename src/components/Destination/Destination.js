import React from 'react'
import './Destination.css'
import DestinationOptions from '../common/DestinationOptions'

function Destination()
{
    const place =[
      {
        destination1: 'Sanfrancisco',
        destination2: 'Denver',
        destination3: 'Houston'
      },
      {
        destination1: 'Los Angeles',
        destination2: 'Washington DC',
        destination3: 'New Orleans'
      },
      {
        destination1: 'New York',
        destination2: 'Pheonix',
        destination3: 'Boston'
      },
      {
        destination1: 'Seattle',
        destination2: 'Austin',
        destination3: 'Miami'
      }
    ]
    const placeslist=place.map(option => <DestinationOptions option ={option}></DestinationOptions>)
    return <div>{placeslist}</div>
}
export default Destination