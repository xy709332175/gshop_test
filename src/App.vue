<template>
  <div>
    <router-view></router-view>
    <!-- 设置在login界面是否显示底部导航 -->
    <FooterGuide v-if="$route.meta.isShowFooterGuide"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  components: {FooterGuide}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
