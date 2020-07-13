import React from 'react'
import '/Users/BERNOTSHA/Desktop/airbnbapp/src/components/myStyle.css'
import Footertext2 from '../common/Footertext2'

function Footer2()
{
  const names=['HOST','Host your home','Host an online experience','Message from CEO Brian Chesky','Responsible hosting','Open Homes','Resource Center','Community Center']
  const footerwords = names.map(text1 => <Footertext2 text1 = {text1}></Footertext2>)
    return(
     
            <div>{footerwords}</div>
            

    )
}
export default Footer2