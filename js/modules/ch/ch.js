/**
 * Created by Rocky Yui on 2017/1/20 0020.
 */
layui.define(['layer','form'],function (exports) {
    var layer = layui.layer,
        form = layui.form();

    console.log(layui.device());
    console.log(layui.cache);

    var indexObj = {
        ok:function (text) {
            layer.msg(text);
        }
    };

    exports("ch",indexObj);//组件名；obj对象
})
