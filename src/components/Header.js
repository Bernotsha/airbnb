import React from 'react'
import bnbicon from './bnbicon.png'
import appleicon from './appleicon.png'
import facebookicon from './facebookicon.png'
import googleicon from './googleicon.jpg'
import './myStyle.css'

function Header()
{
    return(
        <div className="w3-container w3-margin w3-padding-16">
        
        <div className="w3-bar">
            <div className="w3-bar-item"><img src={bnbicon} width="30px" height="30px"/><span id="airbnb">airbnb</span></div>
            <div className="w3-right w3-hover-light-grey w3-round-xlarge middle">
              <a href="#" className=" w3-button w3-right middle w3-hover-light-grey w3-round-xlarge" onclick="document.getElementById('id02').style.display='inline'">Sign up</a>

              <div className="w3-modal">
                <div className="w3-modal-content w3-card-4 w3-animate-zoom w3-round-xlarge" style={{maxWidth:"600px"}}>
            
                  <div className="w3-center"><br/>
                    <span>Sign up</span>
                  </div>
            
                  <form className="w3-container" action="/action_page.php">
                    <div className="w3-section">
                      <div className="w3-card-1 w3-round-xlarge">
                      <input className="w3-input w3-border w3-padding-16" type="text" placeholder="Country/Region" name="country" required/>
                      <input className="w3-input w3-border w3-padding-16" type="text" placeholder="Phone number" name="phone" required/>
                      </div>
                      <p class="logintext">We'll call or text you to confirm your number. Standard message and data rates apply</p>
                      <button className=" w3-block w3-section w3-padding loginbutton w3-round-large " type="submit">Continue</button>
                      <br/>

                      <button className=" w3-block w3-section w3-padding w3-button w3-border  w3-round-large " type="submit"><span><img src={googleicon} width="40px" height="20px"/></span>Continue with email</button>
                      <button className=" w3-block w3-section w3-padding w3-button w3-border w3-round-large " type="submit"><span><img src={googleicon} width="40px" height="20px"/></span>Continue with google</button>
                      <button className=" w3-block w3-section w3-padding w3-button w3-border  w3-round-large " type="submit"><span><img src={facebookicon} width="40px" height="20px"/></span>Continue with facebook</button>
                      <button className=" w3-block w3-section w3-padding w3-button w3-border w3-round-large " type="submit"><span><img src={appleicon} width="40px" height="20px"/></span>Continue with apple</button>
                      <p className="logintext">Already have an account <a href="#" class="w3-text-red">login</a></p>
                    </div>
                  </form>
            
                  <div className="w3-container w3-border-top w3-padding-16 w3-light-grey">
                    <button onclick="document.getElementById('id02').style.display='none'" type="button" class="w3-button w3-red">Cancel</button>
                    <span className="w3-right w3-padding w3-hide-small">Forgot <a href="#">password?</a></span>
                  </div>
            
                </div>
              </div>
            </div>            
            <div className="w3-right w3-hover-light-grey w3-round-xlarge middle">
              <a href="#" className=" w3-button w3-right middle w3-hover-light-grey w3-round-xlarge" onclick="document.getElementById('id01').style.display='inline'">Login</a>

              <div className="w3-modal">
                <div className="w3-modal-content w3-card-4 w3-animate-zoom w3-round-xlarge" style={{maxWidth:"600px"}}>
            
                  <div className="w3-center"><br/>
                    <span>Log in</span>
                  </div>
            
                  <form className="w3-container" action="/action_page.php">
                    <div className="w3-section">
                      <div className="w3-card-1 w3-round-xlarge">
                      <input className="w3-input w3-border w3-padding-16" type="text" placeholder="Country/Region" name="country" required/>
                      <input className="w3-input w3-border w3-padding-16" type="text" placeholder="Phone number" name="phone" required/>
                      </div>
                      <p class="logintext">We'll call or text you to confirm your number. Standard message and data rates apply</p>
                      <button className=" w3-block w3-section w3-padding loginbutton w3-round-large " type="submit">Continue</button>
                      <br/>

                      <button className=" w3-block w3-section w3-padding w3-button w3-border  w3-round-large " type="submit"><span><img src={googleicon} width="40px" height="20px"/></span>Continue with email</button>
                      <button className=" w3-block w3-section w3-padding w3-button w3-border w3-round-large " type="submit"><span><img src={googleicon} width="40px" height="20px"/></span>Continue with google</button>
                      <button className=" w3-block w3-section w3-padding w3-button w3-border  w3-round-large " type="submit"><span><img src={facebookicon} width="40px" height="20px"/></span>Continue with facebook</button>
                      <button className=" w3-block w3-section w3-padding w3-button w3-border w3-round-large " type="submit"><span><img src={appleicon} width="40px" height="20px"/></span>Continue with apple</button>
                      <p className="logintext">Dont have an account <a href="#" class="w3-text-red"> signup</a></p>
                    </div>
                  </form>
            
                  <div className="w3-container w3-border-top w3-padding-16 w3-light-grey">
                    <button onclick="document.getElementById('id01').style.display='none'" type="button" class="w3-button w3-red">Cancel</button>
                    <span className="w3-right w3-padding w3-hide-small">Forgot <a href="#">password?</a></span>
                  </div>
            
                </div>
              </div>
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
    )
}
export default Header