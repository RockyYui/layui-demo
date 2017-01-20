/**
 * Created by Rocky Yui on 2017/1/20 0020.
 */
layui.define(['jquery','layer','form'],function (exports) {
    var $ = layui.jquery,
        layer = layui.layer,
        form = layui.form();

    console.log(layui.device());
    console.log(layui.cache);
    console.log($);

    var indexObj = {
        ok:function (text) {
            layer.msg(text);
        }
    };

    exports("index",indexObj);//组件名；obj对象
})
