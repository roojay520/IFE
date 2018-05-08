<template>
  <div class="demo-4">
    <img src="../assets/front.jpg" >
    <img src="../assets/back.jpg" >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import '../styles/index.scss';

.demo-4 {
  @include abs_center(250px, 350px);
  cursor: pointer;
  perspective: 800px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 0 6px rgba($color: #000, $alpha: 0.2);
    transition: 0.8s ease-in-out;
    backface-visibility: hidden;
  }
  img:nth-child(1) {
    transform: rotateY(0);
    z-index: 2;
  }
  img:nth-child(2) {
    transform: rotateY(-180deg);
    z-index: 1;
  }
  &:hover {
    img:nth-child(1) {
      transform: rotateY(180deg);
    }
    img:nth-child(2) {
      transform: rotateY(0);
    }
  }
}
</style>
