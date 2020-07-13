import React from 'react'
import '/Users/BERNOTSHA/Desktop/airbnbapp/src/components/myStyle.css'
import Footertext3 from '../common/Footertext3'

function Footer3()
{
  const names=['About','How Airbnb Works','Accessibility','Trust & Safety','Airbnb Citizen','Olympics','Newsroom']
  const footerwords = names.map(text1 => <Footertext3 text1 = {text1}></Footertext3>)
    return(
     
            <div>{footerwords}</div>
            

    )
}
export default Footer3