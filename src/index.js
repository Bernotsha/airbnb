import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Covid from './components/Covid'
import Header from './components/Header'
import Option from './components/Option'
import Contentbox from './components/Contentbox'
import RedText from './components/RedText'
import Celebrities from './components/Celebrities'
import * as serviceWorker from './serviceWorker';
import Chefs from './components/Chefs'
import Footer from './components/Footer'
import Destination from './components/Destination'
import Partnering from './components/Partnering'
import ImageCard from './components/ImageCard';

ReactDOM.render(
  <React.StrictMode>
    
    <Covid />
    <App/>
    <Option/>
    <Contentbox/>
    <RedText/>
    <ImageCard/>
    <Celebrities/>
    <Chefs />
    <Partnering/>
    <Destination/>
    <Footer/>


  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
