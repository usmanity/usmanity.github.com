<template>
  <div class="movie" v-if="!info.adult">
    <a href="#" @click.prevent @click="showOverlayDetails">
      <img :src="fullImgUrl" class="movie-poster">
    </a>
    <div class="overlay" v-if="showOverlay">
      <a class="close" @click="closeOverlay">
        Done
      </a>
      <img :src="fullImgUrl">
      <div class="details">
        <div class="title">
          {{ info.title }}
        </div>
        <div class="rating">
          Average rating: {{ overlay.vote_average }}
        </div>
        <div class="release-date">
          Released on: {{ overlay.release_date }}
        </div>
        <div class="overview">
          {{ overlay.overview }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '../tmdb-config'
import axios from 'axios'

export default {
  name: 'movie',
  props: {
    info: {
      required: true
    }
  },
  data () {
    return {
      imgUrlBase: config.imageUrlBase,
      showOverlay: false,
      overlay: {}
    }
  },
  computed: {
    fullImgUrl () {
      return this.imgUrlBase + this.info.poster_path
    },
    releaseYear () {
      return this.info.release_date.split('-')[0]
    }
  },
  methods: {
    showOverlayDetails () {
      let self = this
      this.showOverlay = true
      axios.get('https://api.themoviedb.org/3/movie/' + this.info.id + '?api_key=' + config.apiKey)
        .then(function (res) {
          self.overlay = res.data
        })
    },
    closeOverlay () {
      this.showOverlay = false
    }
  }
}
</script>

<style scoped lang="scss">
.movie {
  margin: 8px;
  width: 125px;
}
.movie-poster {
  width: 100%;
  border-radius: 9px;
  box-shadow: 0px 0px 10px rgba(100, 100, 100, 0.3);
}
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(10, 10, 10, 0.9);
  top: 0;
  left: 0;
  z-index: 100;
  color: white;
  display: flex;
  align-items: center;
  padding: 40px;
  .close {
    color: white;
    position: absolute;
    top: 20px;
    right: 110px;
    cursor: pointer;
  }
  .details {
    margin: 0 30px;
    padding-right: 40px;
    text-align: justify;
  }
  .title {
    font-size: 28px;
    font-weight: 600;
  }
  .rating, .release-date {
    margin: 10px 0;
  }
  img {
    width: 250px;
    height: 375px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 10px;
  }
}
</style>
