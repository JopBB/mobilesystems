<style>
	.status{
		position: absolute;
		top: 1%;
		right:2%;
		height:6%;
		font-size:16pt;
		color:black;
	}

	.status img{
		height:100%;
	}

</style>

<template>
	<div>
		<div class="status">
			<span>Status:</span><br />
			<img v-if="!statusState.isWarning" src="thumbsUp.png">
			<img v-if="statusState.isWarning" src="getOut.png">
  		</div>
	</div>
</template>

<script>
	
	import statusState from '~/src/statusState.js'
	export default{
		data(){
			return{
				statusState:statusState
			}
		}
	}
</script>