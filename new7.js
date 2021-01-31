const config = {
    token: '', // 在 telegram 加入 @daixuesheng 获取
    loop: false, // true 为开启循环作答，会自动开始，结束了自动点返回
    target: [4,5,6,7] // 4 英雄篇 5 复兴篇 6 创新篇 7 信念篇
}
if(config.token == ''){
	var x_string = document.getElementsByClassName('question_title')[0].innerHTML;
	var x_buffer = "";
	while(x_string.indexOf("display:none;") != -1){
		x_buffer = x_string.substring(x_string.indexOf("display:none;"));
		x_buffer = x_buffer.substring(0,x_buffer.indexOf("<")+1);
		x_string = x_string.replace(x_buffer,"");
	}
	x_buffer = "";
	while(x_string.indexOf(">") != -1){
		if(x_string.charAt(x_string.indexOf(">")+2) != ' ' && x_string.charAt(x_string.indexOf(">")+1) != '<' &&x_string.charAt(x_string.indexOf(">")+1) != 0){
			x_string = x_string.substring(x_string.indexOf(">")+1);
			x_buffer = x_buffer.concat(x_string.substring(0,x_string.indexOf("<")));
		}
		x_string = x_string.substring(x_string.indexOf(">")+1);
	}
	alert(x_buffer);
	copyToClip(x_buffer)
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