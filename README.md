## 项目简介

小兔鲜电商前台系统，基于 Vue3 + Vite 构建，实现商品浏览、分类筛选、购物车、订单结算与支付等完整业务流程。

## 技术栈

- Vue3 + Vite
- Pinia
- Vue Router
- Axios
- Element Plus
- SCSS

- ## 核心功能

- 商品分类与筛选
- 商品详情展示（SKU选择）
- 购物车（本地 + 登录合并）
- 用户登录与Token鉴权
- 订单结算与支付流程

- ## 项目亮点

- 实现购物车本地存储与登录后服务端合并，解决用户数据一致性问题  
- 基于 IntersectionObserver 实现图片懒加载，优化页面性能  
- 封装 Axios 请求模块，实现 Token 注入与 401 统一拦截  
- 实现商品列表无限滚动加载，提升用户浏览体验  
- 使用 Pinia 缓存数据，减少重复请求



## 项目截图

### 页面展示
<img width="1280" height="698" alt="屏幕截图 2026-03-29 003620" src="https://github.com/user-attachments/assets/2bff0009-d47d-4d4c-b77e-bd4acb84d57a" />
<img width="1280" height="696" alt="屏幕截图 2026-03-29 003646" src="https://github.com/user-attachments/assets/a5b1d59d-33fb-424f-aca3-14e248d5a6eb" />
<img width="1280" height="696" alt="屏幕截图 2026-03-29 003713" src="https://github.com/user-attachments/assets/d791bb9e-f9d2-488f-a70d-48ac5c1e61ef" />
<img width="1280" height="698" alt="屏幕截图 2026-03-29 003740" src="https://github.com/user-attachments/assets/6c43bae1-ce5d-4222-aa04-3481c404e8b7" />
<img width="1280" height="697" alt="屏幕截图 2026-03-29 003805" src="https://github.com/user-attachments/assets/802491bf-d5f3-4949-817d-db364996585a" />
<img width="1280" height="699" alt="屏幕截图 2026-03-29 003828" src="https://github.com/user-attachments/assets/9a9cfae6-40f7-401c-bb1d-a13dd38f8363" />

### 支付展示
<img width="1280" height="696" alt="屏幕截图 2026-03-29 003843" src="https://github.com/user-attachments/assets/def27969-a90f-4305-96fa-36e269198714" />
<img width="1280" height="697" alt="屏幕截图 2026-03-29 003906" src="https://github.com/user-attachments/assets/7b69c9cf-2d23-47d1-a9eb-ad72b324ae6c" />
<img width="1280" height="698" alt="屏幕截图 2026-03-29 003931" src="https://github.com/user-attachments/assets/601bc8cd-7041-4271-8714-217a59124be8" />
<img width="1280" height="699" alt="屏幕截图 2026-03-29 004057" src="https://github.com/user-attachments/assets/2481a7b1-25f6-4ebe-b9b4-c613945b0a56" />
<img width="1280" height="698" alt="屏幕截图 2026-03-29 004125" src="https://github.com/user-attachments/assets/77d507e5-48d4-4ae3-b8d4-8bdf0fc8e596" />
<img width="1280" height="699" alt="屏幕截图 2026-03-29 004157" src="https://github.com/user-attachments/assets/04f42e0e-bc68-4e54-91d5-8a2d583f56a2" />
<img width="1280" height="698" alt="屏幕截图 2026-03-29 004141" src="https://github.com/user-attachments/assets/fae08992-47a3-45f9-9f50-1b87cc0c3c95" />

### 会员中心展示
<img width="1280" height="699" alt="屏幕截图 2026-03-29 004219" src="https://github.com/user-attachments/assets/42c02963-7575-431d-9e76-c6240ec8b45d" />
<img width="1280" height="699" alt="屏幕截图 2026-03-29 004238" src="https://github.com/user-attachments/assets/b545de67-cb12-4ac7-8dfd-7839ee588449" />

- ## 项目运行

```bash
# 安装依赖
npm install

# 启动项目
npm run dev

# 打包
npm run build

## 项目结构

src
 ├─ api
 ├─ assets
 ├─ components
 ├─ composables
 ├─ directives
 ├─ router
 ├─ stores
 ├─ styles
 ├─ utils
 └─ views
