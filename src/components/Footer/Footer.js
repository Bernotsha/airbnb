import React from 'react'
import './Footer.css'
import Footertext from '../common/Footertext'

function Footer()
{
  const names=['About','How Airbnb Works','Accessibility','Trust & Safety','Airbnb Citizen','Olympics','Newsroom']
  const footerwords = names.map(text1 => <Footertext text1 = {text1}></Footertext>)
    return(
     
            <div>{footerwords}</div>
            

    )
}
export default Footer