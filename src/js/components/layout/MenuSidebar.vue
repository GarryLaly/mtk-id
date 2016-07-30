<template>

  <aside class="MenuSidebar">
    <div class="MenuSidebar-group">
      <h4 class="MenuSidebar-header text-center">Menu</h4>

      <ul class="nav nav-pills nav-stacked">
      	<li v-link="{ path: '/home', activeClass: 'active' }">
      		<a href="#" v-link="'home'">Home</a>
      	</li>
      	<li v-link="{ path: '/bangun-datar', activeClass: 'active' }">
      		<a href="#" v-link="'bangun-datar'">Bangun Datar <span class="badge">New</span></a>
      	</li>
      	<li v-link="{ path: '/about', activeClass: 'active' }">
      		<a href="#" v-link="'about'">About</a>
      	</li>
			</ul>
    </div>
  </aside>

</template>

<script>

  export default {
  };

</script>
