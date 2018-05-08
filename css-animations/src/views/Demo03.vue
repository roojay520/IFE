<template>
  <div class="demo-3">
    <!-- 脸 -->
    <div class="face">
      <!-- 头发 -->
      <div class="hair">
        <div></div>
      </div>
      <!-- 眼睛 -->
      <div class="eye-wrap">
        <div class="eye left">
          <div class="eye-circle">
            <div class="eye-core"></div>
          </div>
          <div class="eye-bottom"></div>
          <div class="face-red"></div>
        </div>
        <div class="eye right">
          <div class="eye-circle">
            <div class="eye-core"></div>
          </div>
          <div class="eye-bottom"></div>
          <div class="face-red"></div>
        </div>
      </div>
      <!-- 鼻子 -->
      <div class="nose"></div>
      <!-- 嘴巴 -->
      <div class="mouth-wrap">
        <div class="mouth-top"></div>
        <div class="mouth left"></div>
        <div class="mouth right"></div>
      </div>
    </div>
    <!-- 耳朵 -->
    <div class="ear-wrap">
      <div class="ear left"> </div>
      <div class="ear right"> </div>
    </div>
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
$delay: 1s;
$timing: ease;

* {
  transition: transform $delay $timing, border-radius $delay linear;
}
.demo-3 {
  @include abs_center(300px, 300px);
  &:hover {
    .mouth {
      transition: border-radius $delay $timing;
      width: 44px;
      height: 44px;
      border-bottom: 4px solid #000;
      border-right: 4px solid #000;
      border-radius: 0% 40% 50% 50%;
      margin-top: -26px;
      position: absolute;
      left: 0;
      &.right {
        border-bottom: 4px solid #000;
        border-right: none;
        border-left: 4px solid #000;
        border-radius: 40% 0% 50% 50%;
        position: absolute;
        left: auto;
        right: 0;
      }
    }
    .eye-bottom {
      height: 50px;
      width: 100px;
      border-radius: 40% 40% 50% 50%;
      position: absolute;
      margin-top: 48px;
      border-top: 2px solid #46240b;
      background: #f6f7f2;
      transform: translateY(-16px);
    }
    .eye-core {
      height: 55px;
      width: 46px;
      border-radius: 50% 50% 50% 50%;
      background: #000;
      position: absolute;
      left: 50%;
      margin-left: -23px;
      transform: scaleX(0.8) translateX(-20px);
    }
    .ear-wrap {
      position: absolute;
      left: 50%;
      width: 300px;
      margin-left: -150px;
      margin-top: 20px;
      .ear {
        position: absolute;
        width: 80px;
        height: 100px;
        border: 2px solid #000;
        background: #fbf8f1;
        border-radius: 100% 10% 50% 0%;
        &.left {
          transform: rotate(-20deg);
        }
        &.right {
          left: auto;
          right: 0;
          border-radius: 10% 100% 0% 50%;
          background: #f1ac2b;
          transform: rotate(20deg);
        }
      }
    }
    .face-red {
      position: absolute;
      height: 20px;
      width: 70px;
      background: red;
      top: 50px;
      /*top: 64px;*/
      left: 18px;
      border-radius: 50% 50% 50% 50%;
      background: #e85a5e;
      opacity: .8;
      transition: opacity $delay $timing;
    }
  }
}
.face-red {
  position: absolute;
  height: 20px;
  width: 70px;
  background: red;
  top: 50px;
  /*top: 64px;*/
  left: 18px;
  border-radius: 50% 50% 50% 50%;
  background: #e85a5e;
  opacity: 0;
  transition: opacity .8s $timing;
}
/* face */

.face {
  position: absolute;
  left: 50%;
  margin-left: -175px;
  top: 40px;
  width: 350px;
  height: 250px;
  border-radius: 50% 50% 30% 30%;
  border: 2px solid #3f200b;
  z-index: 10;
  background: #fbf8f1;
  overflow: hidden;
}

/* ear */

.ear-wrap {
  position: absolute;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  margin-top: 20px;
  .ear {
    position: absolute;
    width: 80px;
    height: 100px;
    border: 2px solid #000;
    background: #fbf8f1;
    border-radius: 100% 10% 50% 0%;
  }
  .right {
    left: auto;
    right: 0;
    border-radius: 10% 100% 0% 50%;
    background: #f1ac2b;
  }
}

/* 头发 */

.hair {
  position: absolute;
  width: 120px;
  height: 120px;
  left: 50%;
  margin-left: 50px;
  margin-top: -40px;
  background: #f3b32e;
  border-radius: 50% 50% 50% 50%;
}

/* 眼睛 */

.eye-wrap {
  position: absolute;
  width: 280px;
  height: 70px;
  top: 90px;
  left: 50%;
  margin-left: -140px;
  overflow: hidden;
  .right {
    left: auto;
    right: 0px;
  }
  .eye {
    height: 100px;
    width: 100px;
    position: absolute;
    .eye-bottom {
      height: 50px;
      width: 100px;
      border-radius: 40% 40% 50% 50%;
      position: absolute;
      margin-top: 48px;
      border-top: 2px solid #46240b;
      background: #f6f7f2;
    }
    .eye-circle {
      width: 100px;
      height: 80px;
      border: 2px solid #482507;
      overflow: hidden;
      position: absolute;
      background: #fff;
      border-radius: 50% 50% 40% 40%;
      box-sizing: border-box;
      .eye-core {
        height: 55px;
        width: 46px;
        border-radius: 50% 50% 50% 50%;
        margin-top: 1px;
        background: #000;
        position: absolute;
        left: 50%;
        margin-left: -23px;
      }
    }
  }
}

/* 鼻子 */

.nose {
  width: 20px;
  height: 18px;
  border-bottom: 8px solid #000;
  border-radius: 0% 0% 50% 50%;
  top: 154px;
  left: 50%;
  margin-left: -10px;
  position: absolute;
}

/* 嘴巴 */

.mouth-wrap {
  position: absolute;
  top: 168px;
  width: 80px;
  left: 50%;
  margin-left: -40px;
  height: 20px;
  overflow: hidden;
  .mouth {
    width: 44px;
    height: 44px;
    border-bottom: 4px solid #000;
    border-right: 4px solid #000;
    border-radius: 0% 40% 50% 20%;
    margin-top: -26px;
    position: absolute;
    left: 0;
  }
  .right {
    border-bottom: 4px solid #000;
    border-right: none;
    border-left: 4px solid #000;
    border-radius: 40% 0% 20% 50%;
    position: absolute;
    left: auto;
    right: 0;
  }
}
</style>
