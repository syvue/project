<template>
  <div class="search">
      <input type="text" class="search-input" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
      .search
        background $bgColor
        height .72rem
        padding 0 .1rem
        .search-input
          width 100%
          text-align center
          height .62rem
          line-height .62rem
          color #666
          box-sizing border-box
          border-radius .06rem
</style>