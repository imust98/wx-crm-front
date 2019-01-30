<template>
  <div class="app-wrapper" :class="classObj">
    <sidebar class="side-wrapper"></sidebar> 
    <div class="main-wrapper">
      <navbar></navbar>
      <mainbar></mainbar>
    </div>
  </div>
</template>
<script>
import Sidebar from './Sidebar/index';
import Navbar from './Navbar/index';
import Mainbar from './Mainbar/index';
import { mapGetters } from 'vuex';
export default {
  name: 'layout',
  components: {
    Sidebar,
    Navbar,
    Mainbar
  },
  computed: {
    ...mapGetters(['sidebar']),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation
      };
    }
  },
  created() {
    // this.$store.dispatch('GetUserInfo');
  }
};
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
