<style>
	.status{
		position: absolute;
		top: 3%;
		right:2%;
		height:6%;
	}

	.status img{
		height:100%;
	}

</style>

<template>
	<div>
		<div class="status">
			<img v-if="!statusState.isWarning" src="thumbsUp.png">
			<img v-if="statusState.isWarning" src="warning.png">
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