Vue.component('message', {
  props: [ 'title', 'body' ],
  data () {
    return {
      isVisible: true
    };
  },
  template: `
  <article class="message" v-show="this.isVisible">
    <div class="message-header">
      <p>{{ title }}</p>
      <button @click="isVisible=false" class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
      {{ body }}
    </div>
  </article>
  `
});

Vue.component('modal', {
  props: ['body'],
  template: `
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <p>
          {{ body }}
        </p>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>
  `
})
new Vue({
  el: '#root',
  data: {
    showModal: false
  }
});
