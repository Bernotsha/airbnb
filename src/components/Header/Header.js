import React from 'react'
import bnbicon from '../assets/bnbicon.png'
import ModalComponent from '../common/ModalComponent'
class Header extends React.Component{
 

 
 
  render(){
    return (
      <div>
        <div className="w3-container w3-margin w3-padding-16">
        <div className="w3-bar">
            <div className="w3-bar-item"><img src={bnbicon} width="30px" height="30px"/><span id="airbnb">airbnb</span></div>
            <div className="w3-right w3-hover-light-grey w3-round-xlarge middle">
              <a href="#" className=" w3-button w3-right middle w3-hover-light-grey w3-round-xlarge">Sign up</a>
            </div>            
            <div className="w3-right w3-hover-light-grey w3-round-xlarge middle">
              <a href="#" className=" w3-button w3-right middle w3-hover-light-grey w3-round-xlarge">Login</a>
            </div>
            <a href="#" class="w3-bar-item w3-button w3-right middle w3-hover-light-grey w3-round-xlarge">Help</a>
            <a href="#" class="w3-bar-item w3-button w3-right middle w3-hover-light-grey w3-round-xlarge">Host an experience</a>
            <a href="#" class="w3-bar-item w3-button w3-right middle w3-hover-light-grey w3-round-xlarge">Host your home</a>
            <div class="w3-dropdown-click w3-right w3-hover-light-grey w3-round-xlarge">
            <a href="#" class="w3-bar-item w3-button w3-right middle w3-hover-light-grey w3-round-xlarge" onclick="myFunction()"><i class='fas fa-globe-americas'></i><i class='fas fa-angle-down downarrow'></i></a>
            <div id="demo" class="w3-dropdown-content w3-bar-block w3-card language w3-round-xlarge">
              <a href="#" class="w3-bar-item w3-button w3-hover-light-grey">English (IN)</a>
              <a href="#" class="w3-bar-item w3-button w3-hover-light-grey">INR</a>
            </div>
            </div>
            </div>
            </div>

          <ModalComponent/>
          </div>
 
    )
  }
}
export default Header