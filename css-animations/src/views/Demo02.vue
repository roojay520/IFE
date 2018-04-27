<template>
  <div class="demo-2">
    <ul>
      <li v-for="v in 6" :key="v" :class="`box-${v - 1}`">box-{{v - 1}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {

    };
  },
});
</script>

<style lang="scss" scoped>
@import '../styles/index.scss';
  .demo-2 {
    @include abs_center(677px, 237px);
    box-shadow: 0 0 6px rgba($color: #000, $alpha: .2)

  }
  ul {
    height: 100%;
    font-size: 18px;
    list-style: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    li {
      height: 68px;
      width: 60px;
      line-height: 68px;
      text-align: center;
      background: $gray;
      box-shadow: 0 0 6px rgba($color: #000, $alpha: .2)
    }
    .box-1 {
      transform: skewX(30deg);
    }
    .box-2 {
      transform: scaleX(.5);
    }
    .box-3 {
      transform: rotate(45deg);
    }
    .box-4 {
      transform: translate(10px, 20px);
    }
    .box-5 {
      // 注意先扭曲再旋转， rotate 旋转的是坐标系
      transform:  scaleX(.5) translate(10px, 20px) skewX(30deg) rotate(45deg);
    }
  }
</style>