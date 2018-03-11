
<style>
	.amountOfParticipants{
		position: absolute;
		top:0;
		left:2%;
		height:6%;
		color:black;
		font-size: 16pt;
	}

	.amountOfParticipants img{
		height:100%;
	}

</style>

<template>
	<div class="amountOfParticipants">
  		<img src="watcherIcon.png"><span>: {{participantState.watcherAmount}}</span><br />
  		<img src="burglarIcon.png"><span>: {{participantState.burglarAmount}}</span>
  	</div>
</template>

<script>
	import participantState from '~/src/participantState.js';
	export default {
		data(){
			return{
				participantState:participantState
			}
		}
	}
</script>