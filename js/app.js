var phone_version = {};
window.onload = function(){
  var u  = navigator.userAgent;
  var version = {
    trident: u.indexOf('Trident') > -1, //IE内核
    presto: u.indexOf('Presto') > -1, //opera内核
    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1, //是否iPad
    webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
    wechat: u.indexOf('MicroMessenger') > -1 //微信浏览器
  };
  phone_version = version;
  if(document.getElementById("common"))
    document.getElementById("common").style.display = "none";
//   if (version.wechat) {
//    document.getElementById("wechat").innerHTML = 'Tips: WeChat will limit the direct download link operation, <br>please move the upper right corner of the menu, <br>select [open in the browser] or [open in the safari]'
//    + '<br>温馨提示: 微信会限制直接下载的链接操作, 请您移步右上角菜单, 选择【在浏览器中打开】或【在safari中打开】';
    document.getElementById("wechat").innerHTML = '<br/>';
//   }
  if (version.ios || version.iPhone || version.iPad) {
    document.getElementById("android").style.display = "none";
    window.location.href = document.getElementById("apple").href;
  } else if (version.android) {
    document.getElementById("iphone").style.display = "none";
  }
}
