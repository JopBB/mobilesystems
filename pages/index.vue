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

</style>


<template>
  <div>
  	<div id="maps">
  		<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4900.067924077857!2d5.124685750667434!3d52.115510841871725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snl!4v1520606730254" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  	</div>
  	<div id="actionButtons">
  		<div class="actionButton">
  			<img src="dangerButton.png">
  		</div>
  		<div class="actionButton">
  			<img src="carButton.png">
  		</div>
  	</div>

    <div id="botBar">
    	<div class="botIcon" id="deleteAllIcon">
    		<img v-on:click="confirmDelete()" src="deleteAllButton.png">
    	</div>
    	<div class="botIcon" id="mapIcon">
    		<img src="mapButtonActive.png">
    	</div>
    	<div class="botIcon" id="addPersonIcon">
			<img src="addPersonButton.png">
    	</div>
    	<div class="botIcon" id="chatIcon">
    		<nuxt-link to="/chat"><img src="chatButton.png"></nuxt-link>
    	</div>
    </div>
  </div>
</template>




<script>
import swal from 'sweetalert2';


export default {
  head: {
    title: 'Home page'
  },
  methods: {
  	confirmDelete: function(){
  		swal({
		  title: 'Are you sure you want to delete this project?',
		  text: "You won't be able to revert this!",
		  type: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'DELETE'
		}).then((result) => {
		  if (result.value) {
		    swal(
		      'Deleted!',
		      'Your project has been deleted.',
		      'success'
		    )
		  }
		})
  	}
  }
}
</script>