<template lang="html">
	<form v-on:submit="addCheckin" method post>
		<h2>Add a check-in</h2>
		<div class="formWrap">
			<label for="name">Name:</label>
			<input type="text" id="name" v-model="name" required/>
		</div>
		<div class="formWrap">
			<label for="email">email:</label>
			<input type="text" id="email" v-model="email" required/>
		</div>
		<div class="formWrap">
			<label for="date">Date:</label>
			<input type="date" id="date" v-model="date" required/>
		</div>
		<div class="formWrap">
			<label for="checked_in">Status:</label>
       <input type="checkbox" id="checked_in" name="checked_in" v-model="isCheckedIn"/>
		</div>

		<input type="submit" value="Save" id="save"/>
    </form>
</template>

<script>

import {eventBus} from '@/main.js'
import CheckinsService from '@/services/CheckinsService.js'

export default {
    name: 'checkins-form',
    data() {
        return {
            name: "",
            email: "",
            date: "",
            isCheckedIn: false
        }
    },
    methods: {
        addCheckin() {
            const payload = {
            name: this.name,
            email: this.email,
            date: this.date,
            isCheckedIn: this.isCheckedIn 
            }
            eventBus.$emit('submit-checkin', payload);

        }
    }

}

</script>

<style lang="css" scoped>
h2 {
	margin: 10px 0;
	padding: 0;
}

form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}

label {
	min-width: 100px;
	display: inline-block;
}

.formWrap {
	margin-bottom: 10px;
}
</style>
