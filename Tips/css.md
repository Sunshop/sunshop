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

##页面滚动效果

```js
$('html, body').animate({
            scrollTop: $(".main_3").offset().top
        }, 1000);
```

##输入为空，字体颜色变化

```html
<input id="id_card" type="text" value="请输入您的登录账号" onfocus="if(this.value=='请输入您的登录账号'){this.value=''};this.style.color='black';" onblur="if(this.value==''||this.value=='请输入您的登录账号'){this.value='请输入您的登录账号';this.style.color='#D9D9D9';}">

<!-- 电话号码限制 -->
<input id="tel_id" type="number" placeholder="请输入您的电话" onfocus="this.style.color='black';"  oninput="if(value.length>11)value=value.slice(0,11)"/>
```

##检测电话号码，名字是否合法

```js
	var phone = $('#telphone').val();
    var vip_name = $('#vip_name').val();
    var re_tel = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
    var re_name = /^[\u4E00-\u9FA5]{2,4}$/;
    var tflag = re_tel.test(phone.toString());
    var nflag = re_name.test(vip_name.toString());
    if (!vip_name){
        alert("请填写姓名！");
        return false;
    }
    if (!phone){
        alert("请填写手机号码！");
        return false;
    }
    if(!(tflag)){
        alert("手机号码有误，请重新填写！");
        return false;
    }
    if (!(nflag)){
        alert("姓名填写有误，请重新填写！");
        return false;
    }
```

##多次点击切换

```js
	$(".e_6 li").click(function () {
        var flip =  $(this).data("flag");
        if(flip++ % 2 === 0){
            $(this).children("img").attr("src","./images/car_s.png")
        }else{
            $(this).children("img").attr("src","./images/car_n.png")
        }
        $(this).data("flag",flip);
    });
```

.m_3 input::-webkit-input-placeholder{
    color: #FF5005;
}
.m_3 input:-moz-placeholder {
    color: #FF5005;
}
.m_3 input::-moz-placeholder{
    color: #FF5005;
}
.m_3 input:-ms-input-placeholder {
    color: #FF5005;
}


'USER':'root',
        'PASSWORD':'123123',
        'HOST': '127.0.0.1',
        'PORT': '3306',


<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript">
// 获取当前时间戳(以s为单位)
var timestamp = Date.parse(new Date());
timestamp = timestamp / 1000;
//当前时间戳为：1403149534
console.log("当前时间戳为：" + timestamp);

// 获取某个时间格式的时间戳
var stringTime = "2014-07-10 10:21:12";
var timestamp2 = Date.parse(new Date(stringTime));
timestamp2 = timestamp2 / 1000;
//2014-07-10 10:21:12的时间戳为：1404958872 
console.log(stringTime + "的时间戳为：" + timestamp2);

// 将当前时间换成时间格式字符串
var timestamp3 = 1403058804;
var newDate = new Date();
newDate.setTime(timestamp3 * 1000);
// Wed Jun 18 2014 
console.log(newDate.toDateString());
// Wed, 18 Jun 2014 02:33:24 GMT 
console.log(newDate.toGMTString());
// 2014-06-18T02:33:24.000Z
console.log(newDate.toISOString());
// 2014-06-18T02:33:24.000Z 
console.log(newDate.toJSON());
// 2014年6月18日 
console.log(newDate.toLocaleDateString());
// 2014年6月18日 上午10:33:24 
console.log(newDate.toLocaleString());
// 上午10:33:24 
console.log(newDate.toLocaleTimeString());
// Wed Jun 18 2014 10:33:24 GMT+0800 (中国标准时间)
console.log(newDate.toString());
// 10:33:24 GMT+0800 (中国标准时间) 
console.log(newDate.toTimeString());
// Wed, 18 Jun 2014 02:33:24 GMT
console.log(newDate.toUTCString());

Date.prototype.format = function(format) {
       var date = {
              "M+": this.getMonth() + 1,
              "d+": this.getDate(),
              "h+": this.getHours(),
              "m+": this.getMinutes(),
              "s+": this.getSeconds(),
              "q+": Math.floor((this.getMonth() + 3) / 3),
              "S+": this.getMilliseconds()
       };
       if (/(y+)/i.test(format)) {
              format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
       }
       for (var k in date) {
              if (new RegExp("(" + k + ")").test(format)) {
                     format = format.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
              }
       }
       return format;
}
console.log(newDate.format('yyyy-MM-dd h:m:s'));

</script>
<script>
    function as(){
        document.write(
            "屏幕分辨率为："+screen.width+"*"+screen.height
            +"<br />"+
            "屏幕可用大小："+screen.availWidth+"*"+screen.availHeight
            +"<br />"+
            "网页可见区域宽："+document.body.clientWidth
            +"<br />"+
            "网页可见区域高："+document.body.clientHeight
            +"<br />"+
            "网页可见区域宽(包括边线的宽)："+document.body.offsetWidth
            +"<br />"+
            "网页可见区域高(包括边线的宽)："+document.body.offsetHeight
            +"<br />"+
            "网页正文全文宽："+document.body.scrollWidth
            +"<br />"+
            "网页正文全文高："+document.body.scrollHeight
            +"<br />"+
            "网页被卷去的高："+document.body.scrollTop
            +"<br />"+
            "网页被卷去的左："+document.body.scrollLeft
            +"<br />"+
            "网页正文部分上："+window.screenTop
            +"<br />"+
            "网页正文部分左："+window.screenLeft
            +"<br />"+
            "屏幕分辨率的高："+window.screen.height
            +"<br />"+
            "屏幕分辨率的宽："+window.screen.width
            +"<br />"+
            "屏幕可用工作区高度："+window.screen.availHeight
            +"<br />"+
            "屏幕可用工作区宽度："+window.screen.availWidth
        );
    }
    as();
</script>


$('html, body').animate({
    scrollTop: $(this).next().offset().top
});







