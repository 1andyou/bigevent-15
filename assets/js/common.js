


          // 项目的通用配置js文件
          var baseUrl='http://www.itcbc.com:8080';

          // 使用 $.ajaxPrefilter 配置 url、headers、completer
          $.ajaxPrefilter(function (option) {

          //请求修改url
          option.url = baseUrl + option.url;
              option.headers = {
                  Authorization: localStorage.getItem('token')
              };
              option.complete = function (xhr) {
                  var res = xhr.responseJSON;
                  if (res && res.status === 1 && res.message === '身份认证失败！') {
                      localStorage.removeItem('token');
                      location.href = './login.html';
                  }
                  // 错误
                  if (res && res.status === 1) {
                      layer.msg(res.message);
                  }
              }
          })