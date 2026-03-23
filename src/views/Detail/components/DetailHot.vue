<script setup>
import { getHotGoodsAPI } from '@/apis/detail'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

// 获取 props 参数 适配不同的 title 和数据
const props = defineProps({
  hotType: {
    type: Number
  }
})

// 适配 title：1 - 24小时热榜， 2 - 周热榜
const typeMap = {
  1: '24小时热榜',
  2: '周热榜'
}
const title = computed(() => typeMap[props.hotType])

// 获取路由
const route = useRoute()
// 详细数据容器
const hotList = ref([])
// 获取详细数据
const getHotList = async () => {
  // 发送请求
  const res = await getHotGoodsAPI({
    id: route.params.id,
    // 请求返回的商品热销类型
    type: props.hotType
  })
  // 存放数据
  hotList.value = res.result
}
getHotList()
</script>

<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
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
