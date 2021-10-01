<template>
  <div class="container-fuild">
    <Header></Header>
    <div class="main-box">
      <Aside></Aside>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'

export default {
  components: {
    Header,
    Aside
  }
}
</script>

<style lang="scss" scoped>
.main-box {
  display: flex;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;

  .main {
    flex: 2;
    border-left: 1px solid #ccc;
  }
}
</style>
