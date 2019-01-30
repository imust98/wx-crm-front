<template>
  <div class="home">
    <svg-icon icon-class="card" />ss
    <HelloWorld msg="Welcome you"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld
  }
};
</script>
