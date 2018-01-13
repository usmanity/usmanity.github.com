<template>
  <div class="coins">
    <h1>{{ msg }}</h1>
    <div class="raw">
      <ol>
        <li v-for="coin in coinData">
          {{ coin.name }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Coins',
  data () {
    return {
      msg: 'Top 10',
      coinData: {}
    }
  },
  methods: {
    getCoinData() {
      var self = this;
      axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10').then(function(res){
        self.coinData = res.data;
      });
    }
  },
  mounted() {
    this.getCoinData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
li {
  text-align: left;
}
</style>
