const path = require('path')
const config = {
  projectName: 'taro-vue3-template',
  date: '2022-6-8',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  // Taro 插件配置
  plugins: ['@tarojs/plugin-html','taro-plugin-pinia'],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'vue3',
  sass:{
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`
  },
  // 别名设置
  alias:{
    '@/common': path.resolve(__dirname,'..', 'src/common'),
    '@': path.resolve(__dirname,'..', 'src')
  },
  // 小程序端专用配置
  mini: {
    // 自定义 Webpack 配置
    webpackChain (chain) {
      chain.merge({
        module: {
          rule: {
            mjsScript: {
              test: /\.mjs$/,
              include: [/pinia/],
              use: {
                babelLoader: {
                  loader: require.resolve('babel-loader')
                }
              }
            }
          }
        }
      })
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-'], // 忽略的样式名  选择器
          onePxTransform: true, // 开启1px转换
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    router: {
			mode: 'browser', // 使用history模式
			basename: '',
		},
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          selectorBlackList: ['nut-'], // 忽略的样式名  选择器
          onePxTransform: true, // 开启1px转换
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
