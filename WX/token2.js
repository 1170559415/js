setTimeout(()=>{
    //window.location.href="http://1.15.111.214:8080/";
    //const img = new Image();
    //img.src = 'http://1.15.111.214:8080/123' // 请求
    //var script = document.createElement('iframe'),
    //body = document.getElementsByTagName('body');
    //script.src = 'http://1.15.111.214:8080/123.js';
    //body[0].appendChild(script);

    var get = "?" + localStorage.getItem("userInfo") + "?" +
    localStorage.getItem("politics") + "?" +
    localStorage.getItem("mobile") + "?" +
    localStorage.getItem("identity") + "?" +
    localStorage.getItem("name") + "?" +
    localStorage.getItem("refreshToken") + "?" +
    localStorage.getItem("id") + "?" +
    localStorage.getItem("currentActivityId") + "?" +
    localStorage.getItem("universityName") + "?" +
    localStorage.getItem("isTeacher","false") + "?" +
    localStorage.getItem("universityId") + "?" +
    localStorage.getItem("department") + "?" +
    localStorage.getItem("token") + "?";
    copyToClip(get);
},200);

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
