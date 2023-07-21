export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/lottery/lottery",
    "pages/mine/mine",
    "pages/post/post",
  ],
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./images/home.png",
        selectedIconPath: "./images/homeSelected.png",
      },
      {
        pagePath: 'pages/lottery/lottery',
        text: '抽奖',
        iconPath: "./images/home.png",
        selectedIconPath: "./images/homeSelected.png",
      },
      {
        pagePath: "pages/mine/mine",
        text: "我的",
        iconPath: "./images/mine.png",
        selectedIconPath: "./images/mineSelected.png",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
