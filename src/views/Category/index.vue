<script setup>
import { getCategoryAPI } from '@/apis/category'
import { getBannerAPI } from '@/apis/home'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

// 数据容器
const categoryData = ref({})
// 获取 route 实例对象
const route = useRoute()
// 获取二级分类列表
const getCategory = async () => {
  // 发送请求
  const res = await getCategoryAPI(route.params.id)
  // 存入容器
  categoryData.value = res.result
}
getCategory()

// banner 模块
// banner 列表容器
const bannerList = ref([])
// 获取 banner 列表
const getBanner = async () => {
  // 发送请求
  const res = await getBannerAPI({ distributionSite: '2' })
  // 存入 bannerList
  bannerList.value = res.result
  console.log(res.result)
}
getBanner()
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <!-- separator 属性提供面包屑分隔符 -->
        <el-breadcrumb separator=">">
          <!-- el-breadcrumb-item 是面包屑里面的每一个导航项 -->
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 轮播图 -->
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
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;

        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
.home-banner {
  width: 1240px;
  height: 500px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
