<template>
  <div> 
      <div class="title">周末去哪儿</div>
      <ul>
        <li class="item" v-for='item of weekList' :key='item.id'>
      <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
      </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
      </ul>
    
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return{
      weekList:[{
        id:'001',
        imgUrl:'http://img1.qunarzz.com/sight/source/1711/2b/d4ebbd8337f1ac.jpg_r_640x214_2d4332c1.jpg',
        title:'湖南泡汤圣地',
        desc:'山谷幽深，泉水潺潺，宜人的自然风光，怡人的田园景色，动人的神话传说，是一处难得的世外桃园'
      }, {
        id:'002',
        imgUrl:'http://img1.qunarzz.com/sight/source/1811/88/8d3b492ebf0b16.jpg_r_640x214_7b3a281d.jpg',
        title:'邂逅凤凰城',
        desc:'凤凰古城一个古老而神秘的地方，风景秀丽，历史悠久，人杰地灵，名贤辈出，名胜古迹众多'
      },{
        id:'003',
        imgUrl:'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
        title:'寻找北京的皇城范儿',
        desc:'数百年的宫廷庙宇，至今依旧威严霸气'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .title
    line-height .8rem
    background #eeeeee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #616161
      ellipsis()

</style>