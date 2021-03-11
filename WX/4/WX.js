// ==UserScript==
// @name         四史最强
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://ssxx.univs.cn/*
// @match        https://ssxx.univs.cn/*
// @grant        none
// ==/UserScript==

var first = true;
var loop = true;//是否开启循环
//初始化保护
setTimeout(()=>{
    first = false;
},"3000");

setTimeout(()=>{
    var script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/1170559415/js/sishi2/11/28.0318625f45333328f3f5.js";
    document.getElementsByTagName('head')[0].appendChild(script);
},200);

setTimeout(()=>{
    var script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/1170559415/js/WX/2/0.c927e32a7f2e3dfaceb9.js";
    document.getElementsByTagName('head')[0].appendChild(script);
},200);

setInterval(()=>{
    var bin_class;
    if(document.getElementsByClassName('answer_correct').length > 0){
        bin_class = document.getElementsByClassName('el-radio answer_correct')[0];
        bin_class = bin_class.childNodes[0].childNodes[0];
        bin_class.click();
        document.getElementsByClassName('question_btn')[0].click();
    }
    else{
        bin_class = document.getElementsByClassName('el-radio')[0];
        bin_class = bin_class.childNodes[0].childNodes[0];
        bin_class.click();
        document.getElementsByClassName('question_btn')[0].click();
    }
},200);

setInterval(()=>{
    if(document.getElementsByClassName('question_btn')[1].innerHTML != "提交"){
        document.getElementsByClassName('el-input__inner')[0].value = document.getElementsByClassName('question_btn')[1].innerHTML;
        document.getElementsByClassName('code_change_text')[0].innerHTML = "泸职🧡";
        document.getElementsByClassName('el-input__inner')[0].dispatchEvent(new Event('input'));
    }
    if(document.getElementsByClassName('code_button').length > 0){
        document.getElementsByClassName('code_button')[0].click();
    }
},50)

setInterval(()=>{
    if(!first){
        //抢十赛，其他模式懒得弄了
        if(document.getElementsByTagName('img').length > 6 && loop){
            for(var i = 0;i<document.getElementsByTagName('img').length;i++){
                if(document.getElementsByTagName('img')[i].src.indexOf("/public/pc3/qiangshi.png") != -1){
                    document.getElementsByTagName('img')[i].click();
                }
            }
            //document.getElementsByClassName('card_bottom_right_item')[2].img.click();
        }
        if(document.getElementsByClassName('result_back_btn').length > 0){
            document.getElementsByClassName('result_back_btn')[0].click();
        }
    }
},200)
