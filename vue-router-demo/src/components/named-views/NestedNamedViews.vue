<template>
    <div>
        <a href="/">←返回</a><br>
        <p>NestedNamedViews</p>
        <ViewNav/>
        <router-view></router-view>
        <router-view name="b"></router-view>
    </div>
</template>

<script>
    import ViewNav from '../named-views/ViewNav'
  export default {
    name: "NestedNamedViews",
    components: {
      ViewNav
    }
  }
</script>

<style scoped>

</style>