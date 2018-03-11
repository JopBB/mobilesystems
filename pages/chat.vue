<style>
	body{
		background-color: #303030;
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


	#chatMessages{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		margin-top:100px;

	}

	.message{
		width:90%;
		background-color: #424242;
		height:70px;
		box-shadow: 0 3px;
		border-radius:5px;
		display: flex;
		align-items: center;
		margin-top:20px;
	}

	.messageImageWrapper{
		height:40%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width:90%;
		margin: auto;
	}

	.messageImageWrapper img{
		height:100%;
	}

	.messageText{
		flex-grow: 3;
		color:white;
		font-size: 12pt;
		text-align: center;
		margin: auto;
	}

	#recievedMessages{
		position: absolute;
		bottom:8%;
		width:100%;
		height:15%;
		text-align: center;
		background-color: #424242;
	}
</style>


<template>
	<div>
		<participants></participants>
		<status></status>

		<div id="chatMessages">
			<div class="message">
				<div class="messageImageWrapper">
					<img src="silence.png">
					<p class="messageText">Be silent please!</p>
					<img @click="sendMessage('silence')" src="send.png">
				</div>
			</div>

			<div class="message">
				<div class="messageImageWrapper">
					<img src="warning.png">
					<p class="messageText">Careful! Get out A.S.A.P.!</p>
					<img @click="sendMessage('warning')" src="send.png">
				</div>
			</div>

			<div class="message">
				<div class="messageImageWrapper">
					<img src="silence.png">
					<p class="messageText">Be silent please!</p>
					<img @click="sendMessage('silence')" src="send.png">
				</div>
			</div>
		</div>

	    <div id="botBar">
	    	<deleteAll @click="deleteAll.confirmDelete()"></deleteAll>
	    	<div class="botIcon" id="mapIcon">
	    		<nuxt-link to="/"><img src="mapButton.png"></nuxt-link>
	    	</div>
			<addPerson @addBurglar="participantState.addBurglar()" @addWatcher="participantState.addWatcher()"></addPerson>
	    	<div class="botIcon" id="chatIcon">
	    		<img src="chatButtonActive.png">
	    	</div>
	    </div>
  	</div>
</template>





<script>
import swal from 'sweetalert2';
import addPerson from '~/src/addPerson.vue'
import deleteAll from '~/src/deleteAll.vue'
import status from '~/src/status.vue'
import statusState from '~/src/statusState.js'
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
  methods:{
  	sendMessage(messageType){
  		swal({
		  title: 'Send message',
		  text: "Are you sure you want to send a " + messageType + " message?",
		  type: 'info',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Send'
		}).then((result) => {
		  if (result.value) {
  	  		statusState.warningMessage();
		    swal(
		      'Sent!',
		      'Your message has been sent!',
		      'success'
		    )
		  }
		})
  	}
  },
  data() {
  	return {
  		placeDangerLocation: false,
  		placeCarLocation: false,
  		participantState: participantState,
  		statusState:statusState,
  		sentMessage: false,

  	}
  }
}
</script>