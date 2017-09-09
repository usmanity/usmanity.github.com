<template>
  <div id="app">
    <h1>{{ msg }}</h1>

      <div v-show="currentData != {}" class="cards">
        <card class="movies" background="M" title="Movies">
          <div slot="content">
            <h2>Movies rated</h2>
            {{ currentData.movies.count }}
            <h2>Most recent</h2>
            = TODO
          </div>
        </card>
        <card class="weight" background="W" title="Weight">
          <div slot="content">
            <h2>Latest</h2>
            {{ currentData.weight.current_weight }}
          </div>
        </card>
        <card class="net-worth" background="$" title="Net Worth">
          <div slot="content">
            <h2>Latest</h2>
            {{ currentData.net_worth.current_net_worth }}
          </div>
        </card>
      </div>
    </div>

  </div>
</template>

<script>
import Card from "./components/Card.vue";
import axios from "axios";

export default {
  name: "data",
  components: {
    Card
  },
  data() {
    return {
      msg: "Data",
      currentData: {}
    };
  },
  mounted() {
    var self = this;
    axios.get("http://data.usmanity.com").then(function(res) {
      self.currentData = res.data;
    });
  }
};
</script>

<style lang="scss">
.cards {
  display: flex;
  flex-direction: row;
}
</style>
