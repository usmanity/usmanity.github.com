<template>
  <div id="app">
    <h1>{{ msg }}</h1>

      <div v-if="currentData !== {}" class="cards">
        <card class="weight" title="Weight">
          <div slot="content">
            <h2>{{ currentData.weight.current_weight }}</h2>
            {{ currentData.weight.last_recorded_date }}
          </div>
        </card>
        <card class="net-worth" title="Net Worth">
          <div slot="content">
            <h2>$ {{ netWorth }}</h2>
            <div class="last-updated">
              {{ currentData.net_worth.last_recorded_date }}
            </div>
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
  computed: {
    netWorth() {
      return this.currentData.net_worth.current_net_worth
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
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
// I'm opting ot use just one place for most styles
body {
  // background: #C33764;  /* fallback for old browsers */
  // background: -webkit-linear-gradient(to bottom, #1D2671, #C33764);  /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to bottom, #1D2671, #C33764); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: white;
  color: black;
  font-family: sans-serif;
}

html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

h1 {
  text-align: center;
}

</style>
