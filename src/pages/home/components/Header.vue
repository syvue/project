<template>
    <div class="header">
       <div class="header-left">
           <div class="iconfont">&#xe604;</div>
       </div>
       <div class="header-input">
           <span class="iconfont">&#xe647;</span>
           输入城市/景点/游玩主题</div>
       <div class="header-right">城市
           <span class="iconfont">&#xe64a;</span>
       </div>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader'
}
</script>

<style lang='stylus' scoped>
 @import '~styles/varibles.styl'
  .header
    display: flex
    background: $bgColor
    line-height: .88rem
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
      
</style>