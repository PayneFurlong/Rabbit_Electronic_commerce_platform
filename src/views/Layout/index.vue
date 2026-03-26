<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { useCategoryStore } from '@/stores/categoryStore'
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
    <!-- 添加 key 破坏复用机制 强制销毁重建 -->
    <!-- <RouterView :key="$route.fullPath"></RouterView> -->
    <RouterView></RouterView>
    <LayoutFooter></LayoutFooter>
  </div>
</template>
