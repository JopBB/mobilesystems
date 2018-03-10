<template>
	<div class="botIcon" id="deleteAllIcon">
		<img v-on:click="confirmDelete()" src="deleteAllButton.png">
	</div>
</template>

<script>
	import swal from 'sweetalert2';
	export default{

		methods:{
		  	confirmDelete(){
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