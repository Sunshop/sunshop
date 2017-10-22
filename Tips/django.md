

"""判断手机端"""
if request.META['HTTP_USER_AGENT'].lower().find('mobile') > 0 :
    pass

$.ajax({
    url: '/update_save/',
    type: 'post',
    headers: {"X-CSRFToken":t},
    data: formData,
    processData: false,
    contentType:false,
    success: function (data) {
        if (data['is_succ']) {
            alert("添加成功！")
        }
        else {

        }
    }
});

window.sessionStorage.setItem("P_l_h5", true);



# JsonResponse需要传递dict()
# json.loads  字符串-> dict()   json.dumps dict()-> 序列化

JsonResponse(json_lsit, safe=false)