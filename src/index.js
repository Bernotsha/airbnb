import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Covid from './components/Covid/Covid'
import Option from './components/Option/Option'
import Contentbox from './components/Contentbox/Contentbox'
import Celebrities from './components/Celebrities/Celebrities'
import * as serviceWorker from './serviceWorker';
import Chefs from './components/Chefs/Chefs'
import Footer from './components/Footer/Footer'
import Destination from './components/Destination/Destination'
import Partnering from './components/Partnering/Partnering'
import ImageCard from './components/ImageCard/ImageCard';
import Footer1 from './components/Footer/Footer1'
import Footer2 from './components/Footer/Footer2'
import Footer3 from './components/Footer/Footer3'

ReactDOM.render(
  <React.StrictMode>
    
    <Covid />
    <App/>
    <div className="w3-container bodyleft">
    <div className="w3-bar">
    <Option/>
    </div>
    </div>
    <Contentbox/>
    <div class="w3-container bodyleft">
      <div class="redtext">
        <div class="red1">You don't neet to go far to</div>
        <div class="red1">find what matters</div>
      </div>
    </div>
    <ImageCard/>
    <Celebrities/>
    <Chefs />
    <Partnering/>
    <div className="w3-container bodyleft">
          <div><p id="tour">Destination for future trips</p></div>
          <div class="w3-row">
          <Destination/>
    </div>
    </div>
    <div className="w3-container bodyleft">
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
        
    </div>


  
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
