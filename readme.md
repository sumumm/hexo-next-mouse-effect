# <font size=3>自用NexT主题鼠标效果插件</font>

- 欢迎访问我的博客：<a href="https://sumumm.github.io/" target="_blank">苏木</a> 查看效果。

# <font size=3>1.安装插件</font>

```shell
cd hexo-site
npm install hexo-next-mouse-effect
```

# <font size=3>2.配置插件</font>

- 在站点根目录中的站点配置文件中添加以下配置内容。

&emsp;&emsp;在站点配置文件中新增以下内容，目前不支持本地加载效果实现的脚本文件，只支持`CDN`链接引入，其中`CDN`链接可自定义为自己的`CDN`链接。

```yaml
cursor:
  enable: true       # 总开关
  click_ena: true    # 鼠标点击效果控制开关
  click: fireWorks   # 鼠标点击效果 fireWorks | showLove | showText
  fireWorks_cdnPath: "https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/click/fireWorks.js"
  showLove_cdnPath: "https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/click/showLove.js"
  showText_cdnPath: "https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/click/showText.js"
  
  move_ena: true     # 鼠标移动效果控制开关
  move: fairyDust    # 鼠标移动效果 bubble | emoji | fairyDust | ghost | snowflake | springyEmoji
  bubble_cdnPath: "https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/move/bubbleCursor.js"
  emoji_cdnPath: "https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/move/emojiCursor.js"
  fairyDust_cdnPath: "https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/move/fairyDustCursor.js"
  ghost_cdnPath: "https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/move/ghostCursor.js"
  snowflake_cdnPath: "https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/move/snowflakeCursor.js"
  springyEmoji_cdnPath: "https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/move/springyEmojiCursor.js"
```

&emsp;&emsp;注意：若开启鼠标点击出现文字效果，还请按在主题配置文件中新增以下内容。

```yaml
ClickShowText:
  text:
    - 富强
    - 民主
    - 文明
    - 和谐
    - 自由
    - 平等
    - 公正
    - 法制
    - 爱国
    - 敬业
    - 诚信
    - 友善
  fontSize: 15px
  random: true
  mobile: false
```

# <font size=3>3.效果展示</font>

&emsp;&emsp;前3个为鼠标点击产生效果，后边6个为鼠标移动跟随效果。

<table>
    <tr>
        <td align="center">效果名称</td>
        <td align="center">效果图</td>
    </tr>
    <tr>
        <td align="center">fireWorks</td>
        <td align="center"><img src="https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/images/fireWorks.png" ></td>
    </tr>
    <tr>
        <td align="center">showLove</td>
        <td align="center"><img src="https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/images/showLove.png" ></td>
    </tr>
    <tr>
        <td align="center">showText</td>
        <td align="center"><img src="https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/images/showText.png" ></td>
    </tr>
    <tr>
        <td align="center">bubble</td>
        <td align="center"><img src="https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/images/bubble.png" ></td>
    </tr>
    <tr>
        <td align="center">emoji</td>
        <td align="center"><img src="https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/images/emoji.png" ></td>
    </tr>
    <tr>
        <td align="center">fairyDust</td>
        <td align="center"><img src="https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/images/fairyDust.png" ></td>
    </tr>
    <tr>
        <td align="center">ghost</td>
        <td align="center"><img src="https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/images/ghost.png" ></td>
    </tr>
    <tr>
        <td align="center">snowflake</td>
        <td align="center"><img src="https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/images/snowflake.png" ></td>
    </tr>
    <tr>
        <td align="center">springyEmoji</td>
        <td align="center"><img src="https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/images/springyEmoji.png"  ></td>
    </tr>
</table>

# <font size=3>4.参考项目及说明</font>

参考以下大佬项目

<table>
    <tr>
        <td align="center">项目作者</td>
        <td align="center">项目链接</td>
    </tr>
  <tr>
    <td align="left">
    tholman
    </td>
    <td align="left">
    <a href="https://github.com/tholman/cursor-effects" target="_blank">https://github.com/tholman/cursor-effects</a>
    </td>
  </tr>
<table>

&emsp;&emsp;本插件仅为方便自己使用而写，且是在`NexT`主题下使用，若在其他主题下，应该是没得效果的，不过`CDN`链接可以正常引用。