// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://ssxx.univs.cn/*
// @match        https://ssxx.univs.cn/*
// @match        file:///C:/Users/jwy/Desktop/*
// @grant        none
// ==/UserScript==
const config = {
    token: '', // 在 telegram 加入 @daixuesheng 获取
    loop: false, // true 为开启循环作答，会自动开始，结束了自动点返回
    target: [4,5,6,7] // 4 英雄篇 5 复兴篇 6 创新篇 7 信念篇
}
if(config.token == ''){
	var x_string = document.getElementsByClassName('exam_question_content')[0].innerHTML;
    var Y_string = document.getElementsByClassName('fontsize18 ml5')[0].innerHTML;
	var x_buffer = "";
	while(x_string.indexOf("display:none;") != -1){
		x_buffer = x_string.substring(x_string.indexOf("display:none;"));
		x_buffer = x_buffer.substring(0,x_buffer.indexOf("<")+1);
		x_string = x_string.replace(x_buffer,"");
	}
	x_buffer = "";
	while(x_string.indexOf(">") != -1){
		if(x_string.charAt(x_string.indexOf(">")+2) != ' ' && x_string.charAt(x_string.indexOf(">")+1) != '<' &&x_string.charAt(x_string.indexOf(">")+2) != '<'){
			x_string = x_string.substring(x_string.indexOf(">")+1);
			x_buffer = x_buffer.concat(x_string.substring(0,x_string.indexOf("<")));
		}
		x_string = x_string.substring(x_string.indexOf(">")+1);
	}
    document.getElementsByClassName('fontsize18 ml5')[0].innerHTML = Y_string.replace("网上重走长征路知识竞答",x_buffer);
    alert(Y_string);
	alert(x_buffer);
    config.token = 'hh';
}