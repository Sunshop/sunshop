//ajax

var xmlhttp;
function createXMLHttpRequest() {
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
}
function startRequest() {
    createXMLHttpRequest();
    try{
        xmlhttp.onreadystatechange = handStateChange;
        xmlhttp.open("GET","https://api.abc.com/test.txt",true);
        xmlhttp.send()
    }
    catch (exception){
        alert("xmlhttp fail!")
    }
}
function handStateChange() {
    if(xmlhttp.readyState ==4 ){
        if(xmlhttp == 200 || xmlhttp.status == 0){
            var results = xmlhttp.responseText;
            var json = eval(
                "("+results+")"
            );
            alert(json.data.tm);//读取json数据
        }
    }
}