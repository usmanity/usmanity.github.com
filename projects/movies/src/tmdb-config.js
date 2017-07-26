var apiKey = '7aaaf2cc96ac5f1f0b93e2be9a9b2ead'
export default {
  apiKey: apiKey,
  imageUrlBase: 'https://image.tmdb.org/t/p/w500/',
  popularMoviesUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey,
  searchUrl: 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&page=1&include_adult=false'
}
