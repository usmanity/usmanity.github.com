<template>
  <div class="result" v-if="info.poster_path">
    <img :src="fullImgUrl" class="result-poster">
    <div class="details" @click="showOverlayDetails">
      <div class="title">
        {{ info.title }} ({{ releaseYear() }})
      </div>
      <div class="rating">
        Average rating: {{ info.vote_average }}
      </div>
      <div class="overview" v-if="info.overview.length > 0">
        {{ info.overview }}
      </div>
      <div class="no-overview" v-else>
        No overview available for this title 😭
      </div>
    </div>
    <div class="overlay" v-show="displayOverlay">
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
        <div class="synopsis">
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
  name: 'result',
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
    displayOverlay () {
      return !!(this.showOverlay && this.overlay)
    }
  },
  methods: {
    releaseYear () {
      return this.info.release_date.split('-')[0]
    },
    closeOverlay () {
      this.showOverlay = false
    },
    showOverlayDetails () {
      let self = this
      if (self.showOverlay) {
        return false
      }
      self.showOverlay = true
      axios.get('https://api.themoviedb.org/3/movie/' + this.info.id + '?api_key=' + config.apiKey)
        .then(function (res) {
          self.overlay = res.data
        })
    }
  }
}
</script>

<style scoped lang="scss">
.result {
  margin: 22px 8px;
  width: 100%;
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(50, 50, 50, 0.1);
  &:hover {
    cursor: pointer;
  }
}
.result-poster {
  display: flex-item;
  width: 125px;
  max-height: 187.5px;
  border-radius: 9px;
  box-shadow: 0px 0px 10px rgba(100, 100, 100, 0.3);
}
.details {
  display: flex-item;
  margin-left: 30px;
  position: relative;
  .overview {
    max-height: 120px;
    overflow: hidden;
    line-height: 23px;
  }
  .overview:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(transparent 150px, white);
  }
}
.title {
  font-size: 24px;
  font-weight: 600;
}
.rating {
  color: #888;
  margin: 6px 0;
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
  cursor: initial;
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
