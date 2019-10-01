<template>
    <div>
        <a href="/">←返回</a><br>
        <router-link to="/nested-routes/profile">profile</router-link><br>
        <router-link to="/nested-routes/archive">archive</router-link><br>
        <p>NestedRoutes</p>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: "NestedRoutes"
  }
</script>

<style scoped>

</style>