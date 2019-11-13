import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component {

 state = {};
 
 componentDidMount() {
    this._getMovies();
  }

 /* promise란 앞서 로딩중인 스택에서 에러가 발생할것을 대비해 상황을 염두에 둠으로써 문제가 생겨도 다음 스택으로 넘어가 
 로딩을 시작한다. 사용방법은 fetch('json') .then(situration => situration.json()) .then(json => console.log(json)) .catch(err => console.log(err))
 로딩이 성공적으로 수행 = pass 실패시 결과를 catch, then으로 받아볼수있음. 무한정 에러를 catch로 잡고, fetch로 url을 ajax로 불러올수있다. */

 

 _renderMovies = () => {
   const movies = this.state.movies.map(movie => {
     return (
     <Movie 
     title={movie.title_english} 
     poster={movie.medium_cover_image} 
     key={movie.id} 
     genres={movie.genres} 
     synopsis={movie.synopsis}
     />
     );
   });
   return movies;
 };

 _getMovies = async () => {
  const movies = await this._callApi();
  this.setState({
    movies 
  });
 };

 /* await 와 async는 같이 사용 */

 _callApi = () => {
  return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count')
  .then(potato => potato.json())
  .then(json => json.data.movies)
  .catch(err => console.log(err));
 };

  render() {
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}    
        </div>

        /* 로딩스테이트 만들기
            내가 찾고있는 데이터가 있는지 체크하고 자바스크립트에게 물어본다.
            참이라면 영화정보를 출력하고, 거짓일경우 로딩창을 출력한다. */
      
    
    );
  }
}

export default App;
