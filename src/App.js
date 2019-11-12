import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "star Wars"
]

const movieImages = [
"https://www.maxim.com/.image/t_share/MTU0OTMxNjA5NTU0OTIxMTUz/r-lee-ermey-promo.jpg",
"https://images.velog.io/post-images/killi8n/54206690-bf18-11e8-96f6-87ddba9fb88b/ReactDjango.jpg",
"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png",
"https://images.velog.io/post-images/vies00/b0872660-0141-11e9-a384-ad27235bab63/bzu1hz4tglecz9nj8gaj.webp"
]

class App extends Component {
  render() {
    return (
      <div className="App">
      <Movie title={movieTitles[0]} poster={movieImages[0]}/>
      <Movie title={movieTitles[1]} poster={movieImages[1]}/>
      <Movie title={movieTitles[2]} poster={movieImages[2]}/>
      <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    )
  }
}

export default App;
