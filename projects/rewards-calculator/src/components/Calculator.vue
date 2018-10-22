<template>
  <div class="introduction">
    <h2>Select your rewards type</h2>
    <form action="" name="calculator-form">
        <div class="rewards-selection">
            <label for="rewardsType">
                <input
                    type="radio"
                    name="rewardsType"
                    id="rewards-type"
                    value="cashback"
                />
                Cashback
            </label>
            <label for="rewardsType">
                <input
                    type="radio"
                    name="rewardsType"
                    id="rewards-type"
                    value="points"
                />
                Points
            </label>
            <label for="rewardsType">
                <input
                    type="radio"
                    name="rewardsType"
                    id="rewards-type"
                    value="miles"
                />
                Miles
            </label>
        </div>
        <div class="rate-selection">
            <h2>What's the rewards rate per dollar spent?</h2>
            <input type="number" name="rate" id="rewards-rate">
        </div>
        <div class="spending-input">
            <h2>How much do spend per month? (estimated)</h2>
            <input type="number" name="spending" id="spending">
        </div>
    </form>
    <div class="total">
        <h2>This is your estimated monthly rewards</h2>
        <div>
            {{ rewardsTotal }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
      return {
        //   rewardsTotal: ''
      };
  },
  computed: {
      rewardsTotal() {
          return this.calculateRewards();
      }
  },
  methods: {
      calculateRewards() {
        //   if (!this.rewardsTotal) {
        return 'Nothing so far';
        //   }
      }
  }
}
</script>
<style>

</style>
