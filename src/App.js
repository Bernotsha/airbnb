import React from 'react'
import './components/myStyle.css'
import Header from './components/Header/Header'
import Covid from './components/Covid/Covid'
import Option from './components/Option/Option'
import Contentbox from './components/Contentbox/Contentbox'
import Celebrities from './components/Celebrities/Celebrities'
import Chefs from './components/Chefs/Chefs'
import Destination from './components/Destination/Destination'
import Partnering from './components/Partnering/Partnering'
import ImageCard from './components/ImageCard/ImageCard'
import Footerbox from './components/common/Footerbox'
class App extends React.Component{
  render(){
    return (
        <div>
        <Covid/>
        <Header/>
        <div className="w3-container bodyleft">
          <div className="w3-bar">
            <Option/>
          </div>
        <Contentbox/>
        <div class="redtext">
          <div class="red1">You don't neet to go far to</div>
            <div class="red1">find what matters</div>
          </div>
        <ImageCard/>
        <Celebrities/>
        <Chefs />
        <Partnering/>
        <div><p id="tour">Destination for future trips</p></div>
          <div class="w3-row">
            <Destination/>
          </div>
        <Footerbox/>
      </div>


     </div>
 
    )
  }
}
export default App