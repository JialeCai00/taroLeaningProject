export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/teams/index',
    'pages/donate/index',
    'pages/profile/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '一个鸡蛋的暴走',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#666',
    selectedColor: '#007AFF',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/teams/index',
        text: '队伍'
      },
      {
        pagePath: 'pages/donate/index',
        text: '捐赠'
      },
      {
        pagePath: 'pages/profile/index',
        text: '我的'
      }
    ]
  }
})
