<template>
  <div>
    <h1 :class="`${test ? 'open ' : 'close'}`">前端学院</h1>
    <button @click="switchStyle()">切换样式</button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      test: false,
    };
  },
  methods: {
    switchStyle() {
      this.test = !this.test;
    },
  },
});
</script>

<style lang="scss" scoped>
  $blue: #409eff;
  $gray: #333;
  $white: #fff;

  div {
    width: 10em;
    margin: auto;
    text-align:center;
    // 字间距
    letter-spacing: .1em;
  }
  h1 {
    font-size: 2em;
    width: 5em;
    &::after {
      display: block;
      margin-top: .5em;
      content: "";
      height: 5px;
      background-color: $blue;
      // 设置元素变化的基点位置为中心点
      transform-origin: 50%;
      // 设置缓入缓出效果
      transition: transform .5s ease-in-out;
    }
  }
  // 将 X 轴缩放为 0
  .close::after {
    transform: scaleX(0);
  }
  // 将 X 轴缩放为 1
  .open::after {
    transform: scaleX(1);
  }
  button {
    font-size: 1.2em;
    width: 6em;
    height: 2em;
    margin-top: 4em;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    // 去掉外边框
    outline: none;
    border: none;
    background: rgba($color: $white, $alpha: 1);
    box-shadow: 0 0 4px rgba($color: $gray, $alpha: .4);
    // 设置点击快进慢出
    transition: box-shadow .5s ease-out;
    &:hover {
     box-shadow: 0 0 6px rgba($color: $gray, $alpha: .5);
    }
    &:active {
      background: rgba($color: $blue, $alpha: .8);
      transition: background 1s ease-out;
    }
  }

</style>
