<template>
    <div>
        <div class="title">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" >
            <span>本周热门榜单</span>
        </div>
        <div class="wrapper">
            <swiper :options='swiperOption'>
                <swiper-slide v-for='item of hotList' :key='item.id'>
                    <div class="hot-img">
                        <img :src="item.imgUrl" >
                    </div>
                    <p class="desc">{{item.desc}}</p>
                    <p class="price">{{item.price}}</p>
                </swiper-slide>
     
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeHot',
    data () {
        return {
            swiperOption :{
                slidesPerView : 3.5
            },
            hotList:[{
                id:'001',
                imgUrl:'http://img1.qunarzz.com/sight/p0/201402/25/7c223b024b7ba7db02088e3f62c5e07c.jpg_250x250_3c9bc297.jpg',
                desc:'崀山',
                price:'￥68起'
            },{
                id:'002',
                imgUrl:'http://img1.qunarzz.com/sight/p0/201402/25/7c223b024b7ba7db02088e3f62c5e07c.jpg_250x250_3c9bc297.jpg',
                desc:'崀山',
                price:'￥68起'
            },{
                id:'003',
                imgUrl:'http://img1.qunarzz.com/sight/p0/201402/25/7c223b024b7ba7db02088e3f62c5e07c.jpg_250x250_3c9bc297.jpg',
                desc:'崀山',
                price:'￥68起'
            },{
                id:'004',
                imgUrl:'http://img1.qunarzz.com/sight/p0/201402/25/7c223b024b7ba7db02088e3f62c5e07c.jpg_250x250_3c9bc297.jpg',
                desc:'崀山',
                price:'￥68起'
            },{
                id:'005',
                imgUrl:'http://img1.qunarzz.com/sight/p0/201402/25/7c223b024b7ba7db02088e3f62c5e07c.jpg_250x250_3c9bc297.jpg',
                desc:'崀山',
                price:'￥68起'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .title
    position relative
    padding .2rem
    padding-bottom -.1rem
    .title-left
      font-size .32rem;
      line-height .44rem
    .title-img
      display: inline-block;
      overflow: hidden;
      width: .3rem;
      height: .3rem;
      vertical-align: top;
    .title-right
      float right
      color: #616161;
      font-size: .24rem;
      line-height: .28rem;
      position: absolute;
      top: .36rem;
      right: .32rem;
  .wrapper
    height 0
    padding-bottom 40%
    overflow hidden
    width: 100%
    .hot-img
      overflow hidden
      height 24%
      margin-top -.2rem
      .hot-img-content
        margin .15rem
        width: 100%
    .desc
      text-align center
      font-size .24rem
      margin-top .12rem
      line-height: .32rem
      color #212121
      ellipsis()
    .price
      text-align center
      color #ff8300
      span
        color #212121
        font-size .24rem
</style>