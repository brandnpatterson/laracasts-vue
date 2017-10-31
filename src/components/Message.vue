<template>
  <div class="box">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .box {
    background: whitesmoke;
    padding: 10px;
    margin: 40px;
    border: 1px solid black;
  }
</style>
