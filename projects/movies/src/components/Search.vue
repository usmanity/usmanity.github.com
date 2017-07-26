<template>
  <div class="search">
    <!-- input type text for easier styling -->
    <input type="text"
          name="search"
          value=""
          v-model="query"
          placeholder="Find a movie..."
          class="search-input"
          v-on:focus="showInstructions = true"
          v-on:blur="showInstructions = false"
          @keyup.enter="submitQuery"
          >
    <span class="enter-instructions" v-show="showInstructions">Press return &#x21A9; to search</span>
    <div class="search-results" v-show="hasResults">
      <ul>
        <li v-for="result in movies">
          <result :info="result"></result>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import config from '../tmdb-config.js'
import axios from 'axios'
import Result from './Result'

export default {
  name: 'search',
  components: {
    Result
  },
  data () {
    return {
      query: '',
      showInstructions: false,
      movies: null
    }
  },
  methods: {
    submitQuery () {
      var self = this
      axios.get(config.searchUrl + '&query=' + this.query).then(function (res) {
        self.movies = res.data.results
      }, function (err) {
        console.log(err)
      })
    },
    hasResults () {
      return this.movies.length > 0
    }
  }
}
</script>

<style scoped lang="scss">
.search, .search-input {
  width: 100%;
  position: relative;
}
.search {
  margin-top: 50px;
}
.search-input {
  font-size: 28px;
  padding: 10px;
  height: 60px;
  box-sizing: border-box;
  box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(1, 1, 1, .1);
  text-indent: 10px;
  margin-bottom: 40px;
  &:focus {
    outline: none;
  }
}
.enter-instructions {
  position: absolute;
  top: 23px;
  right: 20px;
  font-size: 12px;
  opacity: 0.5;
}
</style>
