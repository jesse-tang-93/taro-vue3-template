import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Tabbar, TabbarItem, NoticeBar } from '@nutui/nutui-taro';
import './app.scss'

// 创建 pinia 实例
const pinia = createPinia();
const App = createApp({
  onLaunch(options){
    // 获取程序启动时初始化参数，场景值、shareTicket、query、path、referrerInfo等等
    console.log(options)
  },
  // 程序启动或者由后台切换到前台时触发
  onShow(options) {
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
  onHide(){},
  // 程序要打开的页面不存在时触发
  onPageNotFound(){

  }
})

// 挂载至 vue 根实例
App.use(pinia).use(NoticeBar).use(Tabbar).use(TabbarItem);

export default App
