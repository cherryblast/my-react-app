import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
      console.log(this.props);
      return(
          <div>
              <MoviePoster />
        <h1>hello this is a Movie</h1>
         </div>
      
      )
  }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/ziksir/4e28a06debc44060a0242a47317b43a7.PNG" alt="kingsman"/>
        )
    }
}
        
export default Movie