import Vue from 'vue/dist/vue.js';
import test from 'ava';
import Notification from '../src/Notification.js';

test('that it renders a notification', t => {
    const n = new Vue(Notification).$mount();
    
    console.log(n.$el.textContent);
});