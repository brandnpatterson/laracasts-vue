// window.Event = new Vue();
// $emit
// $on

window.Event = new class {
  constructor () {
    this.vue = new Vue();
  }

  fire (event, data = null) {
    this.vue.$emit(event, data);
  }

  listen (event, callback) {
    this.vue.$on(event, callback);
  }
}

Vue.component('coupon', {
  methods: {
    onCouponApplied () {
      // Event.$emit('applied');
      Event.fire('applied');
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
  created () {
    // Event.$on('applied', () => this.onCouponApplied());
    Event.listen('applied', () => this.onCouponApplied());
  },
  methods: {
    onCouponApplied () {
      this.couponApplied = true;
    }
  }
});
