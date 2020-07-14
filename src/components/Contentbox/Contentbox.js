import React from 'react'
import './Contentbox.css'
import '../common/Contentboxcontent'
import Contentboxcontent from '../common/Contentboxcontent'

function Contentbox()
{
  const option=[
    {
      content1:'LOCATION',
      content2:'Where are you going?'
    },
    {
      content1:'CHECK IN',
      content2:'Address dates'
    },
    {
      content1:'CHECK OUT',
      content2:'Address dates'
    },
    {
      content1:'GUEST',
      content2: 'Add Guest'
    }
  ]
  const placeslist=option.map(options => <Contentboxcontent options ={options}></Contentboxcontent>)
  return(
        <div class="w3-row w3-container w3-margin-top">
  	<div>{placeslist}</div>
	</div>
  )
}
export default Contentbox