<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PageTpl',
  // 可以使用所有的 Vue 生命周期方法
  mounted() {},

  // onLoad-获取页面路由参数
  onLoad() {},

  // onReady-在此生命周期获取小程序渲染层的DOM节点
  onReady() {},

  // 对应 onShow
  onShow() {},

  // 对应 onHide
  onHide() {},

  // 对应 onPullDownRefresh-下拉动作
  onPullDownRefresh() {},
  // 监听用户滚动
  onPageScroll({ scrollTop }) {},
  // 监听右上角 收藏按钮，并自定义收藏内容。仅微信小程序-android版本
  onAddToFavorites(res) {
    // webview 页面返回 webviewUrl
    console.log('WebviewUrl: ', res?.webviewUrl)
    return {
      title: '自定义标题',
      imageUrl: 'https://demo.png',
      query: 'name=xxx&age=xxx',
    }
  },
  // 监听转发操作
  onShareAppMessage(Object) {},
  // 监听分享到朋友圈
  onShareTimeline() {},
  onResize() {},
  onTabItemTap({ index, pagePath, text }) {},
  setup() {
    const msg = ref('Hello world')
    return {
      msg,
    }
  },
}
</script>
