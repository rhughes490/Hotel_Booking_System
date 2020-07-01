<template lang="html">

	<div id="sightingsGrid">
		<checkin v-for="checkin, index in checkins" :key="index" :checkin="checkin" />
	</div>

</template>

<script>

import Checkin from './Checkin';

export default {
  name: 'checkin-grid',
  components: {
		'checkin': Checkin
	},
	props: ['checkins']
}

</script>

<style lang="css" scoped>
#sightingsGrid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}
</style>