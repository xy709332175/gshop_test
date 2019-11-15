<template>
  <div>
    <ShopHeader />

    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/goods">订餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/rating">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info">商家</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import {SAVE_SHOPDATAS, SAVE_CARTSHOPS} from '../../store/mutations-type'
  import ShopHeader from '../../components/ShopHeader/ShopHeader'
  export default {
    components:{ShopHeader},
    computed: {
      ...mapState({
        shopDatas: state => state.shop.shopDatas,
        cartShops: state => state.shop.cartShops
      })
    },
    mounted () {
      if(sessionStorage.getItem('shopDatas')) {
        let shopDatas = JSON.parse(sessionStorage.getItem('shopDatas'))
        let cartShops = shopDatas.goods.reduce((pre,good) => {
          pre.push(...good.foods.filter(food => food.count))
          return pre
        }, [])
        this.$store.commit(SAVE_SHOPDATAS, {shopDatas})
        this.$store.commit(SAVE_CARTSHOPS, {cartShops})
      } else {
        this.$store.dispatch('getShopDatasAction')
      }
      window.addEventListener('beforeunload', () => {
        // sessionStorage.setItem('shopDatas', JSON.stringify(this.shopDatas))
        // 分别保存的话导致shopDatas和cartShops是两个独立的对象，互相没有引用关联，
        // sessionStorage.setItem('cartShops', JSON.stringify(this.cartShops))
      })
    },
    beforeDestroy(){
      sessionStorage.setItem('shopDatas',JSON.stringify(this.shopDatas))
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #02a774
</style>
