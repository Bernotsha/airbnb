import React from 'react'
import bnbicon from '../assets/bnbicon.png'
import ModalComponent from '../common/ModalComponent'
import Headercontent from '../common/Headercontent'


function Header()
{
  const headercontent = ['Sign up','Login','Help','Host an experience','Host your Home']
  const options = headercontent.map(content => <Headercontent content ={content} ></Headercontent>)

    return (
      <div>
        <div className="w3-container w3-margin w3-padding-16">
        <div className="w3-bar">
            <div className="w3-bar-item"><img src={bnbicon} width="30px" height="30px"/><span id="airbnb">airbnb</span></div>
              <div>{options}</div>
            </div>
            </div>

          <ModalComponent/>
          </div>
 
    )
  }

export default Header