<template>
    <div>
        <h4>我是LazyTwo</h4>
        <p>我被懒加载了，查看Chrome devtools 中的Networks选项卡</p>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: "LazyTwo"
  }
</script>

<style scoped>

</style>