<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/category'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import GoodsItem from '../Home/components/GoodsItem.vue'

// 获取面包屑导航数据
// 获取路由实例
const route = useRoute()
// 二级分类列表数据容器
const categoryData = ref({})
// 获取二级分类列表数据
const getCategoryFilter = async () => {
  // 请求数据
  const res = await getCategoryFilterAPI(route.params.id)
  // 存放至容器
  categoryData.value = res.result
  console.log(res.result)
}
getCategoryFilter()

// 获取基础列表数据渲染
const goodList = ref([])
// 发送请求的数据
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
// 根据导航数据进行渲染
const getGoodList = async () => {
  // 请求数据
  const res = await getSubCategoryAPI(reqData.value)
  // 存储数据
  goodList.value = res.result.items
  console.log(res.result)
}
getGoodList()

// tab 切换回调
const tabChange = () => {
  // 重置页码
  reqData.value.page = 1
  // 重新渲染
  getGoodList()
}

// 控制加载的布尔值
const disabled = ref(false)
// 加载更多功能
const load = async () => {
  // 获取下一页的数据
  reqData.value.page++
  // 请求数据
  const res = await getSubCategoryAPI(reqData.value)
  // 添加数据至列表
  // goodList.value = [...goodList.value, ...res.result.items]
  goodList.value.push(...res.result.items)
  // 加载完毕，停止监听
  // 以返回的数组长度为 0 时即为停止条件
  if (res.result.items.length === 0) {
    // 停止加载
    disabled.value = true
  }
}
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryData.parentId}` }"
          >{{ categoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <!-- 
        1. el-tabs 中的 v-model 所绑定的数据是
           点击了哪个 el-tab-pane 选项就填入谁的 name
        2. el-tabs 绑定的事件 @tab-change 是 activeName 发生改变时触发
       -->
      <el-tabs
        v-model="reqData.sortField"
        @tab-change="tabChange"
      >
        <el-tab-pane
          label="最新商品"
          name="publishTime"
        ></el-tab-pane>
        <el-tab-pane
          label="最高人气"
          name="orderNum"
        ></el-tab-pane>
        <el-tab-pane
          label="评论最多"
          name="evaluateNum"
        ></el-tab-pane>
      </el-tabs>
      <div
        class="body"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled"
      >
        <!-- 商品列表-->
        <GoodsItem
          v-for="item in goodList"
          :key="item.id"
          :goods="item"
        ></GoodsItem>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
