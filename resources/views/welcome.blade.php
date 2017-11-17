<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
  </head>
  <body>
    <!-- <div id="one">
      <h2>@{{ user.first }} @{{ user.last }}</h2>
      <input type="text" v-model="user.first">
      <input type="text" v-model="user.last">
    </div>
    <div id="two">
      <h2>@{{ user.first }} @{{ user.last }}</h2>
      <input type="text" v-model="user.first">
      <input type="text" v-model="user.last">
    </div> -->
    <div id="coupons">
      <coupon v-bind:code="coupon" v-on:input="coupon = arguments[0]"></coupon>
      <coupon2 v-bind:value="coupon2" v-on:input="coupon2 = arguments[0]"></coupon2>
    </div>
    <script src="/js/vendor.js"></script>
    <script src="/js/app.js"></script>
  </body>
</html>
