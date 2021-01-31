const config = {
    token: '', // 在 telegram 加入 @daixuesheng 获取
    loop: false, // true 为开启循环作答，会自动开始，结束了自动点返回
    target: [4,5,6,7] // 4 英雄篇 5 复兴篇 6 创新篇 7 信念篇
}
if(config.token == ''){

    var Y_string = document.getElementsByClassName('fontsize18 ml5')[0].innerHTML;

    alert(Y_string);

    config.token = 'hh';
}