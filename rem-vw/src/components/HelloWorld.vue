<template>
  <div class="hello">
    <div class="order-item" v-for="item in 6" :key="item">
      <!-- 订单顶部 -->
      <div class="order-header">
        <img src="../assets/shop-logo.png" alt="" class="shop-logo" />
        <p class="shop-name">会员购</p>
        <p class="order-text">已付定金￥14.85元，预计2021.01出荷</p>
      </div>
      <!-- 订单内容 -->
      <div class="content-wrapper">
        <!-- 订单图片 -->
        <div class="item-img">
          <img src="../assets/fufu.png" alt="" class="item-true-img" />
        </div>
        <!-- 订单右侧内容 -->
        <div class="item-content-right">
          <div class="item-name">
            世嘉 VOCALOID 初音未来 雪未来 SNOW MIKU 2012 毛绒 再版 哔哩哔哩独家
          </div>
          <div class="item-skus">
            雪未来 毛绒
          </div>
        </div>
      </div>
      <!-- 订单总计 -->
      <div class="total">
        <span class="total-span">一件商品，合计：</span>
        <span class="total-span">￥</span>
        <span class="price">89.00</span>
      </div>
      <!-- 评分 -->
      <div class="mirai-rate">
        <van-rate
          v-model="value"
          :size="18"
          color="#ffd21e"
          void-icon="star"
          allow-half
          void-color="#eee"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      value: 4.5
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  .order-item {
    padding: 0 0.12rem 0.12rem;
    box-sizing: border-box;
    color: #212121;
    margin-top: 0.1rem;
    background: #fff;
    // 订单顶部
    .order-header {
      display: flex;
      align-items: center;
      font-size: 0.12rem;
      height: 0.36rem;
      border-bottom: 0.5px solid #e7e7e7;
      box-sizing: border-box;
      .shop-logo {
        width: 0.16rem;
        height: 0.16rem;
        margin-right: 0.06rem;
      }
      .shop-name {
        position: relative;
        height: 0.36rem;
        display: flex;
        align-items: center;
        &::before {
          content: ' ';
          display: block;
          position: absolute;
          right: -0.2rem;
          width: 0.12rem;
          height: 0.24rem;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEgMWw0IDQtNCA0IiBzdHJva2U9IiNDQ0MiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+);
          background-repeat: no-repeat;
          background-position: 50%;
          background-size: 50%;
        }
      }
      .order-text {
        margin-left: auto;
      }
    }
    // 订单内容
    .content-wrapper {
      padding: 0.1rem 0;
      display: flex;

      // 订单图片
      .item-img {
        width: 0.8rem;
        height: 0.8rem;
        position: relative;
        display: flex;
        align-items: center;
        background: #eee;
        overflow: hidden;
        border-radius: 0.04rem;
        .item-true-img {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          min-height: 100%;
          object-fit: cover;
          transform: perspective(1px) translate(-50%, -50%);
        }
      }
      // 订单右侧内容
      .item-content-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 0.1rem;
        .item-name {
          font-size: 0.14rem;
        }
        .item-skus {
          font-size: 0.12rem;
          color: #999;
        }
      }
    }
    // 订单总计
    .total {
      text-align: right;
      .total-span {
        font-size: 0.12rem;
      }
      .price {
        font-size: 0.2rem;
        font-weight: bold;
      }
    }
  }
}
</style>

<style lang="scss">
/**
 * 设计稿 3.75rem,1vw = 3..75rem
 *. 1rem = 0.2666666666666667vw
 * 放大 100倍(避免国产版浏览器字体小于浏览器最小字体(默认1.2 rem)时被保持在 .12rem)
 * 1.00rem = 26.6666666666666667vw
 */
html {
  font-size: 26.6666666666666667vw;
  margin: 0 auto;
  body {
    // 重置字体大小
    font-size: 0.14rem;
  }
}

@media screen and (min-width: 768px) {
  html {
    font-size: 9vw;
    max-width: 768px;
  }
}
</style>
