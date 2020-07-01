<template>
<div id="app">
    <checkins-form/>
    <checkins-grid :checkins="checkins" />
  </div>
</template>

<script>

import CheckinsForm from '@/components/CheckinsForm.vue'
import CheckinsGrid from '@/components/CheckinsGrid.vue'
import {eventBus} from '@/main'
import CheckinsService from '@/services/CheckinsService.js'


export default {
  nam: 'app',
  components : {
    'checkins-form': CheckinsForm,
    'checkins-grid': CheckinsGrid
  },
  data() {
    return {
      checkins: []
    }
  },

  mounted() {
    this.fetchCheckins();
  },

  methods: {
    fetchCheckins() {
      CheckinsService.getCheckins()
      .then(checkins => this.checkins = checkins)
    }
  }
}



</script>

<style>
html {
  height: 100%;
}

body {
  background: url('./assets/background.jpg') no-repeat;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
