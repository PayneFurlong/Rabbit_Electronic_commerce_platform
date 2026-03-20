<script setup>
import { getBannerAPI } from '@/apis/home'
import { ref } from 'vue'

// banner 列表容器
const bannerList = ref([])
// 获取 banner 列表
const getBanner = async () => {
  // 发送请求
  const res = await getBannerAPI()
  // 存入 bannerList
  bannerList.value = res.result
  console.log(res.result)
}
getBanner()
</script>

<template>
  <div class="home-banner">
    <!-- 提供外层的基本盒子 -->
    <el-carousel height="500px">
      <!-- 有几个图片就会有几个 item -->
      <el-carousel-item
        v-for="item in bannerList"
        :key="item.id"
      >
        <img
          :src="item.imgUrl"
          alt=""
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
