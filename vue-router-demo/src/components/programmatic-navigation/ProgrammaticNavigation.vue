<template>
    <div>

        <a href="/">←返回</a><br>
        <p>ProgrammaticNavigation</p>
        <pre>{{ JSON.stringify(params) }}</pre>

        <button @click="$router.push({ path:`/programmatic-navigation/params=/${ 456 }`})">WidthParmas03</button><br>
        <button @click="$router.go(-1)">go(-1)</button>
    </div>
</template>

<script>

  export default {
    name: "ProgrammaticNavigation",
    data() {
      return {
        params:this.$route.params,
        from:'',
        next: ''
      }
    },
    beforeRouteUpdate (to, from, next) {
      if (to.path == '/programmatic-navigation/params=/456') {
        this.params = to.params
        this.from = from
        this.next = next
      }
    }
  }
</script>