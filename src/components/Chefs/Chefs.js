import React from 'react'
import '../myStyle.css'
import Chefcontent1 from '../common/Chefcontent1'


function Chefs()
{
     return(
          <div class="w3-row w3-mobile w3-black">
                <Chefcontent1 imagewidth="50%" head="Online Experiences" body="Unique activities we can do together, led by a world of hosts." width="100%" src="chef2.png"/>
            <div class="w3-container w3-rest w3-mobile ">
              <div class="w3-row">
                <Chefcontent1 imagewidth="50%" head="Nearby Gateways" body="Switch off or reconnect on a trip that's just a short drive away." width="100%" src="food.jpg"/>
                <Chefcontent1 imagewidth="50%" head="Online Experiences" body="Unique activities we can do together, led by a world of hosts." width="100%" src="chef4.jpg"/>
                <Chefcontent1 imagewidth="100%" head="Online Experiences" body="Unique activities we can do together, led by a world of hosts." width="100%" src="chef3.jpg"/>
              </div>
            </div>
          </div>
     )
}
export default Chefs