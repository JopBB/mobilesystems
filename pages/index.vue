<style type="text/css">
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

</style>


<template>
  <div>

    <div id="botBar">
    	<div class="botIcon" id="deleteAllIcon">
    		<img src="deleteAllButton.png">
    	</div>
    	<div class="botIcon" id="mapIcon">
    		<img src="mapButton.png">
    	</div>
    	<div class="botIcon" id="addPersonIcon">
			<img src="addPersonButton.png">
    	</div>
    	<div class="botIcon" id="chatIcon">
    		<img src="chatButton.png">
    	</div>
    </div>
  </div>
</template>





<script>
export default {
  head: {
    title: 'Home page'
  }
}
</script>