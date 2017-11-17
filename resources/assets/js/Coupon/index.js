import Vue from 'vue'

Vue.component('coupon', {
    props: ['code'],

    template: `
        <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input">
    `,
    methods: {
        updateCode(code) {
            this.$emit('input', code);
        }
    }
});

Vue.component('coupon2', {
    props: ['value'],

    template: `
        <input type="text" :value="value" @input="updateCode($event.target.value)" ref="input">
    `,
    methods: {
        updateCode(code) {
            this.$emit('input', code);
        }
    }
});

let vm = new Vue({
    el: '#coupons',
    data: {
        coupon: 'FREEBIE',
        coupon2: 'FREEBIE2'
    }
});