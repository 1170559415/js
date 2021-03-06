webpackJsonp([71], {
    "+HlM": function (e, t) {},
    "+QxA": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("lC5x"),
            a = n.n(i),
            r = n("J0Oq"),
            o = n.n(r),
            s = n("VX/p"),
            c = n("qAvQ"),
            u = n("jFiy"),
            l = {
                name: "UploadInput",
                props: {
                    value: {
                        required: !1,
                        type: String
                    },
                    placeholder: {
                        required: !1,
                        type: String
                    },
                    accept: {
                        type: String,
                        default: "image/jpeg,image/png,image/gif,image/jpg"
                    },
                    uploadText: {
                        type: String,
                        default: "上传图片"
                    },
                    delText: {
                        type: String,
                        default: "删除图片"
                    }
                },
                data: function () {
                    return {
                        mediaSrc: "",
                        isImage: u.m,
                        isVideo: u.p,
                        loading: !1
                    }
                },
                watch: {
                    value: {
                        immediate: !0,
                        handler: function () {
                            var e = o()(a.a.mark(function e(t) {
                                var n;
                                return a.a.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!t) {
                                                e.next = 8;
                                                break
                                            }
                                            if (this.mediaSrc) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 4, Object(s.a)(t);
                                        case 4:
                                            0 === (n = e.sent).code ? this.mediaSrc = n.data.location : this.$message.error("文件加载失败");
                                        case 6:
                                            e.next = 9;
                                            break;
                                        case 8:
                                            this.mediaSrc = "";
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }
                },
                methods: {
                    handleClick: function () {
                        this.loading || this.$refs.upload.dispatchEvent(new MouseEvent("click"))
                    },
                    handleChange: function (e) {
                        var t = this;
                        return o()(a.a.mark(function n() {
                            var i, r, o;
                            return a.a.wrap(function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        t.loading = !0, i = e.target.files[0], r = i.type, -1 !== t.accept.indexOf(r) ? (o = Object(u.m)(i.name) ? "images" : "videos", Object(c.a)(i, o, t.uploadCallback, function () {
                                            t.loading = !1, t.$message.error("文件上传失败"), t.$refs.uploadForm.reset()
                                        })) : (t.loading = !1, t.$message.error("请上传正确的文件格式"), t.$refs.uploadForm.reset());
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }, n, t)
                        }))()
                    },
                    handleRemove: function () {
                        this.$refs.uploadForm.reset(), this.$emit("input", "")
                    },
                    uploadCallback: function (e, t) {
                        this.loading = !1, this.mediaSrc = t, this.$refs.uploadForm.reset(), this.$emit("input", e)
                    }
                }
            },
            d = n("W5g0");
        var p = function (e) {
                n("Bd03")
            },
            m = Object(d.a)(l, function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("form", {
                    ref: "uploadForm",
                    staticClass: "upload_input"
                }, [n("div", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.loading,
                        expression: "loading"
                    }],
                    staticClass: "upload_img"
                }, [e.mediaSrc && e.isImage(e.mediaSrc) ? n("img", {
                    attrs: {
                        src: e.mediaSrc
                    }
                }) : e._e(), e._v(" "), e.mediaSrc && e.isVideo(e.mediaSrc) ? n("video", {
                    attrs: {
                        controls: ""
                    }
                }, [n("source", {
                    attrs: {
                        src: e.mediaSrc,
                        type: "video/mp4"
                    }
                })]) : e._e(), e._v(" "), e.mediaSrc ? e._e() : n("div", {
                    staticClass: "upload_placeholder"
                }, [e._v("\n      " + e._s(e.placeholder) + "\n    ")])]), e._v(" "), n("div", {
                    staticClass: "upload_buttons"
                }, [e.mediaSrc ? n("div", {
                    staticClass: "upload_button upload_button_delete",
                    on: {
                        click: e.handleRemove
                    }
                }, [e._v(e._s(e.delText))]) : e._e(), e._v(" "), n("div", {
                    staticClass: "upload_button upload_button_upload",
                    on: {
                        click: e.handleClick
                    }
                }, [e._v(e._s(e.uploadText))])]), e._v(" "), n("input", {
                    ref: "upload",
                    attrs: {
                        type: "file",
                        accept: e.accept
                    },
                    on: {
                        change: e.handleChange
                    }
                })])
            }, [], !1, p, "data-v-18fad89d", null);
        t.default = m.exports
    },
    "/GZU": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {
                name: "SvIcon",
                props: {
                    iconClass: {
                        type: String,
                        required: !0
                    },
                    className: {
                        type: String
                    }
                },
                computed: {
                    iconName: function () {
                        return "#" + this.iconClass
                    },
                    svgClass: function () {
                        return this.className ? "svg-icon " + this.className : "svg-icon"
                    }
                }
            },
            a = n("W5g0");
        var r = function (e) {
                n("OGuW")
            },
            o = Object(a.a)(i, function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("svg", {
                    class: this.svgClass,
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [t("use", {
                    attrs: {
                        "xlink:href": this.iconName
                    }
                })])
            }, [], !1, r, "data-v-7534e82a", null);
        t.default = o.exports
    },
    "/HuX": function (e, t) {},
    "/l1Q": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {
                name: "BreadCrumb",
                props: {
                    options: {
                        type: Array,
                        required: !0
                    },
                    type: {
                        type: String,
                        required: !1,
                        default: "both"
                    }
                },
                data: function () {
                    return {}
                },
                computed: {
                    isRefresh: function () {
                        return "refresh" === this.type || "both" === this.type
                    },
                    isBack: function () {
                        return ("back" === this.type || "both" === this.type) && this.options.length > 1
                    }
                },
                methods: {
                    refresh: function () {
                        this.$emit("refresh")
                    },
                    goback: function () {
                        this.options[this.options.length - 2].query ? this.$router.replace({
                            path: this.options[this.options.length - 2].path,
                            query: this.options[this.options.length - 2].query
                        }) : this.$router.replace(this.options[this.options.length - 2].path)
                    }
                }
            },
            a = n("W5g0");
        var r = function (e) {
                n("U2hG")
            },
            o = Object(a.a)(i, function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("el-row", {
                    staticClass: "app_breadcrumb",
                    attrs: {
                        type: "flex",
                        align: "middle",
                        justify: "space-between"
                    }
                }, [n("el-col", {
                    attrs: {
                        span: 16
                    }
                }, [n("el-breadcrumb", {
                    attrs: {
                        "separator-class": "el-icon-arrow-right"
                    }
                }, [e._l(e.options, function (t) {
                    return [t.query ? n("el-breadcrumb-item", {
                        key: t.path,
                        attrs: {
                            to: {
                                path: t.path,
                                query: t.query
                            }
                        }
                    }, [e._v("\n          " + e._s(t.title) + "\n        ")]) : n("el-breadcrumb-item", {
                        key: t.path,
                        attrs: {
                            to: {
                                path: t.path
                            }
                        }
                    }, [e._v("\n          " + e._s(t.title) + "\n        ")])]
                })], 2)], 1), e._v(" "), n("el-col", {
                    attrs: {
                        span: 8
                    }
                }, [n("el-row", {
                    attrs: {
                        type: "flex",
                        justify: "end"
                    }
                }, [e.isRefresh ? n("div", {
                    staticClass: "app_breadcrumb_btn",
                    on: {
                        click: e.refresh
                    }
                }, [n("i", {
                    staticClass: "refresh"
                }), e._v("\n        刷新\n      ")]) : e._e(), e._v(" "), e.isBack ? n("div", {
                    staticClass: "app_breadcrumb_btn",
                    on: {
                        click: e.goback
                    }
                }, [n("i", {
                    staticClass: "goback"
                }), e._v("\n        返回\n      ")]) : e._e()])], 1)], 1)
            }, [], !1, r, null, null);
        t.default = o.exports
    },
    "19nU": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.filterAsyncRoutes = c;
        var i = n("rVsN"),
            a = n.n(i),
            r = n("4YfN"),
            o = n.n(r),
            s = n("YaEn");

        function c(e, t) {
            var n = [];
            return e.forEach(function (e) {
                var i = o()({}, e);
                (function (e, t) {
                    return !t.meta || !t.meta.permissions || e.some(function (e) {
                        return t.meta.permissions.includes(e)
                    })
                })(t, i) && (i.children && (i.children = c(i.children, t)), n.push(i))
            }), n
        }
        var u = {
                SET_ROUTES: function (e, t) {
                    e.addRoutes = t, e.routes = s.b.concat(t)
                }
            },
            l = {
                generateRoutes: function (e, t) {
                    var n = e.commit;
                    return new a.a(function (e) {
                        var i = void 0;
                        i = t.includes("角色名称") ? s.a || [] : c(s.a, t), n("SET_ROUTES", i), e(i)
                    })
                }
            };
        t.default = {
            namespaced: !0,
            state: {
                routes: [],
                addRoutes: []
            },
            actions: l,
            mutations: u
        }
    },
    "2hIV": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i
        }), n.d(t, "b", function () {
            return a
        });
        var i = [{
                label: "共产党员",
                key: 1
            }, {
                label: "共青团员",
                key: 2
            }, {
                label: "人民群众",
                key: 3
            }, {
                label: "其他",
                key: 99
            }],
            a = [{
                label: "教师",
                key: 2
            }, {
                label: "学生",
                key: 3
            }, {
                label: "其他",
                key: 99
            }]
    },
    "35P6": function (e, t) {},
    "3YED": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("xXtn"),
            a = n("yDhC");
        t.default = [{
            path: "/backoffice/",
            name: "backoffice",
            component: i.a,
            meta: {
                title: "院校管理",
                hidden: !1,
                single: !0,
                redirect: "/backoffice/school",
                moduleIndex: 3,
                icon: "my-menu-school",
                permissions: [a.schoolPermissionCodes.school]
            },
            children: [{
                path: "school",
                name: "school",
                meta: {
                    title: "院校管理",
                    hidden: !0,
                    permissions: [a.schoolPermissionCodes.school],
                    cacheView: "School"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(41)]).then(n.bind(null, "tvlt"))
                }
            }, {
                path: "school/add/",
                name: "schoolAdd",
                meta: {
                    title: "添加学校",
                    hidden: !0,
                    permissions: [a.schoolPermissionCodes.school_add],
                    cacheView: "School"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(12)]).then(n.bind(null, "YYQX"))
                }
            }, {
                path: "school/edit/:id",
                name: "schoolEdit",
                meta: {
                    title: "编辑学校",
                    hidden: !0,
                    permissions: [a.schoolPermissionCodes.school_edit],
                    cacheView: "School"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(12)]).then(n.bind(null, "YYQX"))
                }
            }]
        }]
    },
    "3ZE1": function (e, t) {},
    "4Hbs": function (e, t) {},
    "4WYA": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("xXtn"),
            a = n("yDhC");
        t.default = [{
            path: "/backoffice/",
            name: "backofficeData",
            component: i.a,
            meta: {
                title: "数据统计",
                hidden: !1,
                single: !0,
                redirect: "/backoffice/data",
                moduleIndex: 7,
                icon: "my-menu-data",
                permissions: [a.dataPermissionCodes.data]
            },
            children: [{
                path: "data",
                name: "Data",
                meta: {
                    title: "数据统计",
                    hidden: !1,
                    permissions: [a.dataPermissionCodes.data],
                    cacheView: "Data"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(38)]).then(n.bind(null, "zPPn"))
                }
            }, {
                path: "data/joinData/:id/:identity/:type",
                name: "JoinData",
                meta: {
                    title: "参与情况",
                    hidden: !1,
                    permissions: [a.dataPermissionCodes.data],
                    cacheView: "Data"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(19)]).then(n.bind(null, "l+T6"))
                }
            }, {
                path: "data/activityData/:id/:identity/:type",
                name: "ActivityData",
                meta: {
                    title: "活动数据",
                    hidden: !1,
                    permissions: [a.dataPermissionCodes.data],
                    cacheView: "Data"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(63)]).then(n.bind(null, "usBY"))
                }
            }, {
                path: "data/personalData/:id/:identity",
                name: "PersonalData",
                meta: {
                    title: "个人数据",
                    hidden: !1,
                    permissions: [a.dataPermissionCodes.data],
                    cacheView: "Data"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(62)]).then(n.bind(null, "qDNw"))
                }
            }]
        }]
    },
    "4jKl": function (e, t) {},
    A3OU: function (e, t) {},
    "AG+x": function (e, t) {},
    AmHV: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("lRwf"),
            a = n.n(i),
            r = n("L2ks");
        r.keys().forEach(function (e) {
            if ("./index.js" !== e) {
                var t = r(e);
                a.a.use(t.default)
            }
        })
    },
    Bd03: function (e, t) {},
    DUDJ: function (e, t) {},
    Dod7: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return a
        }), n.d(t, "a", function () {
            return r
        }), n.d(t, "c", function () {
            return o
        });
        var i = n("VvI5"),
            a = function () {
                return i.a.get("/base/public/key/")
            },
            r = function () {
                return i.a.get("/base/data/dict/")
            },
            o = function () {
                return i.a.get("/datetime/")
            }
    },
    GKcl: function (e, t) {},
    HQi2: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {
            ADD_VIEW: function (e, t) {
                "string" == typeof t ? e.includeViews = [t] : Array.isArray(t) ? e.includeViews = t : e.includeViews = []
            },
            REMOVE_VIEW: function (e, t) {
                var n = e.includeViews.indexOf(t); - 1 !== n && e.includeViews.splice(n, 1)
            }
        };
        t.default = {
            namespaced: !0,
            state: {
                includeViews: []
            },
            mutations: i
        }
    },
    IcnI: function (e, t, n) {
        "use strict";
        var i = n("a3Yh"),
            a = n.n(i),
            r = n("4YfN"),
            o = n.n(r),
            s = n("SJI6"),
            c = n.n(s),
            u = {
                token: function (e) {
                    return e.user.token
                },
                userInfo: function (e) {
                    return e.user.userInfo
                },
                permissions: function (e) {
                    return e.user.permissions
                },
                permission_routes: function (e) {
                    return e.permission.routes
                },
                constants: function (e) {
                    return e.constants.constants
                },
                cacheViews: function (e) {
                    return e.cacheView.includeViews
                },
                examInfo: function (e) {
                    return {
                        minutes: e.question.minutes,
                        start: e.question.start,
                        ids: e.question.ids,
                        answers: e.question.answers
                    }
                },
                articleArr: function (e) {
                    return e.client.articleArr
                },
                currentActivity: function (e) {
                    return e.client.currentActivity
                },
                getExamAnswer: function (e) {
                    return e.client.exam.answerList
                },
                getExamLimit: function (e) {
                    return function (t) {
                        return "[object Boolean]" === Object.prototype.toString.call(e.client.exam.limit[t])
                    }
                },
                questionAnswer: function (e) {
                    return function (t, n) {
                        var i = e.client.exam.answerList,
                            a = i.checkpointId,
                            r = i.content;
                        if (a === n) {
                            var o = r.find(function (e) {
                                return e[t] instanceof Array
                            });
                            if (o) return o[t]
                        }
                        return []
                    }
                },
                getRankData: function (e) {
                    return function (t) {
                        return e.rank.rankData[t] || {
                            school: {
                                list: [],
                                time: ""
                            },
                            student: {
                                list: [],
                                time: ""
                            }
                        }
                    }
                },
                isShowExam: function (e) {
                    return e.client.isShowExam
                },
                publicKey: function (e) {
                    return e.client.publicKey
                }
            },
            l = {},
            d = n("gNcp");
        d.keys().forEach(function (e) {
            var t = e.replace(/^\.\/(\w+)\.js$/, "$1"),
                n = d(e);
            l = o()({}, l, a()({}, t, n.default || n))
        });
        var p = {
            modules: l,
            getters: u
        };
        t.a = new c.a.Store(p)
    },
    Iv2E: function (e, t, n) {
        "use strict";
        var i = n("lC5x"),
            a = n.n(i),
            r = n("aA9S"),
            o = n.n(r),
            s = n("J0Oq"),
            c = n.n(s),
            u = n("W5g0");
        var l = function (e) {
                n("Z60n")
            },
            d = Object(u.a)({
                name: "Privacy",
                methods: {
                    confirmPrivacy: function () {
                        this.$emit("confirmPrivacy")
                    }
                }
            }, function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "privacy"
                }, [t("div", {
                    staticClass: "ys-view"
                }, [t("div", {
                    staticStyle: {
                        color: "rgb(62, 62, 62)"
                    },
                    attrs: {
                        id: "js_content"
                    }
                }, [this._m(0), this._v(" "), this._m(1), this._v(" "), t("div", {
                    staticClass: "ys_btn",
                    on: {
                        click: this.confirmPrivacy
                    }
                }, [this._v("确定")])])])])
            }, [function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("h2", {
                    staticClass: "ys_title"
                }, [t("strong", [t("span", {
                    staticClass: "ys-titlecon",
                    attrs: {
                        id: "ys1"
                    }
                }, [this._v("引言")])])])
            }, function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "ys"
                }, [n("div", {
                    staticClass: "ys-right"
                }, [n("div", {
                    staticClass: "ys-right-part"
                }, [n("div", {
                    staticClass: "ys-con"
                }, [n("p", [e._v("\n                我们非常重视用户的隐私。您在使用我们的服务时，我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与您所使用的高教社服务息息相关，希望您仔细阅读，在需要时，按照本《隐私政策》的指引，作出您认为适当的选择。本《隐私政策》中涉及的相关技术词汇，我们会尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。\n              ")]), e._v(" "), n("p", [e._v("\n                您使用或继续使用我们的服务，即意味着同意我们按照本《隐私政策》收集、使用、储存和分享您的相关信息。\n              ")]), e._v(" "), n("p", [e._v("\n                如对本《隐私政策》或相关事宜有任何问题，请通过qr@hep.com.cn邮箱与我们联系。\n              ")])])]), e._v(" "), n("div", {
                    staticClass: "ys-right-part"
                }, [n("div", {
                    staticClass: "ys-title"
                }, [n("strong", [n("span", {
                    staticClass: "ys-titlecon",
                    attrs: {
                        id: "ys2"
                    }
                }, [e._v("我们可能收集的信息")])])]), e._v(" "), n("div", {
                    staticClass: "ys-con"
                }, [n("p", [e._v("您使用服务时我们可能收集如下信息：")]), e._v(" "), n("p", {
                    staticClass: "ys-font"
                }, [e._v("1.您提供的信息")]), e._v(" "), n("p", [e._v("\n                您在注册账户或使用我们的服务时，向我们提供的相关个人信息，例如电话号码、电子邮件等；\n              ")]), e._v(" "), n("p", [e._v("\n                您通过我们的服务向其他方提供的共享信息，以及您使用我们的服务时所储存的信息。\n              ")]), e._v(" "), n("p", {
                    staticClass: "ys-font"
                }, [e._v("2.其他方分享的您的信息")]), e._v(" "), n("p", [e._v("其他方使用我们的服务时所提供有关您的共享信息。")])])]), e._v(" "), n("div", {
                    staticClass: "ys-right-part"
                }, [n("div", {
                    staticClass: "ys-title"
                }, [n("strong", [n("span", {
                    staticClass: "ys-titlecon",
                    attrs: {
                        id: "ys3"
                    }
                }, [e._v("我们获取的您的信息")])])]), e._v(" "), n("div", {
                    staticClass: "ys-con"
                }, [n("p", [e._v("\n                我们提供服务时，可能会收集、储存和使用下列与您有关的信息。如果您不提供相关信息，可能无法注册成为我们的用户或无法享受我们提供的某些服务，或者无法达到相关服务拟达到的效果。\n              ")]), e._v(" "), n("p", {
                    staticClass: "ys-font"
                }, [e._v("\n                1.日志信息，指您使用我们的服务时，系统可能通过cookies、web\n                beacon或其他方式自动采集的技术信息，包括：\n              ")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("设备或软件信息，例如您的移动设备、网页浏览器或用于接入我们服务的其他程序所提供的配置信息、您的IP地址和移动设备所用的版本和设备识别码；\n              ")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("在使用我们服务时搜索或浏览的信息，例如您使用的网页搜索词语、访问的社交媒体页面url地址，以及您在使用我们服务时浏览或要求提供的其他信息和内容详情；\n              ")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("您通过我们的服务分享的内容所包含的信息（元数据），例如拍摄或上传的共享照片或录像的日期、时间或地点等。\n              ")]), e._v(" "), n("p", {
                    staticClass: "ys-font"
                }, [e._v("\n                2.位置信息，指您开启设备定位功能并使用我们基于位置提供的相关服务时，收集的有关您位置的信息，包括\n              ")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("您通过具有定位功能的移动设备使用我们的服务时，通过GPS或WiFi等方式收集的您的地理位置信息；\n              ")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("您或其他用户提供的包含您所处地理位置的实时信息，例如您提供的账户信息中包含的您所在地区信息，您或其他人上传的显示您当前或曾经所处地理位置的共享信息，您或其他人共享的照片包含的地理标记信息；\n              ")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("您可以通过关闭定位功能，停止对您的地理位置信息的收集。\n              ")])])]), e._v(" "), n("div", {
                    staticClass: "ys-right-part"
                }, [n("div", {
                    staticClass: "ys-title"
                }, [n("strong", [n("span", {
                    staticClass: "ys-titlecon",
                    attrs: {
                        id: "ys4"
                    }
                }, [e._v("我们可能如何使用信息")])])]), e._v(" "), n("div", {
                    staticClass: "ys-con"
                }, [n("p", [e._v("\n                我们可能将在向您提供服务的过程之中所收集的信息用作下列用途：\n              ")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("向您提供服务；")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("在我们提供服务时，用于身份验证、客户服务、安全防范、诈骗监测、存档和备份用途，确保我们向您提供的产品和服务的安全性；\n              ")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("帮助我们设计新服务，改善我们现有服务；\n              ")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("使我们更加了解您如何接入和使用我们的服务，从而针对性地回应您的个性化需求，例如语言设定、位置设定、个性化的帮助服务和指示，或对您和其他用户作出其他方面的回应；\n              ")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("向您提供与您更加相关的广告以替代普遍投放的广告；\n              ")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("评估我们服务中的广告和其他促销及推广活动的效果，并加以改善；\n              ")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("软件认证或管理软件升级；")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("让您参与有关我们产品和服务的调查。\n              ")]), e._v(" "), n("p", [e._v("\n                为了让您有更好的体验、改善我们的服务或您同意的其他用途，在符合相关法律法规的前提下，我们可能将通过某一项服务所收集的信息，以汇集信息或者个性化的方式，用于我们的其他服务。例如，在您使用我们的一项服务时所收集的信息，可能在另一服务中用于向您提供特定内容，或向您展示与您相关的、非普遍推送的信息。如果我们在相关服务中提供了相应选项，您也可以授权我们将该服务所提供和储存的信息用于我们的其他服务。\n              ")])])]), e._v(" "), n("div", {
                    staticClass: "ys-right-part"
                }, [n("div", {
                    staticClass: "ys-title"
                }, [n("strong", [n("span", {
                    staticClass: "ys-titlecon",
                    attrs: {
                        id: "ys5"
                    }
                }, [e._v("您如何访问和控制自己的个人信息")])])]), e._v(" "), n("div", {
                    staticClass: "ys-con"
                }, [n("p", [e._v("\n                我们将尽一切可能采取适当的技术手段，保证您可以访问、更新和更正自己的注册信息或使用我们的服务时提供的其他个人信息。在访问、更新、更正和删除前述信息时，我们可能会要求您进行身份验证，以保障账户安全。\n              ")])])]), e._v(" "), n("div", {
                    staticClass: "ys-right-part"
                }, [n("div", {
                    staticClass: "ys-title"
                }, [n("strong", [n("span", {
                    staticClass: "ys-titlecon",
                    attrs: {
                        id: "ys6"
                    }
                }, [e._v("我们可能分享的信息")])])]), e._v(" "), n("div", {
                    staticClass: "ys-con"
                }, [n("p", [e._v("\n                我们以及我们的关联公司，可能将您的个人信息与我们的关联公司、合作伙伴及第三方服务供应商、承包商及代理（例如代表我们发出电子邮件或推送通知的通讯服务提供商、为我们提供位置数据的地图服务供应商）分享（他们可能并非位于您所在的法域），用作下列用途：\n              ")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("向您提供我们的服务；")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("实现“我们可能如何使用信息”部分所述目的；\n              ")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("履行我们在本《隐私政策》中的义务和行使我们的权利；\n              ")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("理解、维护和改善我们的服务。\n              ")]), e._v(" "), n("p", [e._v("\n                如我们或我们的关联公司与任何上述第三方分享您的个人信息，我们将努力确保该等第三方在使用您的个人信息时遵守本《隐私政策》及我们要求其遵守的其他适当的保密和安全措施。\n              ")]), e._v(" "), n("p", [e._v("\n                随着我们业务的持续发展，我们以及我们的关联公司有可能进行合并、收购、资产转让或类似的交易，您的个人信息有可能作为此类交易的一部分而被转移。我们将在转移前通知您。\n              ")]), e._v(" "), n("p", [e._v("\n                我们或我们的关联公司还可能为以下需要而保留、保存或披露您的个人信息：\n              ")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("遵守适用的法律法规；")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("遵守法院命令或其他法律程序的规定；\n              ")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("遵守相关政府机关的要求；")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("为遵守适用的法律法规、维护社会公共利益，或保护我们的客户、我们或我们的集团公司、其他用户或雇员的人身和财产安全或合法权益所合理必需的用途。\n              ")])])]), e._v(" "), n("div", {
                    staticClass: "ys-right-part"
                }, [n("div", {
                    staticClass: "ys-title"
                }, [n("strong", [n("span", {
                    staticClass: "ys-titlecon",
                    attrs: {
                        id: "ys7"
                    }
                }, [e._v("信息安全")])])]), e._v(" "), n("div", {
                    staticClass: "ys-con"
                }, [n("p", [e._v("\n                我们仅在本《隐私政策》所述目的所必需的期间和法律法规要求的时限内保留您的个人信息。\n              ")]), e._v(" "), n("p", [e._v("\n                我们使用各种安全技术和程序，以防信息的丢失、不当使用、未经授权阅览或披露。例如，在某些服务中，我们将利用加密技术来保护您提供的个人信息。但请您理解，由于技术的限制以及可能存在的各种恶意手段，在互联网行业，即便竭尽所能加强安全措施，也不可能始终保证信息百分之百的安全。您需要了解，您接入我们的服务所用的系统和通讯网络，有可能因我们可控范围外的因素而出现问题。\n              ")])])]), e._v(" "), n("div", {
                    staticClass: "ys-right-part"
                }, [n("div", {
                    staticClass: "ys-title"
                }, [n("strong", [n("span", {
                    staticClass: "ys-titlecon",
                    attrs: {
                        id: "ys8"
                    }
                }, [e._v("您分享的信息")])])]), e._v(" "), n("div", {
                    staticClass: "ys-con"
                }, [n("p", [e._v("\n                我们的多项服务，可让您不仅与自己的社交网络，也与使用该服务的所有用户公开分享您的相关信息，例如，您在我们的服务中所上传或发布的信息（包括您公开的个人信息、您建立的名单）、您对其他人上传或发布的信息作出的回应，以及包括与这些信息有关的位置数据和日志信息。使用我们服务的其他用户也有可能分享与您有关的信息（包括位置数据和日志信息）。\n              ")]), e._v(" "), n("p", [e._v("\n                因此，请您谨慎考虑通过我们的服务上传、发布和交流的信息内容。在一些情况下，您可通过我们某些服务的隐私设定来控制有权浏览您共享信息的用户范围。如要求从我们的服务中删除您的相关信息，请通过该等特别服务条款提供的方式操作。\n              ")])])]), e._v(" "), n("div", {
                    staticClass: "ys-right-part"
                }, [n("div", {
                    staticClass: "ys-title"
                }, [n("strong", [n("span", {
                    staticClass: "ys-titlecon",
                    attrs: {
                        id: "ys9"
                    }
                }, [e._v("您分享的敏感个人信息")])])]), e._v(" "), n("div", {
                    staticClass: "ys-con"
                }, [n("p", [e._v("\n                某些个人信息因其特殊性可能被认为是敏感个人信息，例如您的种族、宗教、个人健康和医疗信息等。相比其他个人信息，敏感个人信息受到更加严格的保护。\n              ")]), e._v(" "), n("p", [e._v("\n                请注意，您在使用我们的服务时所提供、上传或发布的内容和信息（例如有关您社交活动的照片等信息），可能会泄露您的敏感个人信息。您需要谨慎地考虑，是否在使用我们的服务时披露相关敏感个人信息。\n              ")]), e._v(" "), n("p", [e._v("\n                您同意按本《隐私政策》所述的目的和方式来处理您的敏感个人信息。\n              ")])])]), e._v(" "), n("div", {
                    staticClass: "ys-right-part"
                }, [n("div", {
                    staticClass: "ys-title"
                }, [n("span", {
                    staticClass: "ys-titlecon",
                    attrs: {
                        id: "ys10"
                    }
                }, [e._v("我们可能如何收集信息")])]), e._v(" "), n("div", {
                    staticClass: "ys-con"
                }, [n("p", [e._v("\n                我们或我们的第三方合作伙伴，可能通过cookies收集和使用您的信息，并将该等信息储存为日志信息。\n              ")]), e._v(" "), n("p", [e._v("\n                我们使用自己的cookies，目的是为您提供更个性化的用户体验和服务，并用于以下用途：\n              ")]), e._v(" "), n("p", [e._v("\n                记住您的身份。例如：cookies有助于我们辨认您作为我们的注册用户的身份，或保存您向我们提供的有关您的喜好或其他信息；\n              ")]), e._v(" "), n("p", [e._v("\n                分析您使用我们服务的情况。例如，我们可利用cookies来了解您使用我们的服务进行什么活动，或哪些网页或服务最受您的欢迎；\n              ")]), e._v(" "), n("p", [e._v("\n                广告优化。Cookies有助于我们根据您的信息，向您提供与您相关的广告而非进行普遍的广告投放。\n              ")]), e._v(" "), n("p", [e._v("\n                我们为上述目的使用cookies的同时，可能将通过cookies收集的非个人身份信息，经统计加工后提供给广告商或其他合作伙伴，用于分析用户如何使用我们的服务，并用于广告服务。\n              ")]), e._v(" "), n("p", [e._v("\n                我们的产品和服务上可能会有广告商或其他合作方放置的cookies。这些cookies可能会收集与您相关的非个人身份信息，以用于分析用户如何使用该等服务、向您发送您可能感兴趣的广告，或用于评估广告服务的效果。这些第三方cookies收集和使用该等信息，不受本《隐私政策》约束，而是受相关使用者的隐私政策约束，我们不对第三方的cookies承担责任。\n              ")]), e._v(" "), n("p", [e._v("\n                您可以通过浏览器设置拒绝或管理cookies。但请注意，如果停用cookies，您有可能无法享受最佳的服务体验，某些服务也可能无法正常使用。同时，您还会收到同样数量的广告，但这些广告与您的相关性会降低。\n              ")])])]), e._v(" "), n("div", {
                    staticClass: "ys-right-part"
                }, [n("div", {
                    staticClass: "ys-title"
                }, [n("strong", [n("span", {
                    staticClass: "ys-titlecon",
                    attrs: {
                        id: "ys11"
                    }
                }, [e._v("我们可能向您发送的邮件和信息")])])]), e._v(" "), n("div", {
                    staticClass: "ys-con"
                }, [n("p", [e._v("邮件和信息推送")]), e._v(" "), n("p", [e._v("\n                您在使用我们的服务时，我们可能使用您的信息向您的设备发送电子邮件、新闻或推送通知。如您不希望收到这些信息，可以按照我们的相关提示，在设备上选择取消订阅。\n                "), n("br"), e._v("与服务有关的公告\n              ")]), e._v(" "), n("p", [e._v("\n                我们可能在必要时（例如因系统维护而暂停某一项服务时）向您发出与服务有关的公告。您可能无法取消这些与服务有关、性质不属于推广的公告。\n              ")])])]), e._v(" "), n("div", {
                    staticClass: "ys-right-part"
                }, [n("div", {
                    staticClass: "ys-title"
                }, [n("strong", [n("span", {
                    staticClass: "ys-titlecon",
                    attrs: {
                        id: "ys12"
                    }
                }, [e._v("隐私政策的适用例外")])])]), e._v(" "), n("div", {
                    staticClass: "ys-con"
                }, [n("p", [e._v("\n                我们的服务可能包括或链接至第三方提供的社交媒体或其他服务（包括网站）。例如：\n                "), n("br"), e._v("您利用\n                “分享”键将某些内容分享到我们的服务，或您利用第三方连线服务登录我们的服务。这些功能可能会收集您的相关信息（包括您的日志信息），并可能在您的电脑装置cookies，从而正常运行上述功能；\n              ")]), e._v(" "), n("p", [e._v("\n                我们通过广告或我们服务的其他方式向您提供链接，使您可以接入第三方的服务或网站。\n              ")]), e._v(" "), n("p", [e._v("\n                该等第三方社交媒体或其他服务可能由相关的第三方或我们运营。您使用该等第三方的社交媒体服务或其他服务（包括您向该等第三方提供的任何个人信息），须受该第三方的服务条款及隐私政策（而非本《隐私政策》）约束，您需要仔细阅读其条款。本《隐私政策》仅适用于我们所收集的信息，并不适用于任何第三方提供的服务或第三方的信息使用规则，我们对任何第三方使用由您提供的信息不承担任何责任。\n              ")])])]), e._v(" "), n("div", {
                    staticClass: "ys-right-part"
                }, [n("div", {
                    staticClass: "ys-title"
                }, [n("strong", [n("span", {
                    staticClass: "ys-titlecon",
                    attrs: {
                        id: "ys13"
                    }
                }, [e._v("未成年人使用我们的服务")])])]), e._v(" "), n("div", {
                    staticClass: "ys-con"
                }, [n("p", [e._v("\n                我们鼓励父母或监护人指导未满十八岁的未成年人使用我们的服务。我们建议未成年人鼓励他们的父母或监护人阅读本《隐私政策》，并建议未成年人在提交的个人信息之前寻求父母或监护人的同意和指导。\n              ")])])]), e._v(" "), n("div", {
                    staticClass: "ys-right-part"
                }, [n("div", {
                    staticClass: "ys-title"
                }, [n("strong", [n("span", {
                    staticClass: "ys-titlecon",
                    attrs: {
                        id: "ys14"
                    }
                }, [e._v("隐私政策的适用范围")])])]), e._v(" "), n("div", {
                    staticClass: "ys-con"
                }, [n("p", [e._v("\n                除某些特定服务外，我们所有的服务均适用本《隐私政策》。这些特定服务将适用特定的隐私政策。针对某些特定服务的特定隐私政策，将更具体地说明我们在该等服务中如何使用您的信息。该特定服务的隐私政策构成本《隐私政策》的一部分。如相关特定服务的隐私政策与本《隐私政策》有不一致之处，适用该特定服务的隐私政策。\n              ")]), e._v(" "), n("p", [e._v("请您注意，本《隐私政策》不适用于以下情况：")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("通过我们的服务而接入的第三方服务（包括任何第三方网站）收集的信息；\n              ")]), e._v(" "), n("p", [n("span", {
                    staticClass: "ys-font"
                }, [e._v("▪ ")]), e._v("通过在我们服务中进行广告服务的其他公司或机构所收集的信息。\n              ")])])]), e._v(" "), n("div", {
                    staticClass: "ys-right-part"
                }, [n("div", {
                    staticClass: "ys-title"
                }, [n("strong", [n("span", {
                    staticClass: "ys-titlecon",
                    attrs: {
                        id: "ys15"
                    }
                }, [e._v("变更")])])]), e._v(" "), n("div", {
                    staticClass: "ys-con"
                }, [n("p", [e._v("\n                我们可能适时修订本《隐私政策》的条款，该等修订构成本《隐私政策》的一部分。如该等修订造成您在本《隐私政策》下权利的实质减少，我们将在修订生效前通过在主页上显著位置提示或向您发送电子邮件或以其他方式通知您。在该种情况下，若您继续使用我们的服务，即表示同意受经修订的本《隐私政策》的约束。\n              ")])])])])])
            }], !1, l, "data-v-5a703c5e", null).exports,
            p = n("xhM8"),
            m = n("jFiy"),
            f = n("rMyF"),
            h = n("2hIV"),
            v = {
                name: "completeInfo",
                mixins: [p.a],
                components: {
                    "privacy-dialog": d
                },
                data: function () {
                    return {
                        columns: [{
                            values: [],
                            defaultIndex: 0
                        }],
                        flagColumns: [{
                            values: [],
                            defaultIndex: 0
                        }],
                        agreement: !1,
                        POLITICOPTIONS: h.a,
                        USERFLAG: h.b,
                        showPicker: !1,
                        searchVal: "",
                        debounceFun: null,
                        politicsPicker: !1,
                        privacyDialog: !1,
                        flagPicker: !1
                    }
                },
                computed: {},
                watch: {},
                created: function () {
                    var e = this;
                    return c()(a.a.mark(function t() {
                        var n;
                        return a.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e.columns[0].values = e.POLITICOPTIONS.filter(function (e) {
                                        return 100 !== e.key
                                    }), e.flagColumns[0].values = e.USERFLAG.map(function (e) {
                                        return {
                                            flagLabel: e.label,
                                            key: e.key
                                        }
                                    }), n = e.columns[0].values.filter(function (t, n) {
                                        var i = t.key === e.userInfo.politics;
                                        return i && (e.columns[0].defaultIndex = n), i
                                    }), Array.isArray(n) && n.length > 0 && (e.selectVal = o()({}, e.selectVal, n[0])), e.debounceFun = Object(m.h)(e.getSchools);
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }, t, e)
                    }))()
                },
                methods: {
                    openPrivacy: function () {
                        this.privacyDialog = !0
                    },
                    confirmPrivacy: function () {
                        this.privacyDialog = !1
                    },
                    handleFocus: function () {
                        var e = this;
                        this.showPicker = !0, this.$nextTick(function () {
                            e.$refs.school.blur(), e.$refs.searchSchool.querySelector("input") && e.$refs.searchSchool.querySelector("input").focus()
                        })
                    },
                    textInput: function (e) {
                        this.debounceFun(e)
                    },
                    handleSelect: function (e) {
                        this.searchVal = "", this.selectVal = o()({}, this.selectVal, e), this.userInfo.universityId = e.id, this.schoolData = [], this.showPicker = !1
                    },
                    handleOpenPop: function () {
                        this.schoolData = []
                    },
                    handleClosePop: function () {
                        this.searchVal = "", this.schoolData = []
                    },
                    handlePoliticsFocus: function () {
                        var e = this;
                        this.politicsPicker = !0, this.$nextTick(function () {
                            e.$refs.politics.blur()
                        })
                    },
                    handleFlagFocus: function () {
                        var e = this;
                        this.flagPicker = !0, this.$nextTick(function () {
                            e.$refs.flag.blur()
                        })
                    },
                    onConfirm: function (e) {
                        this.selectVal = o()({}, this.selectVal, e[0]), this.userInfo.politics = e[0].key, this.politicsPicker = !1
                    },
                    onFlagConfirm: function (e) {
                        console.log(e), this.selectVal = o()({}, this.selectVal, e[0]), this.userInfo.flag = e[0].key, this.flagPicker = !1
                    },
                    getSchools: function (e) {
                        var t = this;
                        return c()(a.a.mark(function n() {
                            var i;
                            return a.a.wrap(function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (e && 0 !== e.length) {
                                            n.next = 3;
                                            break
                                        }
                                        return t.schoolData = [], n.abrupt("return");
                                    case 3:
                                        return t.loading = !0, n.next = 6, Object(f.n)(e);
                                    case 6:
                                        0 === (i = n.sent).code && (t.schoolData = i.data), t.loading = !1;
                                    case 9:
                                    case "end":
                                        return n.stop()
                                }
                            }, n, t)
                        }))()
                    }
                }
            };
        var _ = function (e) {
                n("q3ab")
            },
            g = Object(u.a)(v, function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.dialogShow,
                        expression: "dialogShow"
                    }],
                    staticClass: "exam_dialog activity_wrap_exam"
                }, [e.privacyDialog ? n("privacy-dialog", {
                    on: {
                        confirmPrivacy: e.confirmPrivacy
                    }
                }) : n("div", [n("div", {
                    staticClass: "userinfo userinfo_new"
                }, [n("div", {
                    staticClass: "userinfo_item clear"
                }, [n("span", {
                    staticClass: "label name"
                }, [e._v("考生姓名")]), e._v(" "), n("div", {
                    staticClass: "input"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.userInfo.name,
                        expression: "userInfo.name"
                    }],
                    attrs: {
                        type: "text",
                        placeholder: "请输入考生姓名"
                    },
                    domProps: {
                        value: e.userInfo.name
                    },
                    on: {
                        input: function (t) {
                            t.target.composing || e.$set(e.userInfo, "name", t.target.value)
                        }
                    }
                })])]), e._v(" "), 2 == e.type ? n("div", {
                    staticClass: "userinfo_item clear"
                }, [n("span", {
                    staticClass: "label phone"
                }, [e._v("手机号")]), e._v(" "), n("div", {
                    staticClass: "input"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.userInfo.mobile,
                        expression: "userInfo.mobile"
                    }],
                    attrs: {
                        type: "text",
                        placeholder: "请输入手机号"
                    },
                    domProps: {
                        value: e.userInfo.mobile
                    },
                    on: {
                        input: function (t) {
                            t.target.composing || e.$set(e.userInfo, "mobile", t.target.value)
                        }
                    }
                })])]) : e._e(), e._v(" "), n("div", {
                    staticClass: "userinfo_item clear"
                }, [n("span", {
                    staticClass: "label school"
                }, [e._v("学校")]), e._v(" "), n("div", {
                    staticClass: "input"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.selectVal.name,
                        expression: "selectVal.name"
                    }],
                    ref: "school",
                    attrs: {
                        type: "text",
                        placeholder: "请选择学校"
                    },
                    domProps: {
                        value: e.selectVal.name
                    },
                    on: {
                        click: e.handleFocus,
                        input: function (t) {
                            t.target.composing || e.$set(e.selectVal, "name", t.target.value)
                        }
                    }
                })])]), e._v(" "), n("div", {
                    staticClass: "userinfo_item clear"
                }, [n("span", {
                    staticClass: "label college"
                }, [e._v("学院")]), e._v(" "), n("div", {
                    staticClass: "input"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.userInfo.department,
                        expression: "userInfo.department"
                    }],
                    attrs: {
                        type: "text",
                        placeholder: "请输入学院"
                    },
                    domProps: {
                        value: e.userInfo.department
                    },
                    on: {
                        input: function (t) {
                            t.target.composing || e.$set(e.userInfo, "department", t.target.value)
                        }
                    }
                })])]), e._v(" "), n("div", {
                    staticClass: "userinfo_item clear"
                }, [n("span", {
                    staticClass: "label number"
                }, [e._v("学号")]), e._v(" "), n("div", {
                    staticClass: "input"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.selectVal.flagLabel,
                        expression: "selectVal.flagLabel"
                    }],
                    ref: "flag",
                    attrs: {
                        type: "text",
                        placeholder: "请选择身份"
                    },
                    domProps: {
                        value: e.selectVal.flagLabel
                    },
                    on: {
                        focus: e.handleFlagFocus,
                        input: function (t) {
                            t.target.composing || e.$set(e.selectVal, "flagLabel", t.target.value)
                        }
                    }
                })])]), e._v(" "), n("div", {
                    staticClass: "userinfo_item clear"
                }, [n("span", {
                    staticClass: "label politic"
                }, [e._v("政治面貌")]), e._v(" "), n("div", {
                    staticClass: "input"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.selectVal.label,
                        expression: "selectVal.label"
                    }],
                    ref: "politics",
                    attrs: {
                        type: "text",
                        placeholder: "请选择政治面貌"
                    },
                    domProps: {
                        value: e.selectVal.label
                    },
                    on: {
                        focus: e.handlePoliticsFocus,
                        input: function (t) {
                            t.target.composing || e.$set(e.selectVal, "label", t.target.value)
                        }
                    }
                })])])]), e._v(" "), n("div", {
                    staticClass: "agreement"
                }, [n("van-checkbox", {
                    attrs: {
                        "checked-color": "#B1000B"
                    },
                    model: {
                        value: e.agreement,
                        callback: function (t) {
                            e.agreement = t
                        },
                        expression: "agreement"
                    }
                }, [e._v("\n        我已仔细阅读并同意\n      ")]), e._v(" "), n("span", {
                    staticClass: "agreement_link",
                    on: {
                        click: e.openPrivacy
                    }
                }, [e._v("《隐私协议》")])], 1), e._v(" "), n("button", {
                    staticClass: "common_btn2 common_btn2_blue common_btn2_new",
                    on: {
                        click: e.submit
                    }
                }, [e._v("\n      完善信息\n    ")])]), e._v(" "), n("van-popup", {
                    attrs: {
                        round: "",
                        position: "bottom"
                    },
                    on: {
                        close: e.handleClosePop,
                        open: e.handleOpenPop
                    },
                    model: {
                        value: e.showPicker,
                        callback: function (t) {
                            e.showPicker = t
                        },
                        expression: "showPicker"
                    }
                }, [n("div", {
                    staticClass: "school_pop lh50"
                }, [n("van-search", {
                    ref: "searchSchool",
                    attrs: {
                        autofocus: "",
                        placeholder: "请输入学校名称"
                    },
                    on: {
                        input: e.textInput
                    },
                    model: {
                        value: e.searchVal,
                        callback: function (t) {
                            e.searchVal = t
                        },
                        expression: "searchVal"
                    }
                }), e._v(" "), e.loading ? n("van-loading", {
                    staticClass: "school_pop_loading",
                    attrs: {
                        color: "#1989fa"
                    }
                }) : e._e(), e._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.schoolData && e.schoolData.length > 0,
                        expression: "schoolData && schoolData.length > 0"
                    }],
                    staticClass: "school_pop_content"
                }, e._l(e.schoolData, function (t, i) {
                    return n("div", {
                        key: i,
                        staticClass: "school_pop_item",
                        on: {
                            click: function (n) {
                                return e.handleSelect(t)
                            }
                        }
                    }, [n("span", [e._v(e._s(t.name))])])
                }), 0), e._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.schoolData || 0 === e.schoolData.length,
                        expression: "!schoolData || schoolData.length === 0"
                    }],
                    staticClass: "school_pop_empty"
                })], 1)]), e._v(" "), n("van-popup", {
                    attrs: {
                        round: "",
                        position: "bottom"
                    },
                    model: {
                        value: e.politicsPicker,
                        callback: function (t) {
                            e.politicsPicker = t
                        },
                        expression: "politicsPicker"
                    }
                }, [n("van-picker", {
                    attrs: {
                        "show-toolbar": "",
                        "value-key": "label",
                        columns: e.columns
                    },
                    on: {
                        confirm: e.onConfirm,
                        cancel: function (t) {
                            e.politicsPicker = !1
                        }
                    }
                })], 1), e._v(" "), n("van-popup", {
                    attrs: {
                        round: "",
                        position: "bottom"
                    },
                    model: {
                        value: e.flagPicker,
                        callback: function (t) {
                            e.flagPicker = t
                        },
                        expression: "flagPicker"
                    }
                }, [n("van-picker", {
                    attrs: {
                        "show-toolbar": "",
                        "value-key": "flagLabel",
                        columns: e.flagColumns
                    },
                    on: {
                        confirm: e.onFlagConfirm,
                        cancel: function (t) {
                            e.flagPicker = !1
                        }
                    }
                })], 1)], 1)
            }, [], !1, _, "data-v-758c6c72", null);
        t.a = g.exports
    },
    J7He: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("aA9S"),
            a = n.n(i),
            r = n("ZLEe"),
            o = n.n(r),
            s = {
                setSchoolData: function (e, t) {
                    var n = t.activityId,
                        i = {
                            time: t.time,
                            list: t.list
                        };
                    for (var r in i) {
                        i[r] || delete i[r]
                    }
                    e.rankData[n] ? (!e.rankData[n].student || o()(e.rankData[n].student).length <= 0) && (e.rankData[n].student = {
                        list: [],
                        time: ""
                    }) : e.rankData[n] = {
                        school: {},
                        student: {}
                    }, e.rankData[n].school = a()(e.rankData[n].school, i)
                },
                setStudentData: function (e, t) {
                    var n = t.activityId,
                        i = {
                            time: t.time,
                            list: t.list
                        };
                    for (var r in i) {
                        i[r] || delete i[r]
                    }
                    e.rankData[n] ? (!e.rankData[n].teacher || o()(e.rankData[n].teacher).length <= 0) && (e.rankData[n].teacher = {
                        list: [],
                        time: ""
                    }) : e.rankData[n] = {
                        school: {},
                        student: {}
                    }, e.rankData[n].student = a()(e.rankData[n].student, i)
                }
            };
        t.default = {
            namespaced: !0,
            state: {
                rankData: {}
            },
            mutations: s
        }
    },
    JXdE: function (e, t) {},
    JdLf: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAAAeCAYAAAD6myZLAAAAAXNSR0IArs4c6QAAEcRJREFUeAHtmgm4TtUagJN5DKWSIkNIiSZyKxUS0UCDuspp1DwqRUWDZOhSSlIJ0ahR6VAZUtGggW6m4iBRpqgQivu+295///nPP6n73OF5fM/zPt8avrX22mt961tr/+fssstO2TkDf2UGtm3b1gg+hDugWGJflFWHEbAe1sGbcD5UTrRNlseuKBRKVhdfhk0D+AiWQtP4ukxp7H3GHpEd6SOgU5Tfqf/NM+BkwxyYCx9D7fhHkK8PC0HRbirMNoN8D8PhJKgChW2LLgKV4EjoC/0gG8epip1Oo/SIH0e6NLY+7wX4BlqGYxhLehO0gTrp2of2e2F3ApTJZJtNPf20gDvhyGzs/+9seLHasAVeh+PgkJB66IpwDygjoQzoaA2hMfSHBaCsgJnwPsyCb2ENjIcG2U4Mts1gGLSH0VApU1tsisNS+AUc29GwFnqC4xqWRR+XY6c0BSPvsZnapKun/TWgTICMmyZdX/9rdUXCAS1E94EboTlshRLwO3wPpUDZBO7G66FBoUKFWqM9VnqiG0FTqA5F4Sf4EiZjNxedtWA/iT49cobDZFibRWOjzK+wEUqC7zMLFsANMAkyyW8YOObF0AVsb/Tsrkb6MjbnJFsZjaHvMZV227Jt9N+04109MYoyXucyO6HRAdASWof6bHRveA+MHMoPYHTqH/VK2vvPobB7VKYmXwFawROQMWqEbfYO7T0C74Zy8X0mS2NTGUbATXAzeDx8B96X3oYhydollmF3P7wEOfAMRMeuEeMTKHD3S+wjVZ62zqXjq5fKJrEc29KJZcny2Hm3c+12S1a/I2X0sT98CtemaxdFnMimAolToSq4Q76FqeDONwodBAdDHrwEOoe7+XaoCB4VRih3pbt+T9gLHoHVkFZom4PBxVANuoER7UD4CNKJLzkIdGbvZ9tMs2s8Ns8mvRmyEd+vOTSDZ6As7e3L9+hMf9n2g3kwNzrJMXAc1AI/JJbAbEgrPFYn0Iln89y0i4idJ8Iw2Ix9V/Tp0CsaL2WlSG+gLBsx6q6DspEx7T1lytCHa5tfqCwMH4LyLrwMXoSVn8H8KeDuLgY1wEuvsg5yYasZZDHotYOhsU9Cl4fi+Z+6PUd5LXgVvHQboR6Cv8GP0CRZG8uoKwRXQXCUoI1WneE6MDJ6t+qcqn1Ujo07diT8Bka6JbASfMdO0C+yzaSxdUxt4EUwarmZ3rAd2s2VlWC7K0yB0XAW3AglUjWmrg8sg5PB8Xs3LQWu0VTIOhphWxJOjNqgG8F8+HvS51NxKnhBNvIEQroe9IQ8ULxw+uWiMymmW2iMfhN+BaNEIKRLQAfwyNg7KleT15kM3y7SU1AazgGPG9s8GW+fmKbei3oPiN8dRcg/CE6eDmT0SivY7Aq3g23cAFPhEBuhXbgcGAJGz3xCmWM4HKqBG+s1GAvOZUOwLz8ubO/dL6VQ7+ZtCUYmn63jdYYv4HdomKoxdf3gVnAMM8P2F5B2PZzLxNMlaVfYtYUZoLQK+6lGejVck6rRXlSeD8/CGzAcroQ6UAGcjMcgF7SxLnjJ8AGWKw/AvfAC6FjKIHBR3ZGNoRvMA6U37Br28Sjp92EVnJt0oCkKsbf//jALnPT6KUwLFGO7LxhtXGiPJhfuMDByLQe/8grseMr2gE9gMTjutlHnpJ3Dl2AOKMl3bNiA+r3BDfk4VIdFYJ8dQOdMGrHDsY6ivj24EX8Co4ROkFW0xK4ePA2/gM91E0UOXJe0jnMR5B8DBSeAxooTOBMWmkH09rdAb07quZR3hM0QL2vJfADt4yZTx3kC3AkO0DtNIKQrgpNtaB4OgcdH9Zk09u5YJ/gdUEZkamM9dvvAI+B769CR40wgnQfNIOXnNHX7wVEQcyzSl4JiBHJBjaLeeVIK9c6voqO5qXTIrI4Y7Iz2bpbPwGf6TgPgMtMpHxpWYGNUdD10Nvu51Sq063UGKPqB98DtQkZPXwBbwd0fHFXo3aAJDAF3gvIleDw0ByfLRR4DineSa+F0sF0wYHQ5aAhBqEa7wAdC7FdeR0L+IMiDafAUOPk6dGuoEQ43rcKuCowF3+c5uDJVA+rKwEhYCu5y38Po8hAYYd+GvqADZbWAPgtbI5/v4PMHwvlgv0elGYttjE6RGOm6p7KPL8euKHwIK6Ad1IddwU37DTgfKR3fvqh3TXznY8CxesG2XAc0oORBJyhpeSBk7gNlA5g+DfwKiAn52vAwrIZkkkthcDSgjRw6jrvMneAiuovSXg6p10EWQ0tw13wBT4JONBfaxAaUJoHdseAzH4MmqUypKwuOz/BuqF4Ea6AbuABHw8ngsRlEoVR9xZdj6yK4sdwIOuNhsAxS9kFdKZgJylC4EZLfKeIfRhq7yvAVnASDwPmqC86BDhxEj4RmBbLYGV3GwXzwtGgMOuDz0DW+QXTslKfQH778DI8eYoT5nPw4GM+n2Cz01ZT1RrsYhl29z89L6zaA3toX7SUuOB/R60G7r8FP23SykEo/BU8An+sPUYPRTs5olBPiD49LLUsU6oxwreEsmIdd2i8q6n/G7mSw/0GoT6EUGF0cbz/4FSbDashK6NefIybSp45uX17yfwHfLanQxk2roxwAI+EKKEmZa7OJ+o3oVFKTCt/9AvB4bwqXgBHecY+BbMQ25SAXlsF6nruVMWwmbfRyPbaQ/kMoLA0HwhlgqI68n2Twg997aCNIA3Cn7gaGxOvBO8UmiGQeiWFwJhipvgRDZnAE/vHU/KnQdjC6PHhMufNqaYV+BXxG8LWTv2VQ73PcYbZ3jO68tOE56gM7j7dJcBb8AkPDZ3pMKn0i2x3RtLsbZtgB8jXE7kCp+sFmP3B+b4NekAO+e+k0bbQ1ortxPwPH7Xz3g3VwSqq2UTk2RsWP4TJwzEYfo+Cx8BXYrz7RK2qTVGNQAo4AB+X5GYke6KAWRgWh1qYHeO/Ra2NC/nNI6TjUudAtQEdpA6eE+NINYS9YBDmxThMS1On0OupI0MnvTTBJmsXOCeoNd0EFWAEdNUZ73PieS8DdmLVgb4h/Fi6HPvAtZLwnYZMLF8Gr4DHqTleMpAWEcp+jzT1QFzZCO9DZxsJV4KK/BedAvrWxQ8pqwERw3q+AV8PyHNJbwD7fBgPC/NggyDSC/WIFCQnqHFwTcBfHO4wd3Qt6a/A5ndDUQbkwX0A6x+lCvWex3n4w/Ai2mQXFwCg4KbHvZHnsdMIcyCpKYNcYloLPfRp+gkugNcwG58bJVx6HZpA2cjoubMqD468Hh8JySHnHCduUwca73CBwI84Bn/0u+It9AaG8M6wHn7EHvAa+S0moYgP0YeBmMvLXj++EvLZG6gtD2xdIB5sOXRych+PCunKkgz6DPsgsAydvPFwHDiL/93r4NMorQSs4GbKZwGwcZyx96VhlwwH6on3hvDA/gnT/cAgpFTZGO6NkbRiQ0jCuArtr4R3wvR3DNLgVdFb//BA5/wPkjUafQKO4LpImsTkSNsPxcEuY9v6SUrDR2fJAGQPBD47opJvSjqhzobdCnZQdb7dz8+c7Kslb9hQ8ErUlPR26R/m0GkOdRom0A/kn/AM841Ker1HH2OwOZ0NXKBJXno3jGAbviNpEmjKd9BpYAnWj8lQam73BiewND6ayiy/HLgd0nj3hc/gVDo+3MU2Zk7yvOrEuWR67erAW3ATnwVzI90fgxHbU+wwd9iKIzWGiXXweuxvgSci4RvHtTNOmFvjOsShC+lLw72uZBcPvwHDncWS0cfe5mGtA8UjqD+6iwlGPpEuAjjUYFoNi9IhNLulsHKcmdkG0ifpWU1YFdOCsjp2wTXXs3QCG+R2aTOxtm/LzPX5smdL0oxM4l0XAEL9/pjZ/pp5+/XL6U0LbitD4TzW2EY11nA2Qb1eTrwYd4XX4GZQZMByGwSxQNoE2Z0GBc5yyz8BjIOPRlvgStHHSs9p9UVvsW8KbsEOOE7XfqTPPQPC5ygR/i2kl6AC5fKv73Z5PsKlFgZ913jsOBBdzHjwLr9JmNjqf0MZ7kr/3vAz+ub4Rdj+i80lot5m64HeeMK99Eco2aUyZz/OOsJKyVWGZ/W8hvzUuH7QjrwNvBN9xA2wBv2rM+/vEenRM6L8kGf99wDEENmj7NRL+hn0wbuyMuPHjMrr6+0Y0Tn8Nl/nRuEg7fiOD/ZAMvq4cu+Oz3D79Tcl6x699VVQx8t+Eee22kvc3IuvzjSMsc/y+xy7YrQzLfI7v4Dg3UO7vSba3zDuP72vdavumvAZpx7EEHQhlzmUFylzvQCLHsTN3py+vA0yH8TAD4+XomIQD1olcyAXU+wNZTKj3c+8waAMnQn1wYE5AAcfB3jEMg7vpaxHal/JHxmfheugGTuJNEDgW+n0YCt5j7qddHtp2/ng5Fc4DJ1FncYInwNGg4/iOxWAKjKCt9zkXZTjoKC6c430TWoHtbWN/HpmO93Ta3YX2mdVQ10EXuBqagGK73tjNxMb0czCGvHewG0gfBNXhB1gBzvMCyIVeoPMpPrsbNIDLoBN9bKSPQ0mfSfo2tOPYB+U8LgPfwx8ye8ClsB9ETvoJad/tUVgMrqPzOhDaQR1QFsJ9cAa0BefFfn2nOejgoe15sBfhj2ALRLKYhBevE8GBJBXqioL3owHg3SKSdSQmwm1gvROYTyhzC3qTrxFVkB4NR4GfkN6rPAYbWY/2M/Nh85ALNePa+eXTBqZA1dDe/kuBR6yTax+VwEuhUdZ8afgYgsVC22Y3cNErg3e5E2ACtIChtlNI14HnwAvwKNA5LffLc2SYdkze/V4E+yoGzpnv2QwKwx1wKfSEOyGYK3QOPA7tYDHcG/Z5DOlnTCukvYxP354L8h3IPwiPwsGhTVnSzuWFMCEsKxTq5pRNjGs/kLxHvnMcrA36bAjeXW8zrHmUvEyhg3UnGCn82b4xXBjiRI8i/TL2eqqDrY46Fc4FbRU9Oxeehw+wNdKkFOrpZptRS8ddg9arjQ4DwEjYFL7HzoV1dxvNpsBa8Ei13Wq0u8Yx+OPVJuhD+Tq0ofsJ2ABO5iq0zvYpWK/8Du4oJ8tnFofh4Lv4c7/jm0zdmWidzfJIfK7j1rFfwDboEz0eezeE0asj3AJXwEnUvYZ2/hxncPyQ9vkeH46tCzaOSTFSNYPS8ADoqBehHb9tItlCQoc8Be2YXMMPoQmcTvnh6H3BCPcldKdsCNrLu3PzECwiPRZtuzEwA7xqDKI8Dz0egggXOA6ZQMLBziLjpXcQ2od2AgdzaMjN1H1MWrF+zyC1/Yh7mnTS+05oU0DRlx7v5L4IgUOiq4FObLmLVBQUnaAyHA81wMnSURaBUg60tZ2LszxM+9L2twl0AttFzkIysFc7hh/D/JJQRwtINni+be0/Eh3dvnXiWFTmvZzbS2AaHAPdwPdyvgLHQceL86AjbINYP6Ttx/e2vATcCk+CjuRYIrHed68aah1gHLSA9SH2r43v5AbSKRX78Rm9wI2hg90Bo2EC2I9Boi1cDO0dVFLBiexsqjAJNmoHOXAInAaRTCQxFCbQ5qeocAe1Ez+N9nm243nRgvsyk8FjogPaF8gFx+LL22467Ragbdce5Tu5sPb1XZh2cS0zIqzCzn7fBY8VHcVFE9usBm23gWU1sXfijwUX7iO4gjLnYQk4Fsc7CbpQ/hXa554P1WB/uAvcbI7ZHzabMI7ppO0/Ep/pJpkCt2BzH1pHvwy+Bt+hOO38bagH6ddhMkRSjMQ66gdHBWpsXUf/SD2HtPM1EmqAG8h+HYO0hOPhJpgDRqjacC50hyngM1zrYJLVaYWHOqHeXx5Hd4S7wPDcFcZR70v9FZlHYxcqkpUk3MGW+5yrwd3RE5wII4M2Llx8u5/JyyJ4HlyIcjACpoETp0R9VyKt4ziJLraRIGpjxJ0LPqso2P5q3nUl8zCQtLa202nPo9wFrUDanW7/tu0CztUo6i1zIV9BNQcdZxV4TCgrwC/EEdhUIe3zbDMRroHW4Lt5tfC3rQEka5oPxbHMjzJx2n6D9aGdX03Lw3xZ9OQwXQatg+hQn4J9qS+EFjAODApGrLawU3bOwM4Z2DkD/8EZ+BcE1xCvgO91rAAAAABJRU5ErkJggg=="
    },
    L2ks: function (e, t, n) {
        var i = {
            "./checkPermissions/index.js": "Z+GP",
            "./error/index.js": "YTsH",
            "./index.js": "AmHV",
            "./permission/index.js": "yDhC"
        };

        function a(e) {
            return n(r(e))
        }

        function r(e) {
            var t = i[e];
            if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
            return t
        }
        a.keys = function () {
            return Object.keys(i)
        }, a.resolve = r, e.exports = a, a.id = "L2ks"
    },
    M9A7: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return a
        }), n.d(t, "c", function () {
            return r
        }), n.d(t, "b", function () {
            return o
        });
        var i = n("VvI5"),
            a = function (e) {
                var t = e.username,
                    n = e.password,
                    a = e.uid,
                    r = e.avatar,
                    o = e.activity_id;
                return i.a.get("/authorize/token/", {
                    params: {
                        username: t,
                        password: n,
                        uid: a,
                        avatar: r,
                        activity_id: o
                    }
                })
            },
            r = function (e) {
                return i.a.get("/authorize/token/refresh/", {
                    params: {
                        token: e
                    }
                })
            },
            o = function () {
                return Object(i.a)({
                    method: "delete",
                    url: "/authorize/token/drop/"
                })
            }
    },
    NHnr: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {};
        n.d(i, "formatDate", function () {
            return L
        }), n.d(i, "filterCategory", function () {
            return q
        }), n.d(i, "filterSeconds", function () {
            return H
        }), n.d(i, "formatNumber", function () {
            return z
        });
        n("tDmt");
        var a = n("NPyU"),
            r = (n("DPkQ"), n("buOu")),
            o = (n("3UGU"), n("WeKH")),
            s = (n("HuQi"), n("ILK+")),
            c = (n("I/ha"), n("59SZ")),
            u = (n("GrgN"), n("9kph")),
            l = (n("FXLN"), n("6nMT")),
            d = (n("V9RR"), n("a70g")),
            p = (n("ZJMx"), n("WEhc")),
            m = (n("LRTj"), n("9NgK"), n("NEon"), n("XLA2"), n("jsdI"), n("BmkF"), n("GbjT"), n("oq3O"), n("/7vx"), n("mZNK"), n("Y5LL"), n("lvyX"), n("D5V7"), n("V82c"), n("tRWF"), n("0KQi"), n("re2z"), n("JbZK"), n("ScTW"), n("Tif/"), n("Z1kH"), n("oT/z"), n("M07D"), n("m8yH"), n("9C+T"), n("sHA+"), n("pZXB"), n("6Tw+"), n("0hmV"), n("NAB6"), n("aAWK"), n("dti3"), n("HtwL"), n("6J/E"), n("nxrp"), n("u3FZ"), n("ouAI"), n("iRVo"), n("5a9c"), n("rAfE"), n("DbJg"), n("XUlC"), n("SolS"), n("lADi"), n("YMr2"), n("myai"), n("XXY9"), n("8yaX"), n("z7zz"), n("0O7Q"), n("OV3h"), n("r6Xj"), n("Hdxi"), n("Ipd+"), n("86Y3"), n("J+2W"), n("KDiV"), n("aedT"), n("XigM"), n("W3Yr"), n("q7et"), n("cQil"), n("FQFZ"), n("JcxT"), n("4D6G"), n("r0GY"), n("sQnt"), n("bkRA"), n("/q/b"), n("ZJLm"), n("/4o9"), n("T3jQ"), n("mBMy"), n("WqSu"), n("pG7L"), n("rUnP"), n("1Um1"), n("3Tiu"), n("qzlX"), n("/zMr"), n("1Qv+"), n("kIwm"), n("9Amk"), n("QZad"), n("NEX+"), n("NGsY"), n("CViW"), n("Anv2"), n("XmAz"), n("CrgY"), n("BmKr"), n("cuQq"), n("qbas"), n("2mJW"), n("G5hg"), n("wQFZ"), n("lRwf")),
            f = n.n(m),
            h = n("YaEn"),
            v = n("jFiy"),
            _ = n("Dod7"),
            g = {
                name: "App",
                computed: {
                    renderPage: {
                        get: function () {
                            return this.$store.getters["renderPage/render"]
                        }
                    }
                },
                beforeCreate: function () {
                    Object(_.b)()
                },
                created: function () {},
                mounted: function () {
                    Object(v.u)() && document.body.classList.add("mobile_view")
                }
            },
            y = n("W5g0");
        var b, w = function (e) {
                n("Yg1E")
            },
            C = Object(y.a)(g, function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    attrs: {
                        id: "app"
                    }
                }, [this.renderPage.render ? t("router-view") : t("div", {
                    staticClass: "mt20",
                    domProps: {
                        innerHTML: this._s(this.renderPage.replaceHtml)
                    }
                })], 1)
            }, [], !1, w, "data-v-19e06ac9", null).exports,
            x = n("IcnI"),
            k = n("l6IN"),
            I = n.n(k),
            P = n("lC5x"),
            S = n.n(P),
            A = n("J0Oq"),
            O = n.n(A),
            E = this,
            D = Object(v.v)(),
            R = ["customLogin", "clientLogin", "Index", "ActivityList", "ArticleList", "BackofficeLogin", "ActivityDetail", "ActivityClientDetail", "AnswerTip"];
        h.c.beforeEach((b = O()(S.a.mark(function e(t, n, i) {
            var a, r, o, s;
            return S.a.wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (t.meta.title && (document.title = t.meta.title), a = localStorage.getItem("token"), 0 !== t.path.indexOf("/backoffice")) {
                            e.next = 33;
                            break
                        }
                        if (!a) {
                            e.next = 30;
                            break
                        }
                        if (x.a.getters.permissions && x.a.getters.permissions.length > 0) {
                            e.next = 27;
                            break
                        }
                        return e.prev = 6, e.next = 9, x.a.dispatch("user/getPermissions");
                    case 9:
                        return r = e.sent, o = r.permissions, e.next = 13, x.a.dispatch("permission/generateRoutes", o);
                    case 13:
                        s = e.sent, h.c.addRoutes(s), h.c.options.routes = s, i({
                            path: t.path,
                            params: t.params,
                            query: t.query,
                            replace: !0
                        }), e.next = 25;
                        break;
                    case 19:
                        return e.prev = 19, e.t0 = e.catch(6), k.Message.error("用户无后台管理权限"), e.next = 24, x.a.dispatch("user/logOut");
                    case 24:
                        i("/backoffice/login");
                    case 25:
                        e.next = 28;
                        break;
                    case 27:
                        "/backoffice/login" === t.path ? i("/backoffice") : (x.a.commit("cacheView/ADD_VIEW", t.meta.cacheView), i());
                    case 28:
                        e.next = 31;
                        break;
                    case 30:
                        "/backoffice/login" === t.path ? i() : i("/backoffice/login");
                    case 31:
                        e.next = 34;
                        break;
                    case 33:
                        D ? -1 === R.indexOf(t.name) && !a || "/" === t.path ? -1 !== t.path.indexOf("client") ? i() : i("/custom/index") : i() : "AnswerTip" === t.name ? i() : i("/answer/tip");
                    case 34:
                    case "end":
                        return e.stop()
                }
            }, e, E, [
                [6, 19]
            ])
        })), function (e, t, n) {
            return b.apply(this, arguments)
        })), h.c.afterEach(function () {});
        n("AmHV");
        var j = n("zyHv");
        j.keys().forEach(function (e) {
            var t = j(e),
                n = t.default.name,
                i = t.default;
            f.a.component(n, i)
        });
        var T = n("ZLEe"),
            N = n.n(T),
            M = n("Nuww"),
            V = n.n(M),
            L = function (e, t) {
                return V()(e).format(t)
            },
            q = function (e, t) {
                return t[e]
            },
            H = function (e) {
                if ("number" == typeof e) {
                    if (e >= 3600) {
                        var t = parseInt(e / 3600),
                            n = parseInt((e - 60 * t * 60) / 60),
                            i = e - 60 * t * 60 - 60 * n;
                        return (t = (t + "").padStart(2, "0")) + "时" + (n = (n + "").padStart(2, "0")) + "分" + (i = (i + "").padStart(2, "0")) + "秒"
                    }
                    if (e >= 60) {
                        var a = parseInt(e / 60),
                            r = e - 60 * a;
                        return (a = (a + "").padStart(2, "0")) + "分" + (r = (r + "").padStart(2, "0")) + "秒"
                    }
                    if (e >= 0 && e < 60) return e + "秒"
                }
            },
            z = function (e) {
                return e > 9 ? e : "0" + e
            };
        N()(i).forEach(function (e) {
                f.a.filter(e, i[e])
            }),
            function (e, t) {
                var n = e.document,
                    i = n.documentElement,
                    a = n.querySelector('meta[name="viewport"]'),
                    r = n.querySelector('meta[name="flexible"]'),
                    o = 0,
                    s = 0,
                    c = void 0,
                    u = t.flexible || (t.flexible = {});
                if (a) {
                    console.warn("将根据已有的meta标签来设置缩放比例");
                    var l = a.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
                    l && (s = parseFloat(l[1]), o = parseInt(1 / s))
                } else if (r) {
                    var d = r.getAttribute("content");
                    if (d) {
                        var p = d.match(/initial\-dpr=([\d\.]+)/),
                            m = d.match(/maximum\-dpr=([\d\.]+)/);
                        p && (o = parseFloat(p[1]), s = parseFloat((1 / o).toFixed(2))), m && (o = parseFloat(m[1]), s = parseFloat((1 / o).toFixed(2)))
                    }
                }
                if (!o && !s) {
                    var f = e.navigator.appVersion.match(/iphone/gi),
                        h = e.devicePixelRatio;
                    s = 1 / (o = f ? h >= 3 && (!o || o >= 3) ? 3 : h >= 2 && (!o || o >= 2) ? 2 : 1 : 1)
                }
                if (i.setAttribute("data-dpr", o), !a)
                    if ((a = n.createElement("meta")).setAttribute("name", "viewport"), a.setAttribute("content", "initial-scale=" + s + ", maximum-scale=" + s + ", minimum-scale=" + s + ", user-scalable=no"), i.firstElementChild) i.firstElementChild.appendChild(a);
                    else {
                        var _ = n.createElement("div");
                        _.appendChild(a), n.write(_.innerHTML)
                    }
                function g() {
                    var t = i.getBoundingClientRect().width;
                    t / o > 540 && (t = 540 * o);
                    var n = t / 10;
                    i.style.fontSize = n + "px", u.rem = e.rem = n
                }
                e.addEventListener("resize", function () {
                    clearTimeout(c), c = setTimeout(g, 300)
                }, !1), e.addEventListener("pageshow", function (e) {
                    e.persisted && (clearTimeout(c), c = setTimeout(g, 300))
                }, !1);
                var y = Object(v.u)() ? 12 : 14;
                "complete" === n.readyState ? n.body.style.fontSize = y * o + "px" : n.addEventListener("DOMContentLoaded", function (e) {
                    n.body.style.fontSize = y * o + "px"
                }, !1), g(), u.dpr = e.dpr = o, u.refreshRem = g, u.rem2px = function (e) {
                    var t = parseFloat(e) * this.rem;
                    return "string" == typeof e && e.match(/rem$/) && (t += "px"), t
                }, u.px2rem = function (e) {
                    var t = parseFloat(e) / this.rem;
                    return "string" == typeof e && e.match(/px$/) && (t += "rem"), t
                }
            }(window, window.lib || (window.lib = {}));
        n("3ZE1"), n("GKcl"), n("jAzU"), n("A3OU"), n("cpQO");
        var B = n("j99t"),
            $ = n.n(B);
        f.a.use(I.a, {}), f.a.use($.a), f.a.use(p.a), f.a.use(d.a), f.a.use(l.a), f.a.use(u.a), f.a.use(c.a), f.a.use(s.a), f.a.use(o.a), f.a.use(r.a), f.a.use(a.a), f.a.config.productionTip = !1, n.e(68).then(n.bind(null, "oZDE")), n.e(69).then(n.bind(null, "h99C")), n.e(66).then(n.bind(null, "ru/0")), n.e(67).then(n.bind(null, "J2ae")), n.e(65).then(n.bind(null, "25em")), new f.a({
            el: "#app",
            store: x.a,
            router: h.c,
            components: {
                App: C
            },
            template: "<App/>"
        })
    },
    OGuW: function (e, t) {},
    OMN4: function (e, t) {
        e.exports = axios
    },
    Pfph: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return a
        }), n.d(t, "a", function () {
            return r
        });
        var i = n("VvI5"),
            a = function () {
                return i.a.get("/authorize/permissions/user/")
            },
            r = function () {
                return i.a.get("/authorize/permissions/all/")
            }
    },
    SJI6: function (e, t) {
        e.exports = Vuex
    },
    Sanv: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return i
        }), n.d(t, "a", function () {
            return a
        });
        var i = {
                TEACHER: 2,
                STUDENT: 3,
                MANAGER: 1,
                OTHER: 99
            },
            a = [{
                label: "共产党员",
                key: 1
            }, {
                label: "共青团员",
                key: 2
            }, {
                label: "人民群众",
                key: 3
            }, {
                label: "其他",
                key: 99
            }]
    },
    U2hG: function (e, t) {},
    UMab: function (e, t) {},
    UsNc: function (e, t) {},
    "VX/p": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return a
        }), n.d(t, "c", function () {
            return r
        }), n.d(t, "b", function () {
            return o
        });
        var i = n("VvI5"),
            a = function (e) {
                return i.a.get("/file/", {
                    params: {
                        id: e
                    }
                })
            },
            r = function (e) {
                var t = e.file,
                    n = e.location,
                    a = e.filename,
                    r = e.size,
                    o = e.contentType,
                    s = new FormData;
                return void 0 === t ? (s.append("location", n), s.append("filename", a), s.append("size", r), s.append("content-type", o)) : s.append("file", t), i.a.post("/file/", s, {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                })
            },
            o = function () {
                return i.a.get("/get/cos/sts/sdk/")
            }
    },
    Vb1n: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("lC5x"),
            a = n.n(i),
            r = n("J0Oq"),
            o = n.n(r),
            s = n("qAvQ"),
            c = {
                name: "RichEditor",
                model: {
                    prop: "value",
                    event: "change"
                },
                props: {
                    value: {
                        required: !1,
                        default: "",
                        type: String
                    }
                },
                watch: {
                    value: {
                        immediate: !0,
                        handler: function (e) {
                            var t = this;
                            e !== this.innerValue && this.$nextTick(function () {
                                t.editor.txt.html(e)
                            })
                        }
                    }
                },
                data: function () {
                    return {
                        editor: null,
                        innerValue: "",
                        loading: !1
                    }
                },
                mounted: function () {
                    var e, t = this,
                        n = new(0, window.wangEditor)(this.$refs.editor);
                    n.config.menus = ["bold", "fontSize", "fontName", "italic", "underline", "strikeThrough", "foreColor", "backColor", "link", "justify", "emoticon", "image", "table", "undo", "redo"], n.config.fontNames = ["楷体", "宋体", "微软雅黑", "Arial", "Tahoma", "Verdana"], n.config.zIndex = 100, n.config.uploadImgMaxLength = 1, n.config.onchange = function (e) {
                        t.innerValue = e, t.$emit("change", e)
                    }, n.config.customUploadImg = (e = o()(a.a.mark(function e(n, i) {
                        return a.a.wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t.loading = !0, Object(s.a)(n[0], "images", t.uploadCallback.bind(t, i), function () {
                                        t.$message.error("图片上传失败"), t.loading = !1
                                    });
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }, e, t)
                    })), function (t, n) {
                        return e.apply(this, arguments)
                    }), n.create(), this.editor = n
                },
                beforeDestroy: function () {
                    this.editor.destroy(), this.editor = null
                },
                methods: {
                    uploadCallback: function (e, t, n) {
                        var i = this;
                        return o()(a.a.mark(function t() {
                            return a.a.wrap(function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        e(n), i.loading = !1;
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, i)
                        }))()
                    }
                }
            },
            u = n("W5g0"),
            l = Object(u.a)(c, function () {
                var e = this.$createElement;
                return (this._self._c || e)("div", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: this.loading,
                        expression: "loading"
                    }],
                    ref: "editor",
                    staticStyle: {
                        "text-align": "left"
                    }
                })
            }, [], !1, null, null, null);
        t.default = l.exports
    },
    "Vn5/": function (e, t, n) {
        e.exports = n.p + "public/img/jifen.b203778.png"
    },
    VvI5: function (e, t, n) {
        "use strict";
        var i = n("lC5x"),
            a = n.n(i),
            r = n("J0Oq"),
            o = n.n(r),
            s = n("4YfN"),
            c = n.n(s),
            u = n("rVsN"),
            l = n.n(u),
            d = n("OMN4"),
            p = n.n(d),
            m = n("YaEn"),
            f = n("l6IN"),
            h = (n.n(f), n("M9A7")),
            v = n("jFiy"),
            _ = n("q1+e"),
            g = n("IcnI"),
            y = this;
        window.isRefreshing = !1;
        var b, w = p.a.create({
            timeout: 6e4,
            baseURL: "/cgi-bin"
        });
        w.interceptors.request.use(function (e) {
            if (sessionStorage.getItem("isOpen")) return l.a.reject(new Error("isOpen"));
            var t = localStorage.getItem("token"),
                n = localStorage.getItem("refreshToken");
            return t ? e.headers.Authorization = "Bearer " + t : n && (e.headers.Authorization = "Bearer " + n), "get" === e.method && (e.params = c()({
                t: Date.parse(new Date) / 1e3
            }, e.params)), e
        }, function (e) {
            return l.a.reject(e)
        }), w.interceptors.response.use((b = o()(a.a.mark(function e(t) {
            var n, i, r, o, s;
            return a.a.wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (200 !== t.status) {
                            e.next = 50;
                            break
                        }
                        if (g.a.commit("renderPage/setRender", {
                                render: !0,
                                replaceHtml: ""
                            }), 1002 !== (n = t.data).code) {
                            e.next = 33;
                            break
                        }
                        if (window.isRefreshing) {
                            e.next = 31;
                            break
                        }
                        return window.isRefreshing = !0, localStorage.removeItem("token"), localStorage.removeItem("userInfo"), i = localStorage.getItem("refreshToken"), e.prev = 10, e.next = 13, Object(h.c)(i);
                    case 13:
                        if (0 !== (r = e.sent).code) {
                            e.next = 24;
                            break
                        }
                        return Object(v.f)(), o = r.token, s = r.refreshToken, Object(v.s)(o, s), e.next = 21, Object(v.j)();
                    case 21:
                        window.location.reload(!0), e.next = 25;
                        break;
                    case 24:
                        1101 === r.code ? f.MessageBox.alert("账户被禁用", "", {
                            type: "warning",
                            confirmButtonText: "确认"
                        }) : (Object(v.f)(), Object(_.a)(m.c.currentRoute.path));
                    case 25:
                        e.next = 31;
                        break;
                    case 27:
                        e.prev = 27, e.t0 = e.catch(10), Object(v.f)(), Object(_.a)(m.c.currentRoute.path);
                    case 31:
                        e.next = 48;
                        break;
                    case 33:
                        if (1001 !== n.code && 1005 !== n.code) {
                            e.next = 38;
                            break
                        }
                        Object(v.f)(), Object(_.a)(m.c.currentRoute.path), e.next = 48;
                        break;
                    case 38:
                        if (1003 !== n.code && 1004 !== n.code) {
                            e.next = 42;
                            break
                        }
                        f.Message.error({
                            message: "用户无当前页面的权限，正在刷新页面",
                            onClose: function () {
                                window.location.href = "/backoffice"
                            }
                        }), e.next = 48;
                        break;
                    case 42:
                        if (-99 !== n.code) {
                            e.next = 47;
                            break
                        }
                        return f.Message.error("服务器异常"), e.abrupt("return", l.a.reject(t));
                    case 47:
                        return e.abrupt("return", l.a.resolve(n));
                    case 48:
                        e.next = 51;
                        break;
                    case 50:
                        return e.abrupt("return", l.a.reject(t));
                    case 51:
                    case "end":
                        return e.stop()
                }
            }, e, y, [
                [10, 27]
            ])
        })), function (e) {
            return b.apply(this, arguments)
        }), function (e) {
            if (e.response) {
                switch (e.response.status) {
                    case 401:
                        Object(v.f)(), Object(_.a)(m.c.currentRoute.path);
                        break;
                    case 403:
                        if (e.response.data && 1006 === e.response.data.code) {
                            var t = e.response.data && e.response.data.message;
                            g.a.commit("renderPage/setRender", {
                                render: !1,
                                replaceHtml: t
                            })
                        } else Object(v.f)(), Object(_.a)(m.c.currentRoute.path);
                        break;
                    case 404:
                        f.Message.error("网络请求不存在");
                        break;
                    case 502:
                        f.Message.error("网关错误，请联系系统管理员解决问题");
                        break;
                    case 504:
                        f.Message.error("网关超时，请联系系统管理员解决问题");
                        break;
                    case 500:
                        f.Message.error("服务器错误，请联系系统管理员解决问题");
                        break;
                    default:
                        f.Message.error(e.response.data.message)
                }
                return l.a.reject(e)
            }
            e.message.includes("timeout") ? f.Message.error("请求超时，请检查网络是否连接正常") : e.message.includes("isOpen") ? Object(v.f)() : f.Message.error("请求失败，请检查网络是否已连接")
        }), t.a = w
    },
    WTk1: function (e, t) {},
    WhOx: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("ZLEe"),
            a = n.n(i),
            r = n("aA9S"),
            o = n.n(r),
            s = {
                setArticleArr: function (e, t) {
                    e.articleArr = t
                },
                setCurrentActivity: function (e, t) {
                    e.currentActivity = o()({}, t)
                },
                setExamAnswerList: function (e, t) {
                    e.exam.answerList.checkpointId = t.checkpointId, e.exam.answerList.content = t.content
                },
                setExamAnswer: function (e, t) {
                    var n = t.checkpointId,
                        i = t.answer;
                    e.exam.answerList.checkpointId = n;
                    var r = e.exam.answerList.content,
                        o = a()(i)[0],
                        s = r.findIndex(function (e) {
                            return e[o] instanceof Array
                        });
                    s > -1 ? r[s][o] = i[o] : r.push(i)
                },
                setIsShowExam: function (e, t) {
                    e.isShowExam = t
                },
                setPublicKey: function (e, t) {
                    e.publicKey = t
                }
            };
        t.default = {
            namespaced: !0,
            state: {
                articleArr: [],
                currentActivity: null,
                exam: {
                    answerList: {
                        checkpointId: "",
                        content: []
                    }
                },
                isShowExam: !1,
                publicKey: ""
            },
            actions: {},
            mutations: s
        }
    },
    YTsH: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {
                1001: "无效的token",
                1004: "用户没有任何权限",
                500: "服务器出错了，请稍后再试"
            },
            a = {
                1101: "用户被禁用，请联系管理员",
                100: "用户中心错误，请联系管理员",
                4011: "用户密码为空",
                2010: "RSA key文件不存在",
                1013: "用户不存在",
                4012: "用户名为空",
                1014: "用户没有任何权限",
                1015: "用户没有有效的菜单",
                1012: "用户密码错误",
                1017: "用户名或密码错误",
                4102: "缺少用户中心的登陆令牌",
                1100: "登陆失败，请重试",
                4522: "活动不存在"
            },
            r = {
                4200: "您有必填项未填写",
                4210: "账号过长",
                4211: "账号已存在",
                4212: "密码过长",
                4213: "用户编号过长",
                4214: "用户编号已经存在",
                4215: "用户姓名过长",
                4216: "手机号码过长",
                4217: "手机号码格式不正确",
                4218: "区号过长",
                4221: "邮箱过长",
                4222: "邮箱格式不正确",
                4223: "大学不存在",
                4236: "学号过长",
                4237: "学院过长",
                4103: "用户id不能为空",
                4230: "时间格式错误",
                4234: "备注信息太长",
                1011: "用户不存在",
                4224: "大学id的格式错误",
                4235: "用户类型不能为空",
                4225: "用户类型有误",
                4226: "用户类型有误",
                4227: "政治面貌选择有误",
                4228: "政治面貌选择有误",
                4229: "状态启用或关闭失败",
                4231: "状态启用或关闭失败",
                4232: "audit_status不在有效的范围内",
                4233: "audit_status的数据类型错误",
                4219: "性别不在有效范围内",
                4220: "性别的数据类型错误",
                101: "用户ids不能为空",
                102: "用户ids中存在数据格式错误的",
                103: "权限编码列表的数据类型错误",
                104: "角色id列表的数据类型错误",
                4238: "手机号码已存在"
            },
            o = {
                4201: "角色编码过长",
                4202: "角色编码已存在",
                4203: "角色名称过长",
                4204: "角色名称已存在",
                4205: "备注信息过长",
                1104: "角色不存在",
                4200: "缺少必要参数",
                106: "角色ids的数据数据结构错误",
                107: "权限code列表数据格式错误",
                4037: "用户ids错误",
                4038: "不可以给自己分配权限",
                4206: "不可以给自己撤回角色",
                4106: "status类型错误",
                105: "缺少角色ids",
                4104: "缺少角色id"
            },
            s = {
                101: "文章id不能为空",
                4101: "文章不存在",
                4102: "文章编号已存在",
                106: "文章标题不存在",
                108: "标题图片不能为空",
                4111: "标题图片不存在",
                107: "文章内容或文章链接不能为空",
                4110: "标题图片的数据格式错误",
                105: "category未提供",
                102: "category错误",
                104: "status未提供",
                103: "status错误"
            },
            c = {
                701: "学校id不能为空",
                4701: "学校不存在",
                702: "学校编号不能为空",
                4702: "学校已存在",
                703: "学校名称不能为空",
                4703: "行政区划的code存在问题",
                704: "status未提供",
                705: "status值错误",
                4710: "院校拼音首字母类型错误",
                4711: "院校的拼音长度必须小于64",
                4712: "院校拼音丢失",
                4713: "院校拼音必须都是字母"
            },
            u = {
                100: "请求错误",
                1100: "登录失败",
                1101: "用户不存在",
                1102: "用户名或密码错误",
                1103: "密码错误",
                1013: "用户不存在",
                4102: "uc_token没有给"
            },
            l = {
                4301: "行政区不存在",
                4302: "行政区树不存在"
            },
            d = {
                4340: "文件id必传",
                4341: "文件不存在",
                4342: "文件id数据格式错误",
                3100: "无法处理只能处理上传文件",
                2100: "请求里不包含文件信息"
            },
            p = {
                1013: "用户不存在",
                1014: "用户没有任何权限"
            },
            m = {
                4250: "活动id未提供",
                4251: "活动id数据类型错误",
                4252: "活动不存在",
                4200: "您有必填项未填写",
                4253: "活动编号过长",
                4254: "活动编号已存在",
                4257: "活动标题过长",
                4230: "时间格式错误",
                4271: "活动开始时间不可以大于结束时间",
                4260: "活动标题图片不存在",
                4261: "活动标题图片id错误",
                4272: "第三方活动必须要传第三方链接",
                4286: "活动背景图不能为空",
                4285: "活动背景图id错误",
                4262: "答题次数不在正常范围内",
                4263: "答题次数的数据类型错误",
                4287: "答题时长数据类型错误",
                4264: "pc首页概述、PC端考生须知、移动端首页概览、移动端考生须知中有一项未填",
                4265: "适用人群只能选择不限或者其他",
                4266: "使用人群字段数据类型错误",
                4273: "缺少预约活动的必选字段",
                4274: "预约结束时间不可以大于考试结束时间",
                4275: "预约结束时间不可以小于考试开始时间",
                4267: "考试预约时段不在正常范围内",
                4268: "考试预约时段数据类型错误",
                4269: "单次允许预约人数字段范围错误",
                4270: "单次允许预约人数字段的数据类型错误",
                4276: "存在考试记录的活动不允许删除",
                4345: "上架活动不允许删除",
                4277: "闯关赛和PK赛的关卡数不可以小于2个",
                4278: "基础活动的关卡数必须是一个",
                4279: "活动必须要有抽题结果才可以上上架",
                4280: "您不是活动管理员不可以添加活动管理人员",
                4037: "用户ids数据格式错误",
                4255: "category不在有效范围内",
                4256: "category数据类型错误",
                4258: "status不在有效范围内",
                4259: "status数据类型错误",
                4366: "预约活动的预约开始时间不可以小于活动的开始时间",
                4357: "当前活动未创建答题模式",
                2108: "活动类型不正确",
                4243: "手机号格式错误",
                4244: "表报管理类型错误",
                4245: "分配省份报表管理员的省份错误",
                4246: "分配院校报表管理员的院校错误",
                4247: "分配的用户ids错误"
            },
            f = {
                4250: "活动id未提供",
                4251: "活动id数据类型错误",
                4252: "活动不存在",
                4281: "预约状态不在有效的范围内",
                4282: "预约状态的数据类型错误",
                4230: "时间格式错误",
                4267: "考试预约时段不在正常范围内",
                4268: "考试预约时段数据类型错误",
                4339: "该用户不是学生无法进行活动预约",
                3101: "预约失败",
                4283: "预约ids未提供",
                4284: "预约ids的数据格式错误"
            },
            h = {
                4250: "活动id未提供",
                4251: "活动id数据类型错误",
                4252: "活动不存在",
                4291: "维度不存在",
                4292: "维度id数据格式错误",
                4293: "父维度不可以有父维度",
                4294: "status不在正常范围内",
                4295: "status数据格式错误",
                4296: "category不在正常范围内",
                4297: "category数据格式错误",
                4298: "维度编号过长",
                4299: "维度编号已经存在",
                4300: "维度名称过长",
                4301: "权重过大",
                4302: "备注信息过长",
                4305: "维度ids的数据格式错误",
                4306: "没有可以删除的维度"
            },
            v = {
                4250: "活动id不能为空",
                4251: "活动id数据类型错误",
                4252: "活动不存在",
                4291: "维度不存在",
                4292: "维度id数据格式错误",
                4311: "status不在有效范围内",
                4312: "status数据类型错误",
                4313: "category不在有效的范围内",
                4314: "category数据类型错误",
                4315: "题目不存在",
                4316: "题目id格式错误",
                4317: "题目编号过长",
                4318: "题目编号已经存在",
                4319: "用户定制编码过长",
                4320: "题目图片不存在",
                4321: "图片id格式错误",
                4343: "审核状态不在有效范围内",
                4344: "审核状态数据类型错误",
                4322: "选项编码过长或已存在",
                4323: "选项标题过长",
                4324: "选项权重过大",
                4325: "选项权重的数据类型错误",
                4326: "选项答案过长",
                4327: "单选题和多选的选项不可以小于两个",
                4328: "单选题的答案只能是一个",
                4329: "多选题的答案不能少于一个",
                4330: "判断题的选项必须是两个",
                4331: "判断题的答案必须是一个",
                4305: "维度ids的数据格式错误",
                4332: "维度ids中有不存在的维度",
                4335: "选项类型错误",
                4336: "已经存在答题记录的题目无法修改",
                4337: "题目ids未提供",
                4338: "题目ids的数据格式错误",
                4346: "审核的题目必须是一个活动下的",
                4347: "只有题目创建者才可以复核题目",
                4348: "只有活动创建者才可以审核题目",
                4507: "题目模板错误",
                4508: "模板表头错误"
            },
            _ = {
                301: "缺少活动id字段",
                302: "缺少状态字段",
                303: "缺少名称字段",
                304: "缺少规则id字段",
                305: "缺少抽题规则编码字段",
                306: "抽题规则一些参数缺失",
                307: "抽题规则状态值不合法",
                308: "抽题规则预期数量值不合法",
                4291: "维度不存在",
                4301: "抽题规则不存在",
                4302: "抽题规则已存在",
                4303: "上线活动无法修改抽题规则",
                4304: "有考试记录的活动无法修改抽题规则",
                4305: "抽题规则ID类型错误",
                4351: "根维度缺失",
                4352: "目标数错误",
                4355: "缺失抽题数量",
                4356: "抽题规则设置了相同维度",
                4363: "没有满足条件的题目",
                4364: "没有设置抽题规则无法抽题"
            },
            g = {
                4250: "缺少活动id字段",
                4251: "活动id字段不合法",
                4252: "活动不存在",
                4288: "缺少活动模式id字段",
                4289: "活动模式id字段不合法",
                4307: "活动模式不存在",
                4308: "模式种类不在有效范围内",
                4309: "模式种类的数据格式不合法",
                4333: "规则id的字段不合法",
                4301: "规则不存在",
                4349: "规则和模式属于同一个活动",
                4350: "模式的个人积分字段不在有效范围内",
                4353: "模式的个人积分字段数据格式错误",
                4354: "模式时间不能小于1分钟",
                4355: "模式时间的数据类型错误",
                4358: "模式名称长度过长",
                4361: "模式转态不在正常范围内",
                4362: "模式状态类型错误",
                4368: "模式已经存在考试记录，无法删除",
                4369: "缺少模式id字段"
            },
            y = {
                301: "缺少关卡id字段",
                302: "缺少状态字段",
                303: "关卡状态值不合法",
                304: "缺少名称字段",
                305: "缺少解锁数量字段",
                306: "缺少time_limit字段",
                307: "抽题规则值不合法",
                308: "缺少抽题规则字段",
                309: "权重值不合法",
                310: "解锁数量值不合法",
                311: "time_limit值不合法",
                312: "缺少活动id字段",
                4301: "关卡不存在",
                4302: "关卡已存在",
                4303: "关卡已被引用",
                4304: "第三方活动不能创建关卡",
                4305: "基础考试只能有一个关卡",
                4359: "解锁下一关的题目数不能大于抽题规则的题目数"
            },
            b = {
                301: "缺少证书模板id字段",
                302: "缺少状态字段",
                303: "缺少名称字段",
                304: "缺少活动id字段",
                305: "缺少关卡id字段",
                306: "证书状态值不合法",
                307: "缺少背景图片id字段",
                4301: "证书模板不存在",
                4302: "证书背景图片不存在",
                4360: "活动进行中无法删除证书"
            },
            w = {
                401: "缺少活动id字段",
                402: "缺少赛区团队id字段",
                403: "缺少学校id字段",
                404: "缺少赛区编码字段",
                405: "缺少赛区团队编码字段",
                406: "缺少赛区名称字段",
                407: "缺少赛区团队名称字段",
                408: "缺少赛区团队手机号字段",
                409: "缺少赛区关联省份字段",
                410: "缺少赛区id字段",
                411: "缺少赛区状态字段",
                412: "缺少赛区团队状态字段",
                413: "赛区状态字段不合法",
                414: "赛区团队状态字段不合法",
                4401: "赛区对应的活动不存在",
                4402: "赛区已经存在",
                4403: "赛区不存在",
                4404: "赛区团队不存在",
                4405: "学校不存在",
                4406: "赛区团队已经存在",
                4407: "赛区活动不存在",
                4408: "赛区标题超过32个字符",
                4409: "赛区编号超过的16个字符",
                4410: "赛区关联省份被别的省份引用",
                4411: "用户不存在或者未完善个人信息"
            },
            C = {
                401: "缺少活动id字段",
                402: "缺少赛区团队id字段",
                403: "缺少学校id字段",
                404: "缺少赛区编码字段",
                405: "缺少赛区团队编码字段",
                406: "缺少赛区名称字段",
                407: "缺少赛区团队名称字段",
                408: "缺少赛区团队手机号字段",
                409: "缺少赛区关联省份字段",
                410: "缺少赛区id字段",
                411: "缺少赛区状态字段",
                412: "缺少赛区团队状态字段",
                413: "赛区状态字段不合法",
                414: "赛区团队状态字段不合法",
                4401: "赛区对应的活动不存在",
                4402: "赛区已经存在",
                4403: "赛区不存在",
                4404: "赛区团队不存在",
                4405: "学校不存在",
                4406: "赛区团队已经存在",
                4217: "该手机号尚未存在，请先注册个人账号"
            },
            x = {
                4501: "缺少分组状态字段",
                4502: "分组状态字段不合法",
                4503: "分组状态字段不合法",
                4504: "缺少分组检索关键字字段",
                4505: "缺少分组id字段",
                4506: "分组不存在",
                4507: "缺少必要参数",
                4508: "团队id字段不合法",
                4509: "赛区id字段不合法",
                4510: "缺少团队id字段",
                4511: "缺少赛区id字段",
                4512: "缺少分组编码字段",
                4513: "缺少分组名称字段",
                4514: "分组编码已经存在",
                4515: "分组编码长度错误",
                4516: "分组名称已经存在",
                4517: "分组名称长度错误",
                4518: "分组id字段不合法",
                4519: "分组编码不存在",
                4520: "分组名称不存在",
                4521: "活动id字段不合法",
                4522: "活动不存在",
                4523: "缺少活动id字段"
            },
            k = {},
            I = {
                1018: "用户信息缺失",
                1019: "绑定手机号码与身份信息不符，请重新输入",
                1020: "用户手机号长度错误",
                1021: "用户姓名长度错误",
                1022: "学校不存在",
                1023: "用户学号长度错误",
                1024: "用户政治面貌不合法",
                1025: "用户学院名称长度错误",
                1026: "学校id类型错误",
                1027: "用户身份类型错误",
                1028: "活动类型错误",
                1029: "手机号已被占用，请尝试使用新的手机号",
                4239: "用户姓名名含有敏感词汇",
                4240: "请先注销后台账号，再继续完善信息"
            },
            P = {},
            S = {
                800: "id不在请求参数里",
                2101: "活动不存在或未发布",
                801: "activity_id不在请求参数里",
                4824: "活动未开放预约",
                4825: "未到预约时间",
                4826: "预约时间已过",
                4827: "预约日期不在指定范围内",
                4828: "预约时间格式错误",
                4829: "预约时间格式错误",
                802: "考试日期和考试时间必选",
                803: "考试日期和考试时间必选",
                3101: "预约失败",
                4800: "预约日期格式错误",
                4801: "预约时段错误",
                4803: "预约日期格式错误",
                4804: "预约时间必须在当前时间之后",
                4830: "超出预约人数"
            },
            A = {
                801: "activity_id不在请求参数中",
                2010: "活动不存在或未发布",
                4822: "考试已完成,不允许重复参与",
                4805: "未预约或预约过期",
                4806: "抽题规则未设置",
                4807: "无有效的题目,考试无法继续",
                804: "checkpoint_id不在请求参数里",
                805: "checkpoint_id或question_id格式错误",
                2101: "活动不存在或未发布",
                2102: "用户不存在或被禁用",
                2104: "题目不存在,考试无法继续",
                4809: "抽题规则未设置,考试无法继续",
                806: "checkpoint_id或question_id格式错误",
                4810: "答案格式错误",
                2103: "活动不存在请联系管理员解决",
                807: "考试码格式错误",
                4812: "考试已经提交,不允许重复操作",
                4813: "提交人非考试人,提交失败",
                4814: "活动不存在,提交失败",
                4815: "关卡不存在,提交失败",
                4816: "考试已经提交，不允许重复操作",
                4817: "关卡不匹配,提交失败",
                4811: "超出考试时间限制",
                2105: "题目不存在，答案驳回",
                4401: "竞赛仅可以参加一次",
                2106: "活动模式不存在",
                2107: "参数错误",
                2204: "赛区不存在",
                2205: "未匹配到对手",
                4808: "当前用户不能参与本次活动答题",
                4831: "警告，答题时间太短",
                4832: "超过答题次数限制",
                4833: "验证码未传",
                4823: "验证码校验未通过"
            },
            O = {
                801: "activity_id不在请求参数中",
                2104: "成绩不存在",
                808: "user_id不在请求参数中",
                4818: "查询的用户不存在",
                4819: "无权查看",
                4820: "无权查询 查询人与被查询人不属于同一所院校",
                4821: "无权查看",
                2101: "活动不存在或未发布"
            };
        t.default = {
            install: function (e) {
                e.prototype.$GLOBAL_ERROR = i, e.prototype.$AUTH_ERROR = a, e.prototype.$USER_ERROR = r, e.prototype.$ROLE_ERROR = o, e.prototype.$ACTIVITY_ERROR = m, e.prototype.$SCHOOL_ERROR = c, e.prototype.$ORDER_ERROR = f, e.prototype.$RULE_ERROR = _, e.prototype.$MODE_ERROR = g, e.prototype.$CHECK_POINT_ERROR = y, e.prototype.$CERTIFICATE_ERROR = b, e.prototype.$ZONE_ERROR = w, e.prototype.$ZONE_GROUP_ERROR = C, e.prototype.$ZONE_GROUPING_ERROR = x, e.prototype.$LOGIN_ERROR = u, e.prototype.$FILE_ERROR = d, e.prototype.$PERMISSION_ERROR = p, e.prototype.$DIVISION_ERROR = l, e.prototype.$ARTICLE_ERROR = s, e.prototype.$QUESTION_ERROR = v, e.prototype.$DIMENSION_ERROR = h, e.prototype.$DATA_ERROR = k, e.prototype.$CLIENT_USER_ERROR = I, e.prototype.$CLIENT_ARTICLE_ERROR = P, e.prototype.$CLIENT_ACTIVITY_ERROR = S, e.prototype.$CLIENT_EXAM_ERROR = A, e.prototype.$CLIENT_RESULT_ERROR = O
            }
        }
    },
    YaEn: function (e, t, n) {
        "use strict";
        var i = n("IHPB"),
            a = n.n(i),
            r = n("pRNm"),
            o = n.n(r),
            s = n("lC5x"),
            c = n.n(s),
            u = n("J0Oq"),
            l = n.n(u),
            d = n("3cXf"),
            p = n.n(d),
            m = n("aA9S"),
            f = n.n(m),
            h = n("q1+e"),
            v = n("M9A7"),
            _ = n("jFiy"),
            g = n("jMmt"),
            y = n("xZa2"),
            b = {
                data: function () {
                    return {
                        footerText1: "©2014-2016 教育部中国大学生在线网站 版权所有",
                        footerText2: "京ICP备10028400号-2 京公安网备11010502025664",
                        isLogOut: !1,
                        isShowPage: !0,
                        showHeaderAndFooter: !0,
                        info: {}
                    }
                },
                computed: {
                    name: function () {
                        return this.$store.state.user.userInfo && this.$store.state.user.userInfo.name || this.userInfo && this.userInfo.name || localStorage.getItem("name") || ""
                    },
                    isLogin: function () {
                        return this.is_perfect || !!localStorage.getItem("token")
                    },
                    isHidden: function () {
                        var e = Object(g.a)();
                        return !(-1 === e || "edge" === e || e >= 10)
                    },
                    isMobile: function () {
                        return Object(_.u)()
                    },
                    isShowTip: function () {
                        return !this.isMobile && this.isHidden
                    },
                    isShowExam: function () {
                        return this.$store.getters.isShowExam
                    }
                },
                watch: {
                    $route: {
                        deep: !0,
                        handler: function (e, t) {
                            "ActivityClientDetail" === e.name && this.isHidden ? this.isShowPage = !1 : this.isShowPage = !0
                        }
                    }
                },
                created: function () {
                    if (this.$route.params.id && localStorage.setItem("currentActivityId", this.$route.params.id), sessionStorage.getItem("store")) {
                        var e = f()({}, this.$store.state, JSON.parse(sessionStorage.getItem("store")));
                        this.$store.replaceState(e), window.sessionStorage.removeItem("store")
                    }
                    var t = function () {
                        if (this.isLogOut) window.sessionStorage.removeItem("store"), this.isLogOut = !1;
                        else {
                            var e = JSON.parse(p()(this.$store.state));
                            e.client.isShowExam = !1, sessionStorage.setItem("store", p()(e))
                        }
                    };
                    Object(_.n)() ? window.addEventListener("pagehide", t.bind(this)) : window.addEventListener("beforeunload", t.bind(this))
                },
                mounted: function () {
                    Object(y.b)(), document.body.classList.add("s_view")
                },
                beforeDestroy: function () {
                    Object(y.a)()
                },
                methods: {
                    login: function () {
                        Object(_.f)(), Object(h.a)(this.$route.path)
                    },
                    register: function () {
                        Object(h.b)(this.$route.path)
                    },
                    logout: function () {
                        var e = this;
                        return l()(c.a.mark(function t() {
                            return c.a.wrap(function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(v.b)();
                                    case 2:
                                        0 === t.sent.code ? (Object(_.f)(), e.$store.commit("user/REMOVE_USERINFO"), e.isLogOut = !0, e.is_perfect = !1, e.isMobile ? window.location.reload() : Object(h.a)(e.$router.currentRoute.path)) : e.$message.error("注销失败，请重试");
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e)
                        }))()
                    },
                    goIndex: function () {
                        "Index" !== this.$route.name && this.$router.push("/custom/index")
                    },
                    goDetail: function () {
                        this.$router.push({
                            path: "/client/detail/" + this.$route.params.id
                        })
                    }
                }
            },
            w = n("jupl"),
            C = n("rMyF"),
            x = {
                data: function () {
                    return {
                        _id: "",
                        uid: "",
                        avatar: "",
                        dialogShow: !1,
                        is_perfect: !1,
                        userInfo: {}
                    }
                },
                methods: {
                    loginAuth: function (e) {
                        var t = this;
                        return l()(c.a.mark(function n() {
                            var i, a, r, o, s, u, l, d, p, m;
                            return c.a.wrap(function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return i = {
                                            uid: e || t._id,
                                            avatar: t.avatar
                                        }, -1 !== t.$route.path.indexOf("client") && localStorage.getItem("currentActivityId") && (i.activity_id = localStorage.getItem("currentActivityId")), n.next = 4, Object(v.a)(i);
                                    case 4:
                                        if (a = n.sent, r = a.code, o = a.token, s = a.refresh_token, u = a.sign_in_result, 0 !== r) {
                                            n.next = 27;
                                            break
                                        }
                                        if (Object(_.t)(o, s), u && localStorage.setItem("sign_in_result", u), l = JSON.parse(w.Base64.decode(o.split(".")[1])), t.is_perfect = l.is_perfect, !t.is_perfect) {
                                            n.next = 24;
                                            break
                                        }
                                        return t.dialogShow = !1, n.next = 18, Object(_.j)();
                                    case 18:
                                        d = n.sent, p = d.code, m = d.data, 0 === p && (t.userInfo = m, t.$router.push({
                                            path: t.$route.path
                                        })), n.next = 25;
                                        break;
                                    case 24:
                                        t.dialogShow = !0;
                                    case 25:
                                        n.next = 29;
                                        break;
                                    case 27:
                                        1102 === r && Object(h.a)(t.$route.path), 1101 === r && t.$alert("账户被禁用", "", {
                                            type: "warning",
                                            confirmButtonText: "确认"
                                        });
                                    case 29:
                                    case "end":
                                        return n.stop()
                                }
                            }, n, t)
                        }))()
                    },
                    updateUserInfo: function (e) {
                        var t = this;
                        return l()(c.a.mark(function n() {
                            var i, a, r, o, s, u, l, d;
                            return c.a.wrap(function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (i = e.name, a = e.mobile, r = e.flag, o = e.politics, s = e.department, u = e.agreement, l = e.university_id, i && 0 !== i.length) {
                                            n.next = 4;
                                            break
                                        }
                                        return t.$message.error("请输入考生姓名"), n.abrupt("return");
                                    case 4:
                                        if (!i || !i.toLowerCase().startsWith("normal_user")) {
                                            n.next = 7;
                                            break
                                        }
                                        return t.$message.error("姓名格式错误，请修改姓名"), n.abrupt("return");
                                    case 7:
                                        if (!i || /^[\u4e00-\u9fa5a-zA-Z]{1,}$/.test(i)) {
                                            n.next = 10;
                                            break
                                        }
                                        return t.$message.error("姓名只可以包含中文和英文字母"), n.abrupt("return");
                                    case 10:
                                        if (l && 0 !== l.length) {
                                            n.next = 13;
                                            break
                                        }
                                        return t.$message.error("请输入学校"), n.abrupt("return");
                                    case 13:
                                        if (s && 0 !== s.length) {
                                            n.next = 16;
                                            break
                                        }
                                        return t.$message.error("请输入学院"), n.abrupt("return");
                                    case 16:
                                        if (!s || /^[\u4e00-\u9fa5a-zA-Z]{1,}$/.test(s)) {
                                            n.next = 19;
                                            break
                                        }
                                        return t.$message.error("学院只可以包含中文和英文字母"), n.abrupt("return");
                                    case 19:
                                        if (r) {
                                            n.next = 22;
                                            break
                                        }
                                        return t.$message.error("请选择身份"), n.abrupt("return");
                                    case 22:
                                        if (a && /^1[3456789]\d{9}$/.test(a)) {
                                            n.next = 25;
                                            break
                                        }
                                        return t.$message.error("请输入正确手机号"), n.abrupt("return");
                                    case 25:
                                        if (o) {
                                            n.next = 28;
                                            break
                                        }
                                        return t.$message.error("请选择政治面貌"), n.abrupt("return");
                                    case 28:
                                        if (u) {
                                            n.next = 31;
                                            break
                                        }
                                        return t.$message.error("请阅读并勾选隐私协议"), n.abrupt("return");
                                    case 31:
                                        return n.next = 33, Object(C.A)({
                                            name: i,
                                            mobile: a,
                                            flag: r,
                                            politics: o,
                                            department: s,
                                            university_id: l
                                        });
                                    case 33:
                                        if (0 !== (d = n.sent).code) {
                                            n.next = 39;
                                            break
                                        }
                                        return n.next = 37, t.loginAuth(localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo")).uid);
                                    case 37:
                                        n.next = 40;
                                        break;
                                    case 39:
                                        t.$message.error(t.$CLIENT_USER_ERROR[d.code]);
                                    case 40:
                                    case "end":
                                        return n.stop()
                                }
                            }, n, t)
                        }))()
                    }
                },
                created: function () {
                    var e = this;
                    return l()(c.a.mark(function t() {
                        return c.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e._id = e.$route.query.data && JSON.parse(e.$route.query.data)._id, e.avatar = e.$route.query.data && JSON.parse(e.$route.query.data).photo, Object(_.d)() || Object(_.f)(), localStorage.getItem("token")) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 6, e.loginAuth();
                                case 6:
                                    t.next = 17;
                                    break;
                                case 8:
                                    if (e.is_perfect = JSON.parse(localStorage.getItem("userInfo")).is_perfect, !e.is_perfect) {
                                        t.next = 16;
                                        break
                                    }
                                    return e.dialogShow = !1, t.next = 13, Object(_.j)();
                                case 13:
                                    e.$router.push({
                                        path: e.$route.path
                                    }), t.next = 17;
                                    break;
                                case 16:
                                    e.dialogShow = !0;
                                case 17:
                                case "end":
                                    return t.stop()
                            }
                        }, t, e)
                    }))()
                }
            },
            k = n("W5g0");
        var I = function (e) {
                n("UsNc")
            },
            P = {
                name: "base",
                mixins: [x, b],
                data: function () {
                    return {}
                },
                components: {
                    CompleteDialog: Object(k.a)({
                        name: "CompleteDialog"
                    }, function () {
                        var e = this.$createElement;
                        return (this._self._c || e)("div", {
                            staticClass: "complete_dialog"
                        }, [this._t("default")], 2)
                    }, [], !1, I, "data-v-cfad4e10", null).exports,
                    CompleteInfo: n("h2P8").a
                },
                computed: {
                    isShowExam: function () {
                        return this.$store.getters.isShowExam
                    }
                }
            },
            S = Object(k.a)(P, function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "mobile",
                    class: {
                        mobile_no_header: e.isShowExam
                    }
                }, [n("header", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.isShowExam,
                        expression: "!isShowExam"
                    }],
                    staticClass: "main_header"
                }, [n("div", {
                    staticClass: "main_header_box"
                }, [n("div", {
                    staticClass: "col-left"
                }, [n("div", {
                    staticClass: "main_header_icon",
                    on: {
                        click: e.goIndex
                    }
                })]), e._v(" "), n("div", {
                    staticClass: "col-right color_white"
                }, [e.isLogin ? e._e() : [n("button", {
                    staticClass: "main_header_btn",
                    on: {
                        click: e.login
                    }
                }, [e._v("登录")])], e._v(" "), e.isLogin ? [e._v("\n         您好，"), n("span", {
                    staticClass: "main_header_name"
                }, [e._v(e._s(e.name))]), e._v(" "), n("button", {
                    staticClass: "main_header_btn",
                    on: {
                        click: e.logout
                    }
                }, [e._v("退出登录")])] : e._e()], 2)])]), e._v(" "), n("router-view"), e._v(" "), n("footer", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.isShowExam,
                        expression: "!isShowExam"
                    }],
                    staticClass: "main_footer"
                }, [e._m(0), e._v(" "), n("p", [e._v(e._s(e.footerText1))]), e._v(" "), n("p", [e._v(e._s(e.footerText2))])]), e._v(" "), e.dialogShow ? n("complete-dialog", [n("complete-info", {
                    attrs: {
                        dialogShow: e.dialogShow,
                        type: 2
                    },
                    on: {
                        "update:dialogShow": function (t) {
                            e.dialogShow = t
                        },
                        "update:dialog-show": function (t) {
                            e.dialogShow = t
                        },
                        submit: e.updateUserInfo
                    }
                })], 1) : e._e()], 1)
            }, [function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("p", [t("a", {
                    attrs: {
                        href: "http://dxs.moe.gov.cn/zx/dblj/gywm/",
                        target: "_blank"
                    }
                }, [this._v("关于我们")]), t("a", {
                    attrs: {
                        href: "http://dxs.moe.gov.cn/zx/dblj/gjdw/",
                        target: "_blank"
                    }
                }, [this._v("共建单位")]), t("a", {
                    attrs: {
                        href: "http://dxs.moe.gov.cn/zx/dblj/lxfs/",
                        target: "_blank"
                    }
                }, [this._v("联系方式")])])
            }], !1, null, null, null).exports;
        var A = function (e) {
                n("iCPj")
            },
            O = Object(k.a)({
                name: "CompleteDialog"
            }, function () {
                var e = this.$createElement;
                return (this._self._c || e)("div", {
                    staticClass: "complete_dialog"
                }, [this._t("default")], 2)
            }, [], !1, A, "data-v-e733b5ba", null).exports,
            E = n("Iv2E"),
            D = {
                mixins: [{
                    data: function () {
                        return {
                            show: !1
                        }
                    },
                    created: function () {
                        var e = this;
                        localStorage.getItem("sign_in_result") && (setTimeout(function () {
                            e.show = !0, setTimeout(function () {
                                e.show = !1
                            }, 2500)
                        }, 500), localStorage.removeItem("sign_in_result"))
                    }
                }]
            };
        var R = function (e) {
                n("35P6")
            },
            j = Object(k.a)(D, function () {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [e.show ? i("div", {
                    staticClass: "integral_wrapper",
                    on: {
                        click: function (t) {
                            e.show = !1
                        }
                    }
                }, [i("div", {
                    staticClass: "integral_content"
                }, [i("div", {
                    staticClass: "integral_icon"
                }, [i("img", {
                    attrs: {
                        src: n("Vn5/")
                    }
                }), e._v(" "), i("span", {
                    staticClass: "add_wrapper"
                }, [i("span", {
                    staticClass: "add"
                }, [e._v("+")]), e._v("1")])]), e._v(" "), i("div", {
                    staticClass: "integral_title"
                }, [i("div", [e._v("签到成功")]), e._v(" "), i("div", [e._v("当日首次登录成功")])])])]) : e._e()])
            }, [], !1, R, "data-v-3de89d6e", null).exports,
            T = {
                name: "base",
                mixins: [x, b],
                components: {
                    CompleteDialog: O,
                    CompleteInfo: E.a,
                    integral: j
                }
            },
            N = [{
                path: "/custom/",
                name: "base",
                component: S,
                redirect: "/custom/index",
                children: [{
                    path: "index",
                    name: "Index",
                    component: function () {
                        return Promise.all([n.e(0), n.e(23)]).then(n.bind(null, "xcce"))
                    }
                }, {
                    path: "articlelist",
                    name: "ArticleList",
                    component: function () {
                        return Promise.all([n.e(0), n.e(60)]).then(n.bind(null, "t2Ps"))
                    }
                }, {
                    path: "articledetail/:id",
                    name: "ArticleDetail",
                    component: function () {
                        return Promise.all([n.e(0), n.e(49)]).then(n.bind(null, "PTuQ"))
                    }
                }, {
                    path: "activitylist",
                    name: "ActivityList",
                    component: function () {
                        return Promise.all([n.e(0), n.e(35)]).then(n.bind(null, "QeAe"))
                    }
                }, {
                    path: "activitydetail/:id",
                    name: "ActivityDetail",
                    component: function () {
                        return Promise.all([n.e(0), n.e(17)]).then(n.bind(null, "ckT9"))
                    }
                }]
            }, {
                path: "/client/",
                name: "ClientBase",
                component: Object(k.a)(T, function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "mobile mobile-3",
                        class: {
                            mobile_no_header: e.isShowExam
                        }
                    }, [i("header", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.isShowExam,
                            expression: "!isShowExam"
                        }],
                        staticClass: "main_header"
                    }, [i("div", {
                        staticClass: "main_header_box"
                    }, [i("div", {
                        staticClass: "col-left",
                        on: {
                            click: e.goDetail
                        }
                    }, [i("div", {
                        staticClass: "main_header_icon"
                    })]), e._v(" "), i("div", {
                        staticClass: "col-right color_white"
                    }, [e.isLogin ? e._e() : [i("button", {
                        staticClass: "main_header_btn",
                        on: {
                            click: e.login
                        }
                    }, [e._v("登录")])], e._v(" "), e.isLogin ? [e._v("\n       您好，"), i("span", {
                        staticClass: "main_header_name"
                    }, [e._v(e._s(e.name))])] : e._e()], 2)])]), e._v(" "), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.isShowExam,
                            expression: "!isShowExam"
                        }],
                        staticClass: "main_banner"
                    }, [i("img", {
                        attrs: {
                            src: n("mY8d"),
                            alt: ""
                        }
                    })]), e._v(" "), e.dialogShow ? i("complete-dialog", [i("complete-info", {
                        attrs: {
                            dialogShow: e.dialogShow,
                            type: 2
                        },
                        on: {
                            "update:dialogShow": function (t) {
                                e.dialogShow = t
                            },
                            "update:dialog-show": function (t) {
                                e.dialogShow = t
                            },
                            submit: e.updateUserInfo
                        }
                    })], 1) : e._e(), e._v(" "), e.is_perfect ? i("integral") : e._e(), e._v(" "), e.is_perfect ? i("router-view") : e._e()], 1)
                }, [], !1, null, null, null).exports,
                redirect: "/client/index",
                children: [{
                    path: "index",
                    name: "Index",
                    component: function () {
                        return Promise.all([n.e(0), n.e(56)]).then(n.bind(null, "MMi1"))
                    }
                }, {
                    path: "list",
                    name: "ActivityClientList",
                    component: function () {
                        return Promise.all([n.e(0), n.e(34)]).then(n.bind(null, "eTGL"))
                    }
                }, {
                    path: "detail/:id",
                    name: "ActivityClientDetail",
                    component: function () {
                        return Promise.all([n.e(0), n.e(18)]).then(n.bind(null, "JwYQ"))
                    }
                }, {
                    path: "detail/:id/overview",
                    name: "ActivityClientOverview",
                    component: function () {
                        return Promise.all([n.e(0), n.e(32)]).then(n.bind(null, "aDFF"))
                    }
                }, {
                    path: "detail/:id/score",
                    name: "ActivityClientScore",
                    component: function () {
                        return Promise.all([n.e(0), n.e(24)]).then(n.bind(null, "sELB"))
                    }
                }, {
                    path: "detail/:id/rules",
                    name: "ActivityClientRules",
                    component: function () {
                        return Promise.all([n.e(0), n.e(52)]).then(n.bind(null, "DRbd"))
                    }
                }, {
                    path: "detail/:id/rank",
                    name: "ActivityClientRank",
                    component: function () {
                        return Promise.all([n.e(0), n.e(31)]).then(n.bind(null, "VnC0"))
                    }
                }, {
                    path: "exam/:id/:mode/:way/:mid",
                    name: "ActivityClientExam",
                    component: function () {
                        return Promise.all([n.e(0), n.e(20)]).then(n.bind(null, "7krl"))
                    }
                }, {
                    path: "result/:id/:mid?",
                    name: "ActivityClientResult",
                    component: function () {
                        return Promise.all([n.e(0), n.e(22)]).then(n.bind(null, "HMIP"))
                    }
                }]
            }, {
                path: "/client/detail/:id/poster",
                name: "ActivityClientPoster",
                component: function () {
                    return n.e(16).then(n.bind(null, "p/uG"))
                }
            }];
        n.d(t, "a", function () {
            return q
        }), n.d(t, "b", function () {
            return L
        }), n.d(t, "d", function () {
            return $
        });
        var M = o.a.prototype.push,
            V = o.a.prototype.replace;
        o.a.prototype.push = function (e) {
            return M.call(this, e).catch(function (e) {
                return e
            })
        }, o.a.prototype.replace = function (e) {
            return V.call(this, e).catch(function (e) {
                return e
            })
        };
        var L = [{
                path: "/backoffice/login/",
                name: "BackofficeLogin",
                meta: {
                    title: "登录",
                    hidden: !0,
                    moduleIndex: 1
                },
                component: function () {
                    return n.e(33).then(n.bind(null, "iQ0n"))
                }
            }, {
                path: "/answer/tip",
                name: "AnswerTip",
                meta: {
                    title: "中国大学生在线",
                    hidden: !0
                },
                component: function () {
                    return n.e(57).then(n.bind(null, "lEjJ"))
                }
            }].concat(a()(N)),
            q = [],
            H = n("kyiS");
        H.keys().forEach(function (e) {
            var t = H(e);
            q = [].concat(a()(q), a()(t.default || t))
        }), q.sort(function (e, t) {
            return e.meta.moduleIndex - t.meta.moduleIndex
        }), L.push({
            path: "*",
            name: "Error404",
            meta: {
                hidden: !0
            },
            component: function () {
                return n.e(27).then(n.bind(null, "5gJf"))
            }
        });
        var z = function () {
                return new o.a({
                    mode: "history",
                    scrollBehavior: function (e, t, n) {
                        return n || {
                            x: 0,
                            y: 0
                        }
                    },
                    routes: [].concat(a()(L))
                })
            },
            B = z(),
            $ = function () {
                B.matcher = z().matcher
            };
        t.c = B
    },
    Yg1E: function (e, t) {},
    "Z+GP": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("IcnI"),
            a = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var a = i.a.getters.permissions;
                return !!(a && a.length > 0) && t.every(function (e) {
                    return a.includes(e)
                })
            },
            r = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var a = i.a.getters.permissions;
                return !!(a && a.length > 0) && t.some(function (e) {
                    return a.includes(e)
                })
            };
        t.default = {
            install: function (e) {
                e.prototype.$CHECK_PERMISSIONS = a, e.prototype.$CHECK_PERMISSIONS_ANY = r
            }
        }
    },
    Z60n: function (e, t) {},
    bREw: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("lC5x"),
            a = n.n(i),
            r = n("J0Oq"),
            o = n.n(r),
            s = n("rVsN"),
            c = n.n(s),
            u = n("jupl"),
            l = (n.n(u), n("Pfph")),
            d = n("M9A7"),
            p = n("YaEn"),
            m = n("jFiy"),
            f = n("Sanv"),
            h = {
                SET_TOKEN: function (e, t) {
                    e.token = t
                },
                SET_USERINFO: function (e, t) {
                    e.userInfo.id = t.id, e.userInfo.name = t.name, e.userInfo.universityId = t.university_id, e.userInfo.universityName = t.university_name, e.userInfo.department = t.department, e.userInfo.identity = t.identity, e.userInfo.mobile = t.mobile, e.userInfo.isTeacher = t.category === f.b.TEACHER
                },
                REMOVE_USERINFO: function (e) {
                    e.userInfo.id = "", e.userInfo.name = "", e.userInfo.universityId = "", e.userInfo.universityName = "", e.userInfo.department = "", e.userInfo.identity = "", e.userInfo.mobile = "", e.userInfo.isTeacher = !1
                },
                SET_REFRESHTOKEN: function (e, t) {
                    e.refreshToken = t
                },
                SET_PERMISSIONS: function (e, t) {
                    e.permissions = t
                }
            },
            v = {
                login: function (e, t) {
                    var n = e.commit;
                    return new c.a(function (e) {
                        var i = JSON.parse(u.Base64.decode(t.split(".")[1]));
                        n("SET_TOKEN", t), n("SET_USERINFO", i), n("SET_PERMISSIONS", []), e()
                    })
                },
                getPermissions: function (e) {
                    var t = e.commit;
                    return new c.a(function (e, n) {
                        Object(l.b)().then(function (n) {
                            var i = [];
                            0 === n.code && (i = n.permissions), t("SET_PERMISSIONS", i), e(n)
                        }).catch(function (e) {
                            n(e)
                        })
                    })
                },
                logOut: function (e) {
                    var t, n = this,
                        i = e.commit;
                    return new c.a((t = o()(a.a.mark(function e(t, r) {
                        return a.a.wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(d.b)();
                                case 2:
                                    0 === e.sent.code ? (Object(m.f)(), i("SET_TOKEN", ""), i("SET_REFRESHTOKEN", ""), i("SET_USERINFO", {}), i("SET_PERMISSIONS", []), Object(p.d)(), t()) : r(new Error("注销失败，请重试"));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e, n)
                    })), function (e, n) {
                        return t.apply(this, arguments)
                    }))
                }
            };
        t.default = {
            namespaced: !0,
            state: {
                token: "",
                userInfo: {
                    id: "",
                    name: "",
                    universityId: "",
                    universityName: "",
                    department: "",
                    identity: "",
                    mobile: "",
                    isTeacher: !1
                },
                refreshToken: "",
                permissions: ""
            },
            actions: v,
            mutations: h
        }
    },
    cXws: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("xXtn"),
            a = n("yDhC");
        t.default = [{
            path: "/backoffice/",
            name: "backoffice",
            component: i.a,
            meta: {
                title: "成员管理",
                hidden: !1,
                moduleIndex: 2,
                icon: "my-menu-member",
                permissions: [a.memberPermissionCodes.student, a.memberPermissionCodes.teacher]
            },
            children: [{
                path: "student",
                name: "student",
                meta: {
                    title: "学生管理",
                    hidden: !1,
                    permissions: [a.memberPermissionCodes.student],
                    cacheView: "memberStudent"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(51)]).then(n.bind(null, "sl4T"))
                }
            }, {
                path: "student/detail/:id",
                name: "studentDetail",
                meta: {
                    title: "查看用户",
                    hidden: !0,
                    permissions: [a.memberPermissionCodes.student],
                    cacheView: "memberStudent"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(55)]).then(n.bind(null, "dkiS"))
                }
            }, {
                path: "student/edit/:id",
                name: "studentEdit",
                meta: {
                    title: "编辑用户",
                    hidden: !0,
                    permissions: [a.memberPermissionCodes.student_edit],
                    cacheView: "memberStudent"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(54)]).then(n.bind(null, "fWAH"))
                }
            }, {
                path: "teacher",
                name: "teacher",
                meta: {
                    title: "教师管理",
                    hidden: !1,
                    permissions: [a.memberPermissionCodes.teacher],
                    cacheView: "memberTeacher"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(61)]).then(n.bind(null, "mAF4"))
                }
            }, {
                path: "teacher/detail/:id",
                name: "teacherDetail",
                meta: {
                    title: "查看用户",
                    hidden: !0,
                    permissions: [a.memberPermissionCodes.teacher],
                    cacheView: "memberTeacher"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(46)]).then(n.bind(null, "Usgh"))
                }
            }, {
                path: "teacher/edit/:id",
                name: "teacherEdit",
                meta: {
                    title: "编辑用户",
                    hidden: !0,
                    permissions: [a.memberPermissionCodes.teacher_edit],
                    cacheView: "memberTeacher"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(37)]).then(n.bind(null, "5DPv"))
                }
            }]
        }]
    },
    cpQO: function (e, t) {},
    eRPl: function (e, t) {},
    fEyO: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("xXtn"),
            a = n("yDhC");
        t.default = [{
            path: "/backoffice/",
            name: "backoffice",
            component: i.a,
            meta: {
                title: "权限管理",
                hidden: !1,
                moduleIndex: 1,
                icon: "my-menu-auth",
                permissions: [a.authPermissionCodes.user, a.authPermissionCodes.role]
            },
            children: [{
                path: "user",
                name: "user",
                meta: {
                    title: "用户管理",
                    hidden: !1,
                    permissions: [a.authPermissionCodes.user],
                    cacheView: "AuthUser"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(40)]).then(n.bind(null, "4bG8"))
                }
            }, {
                path: "user/detail/:id",
                name: "userDetail",
                meta: {
                    title: "查看用户",
                    hidden: !0,
                    permissions: [a.authPermissionCodes.user],
                    cacheView: "AuthUser"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(42)]).then(n.bind(null, "UcWD"))
                }
            }, {
                path: "user/add",
                name: "userAdd",
                meta: {
                    title: "新建用户",
                    hidden: !0,
                    permissions: [a.authPermissionCodes.user_add],
                    cacheView: "AuthUser"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(9)]).then(n.bind(null, "wYrN"))
                }
            }, {
                path: "user/edit/:id",
                name: "userEdit",
                meta: {
                    title: "编辑用户",
                    hidden: !0,
                    permissions: [a.authPermissionCodes.user_edit],
                    cacheView: "AuthUser"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(9)]).then(n.bind(null, "wYrN"))
                }
            }, {
                path: "role",
                name: "role",
                meta: {
                    title: "角色管理",
                    hidden: !1,
                    permissions: [a.authPermissionCodes.role],
                    cacheView: "AuthRole"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(64)]).then(n.bind(null, "w2Nm"))
                }
            }, {
                path: "role/add/",
                name: "userDetail",
                meta: {
                    title: "新建角色",
                    hidden: !0,
                    permissions: [a.authPermissionCodes.role_add],
                    cacheView: "AuthRole"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(11)]).then(n.bind(null, "rQfb"))
                }
            }, {
                path: "role/edit/:id",
                name: "userDetail",
                meta: {
                    title: "编辑角色",
                    hidden: !0,
                    permissions: [a.authPermissionCodes.role_edit],
                    cacheView: "AuthRole"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(11)]).then(n.bind(null, "rQfb"))
                }
            }]
        }]
    },
    fgvV: function (e, t) {},
    frsq: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("xXtn"),
            a = n("yDhC");
        t.default = [{
            path: "/backoffice/",
            name: "backoffice",
            component: i.a,
            meta: {
                title: "文章管理",
                hidden: !1,
                single: !0,
                redirect: "/backoffice/article",
                moduleIndex: 6,
                icon: "my-menu-article",
                permissions: [a.articlePermissionCodes.article]
            },
            children: [{
                path: "article",
                name: "article",
                meta: {
                    title: "文章管理",
                    hidden: !0,
                    permissions: [a.articlePermissionCodes.article],
                    cacheView: "Article"
                },
                component: function () {
                    return n.e(30).then(n.bind(null, "B2FH"))
                }
            }, {
                path: "article/edit/:id",
                name: "articleEdit",
                meta: {
                    title: "编辑文章",
                    hidden: !0,
                    permissions: [a.articlePermissionCodes.article_edit],
                    cacheView: "Article"
                },
                component: function () {
                    return n.e(4).then(n.bind(null, "NptO"))
                }
            }, {
                path: "article/add",
                name: "articleAdd",
                meta: {
                    title: "添加文章",
                    hidden: !0,
                    permissions: [a.articlePermissionCodes.article_edit],
                    cacheView: "Article"
                },
                component: function () {
                    return n.e(4).then(n.bind(null, "NptO"))
                }
            }]
        }]
    },
    fx8w: function (e, t) {},
    fzQu: function (e, t) {},
    gAoe: function (e, t) {},
    gIFl: function (e, t) {},
    gNcp: function (e, t, n) {
        var i = {
            "./cacheView.js": "HQi2",
            "./client.js": "WhOx",
            "./constants.js": "qF07",
            "./permission.js": "19nU",
            "./question.js": "njBE",
            "./rank.js": "J7He",
            "./renderPage.js": "ufkU",
            "./user.js": "bREw"
        };

        function a(e) {
            return n(r(e))
        }

        function r(e) {
            var t = i[e];
            if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
            return t
        }
        a.keys = function () {
            return Object.keys(i)
        }, a.resolve = r, e.exports = a, a.id = "gNcp"
    },
    h2P8: function (e, t, n) {
        "use strict";
        var i = n("lC5x"),
            a = n.n(i),
            r = n("aA9S"),
            o = n.n(r),
            s = n("J0Oq"),
            c = n.n(s),
            u = n("xhM8"),
            l = n("jFiy"),
            d = n("rMyF"),
            p = n("2hIV"),
            m = {
                name: "completeInfo",
                mixins: [u.a],
                data: function () {
                    return {
                        columns: [{
                            values: [],
                            defaultIndex: 0
                        }],
                        POLITICOPTIONS: p.a,
                        showPicker: !1,
                        searchVal: "",
                        debounceFun: null,
                        politicsPicker: !1
                    }
                },
                computed: {},
                watch: {},
                created: function () {
                    var e = this;
                    return c()(a.a.mark(function t() {
                        var n;
                        return a.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e.columns[0].values = e.POLITICOPTIONS.filter(function (e) {
                                        return 100 !== e.key
                                    }), n = e.columns[0].values.filter(function (t, n) {
                                        var i = t.key === e.userInfo.politics;
                                        return i && (e.columns[0].defaultIndex = n), i
                                    }), Array.isArray(n) && n.length > 0 && (e.selectVal = o()({}, e.selectVal, n[0])), e.debounceFun = Object(l.h)(e.getSchools);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, t, e)
                    }))()
                },
                methods: {
                    handleFocus: function () {
                        this.showPicker = !0
                    },
                    textInput: function (e) {
                        this.debounceFun(e)
                    },
                    handleSelect: function (e) {
                        this.searchVal = "", this.selectVal = o()({}, this.selectVal, e), this.userInfo.universityId = e.id, this.schoolData = [], this.showPicker = !1
                    },
                    handleOpenPop: function () {
                        this.schoolData = []
                    },
                    handleClosePop: function () {
                        this.searchVal = "", this.schoolData = []
                    },
                    handlePoliticsFocus: function () {
                        this.politicsPicker = !0
                    },
                    onConfirm: function (e) {
                        this.selectVal = o()({}, this.selectVal, e[0]), this.userInfo.politics = e[0].key, this.politicsPicker = !1
                    },
                    getSchools: function (e) {
                        var t = this;
                        return c()(a.a.mark(function n() {
                            var i;
                            return a.a.wrap(function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (e && 0 !== e.length) {
                                            n.next = 3;
                                            break
                                        }
                                        return t.schoolData = [], n.abrupt("return");
                                    case 3:
                                        return t.loading = !0, n.next = 6, Object(d.n)(e);
                                    case 6:
                                        0 === (i = n.sent).code && (t.schoolData = i.data), t.loading = !1;
                                    case 9:
                                    case "end":
                                        return n.stop()
                                }
                            }, n, t)
                        }))()
                    }
                }
            },
            f = n("W5g0");
        var h = function (e) {
                n("JXdE")
            },
            v = Object(f.a)(m, function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.dialogShow,
                        expression: "dialogShow"
                    }],
                    staticClass: "exam_dialog activity_wrap_exam"
                }, [n("div", {
                    staticClass: "userinfo"
                }, [n("div", {
                    staticClass: "userinfo_item clear"
                }, [n("span", {
                    staticClass: "label name"
                }, [e._v("考生姓名")]), e._v(" "), n("div", {
                    staticClass: "input"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.userInfo.name,
                        expression: "userInfo.name"
                    }],
                    attrs: {
                        type: "text",
                        placeholder: "请输入考生姓名"
                    },
                    domProps: {
                        value: e.userInfo.name
                    },
                    on: {
                        input: function (t) {
                            t.target.composing || e.$set(e.userInfo, "name", t.target.value)
                        }
                    }
                })])]), e._v(" "), n("div", {
                    staticClass: "userinfo_item clear"
                }, [n("span", {
                    staticClass: "label school"
                }, [e._v("学校")]), e._v(" "), n("div", {
                    staticClass: "input"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.selectVal.name,
                        expression: "selectVal.name"
                    }],
                    attrs: {
                        type: "text",
                        placeholder: "请选择学校"
                    },
                    domProps: {
                        value: e.selectVal.name
                    },
                    on: {
                        click: e.handleFocus,
                        input: function (t) {
                            t.target.composing || e.$set(e.selectVal, "name", t.target.value)
                        }
                    }
                })])]), e._v(" "), n("div", {
                    staticClass: "userinfo_item clear"
                }, [n("span", {
                    staticClass: "label college"
                }, [e._v("学院")]), e._v(" "), n("div", {
                    staticClass: "input"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.userInfo.department,
                        expression: "userInfo.department"
                    }],
                    attrs: {
                        type: "text",
                        placeholder: "请输入学院"
                    },
                    domProps: {
                        value: e.userInfo.department
                    },
                    on: {
                        input: function (t) {
                            t.target.composing || e.$set(e.userInfo, "department", t.target.value)
                        }
                    }
                })])]), e._v(" "), n("div", {
                    staticClass: "userinfo_item clear"
                }, [n("span", {
                    staticClass: "label number"
                }, [e._v("学号")]), e._v(" "), n("div", {
                    staticClass: "input"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.userInfo.identity,
                        expression: "userInfo.identity"
                    }],
                    attrs: {
                        type: "text",
                        placeholder: "请输入学号"
                    },
                    domProps: {
                        value: e.userInfo.identity
                    },
                    on: {
                        input: function (t) {
                            t.target.composing || e.$set(e.userInfo, "identity", t.target.value)
                        }
                    }
                })])]), e._v(" "), 2 == e.type ? n("div", {
                    staticClass: "userinfo_item clear"
                }, [n("span", {
                    staticClass: "label phone"
                }, [e._v("手机号")]), e._v(" "), n("div", {
                    staticClass: "input"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.userInfo.mobile,
                        expression: "userInfo.mobile"
                    }],
                    attrs: {
                        type: "text",
                        placeholder: "请输入手机号"
                    },
                    domProps: {
                        value: e.userInfo.mobile
                    },
                    on: {
                        input: function (t) {
                            t.target.composing || e.$set(e.userInfo, "mobile", t.target.value)
                        }
                    }
                })])]) : e._e(), e._v(" "), n("div", {
                    staticClass: "userinfo_item clear"
                }, [n("span", {
                    staticClass: "label politic"
                }, [e._v("政治面貌")]), e._v(" "), n("div", {
                    staticClass: "input"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.selectVal.label,
                        expression: "selectVal.label"
                    }],
                    attrs: {
                        type: "text",
                        placeholder: "请选择政治面貌"
                    },
                    domProps: {
                        value: e.selectVal.label
                    },
                    on: {
                        click: e.handlePoliticsFocus,
                        input: function (t) {
                            t.target.composing || e.$set(e.selectVal, "label", t.target.value)
                        }
                    }
                })])])]), e._v(" "), n("button", {
                    staticClass: "common_btn2 common_btn2_blue",
                    on: {
                        click: e.submit
                    }
                }, [e._v("提交")]), e._v(" "), n("van-popup", {
                    attrs: {
                        round: "",
                        position: "bottom"
                    },
                    on: {
                        close: e.handleClosePop,
                        open: e.handleOpenPop
                    },
                    model: {
                        value: e.showPicker,
                        callback: function (t) {
                            e.showPicker = t
                        },
                        expression: "showPicker"
                    }
                }, [n("div", {
                    staticClass: "school_pop lh50"
                }, [n("van-search", {
                    attrs: {
                        autofocus: "",
                        placeholder: "请输入学校名称"
                    },
                    on: {
                        input: e.textInput
                    },
                    model: {
                        value: e.searchVal,
                        callback: function (t) {
                            e.searchVal = t
                        },
                        expression: "searchVal"
                    }
                }), e._v(" "), e.loading ? n("van-loading", {
                    staticClass: "school_pop_loading",
                    attrs: {
                        color: "#1989fa"
                    }
                }) : e._e(), e._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.schoolData && e.schoolData.length > 0,
                        expression: "schoolData && schoolData.length > 0"
                    }],
                    staticClass: "school_pop_content"
                }, e._l(e.schoolData, function (t, i) {
                    return n("div", {
                        key: i,
                        staticClass: "school_pop_item",
                        on: {
                            click: function (n) {
                                return e.handleSelect(t)
                            }
                        }
                    }, [n("span", [e._v(e._s(t.name))])])
                }), 0), e._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.schoolData || 0 === e.schoolData.length,
                        expression: "!schoolData || schoolData.length === 0"
                    }],
                    staticClass: "school_pop_empty"
                })], 1)]), e._v(" "), n("van-popup", {
                    attrs: {
                        round: "",
                        position: "bottom"
                    },
                    model: {
                        value: e.politicsPicker,
                        callback: function (t) {
                            e.politicsPicker = t
                        },
                        expression: "politicsPicker"
                    }
                }, [n("van-picker", {
                    attrs: {
                        "show-toolbar": "",
                        "value-key": "label",
                        columns: e.columns
                    },
                    on: {
                        confirm: e.onConfirm,
                        cancel: function (t) {
                            e.politicsPicker = !1
                        }
                    }
                })], 1)], 1)
            }, [], !1, h, "data-v-6f9f45a1", null);
        t.a = v.exports
    },
    iCPj: function (e, t) {},
    jAzU: function (e, t) {},
    jFiy: function (e, t, n) {
        "use strict";
        var i = n("KH7x"),
            a = n.n(i),
            r = n("Q+Ik"),
            o = n.n(r),
            s = n("lC5x"),
            c = n.n(s),
            u = n("J0Oq"),
            l = n.n(u),
            d = n("rVsN"),
            p = n.n(d),
            m = n("3cXf"),
            f = n.n(m),
            h = n("b4Ps"),
            v = n("jupl"),
            _ = n("IcnI"),
            g = n("Sanv"),
            y = n("rMyF"),
            b = n("l6IN"),
            w = n("Jwlx"),
            C = n.n(w),
            x = C()({
                refer: 1,
                base: 2,
                ckPoint: 3,
                pk: 4
            }),
            k = C()({
                custom: 1,
                limitTime: 2,
                robTime: 3,
                competition: 4
            }),
            I = C()({
                activity: 1,
                province: 2,
                school: 3
            });
        n.d(t, "r", function () {
            return O
        }), n.d(t, "s", function () {
            return E
        }), n.d(t, "t", function () {
            return D
        }), n.d(t, "j", function () {
            return R
        }), n.d(t, "d", function () {
            return j
        }), n.d(t, "f", function () {
            return T
        }), n.d(t, "i", function () {
            return N
        }), n.d(t, "u", function () {
            return M
        }), n.d(t, "v", function () {
            return V
        }), n.d(t, "n", function () {
            return L
        }), n.d(t, "l", function () {
            return q
        }), n.d(t, "o", function () {
            return H
        }), n.d(t, "k", function () {
            return z
        }), n.d(t, "m", function () {
            return B
        }), n.d(t, "p", function () {
            return $
        }), n.d(t, "h", function () {
            return F
        }), n.d(t, "q", function () {
            return U
        }), n.d(t, "e", function () {
            return G
        }), n.d(t, "g", function () {
            return Q
        }), n.d(t, "a", function () {
            return x
        }), n.d(t, "b", function () {
            return k
        }), n.d(t, "c", function () {
            return I
        });
        var P, S, A = this,
            O = function (e, t) {
                var n = new h.JSEncrypt;
                return n.setPublicKey(e), n.encrypt(t)
            },
            E = function (e, t) {
                localStorage.setItem("token", e), localStorage.setItem("refreshToken", t);
                var n = JSON.parse(v.Base64.decode(e.split(".")[1]));
                localStorage.setItem("userInfo", f()(n))
            },
            D = function (e, t) {
                localStorage.setItem("token", e), localStorage.setItem("refreshToken", t);
                var n = JSON.parse(v.Base64.decode(e.split(".")[1]));
                localStorage.setItem("userInfo", f()(n))
            },
            R = function () {
                return new p.a((e = l()(c.a.mark(function e(t, n) {
                    var i, a;
                    return c.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Object(y.t)();
                            case 2:
                                0 === (i = e.sent).code ? (a = i.data, localStorage.setItem("id", a.id || ""), localStorage.setItem("name", a.name || ""), localStorage.setItem("universityId", a.university_id || ""), localStorage.setItem("universityName", a.university_name || ""), localStorage.setItem("department", a.department || ""), localStorage.setItem("identity", a.identity || ""), localStorage.setItem("mobile", a.mobile || ""), localStorage.setItem("politics", a.politics || ""), localStorage.setItem("isTeacher", a.category === g.b.TEACHER), _.a.commit("user/SET_USERINFO", i.data), t(i)) : n(i.code);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, e, A)
                })), function (t, n) {
                    return e.apply(this, arguments)
                }));
                var e
            },
            j = function () {
                return !!localStorage.getItem("token") && !(Date.now() + 3e5 > 1e3 * (localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo"))).exp)
            },
            T = function () {
                localStorage.removeItem("token"), localStorage.removeItem("refreshToken"), localStorage.removeItem("userInfo"), localStorage.removeItem("id"), localStorage.removeItem("name"), localStorage.removeItem("universityId"), localStorage.removeItem("universityName"), localStorage.removeItem("department"), localStorage.removeItem("identity"), localStorage.removeItem("mobile"), localStorage.removeItem("politics"), localStorage.removeItem("isTeacher")
            },
            N = (P = l()(c.a.mark(function e(t) {
                var n, i, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return c.a.wrap(function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = {}, i = _.a.getters.constants) {
                                e.next = 6;
                                break
                            }
                            return e.next = 5, _.a.dispatch("constants/getConstants");
                        case 5:
                            i = e.sent;
                        case 6:
                            return i && i[t] && (n = i[t].value), "[object Object]" === Object.prototype.toString.call(n) && r && (n = o()(n).map(function (e) {
                                var t = a()(e, 2),
                                    n = t[0],
                                    i = t[1];
                                return {
                                    key: parseInt(n, 10),
                                    label: i
                                }
                            })), e.abrupt("return", n);
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }, e, A)
            })), function (e) {
                return P.apply(this, arguments)
            }),
            M = function () {
                var e = navigator.userAgent.toLowerCase(),
                    t = -1 !== e.indexOf("ipad"),
                    n = -1 !== e.indexOf("iphone os"),
                    i = -1 !== e.indexOf("midp"),
                    a = -1 !== e.indexOf("rv:1.2.3.4"),
                    r = -1 !== e.indexOf("ucweb"),
                    o = -1 !== e.indexOf("android"),
                    s = -1 !== e.indexOf("windows ce"),
                    c = -1 !== e.indexOf("windows mobile"),
                    u = screen.width < 768 && screen.height < 1024;
                return !!(t || n || i || a || r || o || s || c || u)
            },
            V = function () {
                return !!(-1 !== navigator.userAgent.toLowerCase().indexOf("micromessenger"))
            },
            L = function () {
                return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
            },
            q = function (e) {
                return !e || 0 === e.trim().length
            },
            H = function (e) {
                return /^1(3|4|5|6|7|8|9)\d{9}$/.test(e)
            },
            z = function (e) {
                return /^([a-zA-Z]|[0-9])+(\.([a-zA-Z]+))?@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(e)
            },
            B = function (e) {
                return /\.(jpg|png|gif|jpeg)$/i.test(e)
            },
            $ = function (e) {
                return /\.(mp4|avi|ogg|rmvb)$/i.test(e)
            },
            F = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
                    n = null,
                    i = void 0;
                return function () {
                    var a = arguments,
                        r = this,
                        o = new Date;
                    o - n - t > 0 ? setTimeout(function () {
                        e.apply(r, a)
                    }, t) : (i && (clearTimeout(i), i = null), i = setTimeout(function () {
                        e.apply(r, a)
                    }, t)), n = o
                }
            },
            U = function (e) {
                var t = e || window.event;
                t.preventDefault ? t.preventDefault() : t.returnValue = !1
            },
            G = function (e) {
                return new p.a(function (t) {
                    var n = document.createElement("video");
                    n.onloadedmetadata = function () {
                        t(!0), document.body.removeChild(n)
                    }, n.onerror = function () {
                        t(!1), document.body.removeChild(n)
                    }, n.src = e, n.style.display = "none", document.body.appendChild(n)
                })
            },
            Q = (S = l()(c.a.mark(function e(t, n) {
                var i, a, r, o, s;
                return c.a.wrap(function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return i = new Blob([t], {
                                type: "application/vnd.ms-excel"
                            }), e.next = 3, i.text();
                        case 3:
                            a = e.sent, r = !1;
                            try {
                                JSON.parse(a)
                            } catch (e) {
                                r = !0
                            }
                            if (r) {
                                e.next = 9;
                                break
                            }
                            return b.Message.error("导出失败"), e.abrupt("return");
                        case 9:
                            void 0 !== window.navigator.msSaveBlob ? window.navigator.msSaveBlob(i, n) : (o = window.URL.createObjectURL(i), (s = document.createElement("a")).style.display = "none", s.href = o, s.setAttribute("download", n), void 0 === s.download && s.setAttribute("target", "_blank"), document.body.appendChild(s), s.click(), document.body.removeChild(s), window.URL.revokeObjectURL(o));
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }, e, A)
            })), function (e, t) {
                return S.apply(this, arguments)
            })
    },
    jMmt: function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return s
        }), n.d(t, "d", function () {
            return c
        }), n.d(t, "h", function () {
            return u
        }), n.d(t, "e", function () {
            return l
        }), n.d(t, "g", function () {
            return d
        }), n.d(t, "f", function () {
            return p
        }), n.d(t, "b", function () {
            return m
        }), n.d(t, "a", function () {
            return f
        });
        var i = n("AA3o"),
            a = n.n(i),
            r = n("xSur"),
            o = n.n(r),
            s = function (e, t) {
                if ("string" == typeof e) return e;
                if (t || (t = "yyyy-MM-dd hh:mm:ss"), !e || null == e) return null;
                var n = {
                    "M+": e.getMonth() + 1,
                    "d+": e.getDate(),
                    "h+": e.getHours(),
                    "m+": e.getMinutes(),
                    "s+": e.getSeconds(),
                    "q+": Math.floor((e.getMonth() + 3) / 3),
                    S: e.getMilliseconds()
                };
                for (var i in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), n) new RegExp("(" + i + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? n[i] : ("00" + n[i]).substr(("" + n[i]).length)));
                return t
            },
            c = function (e, t) {
                var n = t ? t + 1 : 1,
                    i = "";
                e ? (e = d(e), i = new Date(e)) : i = new Date;
                var a = i.getFullYear(),
                    r = i.getMonth() + n;
                return d(a + "-" + (r = r < 10 ? "0" + r : r) + "-01 00:00:00")
            },
            u = function (e) {
                var t = new Date(e);
                return s(t, "yyyy-MM")
            },
            l = function (e) {
                return s(new Date(c(e, 1)), "yyyy-MM")
            },
            d = function (e) {
                if (e.indexOf("-") > -1 && (e = e.replace(/-/g, "/")), -1 === e.indexOf(":")) e += " 00:00:00";
                else {
                    var t = e.split(":"),
                        n = t[2],
                        i = n.split(".");
                    if (i.length > 1) return e = t[0] + ":" + t[1] + ":" + parseInt(n), new Date(e).getTime() + Math.floor(i[1] / 1e3)
                }
                return new Date(e).getTime()
            },
            p = function (e) {
                var t = e.hours,
                    n = e.mins,
                    i = e.sec;
                return ((t = t > 9 ? t.toString() : "0" + t) + (n = n > 9 ? n.toString() : "0" + n) + (i = i > 9 ? i.toString() : "0" + i)).split("")
            },
            m = function () {
                function e() {
                    a()(this, e), this.timer = void 0
                }
                return o()(e, [{
                    key: "countStart",
                    value: function (e, t) {
                        var n = this;
                        if ("number" != typeof e) throw new TypeError("SecCounter: (second, resolve) second is not a number");
                        t(this.getDate(e)), this.timer = setInterval(function () {
                            e > 0 ? (e--, t(n.getDate(e))) : n.countStop()
                        }, 1e3)
                    }
                }, {
                    key: "countStop",
                    value: function () {
                        this.timer && clearInterval(this.timer)
                    }
                }, {
                    key: "getDate",
                    value: function (e) {
                        return {
                            hours: Math.floor(e / 3600),
                            mins: Math.floor(e / 60 % 60),
                            sec: Math.floor(e % 60)
                        }
                    }
                }]), e
            }(),
            f = function () {
                var e = navigator.userAgent,
                    t = e.indexOf("compatible") > -1 && e.indexOf("MSIE") > -1,
                    n = e.indexOf("Edge") > -1 && !t,
                    i = e.indexOf("Trident") > -1 && e.indexOf("rv:11.0") > -1;
                if (t) {
                    new RegExp("MSIE (\\d+\\.\\d+);").test(e);
                    var a = parseFloat(RegExp.$1);
                    return 7 === a ? 7 : 8 === a ? 8 : 9 === a ? 9 : 10 === a ? 10 : 6
                }
                return n ? "edge" : i ? 11 : -1
            }
    },
    khMC: function (e, t) {},
    kyiS: function (e, t, n) {
        var i = {
            "./abnormalTestPaperManage.js": "xdWc",
            "./activityManage.js": "pjCG",
            "./artcleManage.js": "frsq",
            "./authManage.js": "fEyO",
            "./dataStatistics.js": "4WYA",
            "./memberManage.js": "cXws",
            "./schoolManage.js": "3YED"
        };

        function a(e) {
            return n(r(e))
        }

        function r(e) {
            var t = i[e];
            if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
            return t
        }
        a.keys = function () {
            return Object.keys(i)
        }, a.resolve = r, e.exports = a, a.id = "kyiS"
    },
    l6IN: function (e, t) {
        e.exports = ELEMENT
    },
    lRwf: function (e, t) {
        e.exports = Vue
    },
    mY8d: function (e, t, n) {
        e.exports = n.p + "public/img/banner.288a6bd.jpg"
    },
    njBE: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = {
            namespaced: !0,
            state: {
                paperInfo: {},
                examInfo: {}
            },
            actions: {
                setPaperInfo: function (e, t) {
                    (0, e.commit)("SET_PAPERINFO", t)
                },
                setExamInfo: function (e, t) {
                    (0, e.commit)("SET_EXAMINFO", t)
                }
            },
            mutations: {
                SET_PAPERINFO: function (e, t) {
                    e.paperInfo = t
                },
                SET_EXAMINFO: function (e, t) {
                    e.examInfo = t
                }
            }
        }
    },
    pRNm: function (e, t) {
        e.exports = VueRouter
    },
    pjCG: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("xXtn"),
            a = n("yDhC");
        t.default = [{
            path: "/backoffice/",
            name: "backofficeActivity",
            component: i.a,
            meta: {
                title: "活动管理",
                hidden: !1,
                single: !0,
                redirect: "/backoffice/activity",
                moduleIndex: 4,
                icon: "my-menu-activity",
                permissions: [a.activityPermissionCodes.activity]
            },
            children: [{
                path: "activity",
                name: "activity",
                meta: {
                    title: "活动管理",
                    hidden: !1,
                    permissions: [a.activityPermissionCodes.activity],
                    cacheView: "Activity"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(21)]).then(n.bind(null, "NV8N"))
                }
            }, {
                path: "activity/add",
                name: "activityAdd",
                meta: {
                    title: "创建活动",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.activity_add],
                    cacheView: "Activity"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(15)]).then(n.bind(null, "hxnI"))
                }
            }, {
                path: "activity/edit/:id",
                name: "activityEdit",
                meta: {
                    title: "编辑活动",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.activity_edit],
                    cacheView: "Activity"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(15)]).then(n.bind(null, "hxnI"))
                }
            }, {
                path: "activity/order/record/:id",
                name: "orderRecord",
                props: !0,
                meta: {
                    title: "预约记录",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.order_record],
                    cacheView: "Activity"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(47)]).then(n.bind(null, "ayUL"))
                }
            }]
        }, {
            path: "/backoffice/",
            name: "activitySet",
            component: i.a,
            meta: {
                title: "活动设置",
                hidden: !0,
                onlyShowChildren: !0,
                moduleIndex: 5,
                permissions: [a.activityPermissionCodes.question, a.activityPermissionCodes.dimension, a.activityPermissionCodes.draw_question, a.activityPermissionCodes.check_point, a.activityPermissionCodes.certificate, a.activityPermissionCodes.zone, a.activityPermissionCodes.zone_group]
            },
            children: [{
                path: "dimension",
                name: "dimension",
                meta: {
                    title: "维度管理",
                    hidden: !1,
                    permissions: [a.activityPermissionCodes.dimension],
                    cacheView: ["Activity", "Dimension"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(48)]).then(n.bind(null, "feag"))
                }
            }, {
                path: "dimension/add",
                name: "dimensionAdd",
                meta: {
                    title: "新增维度",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.dimension_add],
                    cacheView: ["Activity", "Dimension"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(10)]).then(n.bind(null, "VIc5"))
                }
            }, {
                path: "dimension/edit/:id",
                name: "dimensionEdit",
                props: !0,
                meta: {
                    title: "编辑维度",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.dimension_edit],
                    cacheView: ["Activity", "Dimension"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(10)]).then(n.bind(null, "VIc5"))
                }
            }, {
                path: "dimension/child/:id",
                name: "dimensionChild",
                props: !0,
                meta: {
                    title: "子维度管理",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.dimension_edit],
                    cacheView: ["Activity", "Dimension", "ChildDimension"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(50)]).then(n.bind(null, "L+x9"))
                }
            }, {
                path: "dimension/child/add/:pId",
                name: "dimensionChildAdd",
                props: !0,
                meta: {
                    title: "新增子维度",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.dimension_edit],
                    cacheView: ["Activity", "Dimension", "ChildDimension"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(13)]).then(n.bind(null, "ieXV"))
                }
            }, {
                path: "dimension/child/edit/:pId/:cId",
                name: "dimensionChildEdit",
                props: !0,
                meta: {
                    title: "编辑子维度",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.dimension_edit],
                    cacheView: ["Activity", "Dimension", "ChildDimension"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(13)]).then(n.bind(null, "ieXV"))
                }
            }, {
                path: "questionBank",
                name: "questionBank",
                props: !0,
                meta: {
                    title: "题库管理",
                    hidden: !1,
                    permissions: [a.activityPermissionCodes.question],
                    cacheView: ["Activity", "QuestionBankManage"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(45)]).then(n.bind(null, "YSyL"))
                }
            }, {
                path: "questionBank/Detail/:id",
                name: "questionBankDetail",
                props: !0,
                meta: {
                    title: "题目详情",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.question],
                    cacheView: ["Activity", "QuestionBankManage"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(53)]).then(n.bind(null, "Kzeq"))
                }
            }, {
                path: "questionBank/add",
                name: "questionBankAdd",
                props: !0,
                meta: {
                    title: "新增题目",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.question_add],
                    cacheView: ["Activity", "QuestionBankManage"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, "fdmM"))
                }
            }, {
                path: "questionBank/edit/:id",
                name: "questionBankEdit",
                props: !0,
                meta: {
                    title: "编辑题目",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.question_edit],
                    cacheView: ["Activity", "QuestionBankManage"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, "fdmM"))
                }
            }, {
                path: "drawQuestion",
                name: "drawQuestion",
                meta: {
                    title: "抽题管理",
                    hidden: !1,
                    permissions: [a.activityPermissionCodes.draw_question],
                    cacheView: ["Activity", "DrawQuestion"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(59)]).then(n.bind(null, "kb3h"))
                }
            }, {
                path: "drawQuestion/add",
                name: "drawQuestionAdd",
                meta: {
                    title: "新增抽题规则",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.draw_question_add],
                    cacheView: ["Activity", "DrawQuestion"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(7)]).then(n.bind(null, "sXQo"))
                }
            }, {
                path: "drawQuestion/edit/:id",
                name: "drawQuestionEdit",
                props: !0,
                meta: {
                    title: "编辑抽题规则",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.draw_question_edit],
                    cacheView: ["Activity", "DrawQuestion"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(7)]).then(n.bind(null, "sXQo"))
                }
            }, {
                path: "drawQuestion/set/:id",
                name: "drawQuestionSet",
                props: !0,
                meta: {
                    title: "抽题设置",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.draw_question_set],
                    cacheView: ["Activity", "DrawQuestion"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(26)]).then(n.bind(null, "ZFCX"))
                }
            }, {
                path: "mode",
                name: "mode",
                meta: {
                    title: "模式管理",
                    hidden: !1,
                    permissions: [a.activityPermissionCodes.mode],
                    cacheView: ["Activity", "Mode"]
                },
                component: function () {
                    return n.e(29).then(n.bind(null, "bXH1"))
                }
            }, {
                path: "mode/add",
                name: "modeAdd",
                meta: {
                    title: "新增答题模式",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.mode_add],
                    cacheView: ["Activity", "Mode"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(5)]).then(n.bind(null, "cmAe"))
                }
            }, {
                path: "mode/edit/:id",
                name: "modeEdit",
                props: !0,
                meta: {
                    title: "编辑答题模式",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.mode_edit],
                    cacheView: ["Activity", "Mode"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(5)]).then(n.bind(null, "cmAe"))
                }
            }, {
                path: "checkPoint",
                name: "checkPoint",
                meta: {
                    title: "关卡管理",
                    hidden: !1,
                    permissions: [a.activityPermissionCodes.check_point],
                    cacheView: ["Activity", "CheckPoint"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(58)]).then(n.bind(null, "mEvD"))
                }
            }, {
                path: "checkPoint/add",
                name: "checkPointAdd",
                meta: {
                    title: "新增关卡",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.check_point_add],
                    cacheView: ["Activity", "CheckPoint"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(14)]).then(n.bind(null, "8MP2"))
                }
            }, {
                path: "checkPoint/edit/:id",
                name: "checkPointEdit",
                props: !0,
                meta: {
                    title: "编辑关卡",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.check_point_edit],
                    cacheView: ["Activity", "CheckPoint"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(14)]).then(n.bind(null, "8MP2"))
                }
            }, {
                path: "certificate",
                name: "certificate",
                meta: {
                    title: "证书管理",
                    hidden: !1,
                    permissions: [a.activityPermissionCodes.certificate],
                    cacheView: "Activity"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(43)]).then(n.bind(null, "ovS6"))
                }
            }, {
                path: "certificate/add",
                name: "certificateAdd",
                meta: {
                    title: "新建证书",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.certificate_add],
                    cacheView: "Activity"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(8)]).then(n.bind(null, "1TRt"))
                }
            }, {
                path: "certificate/edit/:id",
                name: "certificateEdit",
                props: !0,
                meta: {
                    title: "编辑证书",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.certificate_edit],
                    cacheView: "Activity"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(8)]).then(n.bind(null, "1TRt"))
                }
            }, {
                path: "certificate/set/:id",
                name: "certificate/set",
                props: !0,
                meta: {
                    title: "设置模板",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.certificate_set],
                    cacheView: "Activity"
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(25)]).then(n.bind(null, "/WDM"))
                }
            }, {
                path: "zone",
                name: "zone",
                meta: {
                    title: "赛区管理",
                    hidden: !1,
                    permissions: [a.activityPermissionCodes.zone],
                    cacheView: ["Activity", "Zone"]
                },
                component: function () {
                    return n.e(36).then(n.bind(null, "ZSM6"))
                }
            }, {
                path: "zone/add",
                name: "zoneAdd",
                meta: {
                    title: "新增赛区",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.zone_add],
                    cacheView: ["Activity", "Zone"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(3)]).then(n.bind(null, "Dp0h"))
                }
            }, {
                path: "zone/edit/:id",
                name: "zoneEdit",
                props: !0,
                meta: {
                    title: "编辑赛区",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.zone_edit],
                    cacheView: ["Activity", "Zone"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(3)]).then(n.bind(null, "Dp0h"))
                }
            }, {
                path: "zoneGroup",
                name: "zoneGroup",
                meta: {
                    title: "团队管理",
                    hidden: !1,
                    permissions: [a.activityPermissionCodes.zone_group],
                    cacheView: ["Activity", "ZoneGroup"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(44)]).then(n.bind(null, "UuVT"))
                }
            }, {
                path: "zoneGroup/add",
                name: "zoneGroupAdd",
                props: !0,
                meta: {
                    title: "新增团队",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.zone_group_add],
                    cacheView: ["Activity", "ZoneGroup"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(6)]).then(n.bind(null, "7zFA"))
                }
            }, {
                path: "zoneGroup/edit/:id",
                name: "zoneGroupEdit",
                props: !0,
                meta: {
                    title: "编辑团队",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.zone_group_edit],
                    cacheView: ["Activity", "ZoneGroup"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(6)]).then(n.bind(null, "7zFA"))
                }
            }, {
                path: "zoneGrouping",
                name: "zoneGrouping",
                meta: {
                    title: "团队分组管理",
                    hidden: !1,
                    permissions: [a.activityPermissionCodes.zone_grouping],
                    cacheView: ["Activity", "ZoneGrouping"]
                },
                component: function () {
                    return n.e(28).then(n.bind(null, "rhS9"))
                }
            }, {
                path: "zoneGrouping/add",
                name: "zoneGroupingAdd",
                meta: {
                    title: "新增团队分组",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.zone_grouping_add],
                    cacheView: ["Activity", "ZoneGrouping"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(2)]).then(n.bind(null, "PI20"))
                }
            }, {
                path: "zoneGrouping/edit/:id",
                name: "zoneGroupingEdit",
                props: !0,
                meta: {
                    title: "编辑团队分组",
                    hidden: !0,
                    permissions: [a.activityPermissionCodes.zone_grouping_edit],
                    cacheView: ["Activity", "ZoneGrouping"]
                },
                component: function () {
                    return Promise.all([n.e(0), n.e(2)]).then(n.bind(null, "PI20"))
                }
            }]
        }]
    },
    "q1+e": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return a
        }), n.d(t, "b", function () {
            return r
        });
        var i = n("jupl"),
            a = (n.n(i), function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                if (-1 !== e.indexOf("backoffice") || -1 !== location.pathname.indexOf("backoffice")) window.location.href = window.location.origin + "/backoffice/login";
                else {
                    var t = location.protocol + "//" + window.location.host + e;
                    window.location.href = "https://oauth.u.hep.com.cn/oauth/wechatmp/url/5f582dd3683c2e0ae3aaacee?redirectUrl=" + t
                }
            }),
            r = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = "http://" + window.location.host + e,
                    n = i.Base64.encode(t);
                window.location.href = "https://oauth.u.hep.com.cn/oauth/wechatmp/url/5f582dd3683c2e0ae3aaaceeregister?targetUrl=" + n
            }
    },
    q3ab: function (e, t) {},
    qAvQ: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return v
        });
        var i, a = n("lC5x"),
            r = n.n(a),
            o = n("J0Oq"),
            s = n.n(o),
            c = n("Nuww"),
            u = n.n(c),
            l = n("VX/p"),
            d = this,
            p = n("axKj"),
            m = null,
            f = null,
            h = function (e) {
                f = new p({
                    getAuthorization: function (t, n) {
                        var i = this;
                        return s()(r.a.mark(function t() {
                            var a, o;
                            return r.a.wrap(function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(l.b)();
                                    case 2:
                                        if (0 !== (a = t.sent).code) {
                                            t.next = 9;
                                            break
                                        }
                                        o = a.data, m = o.expiredTime, n({
                                            TmpSecretId: o.tmpSecretId,
                                            TmpSecretKey: o.tmpSecretKey,
                                            XCosSecurityToken: o.sessionToken,
                                            StartTime: o.startTime,
                                            ExpiredTime: o.expiredTime
                                        }), t.next = 11;
                                        break;
                                    case 9:
                                        return e(), t.abrupt("return", console.error("凭证获取失败"));
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, i)
                        }))()
                    }
                })
            },
            v = (i = s()(r.a.mark(function e(t, n, i, a) {
                var o;
                return r.a.wrap(function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (f && !(m < Date.now() / 1e3 + 300)) {
                                e.next = 3;
                                break
                            }
                            return e.next = 3, h(a);
                        case 3:
                            o = _(t, n), f.putObject({
                                Bucket: "univs-sishi-1256833609",
                                Region: "ap-beijing",
                                Key: o,
                                Body: t,
                                ACL: "public-read"
                            }, function () {
                                var e = s()(r.a.mark(function e(n, o) {
                                    var s, c;
                                    return r.a.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (n) {
                                                    e.next = 8;
                                                    break
                                                }
                                                return s = ("https://" + o.Location).replace("https://univs-sishi-1256833609.cos.ap-beijing.myqcloud.com", "https://univs-sishi-1256833609.file.myqcloud.com"), e.next = 4, Object(l.c)({
                                                    location: s,
                                                    filename: t.name,
                                                    size: t.size,
                                                    contentType: t.type
                                                });
                                            case 4:
                                                0 === (c = e.sent).code ? i(c.id, s) : a(), e.next = 9;
                                                break;
                                            case 8:
                                                a();
                                            case 9:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, this)
                                }));
                                return function (t, n) {
                                    return e.apply(this, arguments)
                                }
                            }());
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }, e, d)
            })), function (e, t, n, a) {
                return i.apply(this, arguments)
            }),
            _ = function (e, t) {
                var n = u()(new Date).format("YYYY/MM/DD"),
                    i = e.name.substring(e.name.lastIndexOf(".")),
                    a = g();
                return "HEPE3/" + t + "/" + n + "/" + Date.now() + a + i
            },
            g = function () {
                for (var e = "", t = 0; t < 4; t++) e += Math.floor(10 * Math.random());
                return e
            }
    },
    qF07: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("rVsN"),
            a = n.n(i),
            r = n("Dod7"),
            o = {
                getConstants: function (e) {
                    var t = e.commit;
                    return new a.a(function (e, n) {
                        Object(r.a)().then(function (n) {
                            var i = null;
                            0 === n.code && (i = n.data), t("SET_CONSTANTS", i), e(i)
                        }).catch(function (e) {
                            n(e)
                        })
                    })
                }
            };
        t.default = {
            namespaced: !0,
            state: {
                constants: null
            },
            actions: o,
            mutations: {
                SET_CONSTANTS: function (e, t) {
                    e.constants = t
                }
            }
        }
    },
    rMyF: function (e, t, n) {
        "use strict";
        n.d(t, "t", function () {
            return a
        }), n.d(t, "B", function () {
            return r
        }), n.d(t, "A", function () {
            return o
        }), n.d(t, "n", function () {
            return s
        }), n.d(t, "c", function () {
            return c
        }), n.d(t, "e", function () {
            return u
        }), n.d(t, "b", function () {
            return l
        }), n.d(t, "d", function () {
            return d
        }), n.d(t, "g", function () {
            return p
        }), n.d(t, "v", function () {
            return m
        }), n.d(t, "i", function () {
            return f
        }), n.d(t, "f", function () {
            return h
        }), n.d(t, "h", function () {
            return v
        }), n.d(t, "l", function () {
            return _
        }), n.d(t, "k", function () {
            return g
        }), n.d(t, "m", function () {
            return y
        }), n.d(t, "w", function () {
            return b
        }), n.d(t, "y", function () {
            return w
        }), n.d(t, "u", function () {
            return C
        }), n.d(t, "x", function () {
            return x
        }), n.d(t, "r", function () {
            return k
        }), n.d(t, "j", function () {
            return I
        }), n.d(t, "q", function () {
            return P
        }), n.d(t, "o", function () {
            return S
        }), n.d(t, "p", function () {
            return A
        }), n.d(t, "s", function () {
            return O
        }), n.d(t, "z", function () {
            return E
        }), n.d(t, "a", function () {
            return D
        });
        var i = n("VvI5"),
            a = function () {
                return i.a.get("/portal/user/")
            },
            r = function (e) {
                return i.a.post("/portal/user/", e)
            },
            o = function (e) {
                return i.a.post("/authorize/userinfo/", e)
            },
            s = function (e) {
                return i.a.get("/portal/university/", {
                    params: {
                        keywords: e
                    }
                })
            },
            c = function (e) {
                var t = e.status,
                    n = e.amount;
                return i.a.get("/portal/activities/", {
                    params: {
                        status: t,
                        amount: n
                    }
                })
            },
            u = function (e) {
                return i.a.get("/portal/articles/", {
                    params: {
                        amount: e
                    }
                })
            },
            l = function (e) {
                return i.a.get("/portal/activity/", {
                    params: {
                        id: e
                    }
                })
            },
            d = function (e) {
                var t = e.activityId,
                    n = e.month;
                return i.a.get("/portal/activity/order/month/situation/", {
                    params: {
                        activity_id: t,
                        month: n
                    }
                })
            },
            p = function (e) {
                var t = e.activityId,
                    n = e.day;
                return i.a.get("/portal/activity/order/day/situation/", {
                    params: {
                        activity_id: t,
                        day: n
                    }
                })
            },
            m = function (e) {
                var t = e.activityId,
                    n = e.orderDt,
                    a = e.orderInterval;
                return i.a.post("/portal/activity/order/", {
                    activity_id: t,
                    order_dt: n,
                    order_interval: a
                })
            },
            f = function (e) {
                return i.a.get("/portal/activity/order/", {
                    params: {
                        activity_id: e
                    }
                })
            },
            h = function (e) {
                return i.a.get("/portal/activity/chq/amount/", {
                    params: {
                        activity_id: e
                    }
                })
            },
            v = function (e) {
                return i.a.get("/examination/beginning/", {
                    params: {
                        activity_id: e
                    }
                })
            },
            _ = function (e) {
                return i.a.get("/race/beginning/", {
                    params: e
                })
            },
            g = function (e) {
                var t = e.checkpointId,
                    n = e.questionId;
                return i.a.get("/examination/question/", {
                    params: {
                        checkpoint_id: t,
                        question_id: n
                    }
                })
            },
            y = function (e) {
                var t = e.activity_id,
                    n = e.question_id,
                    a = e.mode_id,
                    r = e.way;
                return i.a.get("/race/question/", {
                    params: {
                        activity_id: t,
                        question_id: n,
                        mode_id: a,
                        way: r
                    }
                })
            },
            b = function (e) {
                var t = e.checkpointId,
                    n = e.questionId,
                    a = e.answer;
                return i.a.post("/examination/answer/", {
                    checkpoint_id: t,
                    question_id: n,
                    answer: a
                })
            },
            w = function (e) {
                var t = e.activityId,
                    n = e.questionId,
                    a = e.answer,
                    r = e.mode_id,
                    o = e.way;
                return i.a.post("/race/answer/", {
                    activity_id: t,
                    question_id: n,
                    answer: a,
                    mode_id: r,
                    way: o
                })
            },
            C = function (e) {
                return i.a.post("/examination/submit/", {
                    exam_code: e
                })
            },
            x = function (e) {
                return i.a.post("/race/finish/", {
                    race_code: e
                })
            },
            k = function (e, t) {
                return i.a.post("/race/team/comp/", {
                    activity_id: e,
                    mode_id: t
                })
            },
            I = function (e) {
                return i.a.get("/result/own/grade/", {
                    params: {
                        activity_id: e
                    }
                })
            },
            P = function (e, t) {
                return i.a.get("/result/student/grade/", {
                    params: {
                        activity_id: e,
                        user_id: t
                    }
                })
            },
            S = function (e) {
                return i.a.get("/result/university/grade/", {
                    params: e
                })
            },
            A = function (e) {
                return i.a.get("/result/student/ranking/", {
                    params: {
                        activity_id: e
                    }
                })
            },
            O = function (e) {
                return i.a.get("/result/university/ranking/", {
                    params: {
                        activity_id: e
                    }
                })
            },
            E = function (e) {
                var t = e.activity_id,
                    n = e.mode_id,
                    a = e.way,
                    r = e.code;
                return i.a.post("/save/verification/code/", {
                    activity_id: t,
                    mode_id: n,
                    way: a,
                    code: r
                })
            },
            D = function (e) {
                var t = e.activity_id,
                    n = e.mode_id,
                    a = e.way,
                    r = e.code;
                return i.a.post("/check/verification/code/", {
                    activity_id: t,
                    mode_id: n,
                    way: a,
                    code: r
                })
            }
    },
    ufkU: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = {
            namespaced: !0,
            state: {
                render: !1,
                replaceHtml: ""
            },
            mutations: {
                setRender: function (e, t) {
                    var n = t.render,
                        i = t.replaceHtml;
                    e.render = n, e.replaceHtml = i
                }
            },
            getters: {
                render: function (e) {
                    return {
                        render: e.render,
                        replaceHtml: e.replaceHtml
                    }
                }
            }
        }
    },
    "v/te": function (e, t) {},
    "vh+I": function (e, t) {},
    xXtn: function (e, t, n) {
        "use strict";
        var i = n("lC5x"),
            a = n.n(i),
            r = n("J0Oq"),
            o = n.n(r),
            s = {
                name: "Header",
                props: {
                    logoName: {
                        type: String,
                        default: ""
                    }
                },
                data: function () {
                    return {
                        userInfo: {
                            name: ""
                        },
                        height: "64PX"
                    }
                },
                created: function () {
                    var e = JSON.parse(localStorage.getItem("userInfo")).name;
                    this.userInfo.name = e
                },
                methods: {
                    logout: function () {
                        var e = this;
                        return o()(a.a.mark(function t() {
                            return a.a.wrap(function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, e.$store.dispatch("user/logOut");
                                    case 3:
                                        e.$router.replace("/backoffice/login"), t.next = 9;
                                        break;
                                    case 6:
                                        t.prev = 6, t.t0 = t.catch(0), e.$message.error(t.t0);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e, [
                                [0, 6]
                            ])
                        }))()
                    }
                }
            },
            c = n("W5g0");
        var u = function (e) {
                n("DUDJ")
            },
            l = Object(c.a)(s, function () {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("el-header", {
                    staticClass: "app_header",
                    attrs: {
                        type: "primary",
                        height: e.height
                    }
                }, [i("el-row", {
                    attrs: {
                        type: "flex",
                        align: "middle",
                        justify: "space-between"
                    }
                }, [i("div", {
                    staticClass: "app_logo"
                }, [i("img", {
                    attrs: {
                        src: n("JdLf")
                    }
                }), e._v(" "), i("span", [e._v(e._s(e.logoName))])]), e._v(" "), i("div", {
                    staticClass: "app_menu"
                }, [e._v("\n      欢迎您，"), i("span", {
                    staticClass: "app_username"
                }, [e._v(e._s(e.userInfo.name))]), e._v(" "), i("el-button", {
                    attrs: {
                        icon: "el-icon-switch-button",
                        type: "text"
                    },
                    on: {
                        click: e.logout
                    }
                }, [e._v("注销")])], 1)])], 1)
            }, [], !1, u, null, null).exports,
            d = n("HzJ8"),
            p = n.n(d),
            m = {
                name: "SideBar",
                data: function () {
                    return {
                        isCollapse: !1
                    }
                },
                computed: {
                    routesMenu: function () {
                        return this.$router.options.routes
                    },
                    currentPath: function () {
                        return this.$route.path.split("/").slice(0, 3).join("/")
                    },
                    unShowMenu: function () {
                        var e = this.$route.query.unShow;
                        return e || JSON.parse(e)
                    }
                },
                watch: {
                    "$router.options.routes": {
                        immediate: !0,
                        handler: function () {
                            var e = o()(a.a.mark(function e() {
                                var t, n, i, r, o, s, c, u, l, d, m, f, h, v, _;
                                return a.a.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = this.$route.path, n = this.$router.options.routes, "/backoffice" !== t && "/backoffice/" !== t) {
                                                e.next = 75;
                                                break
                                            }
                                            i = "", r = !0, o = !1, s = void 0, e.prev = 7, c = p()(n);
                                        case 9:
                                            if (r = (u = c.next()).done) {
                                                e.next = 46;
                                                break
                                            }
                                            if ((l = u.value).meta.hidden) {
                                                e.next = 41;
                                                break
                                            }
                                            if (!(d = l.children)) {
                                                e.next = 41;
                                                break
                                            }
                                            m = !0, f = !1, h = void 0, e.prev = 17, v = p()(d);
                                        case 19:
                                            if (m = (_ = v.next()).done) {
                                                e.next = 27;
                                                break
                                            }
                                            if ((l = _.value).meta.hidden) {
                                                e.next = 24;
                                                break
                                            }
                                            return i = "/backoffice/" + l.path, e.abrupt("break", 27);
                                        case 24:
                                            m = !0, e.next = 19;
                                            break;
                                        case 27:
                                            e.next = 33;
                                            break;
                                        case 29:
                                            e.prev = 29, e.t0 = e.catch(17), f = !0, h = e.t0;
                                        case 33:
                                            e.prev = 33, e.prev = 34, !m && v.return && v.return();
                                        case 36:
                                            if (e.prev = 36, !f) {
                                                e.next = 39;
                                                break
                                            }
                                            throw h;
                                        case 39:
                                            return e.finish(36);
                                        case 40:
                                            return e.finish(33);
                                        case 41:
                                            if (!i) {
                                                e.next = 43;
                                                break
                                            }
                                            return e.abrupt("break", 46);
                                        case 43:
                                            r = !0, e.next = 9;
                                            break;
                                        case 46:
                                            e.next = 52;
                                            break;
                                        case 48:
                                            e.prev = 48, e.t1 = e.catch(7), o = !0, s = e.t1;
                                        case 52:
                                            e.prev = 52, e.prev = 53, !r && c.return && c.return();
                                        case 55:
                                            if (e.prev = 55, !o) {
                                                e.next = 58;
                                                break
                                            }
                                            throw s;
                                        case 58:
                                            return e.finish(55);
                                        case 59:
                                            return e.finish(52);
                                        case 60:
                                            if (!i) {
                                                e.next = 65;
                                                break
                                            }
                                            return e.next = 63, this.$router.replace(i);
                                        case 63:
                                            e.next = 75;
                                            break;
                                        case 65:
                                            return this.$message.error("用户无后台管理权限"), e.prev = 66, e.next = 69, this.$store.dispatch("user/logOut");
                                        case 69:
                                            this.$router.replace("/backoffice/login"), e.next = 75;
                                            break;
                                        case 72:
                                            e.prev = 72, e.t2 = e.catch(66), this.$message.error(e.t2);
                                        case 75:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [7, 48, 52, 60],
                                    [17, 29, 33, 41],
                                    [34, , 36, 40],
                                    [53, , 55, 59],
                                    [66, 72]
                                ])
                            }));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    },
                    $route: {
                        handler: function (e) {
                            if (e.meta.onlyShowChildren) {
                                var t = "",
                                    n = this.$router.options.routes,
                                    i = !0,
                                    a = !1,
                                    r = void 0;
                                try {
                                    for (var o, s = p()(n); !(i = (o = s.next()).done); i = !0) {
                                        var c = o.value;
                                        if (c.name === e.name) {
                                            var u = c.children;
                                            if (u) {
                                                var l = !0,
                                                    d = !1,
                                                    m = void 0;
                                                try {
                                                    for (var f, h = p()(u); !(l = (f = h.next()).done); l = !0)
                                                        if (!(c = f.value).meta.hidden) {
                                                            t = c.name;
                                                            break
                                                        }
                                                } catch (e) {
                                                    d = !0, m = e
                                                } finally {
                                                    try {
                                                        !l && h.return && h.return()
                                                    } finally {
                                                        if (d) throw m
                                                    }
                                                }
                                            }
                                            if (t) break
                                        }
                                    }
                                } catch (e) {
                                    a = !0, r = e
                                } finally {
                                    try {
                                        !i && s.return && s.return()
                                    } finally {
                                        if (a) throw r
                                    }
                                }
                                t ? this.$router.replace({
                                    name: t,
                                    query: e.query
                                }) : (this.$message.error("用户无该活动设置权限，正在前往活动管理页面"), this.$router.replace("/backoffice/activity"))
                            }
                        }
                    }
                },
                methods: {
                    switchCollapse: function () {
                        this.isCollapse = !this.isCollapse
                    },
                    needShow: function (e) {
                        var t = this;
                        return e.some(function (e) {
                            return e.name === t.$route.name
                        })
                    }
                }
            };
        var f = function (e) {
                n("fzQu")
            },
            h = {
                name: "Layout",
                components: {
                    "layout-header": l,
                    sidebar: Object(c.a)(m, function () {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("el-aside", {
                            staticClass: "app_side"
                        }, [n("el-menu", {
                            staticClass: "el-menu-vertical-own",
                            attrs: {
                                router: "",
                                "default-active": e.currentPath,
                                collapse: e.isCollapse
                            }
                        }, [e._l(e.routesMenu, function (t, i) {
                            return [t.meta.onlyShowChildren && e.needShow(t.children) ? [e._l(t.children, function (i) {
                                return [i.meta.hidden || e.unShowMenu.includes(i.name) ? e._e() : n("el-menu-item", {
                                    key: i.path,
                                    attrs: {
                                        index: "" + t.path + i.path
                                    }
                                }, [i.meta.icon ? n("i", {
                                    class: i.meta.icon
                                }) : n("i", {
                                    staticClass: "icon_replace"
                                }), e._v(" "), n("span", [e._v(e._s(i.meta.title))])])]
                            })] : e._e(), e._v(" "), t.meta.hidden || !t.children || t.meta.single ? e._e() : n("el-submenu", {
                                key: t.path,
                                attrs: {
                                    index: i + 1
                                }
                            }, [n("template", {
                                slot: "title"
                            }, [t.meta.icon ? n("i", {
                                class: t.meta.icon
                            }) : e._e(), e._v(" "), n("span", {
                                attrs: {
                                    slot: "title"
                                },
                                slot: "title"
                            }, [e._v(e._s(t.meta.title))])]), e._v(" "), e._l(t.children, function (i) {
                                return [i.meta.hidden ? e._e() : n("el-menu-item", {
                                    key: i.path,
                                    attrs: {
                                        index: "" + t.path + i.path
                                    }
                                }, [i.meta.icon ? n("i", {
                                    class: i.meta.icon
                                }) : e._e(), e._v(" "), n("span", [e._v(e._s(i.meta.title))])])]
                            })], 2), e._v(" "), t.meta.hidden || t.children ? e._e() : n("el-menu-item", {
                                key: i,
                                attrs: {
                                    index: t.path
                                }
                            }, [n("i", {
                                class: t.meta.icon
                            }), e._v(" "), n("span", {
                                attrs: {
                                    slot: "title"
                                },
                                slot: "title"
                            }, [e._v(e._s(t.meta.title))])]), e._v(" "), !t.meta.hidden && t.meta.single ? n("el-menu-item", {
                                key: i,
                                attrs: {
                                    index: t.meta.redirect
                                }
                            }, [n("i", {
                                class: t.meta.icon
                            }), e._v(" "), n("span", {
                                attrs: {
                                    slot: "title"
                                },
                                slot: "title"
                            }, [e._v(e._s(t.meta.title))])]) : e._e()]
                        })], 2), e._v(" "), e.isCollapse ? n("i", {
                            staticClass: "collapse_btn el-icon-arrow-right",
                            on: {
                                click: e.switchCollapse
                            }
                        }) : n("i", {
                            staticClass: "collapse_btn el-icon-arrow-left",
                            on: {
                                click: e.switchCollapse
                            }
                        })], 1)
                    }, [], !1, f, null, null).exports
                },
                data: function () {
                    return {
                        logoName: ""
                    }
                },
                computed: {
                    cacheViews: function () {
                        return this.$store.getters.cacheViews
                    }
                },
                beforeRouteUpdate: function (e, t, n) {
                    e.query.activityId || !t.query.activityId ? n() : n({
                        name: e.name,
                        params: e.params,
                        query: t.query,
                        replace: !0
                    })
                },
                methods: {}
            };
        var v = function (e) {
                n("4jKl")
            },
            _ = Object(c.a)(h, function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "app_wrapper"
                }, [t("layout-header", {
                    attrs: {
                        logoName: this.logoName
                    }
                }), this._v(" "), t("el-container", {
                    staticClass: "app_content"
                }, [t("sidebar"), this._v(" "), t("el-container", [t("el-main", {
                    staticClass: "app_main"
                }, [t("keep-alive", {
                    attrs: {
                        include: this.cacheViews
                    }
                }, [t("router-view")], 1)], 1)], 1)], 1)], 1)
            }, [], !1, v, null, null);
        t.a = _.exports
    },
    xZa2: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return s
        }), n.d(t, "a", function () {
            return c
        });
        var i = n("v69x"),
            a = (n.n(i), n("jFiy")),
            r = function (e) {
                var t = e || window.event;
                (t && t.shiftKey && t.ctrlKey && 73 === t.keyCode || t && 123 === t.keyCode) && Object(a.q)(e)
            },
            o = function (e) {
            },
            s = function () {
            },
            c = function () {
            }
    },
    xdWc: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("xXtn"),
            a = n("yDhC");
        t.default = [{
            path: "/backoffice/",
            name: "backoffice",
            component: i.a,
            meta: {
                title: "异常试卷管理",
                hidden: !0,
                single: !0,
                redirect: "/backoffice/abnormalTestPaper",
                moduleIndex: 6,
                icon: "my-icon-user",
                permissions: [a.abnormalTestPaperPermissionCodes.abnormalTestPaper]
            },
            children: [{
                path: "abnormalTestPaper",
                name: "abnormalTestPaper",
                meta: {
                    title: "异常试卷管理",
                    hidden: !0,
                    permissions: [a.abnormalTestPaperPermissionCodes.abnormalTestPaper]
                },
                component: function () {
                    return n.e(39).then(n.bind(null, "RnIL"))
                }
            }]
        }]
    },
    xhM8: function (e, t, n) {
        "use strict";
        var i = n("lC5x"),
            a = n.n(i),
            r = n("3cXf"),
            o = n.n(r),
            s = n("aA9S"),
            c = n.n(s),
            u = n("J0Oq"),
            l = n.n(u),
            d = n("rMyF");
        t.a = {
            props: {
                dialogShow: {
                    type: Boolean,
                    default: !1
                },
                type: {
                    type: Number,
                    default: 1
                }
            },
            data: function () {
                return {
                    schoolData: null,
                    loading: !1,
                    userInfo: {
                        name: "",
                        universityName: "",
                        flag: "",
                        department: "",
                        mobile: "",
                        politics: "",
                        universityId: ""
                    },
                    selectVal: {}
                }
            },
            watch: {},
            created: function () {
                var e = this;
                return l()(a.a.mark(function t() {
                    return a.a.wrap(function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e.userInfo.name && e.userInfo.name.toLowerCase().startsWith("normal_user") && (e.userInfo.name = ""), !e.userInfo.universityName) {
                                    t.next = 8;
                                    break
                                }
                                return t.next = 4, e.getSchools(e.userInfo.universityName);
                            case 4:
                                e.selectVal = c()({}, e.selectVal, JSON.parse(o()(e.schoolData[0]))), e.userInfo.universityId = localStorage.getItem("universityId"), t.next = 9;
                                break;
                            case 8:
                                e.userInfo.universityId = "";
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }, t, e)
                }))()
            },
            methods: {
                submit: function () {
                    var e = {
                        flag: this.userInfo.flag,
                        department: this.userInfo.department,
                        politics: this.userInfo.politics,
                        name: this.userInfo.name,
                        university_id: this.userInfo.universityId,
                        agreement: this.agreement
                    };
                    2 === this.type && (e.mobile = this.userInfo.mobile), this.$emit("submit", e)
                },
                close: function () {
                    this.$emit("update:dialogShow", !1)
                },
                getSchools: function (e) {
                    var t = this;
                    return l()(a.a.mark(function n() {
                        var i;
                        return a.a.wrap(function (n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return t.loading = !0, n.next = 3, Object(d.n)(e);
                                case 3:
                                    0 === (i = n.sent).code && (t.schoolData = i.data), t.loading = !1;
                                case 6:
                                case "end":
                                    return n.stop()
                            }
                        }, n, t)
                    }))()
                }
            }
        }
    },
    yDhC: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "authPermissionCodes", function () {
            return i
        }), n.d(t, "memberPermissionCodes", function () {
            return a
        }), n.d(t, "schoolPermissionCodes", function () {
            return r
        }), n.d(t, "dataPermissionCodes", function () {
            return o
        }), n.d(t, "articlePermissionCodes", function () {
            return s
        }), n.d(t, "abnormalTestPaperPermissionCodes", function () {
            return c
        }), n.d(t, "activityPermissionCodes", function () {
            return u
        });
        var i = {
                user: "D02000000",
                user_add: "D02010000",
                user_edit: "D02020000",
                user_del: "D02030000",
                user_status: "D02040000",
                user_assign: "D02050000",
                role: "D01000000",
                role_add: "D01010000",
                role_edit: "D01020000",
                role_del: "D01030000",
                role_status: "D01040000",
                role_assign: "D01050000"
            },
            a = {
                student: "D04000000",
                student_add: "D04010000",
                student_edit: "D04020000",
                student_del: "D04030000",
                student_status: "D04040000",
                teacher: "D03000000",
                teacher_add: "D03010000",
                teacher_edit: "D03020000",
                teacher_del: "D03030000",
                teacher_status: "D03040000",
                teacher_audit: "D03050000"
            },
            r = {
                school: "D05000000",
                school_add: "D05010000",
                school_edit: "D05020000",
                school_del: "D05030000",
                school_status: "D05040000"
            },
            o = {
                data: "D08000000"
            },
            s = {
                article: "D07000000",
                article_add: "D07010000",
                article_edit: "D07020000",
                article_del: "D07030000",
                article_status: "D07050000"
            },
            c = {
                abnormalTestPaper: "D01000000",
                abnormalTestPaper_audit: "D01000000",
                abnormalTestPaper_record: "D01000000"
            },
            u = {
                activity: "D06000000",
                activity_add: "D06010000",
                activity_edit: "D06020000",
                activity_del: "D06030000",
                activity_copy: "D06040000",
                activity_status: "D06050000",
                question: "D06070000",
                question_add: "D06070100",
                question_edit: "D06070200",
                question_del: "D06070300",
                question_status: "D06070400",
                question_copy: "D06070500",
                dimension: "D06060000",
                dimension_add: "D06060100",
                dimension_edit: "D06060200",
                dimension_del: "D06060300",
                dimension_status: "D06060400",
                draw_question: "D06080000",
                draw_question_add: "D06080100",
                draw_question_edit: "D06080200",
                draw_question_del: "D06080300",
                draw_question_status: "D06080400",
                draw_question_set: "D06080500",
                mode: "D06120000",
                mode_add: "D06120100",
                mode_edit: "D06120200",
                mode_status: "D06120400",
                mode_del: "D06120300",
                check_point: "D06090000",
                check_point_add: "D06090100",
                check_point_edit: "D06090200",
                check_point_del: "D06090300",
                check_point_status: "D06090400",
                certificate: "D06100000",
                certificate_add: "D06100100",
                certificate_edit: "D06100200",
                certificate_del: "D06100300",
                certificate_set: "D06100000",
                order_record: "D06110000",
                order_record_add: "D06110100",
                order_record_cancel: "D06110200",
                zone: "D06130000",
                zone_add: "D06130100",
                zone_edit: "D06130200",
                zone_status: "D06130400",
                zone_del: "D06130300",
                zone_group: "D06140000",
                zone_group_add: "D06140100",
                zone_group_edit: "D06140200",
                zone_group_del: "D06140300",
                zone_group_status: "D06140400",
                zone_grouping: "D06150000",
                zone_grouping_add: "D06150100",
                zone_grouping_edit: "D06150200",
                zone_grouping_del: "D06150300",
                zone_grouping_status: "D06150400"
            };
        t.default = {
            install: function (e) {
                e.prototype.$AUTH_PERMISSION = i, e.prototype.$MEMBER_PERMISSION = a, e.prototype.$SCHOOL_PERMISSION = r, e.prototype.$DATA_PERMISSION = o, e.prototype.$ARTICLE_PERMISSION = s, e.prototype.$ABNORMAL_TEST_PAPER_PERMISSION = c, e.prototype.$ACTIVITY_PERMISSION = u, e.prototype.$DATA_PERMISSION = o
            }
        }
    },
    yYFf: function (e, t) {},
    zyHv: function (e, t, n) {
        var i = {
            "./BreadCrumb.vue": "/l1Q",
            "./RichEditor.vue": "Vb1n",
            "./SvgIcon.vue": "/GZU",
            "./UploadInput.vue": "+QxA"
        };

        function a(e) {
            return n(r(e))
        }

        function r(e) {
            var t = i[e];
            if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
            return t
        }
        a.keys = function () {
            return Object.keys(i)
        }, a.resolve = r, e.exports = a, a.id = "zyHv"
    }
}, ["NHnr"]);
