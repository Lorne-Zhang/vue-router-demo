<template>
    <div>User
        {{ this.$route.params.id }}
        {{ this.$route.params.userName }}
        query:{{ this.$route.query }}
        hash:{{ this.$route.hash }}
        {{ this.$route.params.pathMatch }}
    </div>
</template>

<script>
  export default {
    name: "User",
    watch: {
      '$route' (to, from) {
        console.log(to, from)
      }
    },
    beforeRouteUpdate (to, from, next) {
      // react to route changes...
      // don't forget to call next()
      console.log(to, from, next)
    }
  }
</script>

<style scoped>

</style>