<template>
    <div>
        <a href="/">←返回</a><br>
        <div>
            <h4>ScrollViews</h4>
            <ul>
                <p><router-link to="/scrollA">/scrollA</router-link></p>
                <p><router-link to="/scrollB">/scrollB</router-link></p>
                <p><router-link to="/scrollB#anchor">/scrollB#anchor</router-link></p>
                <p><router-link to="/scrollB#anchor2">/scrollB#anchor2</router-link></p>
                <p> <router-link to="/scrollB#1number">/scrollB#1number</router-link></p>
            </ul>
            <transition name="fade" mode="out-in" @after-leave="afterLeave">
                <router-view class="view"></router-view>
            </transition>
        </div>

    </div>
</template>

<script>
  export default {
    name: "ScrollViews",
    afterLeave () {
      this.$root.$emit('triggerScroll')
    }
  }
</script>

<style scoped>

</style>