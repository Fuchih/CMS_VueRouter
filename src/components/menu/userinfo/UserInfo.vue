<template>
  <div>
    <h3 class="text-center">
      <button class="btn btn-secondary btn-sm" @click="$router.back()">back</button>
      User Information --- {{id}}
    </h3>
  </div>
</template>

<script>
export default {
  props:['id']
}
</script>

<style lang="scss" scoped>
.btn {
    box-shadow: none !important;

    &:active {
      transform: scale(0.95);
    }
  }
</style>
