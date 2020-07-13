import React from 'react'
import '/Users/BERNOTSHA/Desktop/airbnbapp/src/components/myStyle.css'
import Footertext1 from '../common/Footertext1'

function Footer1()
{
  const names=['COMMUNITY','Airbnb Magazine','Airbnb Association','Airbnb for Work','Invite Friends','Careers']
  const footerwords = names.map(text1 => <Footertext1 text1 = {text1}></Footertext1>)
    return(
     
            <div>{footerwords}</div>
            

    )
}
export default Footer1