##解决父子DIV中顶部margin cllapse的问题

需要给父div设置：

* 边框，当然可以设置边框为透明
   * border:1px solid transparent或border-top:1px solid transparent
* 为父div添加`padding`，或者至少添加`padding-top`

##垂直居中任何元素
```css
html, body {
  height: 100%;
  margin: 0;
}

body {
  -webkit-align-items: center;  
  -ms-flex-align: center;  
  align-items: center;
  display: -webkit-flex;
  display: flex;
}
```

##使用 max-height 来建立纯 CSS 的滑块

max-height 与 overflow hidden 一起来建立纯 CSS 的滑块：
```css
.slider {
  max-height: 200px;
  overflow-y: hidden;
  width: 300px;
}

.slider:hover {
  max-height: 600px;
  overflow-y: scroll;
}
```
鼠标移入滑块元素时增大它的 max-height 值，便可以显示溢出部分。

##利用 Flexbox 去除多余的外边距

与其使用 nth-， first-， 和 last-child 去除列之间多余的间隙，不如使用 flexbox 的 space-between 属性：
```css
.list {
  display: flex;
  justify-content: space-between;
}

.list .person {
  flex-basis: 23%;
}
```

##利用属性选择器来选择空链接

当 <a> 元素没有文本内容，但有 href 属性的时候，显示它的 href 属性：
```css
a[href^="http"]:empty::before {
  content: attr(href);
}
```
实用性一般！


