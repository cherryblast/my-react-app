import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component {

 state = {

 }

 componentDidMount(){
   setTimeout(() => {
     this.setState({
       movies: [
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
      
        },

        {
          title: "Trainspotting",
          poster: "https://images.velog.io/post-images/vies00/b0872660-0141-11e9-a384-ad27235bab63/bzu1hz4tglecz9nj8gaj.webp"
        }
         
       ]
   })
  }, 5000)
 }

 _renderMovies = () => {
   const movies = this.state.movies.map((movie, index) => {
     return <Movie title={movie.title} poster={movie.poster} key={index} />
   })
   return movies
 }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}    //로딩스테이트 만들기
            //내가 찾고있는 데이터가 있는지 체크하고 자바스크립트에게 물어본다.
            //참이라면 영화정보를 출력하고, 거짓일경우 로딩창을 출력한다.
      </div>
    );
  }
}


export default App;
