import React from 'react'
import Footer1 from '../Footer/Footer1'
import Footer2 from '../Footer/Footer2'
import Footer3 from '../Footer/Footer3'
import Footer from '../Footer/Footer'

function Footerbox(){
    return(
<div class="w3-row about w3-light-grey">
    <div class="w3-container w3-quarter">
        <Footer/>
    </div>
  <div class="w3-container w3-quarter">
        <Footer1/>
        </div>
        <div class="w3-container w3-quarter">
            <Footer2/>
        </div>
        <div class="w3-container w3-quarter">
            <Footer3/>
        </div>
        
    </div>
    )
}
export default Footerbox