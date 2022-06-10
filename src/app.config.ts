export default {
  pages: [
    'pages/index/index',
    'pages/home/index'
  ],
  window: {
    enablePullDownRefresh: true, // 允许下拉刷新
    // 导航栏背景色
    navigationBarBackgroundColor: '#9da',
    navigationBarTitleText: '导航栏标题文字',
    // 导航栏标题颜色 block和white为白色
    navigationBarTextStyle: 'white',
    // 导航栏样式，custom时，只保留右上角胶囊按钮
    navigationStyle: 'default',
    // 下拉loading的样式 dark和 light
    backgroundTextStyle: 'light',
  },
  /**
   * 小程序端特有属性
   */
  entryPagePath: "pages/index/index", // 指定小程序默认启动路径
  debug: true, // 开启调试模式
  requiredBackgroundModes: ['audio','location'], // 后台运行时需要的权限类型-后台使用的能力
  // 接口权限相关设置
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序位置接口的效果展示'
    }
  },
  /**
   * 微信小程序特有属性
   */
   resizable: true, // iPad小程序是否支持屏幕旋转，默认关闭
   /**
    * h5端特有属性
    */
   animation:	{ "duration": 300, "delay": 50 }, // 开启路由动画功能

}
