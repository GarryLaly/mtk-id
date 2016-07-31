<template>

  <header-top></header-top>

  <div class="OuterWrapper">

    <menu-sidebar></menu-sidebar>

    <div class="MainWrapper">
      <router-view></router-view>
    </div>

  </div>

</template>

<script>


  require('../../sass/main.sass');
  
  import store from '../vuex/store.js';

  import HeaderTop from './layout/HeaderTop.vue';
  import MenuSidebar from './layout/MenuSidebar.vue';

  export default {

    components: { HeaderTop, MenuSidebar },
    store: store

  };

</script>
