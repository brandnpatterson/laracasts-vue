<template>
  <div id="app">
    <message>Hello Vue</message>
    <message>Hello Vue</message>
  </div>
</template>

<script>
import Message from './components/Message.vue';

export default {
  name: 'app',
  components: { Message },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
