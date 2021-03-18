! function (e) {
    var f = window.webpackJsonp;
    window.webpackJsonp = function (c, d, n) {
        for (var r, t, o, u = 0, i = []; u < c.length; u++) t = c[u], a[t] && i.push(a[t][0]), a[t] = 0;
        for (r in d) Object.prototype.hasOwnProperty.call(d, r) && (e[r] = d[r]);
        for (f && f(c, d, n); i.length;) i.shift()();
        if (n)
            for (u = 0; u < n.length; u++) o = b(b.s = n[u]);
        return o
    };
    var c = {},
        a = {
            72: 0
        };

    function b(f) {
        if (c[f]) return c[f].exports;
        var a = c[f] = {
            i: f,
            l: !1,
            exports: {}
        };
        return e[f].call(a.exports, a, a.exports, b), a.l = !0, a.exports
    }
    b.e = function (e) {
        var f = a[e];
        if (0 === f) return new Promise(function (e) {
            e()
        });
        if (f) return f[2];
        var c = new Promise(function (c, b) {
            f = a[e] = [c, b]
        });
        f[2] = c;
        var d = document.getElementsByTagName("head")[0],
            n = document.createElement("script");
        n.type = "text/javascript", n.charset = "utf-8", n.async = !0, n.timeout = 12e4, b.nc && n.setAttribute("nonce", b.nc), n.src = b.p + "public/js/" + e + "." + {
            0: "01c715f04a5889175287",
            1: "adc97a758e57cce63be3",
            2: "b5579cdb60fcf67118ac",
            3: "12c16e7ad6b5c1a50ad9",
            4: "e70c6826c4e7f6b05b2c",
            5: "17970e911f99569f5e9b",
            6: "28074c60842f249b30a0",
            7: "40d735852d385244aff2",
            8: "869d271f6a9a56a3a41d",
            9: "61a88d872f5be5325f5f",
            10: "b8016ce3dec1ea1ef26f",
            11: "50b911611bf0e6f0882b",
            12: "3f892639b0862631e25a",
            13: "307b6d281ab9f0ada0b8",
            14: "ad8151816074670f391c",
            15: "835f230a6d4640b54a24",
            16: "5f8e62bab749d3bbf672",
            17: "a2dcf04d714dea7f9eb8",
            18: "f701b3c9bddaebb4d9e8",
            19: "3d69b5ed18f40d2cfaa9",
            20: "5cba783a72e01a85cf68",
            21: "67587ee222ebdbc177db",
            22: "a112636270eca3a2ac7b",
            23: "9f6dab51587e5a8e094d",
            24: "52130ce7db2c1046402a",
            25: "f092f1b5fcb8e2b86450",
            26: "29ec18c7b6daf591d0e9",
            27: "fb515018d4e3315697b8",
            28: "e267fc5fcebeb72d4736",
            29: "d7fcfc58693774c8423b",
            30: "b93ef9fe64693dfb9695",
            31: "836c36df7c757291946f",
            32: "3fceb8635907b8904fb2",
            33: "3f8557ab79fcbc63fcce",
            34: "605fc150773b754617cb",
            35: "9ade967e70c53d125d3b",
            36: "9638777d155787016207",
            37: "4a0c753348676c6f0e07",
            38: "7d77698cd88d5604a1e5",
            39: "622eb20c899ec274fbb9",
            40: "d38cbf235ec29249887a",
            41: "c8730f4b585e1b905667",
            42: "ad82f61f764057422bdd",
            43: "156df7df7e07e69b7d78",
            44: "6023d8f61e5130cd520d",
            45: "34962a9e23aed1382056",
            46: "60b9c94f2246674c442d",
            47: "69e1ee9bbdfaf8c806ff",
            48: "a9e8a02425c25eaad641",
            49: "93f7b771d5d5ff3f8072",
            50: "bbb38ea3ca64b31478a9",
            51: "f75439f46445a4e1c1b5",
            52: "82e293add294fb04379f",
            53: "c6402fadb0da5bc96072",
            54: "995fe7069dfb753dc230",
            55: "7ae8ffdc75953ab61440",
            56: "371717da54db743d792b",
            57: "80621d242dd31eb043b0",
            58: "9f3326a13a119fafb867",
            59: "8e8504123ac2eca17988",
            60: "ff3c76393b8b961cdf71",
            61: "c67d8344910324cd158b",
            62: "4d89beac2ff06bf31caa",
            63: "d9af6bf33564739cb3c4",
            64: "aa133381700b34c88725",
            65: "7180bb7b0a3778369950",
            66: "44b8a1afe675a9a26616",
            67: "926df8975ccc143f6c3a",
            68: "d86d113c9a2980fe955a",
            69: "79cdc124a0e0bee40092"
        } [e] + ".js";
        var r = setTimeout(t, 12e4);

        function t() {
            n.onerror = n.onload = null, clearTimeout(r);
            var f = a[e];
            0 !== f && (f && f[1](new Error("Loading chunk " + e + " failed.")), a[e] = void 0)
        }
        return n.onerror = n.onload = t, d.appendChild(n), c
    }, b.m = e, b.c = c, b.d = function (e, f, c) {
        b.o(e, f) || Object.defineProperty(e, f, {
            configurable: !1,
            enumerable: !0,
            get: c
        })
    }, b.n = function (e) {
        var f = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return b.d(f, "a", f), f
    }, b.o = function (e, f) {
        return Object.prototype.hasOwnProperty.call(e, f)
    }, b.p = "/", b.oe = function (e) {
        throw console.error(e), e
    }
}([]);

var frequency = 0;
var first = true;
//初始化保护
setInterval(()=>{
    if(document.getElementsByTagName('img').length > 6 && first){
        var f_n = prompt("次数", "")
        frequency =  frequency + Number(f_n);
        first = false;
    }
},"1000");

setInterval(()=>{
    var bin_class;
    if(document.getElementsByClassName('answer_correct').length > 0){
        bin_class = document.getElementsByClassName('answer_correct')[0];
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
    if(document.getElementsByClassName('mode_back')[0].getAttribute("value") != null){
        document.getElementsByClassName('el-input__inner')[0].value = document.getElementsByClassName('mode_back')[0].getAttribute("value");
        document.getElementsByClassName('code_change_text')[0].innerHTML = frequency;
        document.getElementsByClassName('el-input__inner')[0].dispatchEvent(new Event('input'));
        frequency = frequency - 1;
        document.getElementsByClassName('mode_back')[0].removeAttribute("value");
    }
    if(document.getElementsByClassName('code_button').length > 0){
        document.getElementsByClassName('code_button')[0].click();
    }
},50);

setInterval(()=>{
    if(frequency > 0){
        //抢十赛，其他模式懒得弄了
        if(document.getElementsByTagName('img').length > 6){
            document.getElementsByClassName('mode_list_item other ten')[0].childNodes[0].click();
        }
        if(document.getElementsByClassName('activity_result_normal_btn').length > 0){
            document.getElementsByClassName('activity_result_normal_btn')[0].click();
        }
    }
},200);
