

//  登录/注册 页面切换
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