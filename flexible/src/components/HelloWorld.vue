<template>
  <div class="hello">
    <div class="order-list">
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
              世嘉 VOCALOID 初音未来 雪未来 SNOW MIKU 2012 毛绒 再版
              哔哩哔哩独家
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
            color="#ffd21e"
            void-icon="star"
            allow-half
            void-color="#eee"
          />
        </div>
        <!-- 滑块 -->
        <el-slider v-model="value2"></el-slider>

        <!-- 表格 -->
        <el-table :data="tableData" border style="width: 100%;">
          <el-table-column prop="date" label="日期"> </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 提交订单 -->
    <van-submit-bar :price="3050" button-text="提交订单" class="order-submit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      value: 4.5,
      value2: 60,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      checked: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  .order-list {
    margin-bottom: 84px;
    .order-item {
      padding: 0 12px 12px;
      box-sizing: border-box;
      color: #212121;
      margin-top: 10px;
      background: #fff;
      // 订单顶部
      .order-header {
        display: flex;
        align-items: center;
        font-size: 12px;
        height: 36px;
        border-bottom: 1px solid #e7e7e7;
        box-sizing: border-box;
        .shop-logo {
          width: 16px;
          height: 16px;
          margin-right: 6px;
        }
        .shop-name {
          position: relative;
          height: 36px;
          display: flex;
          align-items: center;
          &::before {
            content: ' ';
            display: block;
            position: absolute;
            right: -20px;
            width: 12px;
            height: 24px;
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
        padding: 10px 0;
        display: flex;

        // 订单图片
        .item-img {
          width: 80px;
          height: 80px;
          position: relative;
          display: flex;
          align-items: center;
          background: #eee;
          overflow: hidden;
          border-radius: 4px;
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
          margin-left: 10px;
          .item-name {
            font-size: 14px;
          }
          .item-skus {
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
    // 订单总计
    .total {
      text-align: right;
      .total-span {
        font-size: 12px;
      }
      .price {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>

<style lang="scss">
html {
  margin: 0 auto;
  body {
    // 重置字体大小
    font-size: 14px;
  }
}

.order-submit {
  z-index: 99999 !important;
}

.el-table__header {
  width: 100% !important;
}
.el-table__body {
  width: 100% !important;
}

@media screen and (min-width: 1024px) {
  html {
    max-width: 1024px;
  }
  .order-submit {
    max-width: 1024px;
    left: 50% !important;
    transform: translateX(-50%) !important;
  }
}
</style>
