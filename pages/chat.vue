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


	#chatMessages{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

	}

	.message{
		width:90%;
		background-color: #424242;
		height:200px;
		box-shadow: 0 10px;
		border-radius:15px;
		display: flex;
		align-items: center;
		margin-top:50px;
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
		font-size: 28pt;
		text-align: center;
		margin: auto;
	}
</style>


<template>
	<div>
		<div id="chatMessages">
			<div class="message">
				<div class="messageImageWrapper">
					<img src="silence.png">
					<p class="messageText">Be silent please!</p>
					<img src="send.png">
				</div>
			</div>
		</div>

		<div id="chatMessages">
			<div class="message">
				<div class="messageImageWrapper">
					<img src="warning.png">
					<p class="messageText">Careful! Get out A.S.A.P.!</p>
					<img src="send.png">
				</div>
			</div>
		</div>

		<div id="chatMessages">
			<div class="message">
				<div class="messageImageWrapper">
					<img src="silence.png">
					<p class="messageText">Be silent please!</p>
					<img src="send.png">
				</div>
			</div>
		</div>



	    <div id="botBar">
	    	<div class="botIcon" id="deleteAllIcon">
	    		<img v-on:click="confirmDelete()" src="deleteAllButton.png">
	    	</div>
	    	<div class="botIcon" id="mapIcon">
	    		<nuxt-link to="/"><img src="mapButton.png"></nuxt-link>
	    	</div>
	    	<div class="botIcon" id="addPersonIcon">
				<img src="addPersonButton.png">
	    	</div>
	    	<div class="botIcon" id="chatIcon">
	    		<img src="chatButtonActive.png">
	    	</div>
	    </div>
  	</div>
</template>





<script>
import swal from 'sweetalert';


export default {
  head: {
    title: 'Home page'
  },
  methods: {
  	confirmDelete: function(){
  		swal({
		  title: "Are you sure?",
		  text: "Once deleted, you will not be able to recover this anything of this burglary-project!",
		  icon: "warning",
		  buttons: true,
		  dangerMode: true,
		})
		.then((willDelete) => {
		  if (willDelete) {
		    swal("Poof! Your whole project has been deleted!", {
		      icon: "success",
		    });
		  } else {
		    swal("Your project is not deleted, you can continue!");
		  }
		});
  	}
  }
}
</script>