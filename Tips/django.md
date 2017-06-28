

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