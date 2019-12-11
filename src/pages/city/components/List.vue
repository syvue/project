<template>
  <div class="list" ref="wrapper">
    <!-- 当前城市区域 -->
    <div>
      <div class="area">
        <div class="title boder-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <!-- 热门城市区域 -->
      <div class="area">
        <div class="title boder-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" 
               v-for="item of hot"
               :key="item.id" 
          >
            <div class="button">{{item.name}}</div>
          </div>

        </div>
      </div>
      <!-- 城市列表区域 -->
      <div class="area" 
           v-for="(item,key) of cities"
           :key="key"
           >
        <div class="title boder-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="innerItem of item"
               :key='innerItem.id'
            >{{innerItem.name}}</div>

        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  props:{
    hot: Array,
    cities: Object
  }
  ,
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  .title {
    line-height: 0.44rem;
    background: #eee;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        text-align: center;
        margin: 0.1rem;
        border: 0.02rem solid #cccccc;
        padding: 0.1rem 0;
        border-radius: 0.08rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.54rem;
      padding-left: 0.2rem;
    }
  }
}
</style>