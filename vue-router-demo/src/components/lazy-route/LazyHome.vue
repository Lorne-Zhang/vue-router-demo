<template>
    <div>
      <a href="/">←返回</a><br>
      <div>Home</div>
      <router-link to="/lazyOne">/lazyOne</router-link><br>
      <router-link to="/lazyTwo">/lazyTwo</router-link><br>
      <router-link to="/lazyTwo/lazyThree">/lazyTwo/lazyThree</router-link>
    </div>
</template>

<script>
  export default {
    name: "LazyHome"
  }
</script>

<style scoped>

</style>