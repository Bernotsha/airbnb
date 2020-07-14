import React from 'react'
import '../myStyle.css'
import Chefscontent from '../common/Chefscontent'
import Chefcontent1 from '../common/Chefcontent1'
import Chefcontent2 from '../common/Chefcontent2'
import Chefcontent3 from '../common/Chefcontent3'

function Chefs({options})
{
     return(
          <div class="w3-row w3-mobile w3-black">
                <Chefscontent/>
            <div class="w3-container w3-rest w3-mobile ">
              <div class="w3-row">
                <Chefcontent1/>
                <Chefcontent2/>
                <Chefcontent3/>
              </div>
            </div>
          </div>
     )
}
export default Chefs