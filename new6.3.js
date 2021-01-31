const config2 = {
    token: '', // 在 telegram 加入 @daixuesheng 获取
    loop: false, // true 为开启循环作答，会自动开始，结束了自动点返回
    target: [4,5,6,7] // 4 英雄篇 5 复兴篇 6 创新篇 7 信念篇
}
if(config2.token == ''){
	var x=document.getElementsByTagName("HTML")[0].innerHTML;
	//var x=this.location.href;
	//window.clipboardData.setData("Text",x);
	copyToClip(x)
	alert(x);

    config2.token = 'hh';
}