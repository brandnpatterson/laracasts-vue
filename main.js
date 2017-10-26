Vue.component('task-list', {
    template: `
      <div>
        <task v-for="task in tasks" key="index">{{ task.name }}</task>
      </div>
    `,
    data () {
      return {
        tasks: [
          { name: 'Go to the store', completed: true },
          { name: 'Go to work', completed: false },
          { name: 'Go get a haircut', completed: true },
          { name: 'Go home', completed: true },
          { name: 'Go to Lauren\'s', completed: false },
        ]
      }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
  el: '#root'
});
