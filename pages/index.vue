<style>
	body{
		background-image: url('/mapBackground.png');
		background-size: 100%;
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
		bottom: 8%;
	}

	.actionButton{
		height:80%;
	}
	.actionButton img{
		height: 100%;
	}

</style>


<template>
  <div>
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