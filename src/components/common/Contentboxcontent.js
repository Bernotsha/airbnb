import React from 'react'

function Contentboxcontent({options})
{
    return(
        <div class="w3-col s3 w3-border w3-padding-16 boxtop w3-button w3-hover-border-grey w3-hover-white w3-border">
          <a href="/#" class="box">
    <span class="gridcontent dark">{options.content1}</span><br/>
    <span class="gridcontent light">{options.content2}</span> 
          </a>
       </div>
    )
}
export default Contentboxcontent