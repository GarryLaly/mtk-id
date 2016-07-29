<template>

	<div class="MainWrapper" @dragover.prevent @drop="onDrop">
		Drop here...
	</div>

</template>

<script>

  export default {
  	methods: {
	    onDrop: function(ev) {
	      alert('Dropped');
	    }
	  }
  };

</script>