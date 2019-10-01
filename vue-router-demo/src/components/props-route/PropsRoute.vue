<template>
    <div>
        <a href="/">←返回</a><br>
        PropsRoute
        props:{{ id }}
        static:{{ name }}
        function-mode:{{ query }}
    </div>
</template>

<script>
  export default {
    name: "PropsRoute",
    props:['id','name','query']
  }
</script>

<style scoped>

</style>