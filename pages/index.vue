<style>
	body{
	}

	#botBar{
		width:100%;
		height:8%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: absolute;
		bottom: 0;
		background-color: #121212;
	}

	.botIcon{
		height:80%;
		margin: auto;
	}
	.botIcon img{
		height: 100%;
	}

	#actionButtons{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height:15%;
		width: 100%;
		position: absolute;
		bottom: 18%;
	}

	.actionButton{
		height:80%;
	}
	.actionButton img{
		height: 100%;
	}

	#maps iframe{
		width:100%;
		position: absolute;
		height:100%;
		bottom:8%;
	}

	.locationPointer{
		position: absolute;
		top:50%;
		left:50%;
		width:10%;
		height:10%;
		margin: -10% 0 0 -5%;
	}
</style>


<template>
  <div>
  	<div id="maps">
  		<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4900.067924077857!2d5.124685750667434!3d52.115510841871725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snl!4v1520606730254" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  	</div>


  	<participants></participants>
  	<status></status>

  	<div class="locationPointer">
  		<img v-if="placeDangerLocation" src="dangerLocation.png">
  	</div>
  	
  	<div class="locationPointer">
  		<img v-if="placeCarLocation"  src="carLocation.png">
  	</div>
  	
  	<div id="actionButtons">
  		<div v-on:click="switchDangerLocation()" class="actionButton">
  			<img src="dangerButton.png">
  		</div>
	  	
	  	<div class="locationSetButton">
  			<img v-if="placeCarLocation" v-on:click="confirmCarLocation()" src="setLocationCarButton.png">
  		</div>

	  	<div class="locationSetButton">
	  		<img v-if="placeDangerLocation" v-on:click="confirmDangerLocation()" src="setLocationDangerButton.png">
	  	</div>

  		<div v-on:click="switchCarLocation()" class="actionButton">
  			<img src="carButton.png">
  		</div>
  	</div>

    <div id="botBar">
    	<deleteAll @click="deleteAll.confirmDelete()"></deleteAll>
    	<div class="botIcon" id="mapIcon">
    		<img src="mapButtonActive.png">
    	</div>
    	<addPerson @addBurglar="participantState.addBurglar()" @addWatcher="participantState.addWatcher()"></addPerson>
    	<div class="botIcon" id="chatIcon">
    		<nuxt-link to="/chat"><img src="chatButton.png"></nuxt-link>
    	</div>
    </div>
  </div>
</template>




<script>
import swal from 'sweetalert2';
import addPerson from '~/src/addPerson.vue'
import deleteAll from '~/src/deleteAll.vue'
import status from '~/src/status.vue'
import participants from '~/src/participants.vue'
import participantState from '~/src/participantState.js'


export default {
  components: {
  	addPerson,
  	deleteAll,
  	status,
  	participants
  },
  head: {
    title: 'Home page'
  },
  data() {
  	return {
  		placeDangerLocation: false,
  		placeCarLocation: false,
  		participantState: participantState,
  	}
  },
  methods: {
  	switchCarLocation(){
  		this.placeCarLocation = !this.placeCarLocation;
  		if(this.placeDangerLocation){
  			this.placeDangerLocation = false;
  		}
  	},
  	switchDangerLocation(){
  		this.placeDangerLocation = !this.placeDangerLocation;
  		if(this.placeCarLocation){
  			this.placeCarLocation = false;
  		}
  	},
  	confirmCarLocation(){
  		swal({
  			title: 'Are you sure you want to set the escape car to this location?',
  			type: 'info',
  			showCancelButton: true,
  		}).then((result) => {
		  if (result.value) {
		  	this.switchCarLocation();
		    swal(
		      'Done!',
		      'The escape car location has been set!.',
		      'success'
		    )
		  }
		})
  	},
  	 confirmDangerLocation(){
  		swal({
  			title: 'Are you sure you want to set the danger-point car to this location?',
  			type: 'info',
  			showCancelButton: true,
  		}).then((result) => {
		  if (result.value) {
  			this.switchDangerLocation();
		    swal(
		      'Done!',
		      'The danger point has been set, now get to the car-rendez-vous point as quick as possible!',
		      'success'
		    )
		  }
		})
  	}
  }
}
</script>