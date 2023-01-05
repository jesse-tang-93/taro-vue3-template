import { reactive } from 'vue'
import { View, Text, Button } from '@tarojs/components'
import "./index.scss"
export default {
  name: 'IndexPage',
  components: {
    View,
    Text,
    Button
  },
  setup(){
    const state = reactive({
      msg: '欢迎使用 NutUI3.0 开发小程序',
      msg2: '你成功了～'
    })

    const handleClick = msg => {
      state.msg = msg
    }

    return () => {
      return (
        <View className="home">
          <View><Text>{state.msg}</Text></View>
          <Button onTouchstart={() => handleClick(state.msg2)}>Confirm</Button>
        </View>
      )
    }
  }
}
