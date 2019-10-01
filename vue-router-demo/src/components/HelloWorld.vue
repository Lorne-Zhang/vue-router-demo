<template>
  <div class="hello">
      <h3>动态路由匹配</h3>
      <router-link to="/user/123">张三-single params</router-link><br>
      <router-link to="/user/456">李四-single params</router-link><br>
      <router-link to="/user/王五/userId/789">王五-mutiple params</router-link><br>
      <router-link to="/user/Query/userId/101?code=123">Query</router-link><br>
      <router-link to="/user/Hash/userId/102#hash=123">Hash</router-link><br>
      <router-link to="/icon-flower123">正则匹配</router-link><br>
      <router-link to="/user-admin">*Admin</router-link><br>
      <router-link to="/none">404</router-link><br>

      <h3>嵌套路由</h3>
      <router-link to="/nested-routes">nestedRoutes</router-link><br>

      <h3>编程式导航</h3>
       <!--path-->
      <button @click="$router.push('programmatic-navigation')">Path</button><br>
       <!--object-->
      <button @click="$router.push({path:'programmatic-navigation'})">Object</button><br>
      <!-- named route-->
      <button @click="$router.push({name:'programmatic-navigation', params: { id:123 }})">NamedRoute</button><br>
       <!--with query  reuslting in /programmatic-navigation?id=123-->
      <button @click="$router.push({path:'programmatic-navigation', query:{ id:123 }})">Query</button><br>

       <!--传递参数  返回 /programmatic-navigation/params=/123-->
      <button @click="$router.push({ name:'programmatic-navigation-params', params: { id }})">WidthParmas01</button><br>
      <button @click="$router.push({ path:`/programmatic-navigation/params=/${ id }`})">WidthParmas02</button><br>

      <h3>命名路由</h3>
      <router-link :to="{name: 'named-routes', params: { id:123 }}">named-routes router-link</router-link><br>
      <button @click="$router.push({name: 'named-routes', params: { id:123 }})">named-routes router.push</button>

      <h3>命名视图</h3>
      <router-link to="/named-views">named-views</router-link><br>
      <router-link to="/nested-named-views/profile">nested-named-views</router-link><br>

      <h3>转发和别名</h3>
      <router-link to="/orignal01">orignal01（forward）</router-link><br>
      <router-link to="/orignal02">orignal02（forward）</router-link><br>
      <router-link to="/alias">alias（forward）</router-link><br>

      <h3>传递Props给路由组件</h3>
      <router-link to="/props-to-route/123">/props-to-route</router-link><br>
      <router-link to="/static">/static</router-link><br>
      <router-link to="/function-mode?keyword='beijing'">/function-mode</router-link><br>

      <h3>过渡</h3>
      <router-link to="/transition-views/subview">/subview</router-link><br>

      <h3>滚动行为</h3>
      <router-link to="/scroll-views">滚动</router-link>

      <h3>懒加载路由</h3>
      <router-link to="/lazy-route">懒加载路由</router-link>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      id:123
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
