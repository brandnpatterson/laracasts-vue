Vue.component('tabs', {
  data () {
    return { tabs: [] };
  },
  created () {
    this.tabs = this.$children;
  },
  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name === selectedTab.name);
      });
    }
  },
  template: `
  <div>
    <div class="tabs">
      <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive, 'tab': tab.isTab }">
        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
      </li>
    </div>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
  `
});

Vue.component('tab', {
  props: {
    name: { required: true },
    selected: { default: false }
  },
  data () {
    return { isActive: false, isTab: true };
  },
  mounted () {
    this.isActive = this.selected;
  },
  computed: {
    href () {
      return `#${this.name.toLowerCase().replace(/ /g, '-')}`;
    }
  },
  template: `
    <div v-show="isActive"><slot></slot></div>
  `
});

new Vue({
  el: '#root'
});
