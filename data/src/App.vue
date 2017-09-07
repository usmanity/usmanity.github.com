<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <ul class="cards">
      <li  v-for="cardData in currentData">
      <card>
        <div class="test" slot="content">
          <h1>{{ cardData.type }}</h1>
          {{ cardData.latest }}
          <strong>
            {{ cardData.date }}
          </strong>
        </div>
      </card>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "./components/Card.vue";

export default {
  name: "app",
  components: {
    Card
  },
  data() {
    return {
      msg: "Welcome",
      currentData: [
        {
          type: "movies",
          latest: "The Big Sick",
          date: "2017-09-05"
        },
        {
          type: "weight",
          latest: "131.4",
          date: "2017-09-01"
        },
        {
          type: "net-worth",
          latest: "39835",
          date: "2017-09-06"
        }
      ]
    };
  }
};
</script>

<style lang="scss">

</style>
