

    //登录/注册 页面切换
    $('.login a').on('click', function () {
        $('.login').hide().next().show();
    });

    $('.register a').on('click', function () {
        $('.login').show().next().hide();
    });


    //登录
    $('.login form').on('submit', function (e) {
        e.preventDefault();
        var data = $(this).serialize();  // 必须检查name属性值
        $.ajax({
            type: 'POST',
            url: '/api/login',
            data: data,
            success: function (res) {
                layer.msg(res.message);
                if (res.status === 0) {
                    // 登录成功，保存token
                    localStorage.setItem('token', res.token);
                    // 跳转到首页面 index.html
                    location.href = './index.html';
                }
            }
        });
    });


    // 注册
    $('.register form').on('submit', function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: '/api/reguser',
            data: data,
            success: function (res) {
                layer.msg(res.message);
                if (res.status === 0) {
                    $('.register form')[0].reset();
                    $('.login').show().next().hide();
                }
            }
        })
    });


    //自定义表单验证
    var form = layui.form;
    // 调用 form 模块内置方法verify，自定义验证规则
    form.verify({
        user: [/^[a-zA-Z0-9]{2,10}$/, '用户名只能是数字字母，且2~10位'],
        len: [/^\S{6,12}$/, '密码6~12位且不能有空格'],
        same: function (val) {
            if (val !== $('.pwd').val()) {

                return '两次密码不一致'
            }
        }
    });


