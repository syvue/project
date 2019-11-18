<template>
    <div class="wrapper">
        <swiper :options="swiperOpction" >
        <!-- slides -->
            <swiper-slide v-for='item of swiperList' :key='item.id'>
                <img class="swiper-img" :src='item.imgUrl' />
            </swiper-slide>       
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
         </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data (){
        return {
            swiperOpction: {
                pagination:'.swiper-pagination',
                loop:true
            },
            swiperList:[{
                id: '001',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/fcc952d6b479db0e7e61922f3ee70f04.jpg_750x200_c5b67f70.jpg'
            },{
                id: '002',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1706/b9/6b91b49794f46402.jpg_750x200_d7f254e2.jpg'
            },{
                id: '003',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/2b3a9445cc37885eb13e0402baef9f5e.png_750x200_24df2b41.png'
            }]
        }
    }
   
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.66%
    background #ccc
    .swiper-img
      width 100% 
</style>