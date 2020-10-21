import React from 'react';
import './App.css';



const Images = ({list}) => list.map(({id,...item}) => <Image key={id} {...item}/>)

const Image = ({id, title, url}) => {
  return (
    <div key={id}>
      <h3>Title: {title}</h3>
      <img src={url} className="image-thumb" alt={title}></img>
    </div>
    )
}

const InputWithLabel = (
  { id,
    className, 
    value, 
    type = 'text', 
    onInputChange, 
    isFocused,
    children}) => {

  const inputRef = React.useRef();

  React.useEffect(()=>{
    if(isFocused && inputRef.current){
      inputRef.current.focus(); //inputRef.current is the html input element that needs focus
    }
  },[isFocused]);
return (
  <div className={className}>
  <label htmlFor={id}>{children} </label>
  <input 
  ref={inputRef}
  value={value} 
  id={id} 
  onChange={onInputChange} 
  type={type} ></input>
</div>
);

}

function App() {
 
  var images = [{
    id: 1,
    title: 'frontyard-rose-rainsoaked',
    url:'https://live.staticflickr.com/65535/49851056786_eac8b1dc36_k.jpg'
  },
  {
    id: 2,
    title: 'frontyard-rose-halfbloom',
    url:'https://live.staticflickr.com/65535/40779019203_aebf70ad25_h.jpg'
  } ]

  const useSemiPersistentState = (key,initialState) => {
    const [value,setValue] = React.useState(localStorage.getItem(key) || initialState);

    React.useEffect(()=>{
      localStorage.setItem(key, value)
    },[value,key]);

    return [value, setValue];
  }

  const [searchTerm, setSearchTerm] = useSemiPersistentState('search','rose')

  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  },[searchTerm]);


  console.log('searchTerm : ', searchTerm);

  const searchedImages = images.filter(function(image){
    return image.title.toLowerCase()
      .includes(searchTerm.toLowerCase());
  })


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }
  
  return (
    <div className="App">
      <div className="header">
        <h1>Hello World!!! This is my photo album!</h1>
      </div>
      <InputWithLabel 
        id="search"
        className="searchPanel" 
        label="Search :" 
        value={searchTerm} 
        isFocused //Same as isFocused={true}
        onInputChange={handleSearch}>
        <strong> Search: </strong>
        </InputWithLabel>
      <div className="image-thumbnails">
        <Images list={searchedImages}/>
      </div>
    </div>
  );
}

export default App;
