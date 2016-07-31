<template>

  <div class="BangunDatar-block u-transition-default">
  	<img class="BangunDatar-block-img" v-bind:src="img" alt="{{ title }}">
  	<h4 class="BangunDatar-block-title">{{ title }}</h4>
  </div>

</template>

<script>

  export default {
  	props: ['title', 'img']
  };

</script>
