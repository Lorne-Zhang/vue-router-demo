<template>
    <div>
        <a href="/">←返回</a><br>
        <p>NamedRoutes</p>
        <router-view></router-view>
        <router-view name="b"></router-view>
        <router-view name="c"></router-view>
        <pre>{{ JSON.stringify($route.params) }}</pre>
    </div>
</template>

<script>
  export default {
    name: "NamedRoutes"
  }
</script>

<style scoped>

</style>