import React from 'react'
import './myStyle.css'

function Contentbox()
{
    return(
        <div class="w3-container bodyleft">

        <div class="w3-row w3-container w3-margin-top">
        <div class="w3-col s5 w3-border w3-padding-16 boxtop w3-button w3-hover-border-grey w3-hover-white w3-border">
          
          <span class="gridcontent dark">LOCATION</span><br/>
          <span class="gridcontent light">Where are you going?</span>
      
        </div>

        <div class="w3-col s2 w3-border w3-padding-16 boxtop w3-button w3-hover-border-grey w3-hover-white w3-border">
          <a href="#" class="box">
            <span class="gridcontent dark">CHECK IN</span><br/>
            <span class="gridcontent light">Address dates</span> 
          </a>
       </div>
       <div class="w3-col s2 w3-border w3-padding-16 boxtop w3-button w3-hover-border-grey w3-hover-white w3-border">
         <a href="#" class="box">
        <span class="gridcontent dark">CHECK OUT</span><br/>
        <span class="gridcontent light">Address dates</span> 
        </a>
       </div>

          <div class="w3-col s3 w3-border w3-padding-16 boxtop w3-button w3-hover-border-grey w3-hover-white w3-border w3-dropdown-click">
            <a href="#" class="box" onclick="myFunction1()">
            <div class="w3-right w3-margin-right"><button id="search"><i class="fa fa-search searchicon"></i>Search</button></div>
                <span class="smalltext">GUEST</span><br/>
                <span class="smalltext">Add Guest</span> 


            </a>
          </div>
          <div id="Demo" class="w3-dropdown-content w3-bar-block w3-card-4 w3-animate-zoom add">
            <div class="w3-bar-item w3-row">
              <div class="w3-col s5 ">
              <span>Adults</span><br/>
              <span>Ages 13 0r above</span>
              </div>
              <div class="w3-col s6">
                <span class="w3-right"><i class="fa fa-minus addicon"></i></span>
                <span class="w3-right addtext">0</span>
                <span class="w3-right"><i class="fa fa-plus addicon"></i></span>
                </div>
            </div>
            <div class="w3-bar-item w3-row">
              <div class="w3-col s5 ">
              <span>Children</span><br/>
              <span>Ages 2-12</span>
              </div>
              <div class="w3-col s6">
                <span class="w3-right"><i class="fa fa-minus addicon"></i></span>
                <span class="w3-right addtext">0</span>
                <span class="w3-right"><i class="fa fa-plus addicon"></i></span>
                </div>
            </div>                
            <div class="w3-bar-item w3-row">
              <div class="w3-col s5 ">
              <span>Infants</span><br/>
              <span>Under 2</span>
              </div>
              <div class="w3-col s6">
              <span class="w3-right"><i class="fa fa-minus addicon"></i></span>
              <span class="w3-right addtext">0</span>
              <span class="w3-right"><i class="fa fa-plus addicon"></i></span>
              </div>
            </div>   
            </div>  
            </div>  
            </div>     

    )
}
export default Contentbox