<template>
    <div>
        <a href="/">←返回</a><br>
        <div>
            <router-link to="subviewa">subviewa</router-link><br>
            <router-link to="subview-b">subview-b</router-link><br>
            <p>Home</p>
            <transition :name="transitionName">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        transitionName: 'slide-left'
      }
    },
    beforeRouteUpdate (to, from, next) {
      this.transitionName = to.path < from.path ? 'slide-right' : 'slide-left'
      next()
    },
  }
</script>

<style scoped>
    .slide-left-enter, .slide-right-leave-active {
        opacity: 0;
        transform: translateX(10px);
    }
    .slide-left-leave-active, .slide-right-enter {
        opacity: 0;
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
</style>