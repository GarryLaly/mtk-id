<template>

  <header-top></header-top>

  <div class="OuterWrapper">

    <component-sidebar></component-sidebar>

    <main-wrapper><main-wrapper>

    <aside class="DetailSidebar"></aside>

  </div>

</template>

<script>


  require('../../sass/main.sass')

  import HeaderTop from './layout/HeaderTop.vue';
  import ComponentSidebar from './layout/ComponentSidebar.vue';
  import MainWrapper from './layout/MainWrapper.vue';

  export default {

    components: { HeaderTop, ComponentSidebar, MainWrapper }

  };

</script>
