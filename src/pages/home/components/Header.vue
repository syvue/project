<template>
    <div class="header">
       <div class="header-left">
           <div class="iconfont">&#xe622;</div>
       </div>
       <div class="header-input">
           <span class="iconfont">&#xe647;</span>
           输入城市/景点/游玩主题</div>
      <router-link to="/city">     
        <div class="header-right">{{this.city}}
            <span class="iconfont">&#xe6aa;</span>
        </div>
       </router-link>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader',
    props:{
      city:String
    }
}
</script>

<style lang='stylus' scoped>
 @import '~styles/varibles.styl'
  .header
    display: flex
    background: $bgColor
    line-height: $headerHigh
    color: #fff
    .header-left
      width: .64rem
      float: left
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      background: #fff
      border-radius: .2rem
      color: #000
    .header-right
      float: right
      text-align: center
      width: 1.24rem
      color #fff
</style>