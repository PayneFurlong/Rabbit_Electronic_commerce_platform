<script setup>
import { getHotGoodsAPI } from '@/apis/detail'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

// 获取路由
const route = useRoute()
// 详细数据容器
const hotList = ref([])
// 获取详细数据
const getHotList = async () => {
  // 发送请求
  const res = await getHotGoodsAPI({
    id: route.params.id,
    type: 1
  })
  // 存放数据
  hotList.value = res.result
  console.log(res.result)
}
getHotList()
</script>

<template>
  <div class="goods-hot">
    <h3>周日榜单</h3>
    <!-- 商品区块 -->
    <RouterLink
      to="/"
      class="goods-item"
      v-for="item in hotList"
      :key="item.id"
    >
      <img
        :src="item.picture"
        alt=""
      />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
  .goods-item:hover {
    box-shadow: 2px 2px 2px;
    transform: translate3d(-5px, -5px, 5px);
    transition: all 0.3s;
  }
}
</style>
