<template>
  <view class="home">
   <view class="top-area">
     <view class="happy"></view>
     <view class="img"></view>
   </view>
   <view class="btn">
    <nut-noticebar
      :scrollable="true"
      :background="`#FF415A`"
      color='#fff'
    >
    <view class="btn-text">❤❤ 天上地下，今天你最大，生日快乐 ❤❤</view>
    </nut-noticebar>
    </view>
  </view>
</template>

<script>
import './index.scss'
import Counter from '../../components/Counter.vue'
import Taro from '@tarojs/taro'
import { Button, Toast } from '@nutui/nutui-taro';
export default {
  name: 'HomePage',
  components: {
  },
  onShareAppMessage (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '❤生日快乐❤',
      path: '/pages/home/index',
    }
  },
  onShow() {
    const innerAudioContext = Taro.createInnerAudioContext()
      innerAudioContext.autoplay = true
      innerAudioContext.src = 'https://www.qqmc.com/mp3/music5242938.mp3'
      innerAudioContext.onPlay(() => {
        console.log('开始播放')
      })
      innerAudioContext.onError((res) => {
        console.log(res.errMsg)
        console.log(res.errCode)
      })
    Taro.showShareMenu({
      withShareTicket: true,
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })
    console.log('HomePage onShow')
  },
}
</script>
