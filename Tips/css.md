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
