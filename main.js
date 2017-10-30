Vue.component('tabs', {
  template: `
  <div>
    <div class="tabs">
      <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
      </li>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
  `,
  data () {
    return { tabs: [] };
  },
  created () {
    this.tabs = this.$children;
  },
  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach(t => {
        t.isActive = (t.name === selectedTab.name);
      });
    }
  }
});

Vue.component('tab', {
  props: {
    name: { required: true },
    selected: { default: false }
  },
  data () {
    return { isActive: false };
  },
  computed: {
    href () {
      return `#${this.name.toLowerCase().replace(/ /g, '-')}`;
    }
  },
  mounted () {
    this.isActive = this.selected;
  },
  template: `
    <div v-show="isActive"><slot></slot></div>
  `
});



new Vue({
  el: '#root'
});
