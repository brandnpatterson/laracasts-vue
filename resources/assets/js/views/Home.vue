<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses" :key="status.id">
                    <div class="message-header">
                        <p>
                            {{ status.user.name }} just said...
                        </p>
                        <p>
                            {{ postedOn(status) }}
                        </p>
                    </div>
                    <div v-text="status.body"></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import moment from 'moment';
import Status from '../models/Status';
export default {
  data() {
      return {
          statuses: []
      }
  },
  created () {
      Status.all(statuses => this.statuses = statuses);
  },
  methods: {
      postedOn (status) {
          return moment.utc(status.created_at).fromNow();
      }
  }
}
</script>

