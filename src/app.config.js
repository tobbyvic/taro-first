export default {
  pages: [
    'pages/amount/amount',
    'pages/rate/rate',
    'pages/support/support'
  ],
  tabBar: {
    list: [{
      pagePath: 'pages/rate/rate',
      text: '按利率计算'
    }, {
      pagePath: 'pages/amount/amount',
      text: '按还款额计算'
    }, {
      pagePath: 'pages/support/support',
      text: '支持我们'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
