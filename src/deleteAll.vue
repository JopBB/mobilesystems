<template>
	<div class="botIcon" id="deleteAllIcon">
		<img v-on:click="confirmDelete()" src="recycleBin.png">
	</div>
</template>

<script>
	import swal from 'sweetalert2';
	import participantState from '~/src/participantState.js'
	export default{

		methods:{
		  	confirmDelete(){
		  		swal({
				  title: 'Are you sure you want to delete this project?',
				  text: "You won't be able to revert this!",
				  type: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#d33',
				  cancelButtonColor: '#3085d6',
				  confirmButtonText: 'DELETE'
				}).then((result) => {
				  if (result.value) {
				  	participantState.watcherAmount=1;
				  	participantState.burglarAmount=1;
				    swal(
				      'Deleted!',
				      'Your project has been deleted.',
				      'success'
				    ).then((result => {
				    	if(result.value) {
				    		window.location = "about:blank"
				    	}
				    }))
				  }
				})
  			}
		}
	}
</script>