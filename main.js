Vue.component('coupon', {
  methods: {
    onCouponApplied () {
      this.$emit('applied');
    }
  },
  template: `
    <input placeholder="Enter your coupon code" @blur="onCouponApplied"></input>
  `
});

new Vue({
  el: '#root',
  data: {
    couponApplied: false
  },
  methods: {
    onCouponApplied () {
      this.couponApplied = true;
    }
  }
});
