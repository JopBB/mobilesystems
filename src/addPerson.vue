<template>
	<div class="botIcon" id="addPersonIcon">
		<img @click="addPerson()" src="addPersonButton.png">
	</div>
</template>

<script>
	import swal from 'sweetalert2';
	export default{

	methods:{
		async addPerson(){
		swal.setDefaults({
		  confirmButtonText: 'Next &rarr;',
		  showCancelButton: true,
		  progressSteps: ['1', '2']
		})

		var steps = [
		  {
		    title: 'Add Person',
		    text: 'Do you want to add a watcher or a burglar?',
		    input:'radio',
		  	inputOptions:{
		  		watcher: 'Watcher',
		  		burglar: 'Burglar'
		  	}
		  },
		  {
		  	title:'Add Person',
		  	text: 'Add the personal number',
		  	input:'number'
		  }
		]
  		var result = await swal.queue(steps);
  			swal.resetDefaults()
		  if (result.value) {

		  	this.updateParticipants(result.value[0]);
		    swal({
		      title: 'All done!',
		      text:
		        'Successfully added a ' + result.value[0] + ' with personal number: ' + result.value[1],
		      confirmButtonText: 'OK.'
		    })
		  }	
  	},
  	updateParticipants(participantType){
  		if(participantType === 'watcher'){
  			this.$emit('addWatcher');
  		}

  		if(participantType === 'burglar'){
  			this.$emit('addBurglar');
  		}
  	}
  }
}
</script>