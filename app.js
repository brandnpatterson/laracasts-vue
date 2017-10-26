const app = new Vue({
  el: '#root',
  data: {
    newName: '',
    names: ['Brandon', 'Lauren', 'Riley', 'Hamlet']
  },
  mounted () {

  },
  methods: {
    addName () {
      this.names.push(this.newName);
      this.newName = '';
    }
  }
});
