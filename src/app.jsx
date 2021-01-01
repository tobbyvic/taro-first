import React, { Component } from 'react'
// app.js
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
// 假设我们要使用 Redux
import { Provider } from 'react-redux'
import configStore from './store'

// 全局样式
import './app.less'

const store = configStore()

class App extends Component {
  // 可以使用所有的 React 组件方法
  componentDidMount () {}

  // 对应 onLaunch
  onLaunch () {}

  // 对应 onShow
  componentDidShow () {}

  // 对应 onHide
  componentDidHide () {}

  render () {
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    return (
      <Provider store={store}>
        /* this.props.children 是将要被渲染的页面 */
        {this.props.children}
      </Provider>
    )
  }
}

export default App
