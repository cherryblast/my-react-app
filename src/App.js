import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrix",
    poster: "https://www.maxim.com/.image/t_share/MTU0OTMxNjA5NTU0OTIxMTUz/r-lee-ermey-promo.jpg"

  },
  {
    title: "Full Metal Jacket",
    poster: "https://images.velog.io/post-images/killi8n/54206690-bf18-11e8-96f6-87ddba9fb88b/ReactDjango.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png"

  },
  {
    title: "star wars",
    poster: "https://images.velog.io/post-images/vies00/b0872660-0141-11e9-a384-ad27235bab63/bzu1hz4tglecz9nj8gaj.webp"

  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}


export default App;
