import Vue from 'vue';

const patterson = {
    last: 'Patterson'
}

new Vue({
    el: '#one',
    data: {
        user: {
            first: 'Brandon',
            last: patterson.last
        }
    }
});

new Vue({
    el: '#two',
    data: {
        user: {
            first: 'Lauren',
            last: patterson.last
        }
    }
});