import React from 'react'
import appleicon from '../assets/appleicon.png'
import facebookicon from '../assets/facebookicon.png'
import googleicon from '../assets/googleicon.jpg'
function ModalComponent(){
    return(
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
              <button type="button" class="w3-button w3-red">Cancel</button>
              <span className="w3-right w3-padding w3-hide-small">Forgot <a href="#">password?</a></span>
            </div>
      
          </div>
    )
}
export default ModalComponent