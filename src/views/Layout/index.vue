<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'
// 触发获取导航列表的 action 方法
const categoryStore = useCategoryStore()
// 发送数据请求
onMounted(() => categoryStore.getCategory())
</script>

<template>
  <div>
    <LayoutFixed></LayoutFixed>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <!-- 二级路由出口 -->
    <RouterView></RouterView>
    <LayoutFooter></LayoutFooter>
  </div>
</template>
