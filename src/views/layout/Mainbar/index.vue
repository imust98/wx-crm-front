<template>
  <section class="app-main" style="min-height: 100%">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'mainbar'
};
</script>
<style lang="scss" scoped>
.app-main {
  padding: 20px;
}
</style>
