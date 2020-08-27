import React from 'react';
import logo from './logo.svg';
import './App.css';

var images = [{
  title: 'frontyard-rose-rainsoaked',
  url:'https://live.staticflickr.com/65535/49851056786_eac8b1dc36_k.jpg'
},
{
  title: 'frontyard-rose-halfbloom',
  url:'https://live.staticflickr.com/65535/40779019203_aebf70ad25_h.jpg'
} ]

function App() {
  return (
    <div className="App">
      <div class="header">
        <h1>Hello World!!! This is my photo album!</h1>
      </div>
      <div class="searchPanel">
        <label htmlFor="search">Search: </label>
        <input id="search" type="text"></input>
      </div>
      <div class="image-thumbnails">
        {images.map(item => {
          return (
            <div>
              <h3>Title: {item.title}</h3>
              <img src={item.url} class="image-thumb" alt={item.title}></img>
            </div>
            )
        }
        )}
      </div>
    </div>
  );
}

export default App;
