<template>
  <div class="popular">
    <h1>{{ heading }}</h1>
    <hr>
    <ul v-show="hasMovies">
      <li v-for="movieInfo in movies">
        <movie :info="movieInfo"></movie>
      </li>
    </ul>
    <div class="loader" v-show="!hasMovies">
      ...loading
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Movie from './Movie'
import config from '../tmdb-config'

export default {
  name: 'popular',
  components: {
    Movie
  },
  data () {
    return {
      heading: 'Popular movies',
      movies: []
    }
  },
  methods: {
    hasMovies () {
      return this.movies.length > 0
    }
  },
  mounted () {
    let self = this
    axios.get(config.popularMoviesUrl)
      .then(function (response) {
        self.movies = response.data.results
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: 700;
}
hr {
  /*
   * individual border styles to override default styles for horizontal rows
   */
  color: rgba(169, 169, 169, 0.45);
  border-style: solid;
  border-width: 0 0 1px 0;
  margin-top: 0px;
}
ul {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 210px;
  overflow: scroll;
}
</style>
