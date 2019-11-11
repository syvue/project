<template>
    <div>
    <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide>
        <img class="swiper-img" src='http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/fcc952d6b479db0e7e61922f3ee70f04.jpg_750x200_c5b67f70.jpg' />
    </swiper-slide>
    <swiper-slide>
        <img class="swiper-img" src='http://img1.qunarzz.com/piao/fusion/1706/b9/6b91b49794f46402.jpg_750x200_d7f254e2.jpg' /></swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
   
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data(){
        return {
            swiperOption:{}
        }
    }
   
}
</script>

<style lang="stylus" scoped>
 .swiper-img
   width 100%
</style>