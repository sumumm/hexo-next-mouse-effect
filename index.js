/*=====================================================================
* FileName: index.js
* Instructions: hexo站点中添加鼠标点击效果和移动跟随效果插件
*=======================================================================*/
/* global hexo */

'use strict';  /* 启用strict模式 */
/*---------------------------------------------------------------------*/
//设置 cursor 默认值
hexo.config.cursor = Object.assign({
  enable: false,

  //鼠标点击效果
  click_ena: false,
  click: "fireWorks",
  fireWorks_cdnPath: "https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/click/fireWorks.js",
  showLove_cdnPath: "https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/click/showLove.js",
  showText_cdnPath: "https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/click/showText.js",
  //鼠标移动效果
  move_ena: false,
  move: "fairyDust",
  bubble_cdnPath: "https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/move/bubbleCursor.js",
  emoji_cdnPath: "https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/move/emojiCursor.js",
  fairyDust_cdnPath: "https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/move/fairyDustCursor.js",
  ghost_cdnPath: "https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/move/ghostCursor.js",
  snowflake_cdnPath: "https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/move/snowflakeCursor.js",
  springyEmoji_cdnPath: "https://cdn.jsdelivr.net/npm/hexo-next-mouse-effect@latest/move/springyEmojiCursor.js",
}, hexo.config.cursor);
const cursor_config = hexo.config.cursor;

/*---------------------------------------------------------------------*/
//加载 cursor 点击和移动跟随效果
//异步加载：async (原生js，且体量小，可以直接async)
if (cursor_config.enable == true){

  if(cursor_config.click_ena){
    var click_effect_path = "";
    // 鼠标点击效果 fireWorks | showLove | showText
    switch (cursor_config.click) {
      case "fireWorks": click_effect_path = cursor_config.fireWorks_cdnPath; break;    
      case "showLove": click_effect_path = cursor_config.showLove_cdnPath; break;
      case "showText": click_effect_path = cursor_config.showText_cdnPath; break;
      default: break;
    }
  }
  if(cursor_config.move_ena){
    var move_effect_path = "";
    // 鼠标移动效果 bubble | emoji | fairyDust | ghost | snowflake | springyEmoji
    switch (cursor_config.move) {
      case "bubble": move_effect_path = cursor_config.bubble_cdnPath; break;
      case "emoji": move_effect_path = cursor_config.emoji_cdnPath; break;
      case "fairyDust": move_effect_path = cursor_config.fairyDust_cdnPath; break;
      case "ghost": move_effect_path = cursor_config.ghost_cdnPath; break;
      case "snowflake": move_effect_path = cursor_config.snowflake_cdnPath; break;
      case "springyEmoji": move_effect_path = cursor_config.springyEmoji_cdnPath; break;
      default: break;
    }
  }

  hexo.extend.filter.register('theme_inject', injects => {
    // ${}为模板字符串，在此函数中使用时外部为反引号 ``
    injects.bodyEnd.raw('cursor', 
    ` {% if config.cursor.click == "showText" %}
        <div id="click-show-text"
            data-mobile = {{ theme.ClickShowText.mobile }}
            data-text = {{ theme.ClickShowText.text.join(",") }}
            data-fontsize = {{ theme.ClickShowText.fontSize }}
            data-random= {{ theme.ClickShowText.random }}>
        </div>
      {% endif %} 

      {% if config.cursor.click_ena %}
        <script async src=${ click_effect_path }></script>
      {% endif %}

      {% if config.cursor.move_ena %}s
        <script async src=${ move_effect_path }></script>
      {% endif %}
    `);
  });
}
else{
  return;
}
