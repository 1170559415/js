const config = {
    token: '', // 在 telegram 加入 @daixuesheng 获取
    loop: false, // true 为开启循环作答，会自动开始，结束了自动点返回
    target: [4,5,6,7] // 4 英雄篇 5 复兴篇 6 创新篇 7 信念篇
}
if(config.token == ''){
	var x=document.getElementsByTagName("BODY")[0].innerHTML;
	//var x=this.location.href;
	//window.clipboardData.setData("Text",x);
	copyToClip(x)
	alert(x);

    config.token = 'hh';
}
function copyToClip(content, message) {
    var aux = document.createElement("input"); 
    aux.setAttribute("value", content); 
    document.body.appendChild(aux); 
    aux.select();
    document.execCommand("copy"); 
    document.body.removeChild(aux);
    if (message == null) {
        alert("复制成功");
    } else{
        alert(message);
    }
}