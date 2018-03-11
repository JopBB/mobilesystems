import swal from 'sweetalert2';
export default{
	isWarning:false,
  	warningMessage(){
		if(!this.isWarning){
			var that = this;
	  		setTimeout(function(){
		  		swal({
				  title: 'DANGER!',
				  text: "There is danger. Get our A.S.A.P.",
				  type: 'warning',
				  confirmButtonColor: '#3085d6',
				  confirmButtonText: 'OK'
				}).then((result) => {
					that.isWarning=true;
				})
			}
			,5000)
		}			
	}
}