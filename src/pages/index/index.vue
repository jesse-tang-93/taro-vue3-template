<template>
  <view class="index">
    <Counter />
  </view>
</template>

<script>
definePageConfig({
  navigationBarTitleText: '首页'
})


import './index.scss'
import Counter from '../../components/Counter.vue'

export default {
  name: 'IndexPage',
  components: {
    Counter
  },
}
</script>
