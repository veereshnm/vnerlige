import React from 'react';
import logo from './logo.svg';
import './App.css';



const Images = props => {
return (
  <div class="image-thumbnails">
        {props.list.map(item => {
          return (
            <div>
              <h3>Title: {item.title}</h3>
              <img src={item.url} class="image-thumb" alt={item.title}></img>
            </div>
            )
        }
        )}
      </div>
);
}

const Search = props => {
return (
  <div class="searchPanel">
  <label htmlFor="search">Search: </label>
  <input id="search" onChange={props.onSearch} type="text" ></input>
</div>
);

}

function App() {


  var images = [{
    title: 'frontyard-rose-rainsoaked',
    url:'https://live.staticflickr.com/65535/49851056786_eac8b1dc36_k.jpg'
  },
  {
    title: 'frontyard-rose-halfbloom',
    url:'https://live.staticflickr.com/65535/40779019203_aebf70ad25_h.jpg'
  } ]

  const [searchTerm, setSearchTerm] = React.useState('');

  const searchedImages = images.filter(function(image){
    return image.title.toLowerCase()
      .includes(searchTerm.toLowerCase());
  })


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }
  
  return (
    <div className="App">
      <div class="header">
        <h1>Hello World!!! This is my photo album!</h1>
      </div>
      <Search onSearch={handleSearch}/>
      <Images list={searchedImages}/>
    </div>
  );
}

export default App;
