<template>
    <div>
        <a href="/">←返回</a><br>
        <p>NamedViews</p>
        <router-view></router-view>
        <router-view name="b"></router-view>
        <router-view name="c"></router-view>
    </div>
</template>

<script>
  export default {
    name: "NamedViews"
  }
</script>

<style scoped>

</style>