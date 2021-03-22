webpackJsonp([20], {
    "+iF8": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return p
        }), n.d(t, "b", function () {
            return _
        }), n.d(t, "c", function () {
            return v
        });
        var i = n("Q+Ik"),
            a = n.n(i),
            s = n("HzJ8"),
            o = n.n(s),
            r = n("KH7x"),
            c = n.n(r),
            u = n("AA3o"),
            d = n.n(u),
            m = n("xSur"),
            l = n.n(m),
            h = n("jMmt"),
            p = function () {
                function e(t, n) {
                    d()(this, e), this.examType = n, this.examCode = t.race_code, this.questionIds = t.question_ids, this.prevQid = t.prev_qid, this.myInfo = t.myself, this.opponent = t.opponent, this.answers = this._getAnswerArr(t.answers), this.answerIds = this._getAnswerIds(t.answers), this.startDateTime = Object(h.g)(t.start_dt), this.serverDateTime = Object(h.g)(t.server_dt), this.minutes = parseInt(t.time_limit / 60), this.time = this._getTime(this.minutes), this.modeTitle = t.mode_title
                }
                return l()(e, [{
                    key: "_getTime",
                    value: function (e) {
                        var t = e / 60,
                            n = e % 60;
                        return ((t = t > 9 ? t : "0" + t) + (n = n > 9 ? n : "0" + n) + "00").split("")
                    }
                }, {
                    key: "_getAnswerArr",
                    value: function (e) {
                        var t = [],
                            n = !0,
                            i = !1,
                            s = void 0;
                        try {
                            for (var r, u = o()(a()(e)); !(n = (r = u.next()).done); n = !0) {
                                var d = r.value,
                                    m = c()(d, 2),
                                    l = m[0],
                                    h = m[1],
                                    p = {};
                                p[l] = h, t.push(p)
                            }
                        } catch (e) {
                            i = !0, s = e
                        } finally {
                            try {
                                !n && u.return && u.return()
                            } finally {
                                if (i) throw s
                            }
                        }
                        return t
                    }
                }, {
                    key: "_getAnswerIds",
                    value: function (e) {
                        var t = [];
                        for (var n in e) e.hasOwnProperty(n) && e[n] && t.push(n);
                        return t
                    }
                }], [{
                    key: "getCpStatus",
                    value: function (e) {
                        return {
                            isSuccess: "SUCCESS" === e,
                            isFailed: "FAILED" === e,
                            isContinue: "CONTINUE" === e
                        }
                    }
                }]), e
            }(),
            _ = function () {
                function e(t) {
                    d()(this, e), this.id = t.id, this.code = t.code, this.title = t.title, this.source = t.source, this.category = this._getType(t.category), this.mediaId = t.mediaId, this.mediaContentType = t.mediaContentType, this.mediaLocation = t.media_location, this.options = t.options
                }
                return l()(e, [{
                    key: "_getType",
                    value: function (e) {
                        return {
                            isSingle: 1 === e,
                            isMulti: 2 === e,
                            isJudge: 3 === e
                        }
                    }
                }]), e
            }(),
            v = [{
                key: 1,
                label: "00:00~02:00"
            }, {
                key: 2,
                label: "02:00~04:00"
            }, {
                key: 3,
                label: "04:00~06:00"
            }, {
                key: 4,
                label: "06:00~08:00"
            }, {
                key: 5,
                label: "08:00~10:00"
            }, {
                key: 6,
                label: "10:00~12:00"
            }, {
                key: 7,
                label: "12:00~14:00"
            }, {
                key: 8,
                label: "14:00~16:00"
            }, {
                key: 9,
                label: "16:00~18:00"
            }, {
                key: 10,
                label: "18:00~20:00"
            }, {
                key: 11,
                label: "20:00~22:00"
            }, {
                key: 12,
                label: "22:00~24:00"
            }]
    },
    "7krl": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("lC5x"),
            a = n.n(i),
            s = n("J0Oq"),
            o = n.n(s),
            r = n("3cXf"),
            c = n.n(r),
            u = n("rVsN"),
            d = n.n(u),
            m = n("rMyF"),
            l = n("+iF8"),
            h = n("H3ul"),
            p = n("jMmt"),
            _ = n("jFiy"),
            v = {
                data: function () {
                    return {
                        activityId: this.$route.params.id,
                        mode: this.$route.params.mode,
                        way: this.$route.params.way,
                        mode_id: this.$route.params.mid,
                        exam: {
                            minutes: 0,
                            myInfo: {},
                            opponent: {}
                        },
                        beginExam: "",
                        question: null,
                        answer: {
                            single: "",
                            multi: [],
                            judge: ""
                        },
                        questionId: "",
                        timer: null,
                        timeArr: [],
                        loading: !1,
                        pageLoading: !1,
                        codeShow: !1,
                        confirm: null,
                        isGoingNext: !1,
                        correctAnswers: [],
                        errorAnswers: [],
                        shortSubmit: !1
                    }
                },
                computed: {
                    questionIndex: function () {
                        var e = this;
                        return this.exam ? this.exam.questionIds.findIndex(function (t) {
                            return t === e.questionId
                        }) : -1
                    },
                    answerResult: {
                        get: function () {
                            return this.question.category.isSingle ? [this.answer.single] : this.question.category.isMulti ? this.answer.multi : [this.answer.judge]
                        },
                        set: function (e) {
                            e && (this.question.category.isSingle ? this.$set(this.answer, "single", e.toString()) : this.question.category.isMulti ? this.$set(this.answer, "multi", e) : this.$set(this.answer, "judge", e.toString()))
                        }
                    },
                    mediaContentType: function () {
                        var e = {
                            img: !1,
                            video: !1
                        };
                        return this.question.mediaLocation ? (e.img = Object(_.m)(this.question.mediaLocation), e.video = Object(_.p)(this.question.mediaLocation), e) : e
                    }
                },
                created: function () {
                    var e = this;
                    return o()(a.a.mark(function t() {
                        return a.a.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e.$store.commit("client/setIsShowExam", !0), window.localStorage.removeItem("alreadyCode"), !localStorage.getItem("token")) {
                                        t.next = 12;
                                        break
                                    }
                                    return t.prev = 3, t.next = 6, e.getData();
                                case 6:
                                    e.countDown(), t.next = 12;
                                    break;
                                case 9:
                                    t.prev = 9, t.t0 = t.catch(3), console.log(t.t0);
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }, t, e, [
                            [3, 9]
                        ])
                    }))()
                },
                methods: {
                    goBack: function () {
                        this.$router.back()
                    },
                    countDown: function () {
                        var e = this;
                        this.timer = new p.b;
                        var t = this.exam.startDateTime + 60 * this.exam.minutes * 1e3,
                            n = Math.floor((t - this.exam.serverDateTime) / 1e3);
                        n = n > 0 ? n : 0, this.timer.countStart(n, function (t) {
                            var n = t.hours,
                                i = t.mins,
                                a = t.sec;
                            e.timeArr = Object(p.f)({
                                hours: n,
                                mins: i,
                                sec: a
                            }), 0 === n && 0 === i && 0 === a && e.$alert("考试时间已结束，请交卷", "提示", {
                                confirmButtonText: "确定",
                                type: "warning",
                                showClose: !1
                            }).then(function () {
                                e.codeShow = !1, e.checkNeedCode("submitConfirm", !0)
                            }).catch(function () {})
                        })
                    },
                    handleBeginExam: function () {
                        this.beginExam = !0
                    },
                    getDetail: function () {
                        var e = this;
                        return o()(a.a.mark(function t() {
                            var n, i;
                            return a.a.wrap(function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(m.b)(e.activityId);
                                    case 2:
                                        0 === (n = t.sent).code ? (i = new h.b(n.data), e.$store.commit("client/setCurrentActivity", i)) : 2101 === n.code ? e.$router.replace("/") : e.$message.error(e.$CLIENT_ACTIVITY_ERROR[n.code]);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e)
                        }))()
                    },
                    examInfo: function () {
                        var e = this;
                        return o()(a.a.mark(function t() {
                            return a.a.wrap(function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", new d.a(function () {
                                            var t = o()(a.a.mark(function t(n, i) {
                                                var s;
                                                return a.a.wrap(function (t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.next = 2, Object(m.l)({
                                                                activity_id: e.activityId,
                                                                mode_id: e.mode_id,
                                                                way: e.way
                                                            });
                                                        case 2:
                                                            0 === (s = t.sent).code ? n(s) : 4401 === s.code ? e.$router.replace({
                                                                path: "/client/result/" + e.activityId + "/" + e.mode_id
                                                            }) : 2205 === s.code || 4805 === s.code || 2204 === s.code || 4808 === s.code ? (e.$message.error(e.$CLIENT_EXAM_ERROR[s.code]), e.$router.replace({
                                                                path: "/client/detail/" + e.activityId
                                                            })) : 4832 === s.code ? e.$router.replace({
                                                                path: "/client/detail/" + e.activityId
                                                            }) : i(s.code);
                                                        case 4:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }, t, e)
                                            }));
                                            return function (e, n) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e)
                        }))()
                    },
                    getData: function () {
                        var e = this;
                        return o()(a.a.mark(function t() {
                            var n, i, s;
                            return a.a.wrap(function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, e.pageLoading = !0, t.next = 4, e.examInfo();
                                    case 4:
                                        if (n = t.sent, e.$store.getters.currentActivity) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.next = 8, e.getDetail();
                                    case 8:
                                        if (i = e.$store.getters.currentActivity.type, e.exam = new l.a(n, i), e.exam.answers.length !== e.exam.questionIds.length) {
                                            t.next = 16;
                                            break
                                        }
                                        return t.next = 13, e.submitConfirm();
                                    case 13:
                                        return t.abrupt("return");
                                    case 16:
                                        e.questionId = e.exam.questionIds[e.exam.answers.length];
                                    case 17:
                                        return 2 === parseInt(e.mode) || 3 === parseInt(e.mode) || 4 === parseInt(e.mode) ? (e.beginExam = !1, e.pageLoading = !1) : e.beginExam = !0, e.exam.answers && e.$store.commit("client/setExamAnswerList", {
                                            content: e.exam.answers
                                        }), t.next = 21, e.getQuestionData();
                                    case 21:
                                        t.next = 27;
                                        break;
                                    case 23:
                                        t.prev = 23, t.t0 = t.catch(0), s = e.$CLIENT_EXAM_ERROR[t.t0] || t.t0, e.$message.error(s);
                                    case 27:
                                        return t.prev = 27, e.pageLoading = !1, t.finish(27);
                                    case 30:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e, [
                                [0, 23, 27, 30]
                            ])
                        }))()
                    },
                    getQuestionData: function () {
                        var e = this;
                        return o()(a.a.mark(function t() {
                            return a.a.wrap(function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", new d.a(function () {
                                            var t = o()(a.a.mark(function t(n, i) {
                                                var s, o, r, c, u;
                                                return a.a.wrap(function (t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            return s = {
                                                                mode_id: e.mode_id,
                                                                activity_id: e.activityId,
                                                                question_id: e.questionId,
                                                                way: e.way
                                                            }, t.next = 3, Object(m.m)(s);
                                                        case 3:
                                                            if (o = t.sent, e.correctAnswers = [], e.errorAnswers = [], e.answer = {
                                                                    single: "",
                                                                    multi: [],
                                                                    judge: ""
                                                                }, 0 !== o.code) {
                                                                t.next = 21;
                                                                break
                                                            }
                                                            if (r = o.data.media_location && o.data.media_location.replace("https://univs-sishi-1256833609.cos.ap-beijing.myqcloud.com", "https://univs-sishi-1256833609.file.myqcloud.com"), o.data.media_location = r, !r || !Object(_.p)(r)) {
                                                                t.next = 17;
                                                                break
                                                            }
                                                            return c = "_sd", u = "" + r.substring(0, r.lastIndexOf(".")) + c + ".mp4", t.next = 15, Object(_.e)(u);
                                                        case 15:
                                                            if (!t.sent) {
                                                                t.next = 17;
                                                                break
                                                            }
                                                            o.data.media_location = u;
                                                        case 17:
                                                            e.question = new l.b(o.data), n(), t.next = 23;
                                                            break;
                                                        case 21:
                                                            e.$message.error(e.$CLIENT_EXAM_ERROR[o.code]), i(o.code);
                                                        case 23:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }, t, e)
                                            }));
                                            return function (e, n) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e)
                        }))()
                    },
                    goNext: function () {
                        var e = this;
                        return o()(a.a.mark(function t() {
                            var n, i;
                            return a.a.wrap(function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, e.pageLoading = !0, e.isGoingNext = !0, t.next = 5, e.submitAnswer();
                                    case 5:
                                        if (!t.sent) {
                                            t.next = 10;
                                            break
                                        }
                                        return t.next = 9, e.submitConfirm();
                                    case 9:
                                        return t.abrupt("return");
                                    case 10:
                                        return (n = e.questionIndex + 1) <= e.exam.questionIds.length - 1 && (e.questionId = e.exam.questionIds[n]), e.pageLoading = !0, t.next = 15, e.getQuestionData(),e.submitAnswer();
                                    case 15:
                                        t.next = 21;
                                        break;
                                    case 17:
                                        t.prev = 17, t.t0 = t.catch(0), i = e.$CLIENT_EXAM_ERROR[t.t0] || t.t0, e.$message.error(i);
                                    case 21:
                                        return t.prev = 21, e.pageLoading = !1, e.isGoingNext = !1, t.finish(21);
                                    case 25:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e, [
                                [0, 17, 21, 25]
                            ])
                        }))()
                    },
                    submitAnswer: function () {
                        var e = this;
                        return o()(a.a.mark(function t() {
                            return a.a.wrap(function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", new d.a(function () {
                                            var t = o()(a.a.mark(function t(n, i) {
                                                var s;
                                                return a.a.wrap(function (t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.next = 2, Object(m.y)({
                                                                activityId: e.activityId,
                                                                questionId: e.questionId,
                                                                answer: e.answerResult,
                                                                mode_id: e.mode_id,
                                                                way: e.way
                                                            });
                                                        case 2:
                                                            0 === (s = t.sent).code ? (s.data.correct && !e.exam.answerIds.includes(e.questionId) && e.exam.answerIds.push(e.questionId), !s.data.correct && s.data.correct_ids && s.data.correct_ids.length ? (e.pageLoading = !1, e.correctAnswers = s.data.correct_ids, e.errorAnswers = e.answerResult.filter(function (t) {
                                                                return !e.correctAnswers.includes(t)
                                                            }), setTimeout(function () {
                                                                n(s.data.finished)
                                                            }, 10)) : n(s.data.finished)) : i(s.code);
                                                        case 4:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }, t, e)
                                            }));
                                            return function (e, n) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e)
                        }))()
                    },
                    submitExam: function () {
                        var e = this;
                        return o()(a.a.mark(function t() {
                            var n, i, s;
                            return a.a.wrap(function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.isGoingNext = !0, n = e, t.prev = 2, i = 0, !e.answerResult[0]) {
                                            t.next = 19;
                                            break
                                        }
                                        return t.prev = 5, e.pageLoading = !0, t.next = 9, e.submitAnswer();
                                    case 9:
                                        t.next = 16;
                                        break;
                                    case 11:
                                        if (t.prev = 11, t.t0 = t.catch(5), 4811 === (i = t.t0)) {
                                            t.next = 16;
                                            break
                                        }
                                        throw new Error("" + i);
                                    case 16:
                                        return t.prev = 16, e.pageLoading = !1, t.finish(16);
                                    case 19:
                                        return t.next = 21, n.submitConfirm();
                                    case 21:
                                        t.next = 27;
                                        break;
                                    case 23:
                                        t.prev = 23, t.t1 = t.catch(2), s = e.$CLIENT_EXAM_ERROR[t.t1] || t.t1, e.$message.error(s);
                                    case 27:
                                        return t.prev = 27, e.isGoingNext = !1, t.finish(27);
                                    case 30:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e, [
                                [2, 23, 27, 30],
                                [5, 11, 16, 19]
                            ])
                        }))()
                    },
                    submitConfirm: function () {
                        var e = this;
                        return o()(a.a.mark(function t() {
                            var n;
                            return a.a.wrap(function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, e.pageLoading = !0, t.next = 4, Object(m.x)(e.exam.examCode);
                                    case 4:
                                        0 === (n = t.sent).code ? (e.timer && e.timer.countStop(), localStorage.setItem("examResult", c()(n.data)), e.$router.replace({
                                            path: "/client/result/" + e.activityId
                                        })) : 4831 === n.code ? (e.shortSubmit = !0, setTimeout(function () {
                                            e.shortSubmit = !1
                                        }, 10)) : 4823 === n.code ? e.$router.replace({
                                            path: "/client/detail/" + e.activityId
                                        }) : e.$message.error(e.$CLIENT_EXAM_ERROR[n.code]);
                                    case 6:
                                        return t.prev = 6, e.pageLoading = !1, t.finish(6);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e, [
                                [0, , 6, 9]
                            ])
                        }))()
                    },
                    checkNeedCode: function (e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (!(this.codeShow || !this.answerResult[0] && "goNext" === e || this.isGoingNext || this.shortSubmit))
                            if (localStorage.getItem("alreadyCode") || 0 === this.questionIndex && !n) this[e]();
                            else {
                                var i = 10;
                                this.exam.questionIds.length < 10 && (i = this.exam.questionIds.length);
                                var a = Math.random();
                                (i === this.questionIndex + 1 || a > .7 || n) && this.questionIndex + 1 <= i ? (this.confirm = this[e].bind(this), this.$nextTick(function () {
                                    t.codeShow = !0
                                })) : this[e]()
                            }
                    }
                },
                beforeDestroy: function () {
                    this.timer && this.timer.countStop(), this.$store.commit("client/setIsShowExam", !1)
                }
            },
            f = {
                data: function () {
                    return {
                        isShow1: !1,
                        isShow2: !1,
                        isShow3: !1
                    }
                },
                props: {
                    examMode: {
                        type: Number,
                        default: 2
                    },
                    examInfo: {
                        type: Object,
                        default: function () {
                            return {
                                minutes: 0,
                                myInfo: {},
                                opponent: {}
                            }
                        }
                    }
                },
                mounted: function () {
                    var e = this;
                    setTimeout(function () {
                        e.isShow1 = !0
                    }, 10), setTimeout(function () {
                        e.isShow2 = !0
                    }, 10), setTimeout(function () {
                        e.isShow3 = !0
                    }, 10), setTimeout(function () {
                        e.isShow1 = !1, e.isShow2 = !1, e.isShow3 = !1
                    }, 10), setTimeout(function () {
                        e.$emit("handleBeginExam")
                    }, 10)
                }
            },
            x = n("W5g0");
        var g = function (e) {
                n("Tjlj")
            },
            w = {
                name: "Exam",
                mixins: [v],
                components: {
                    ActivityExamAnimation: Object(x.a)(f, function () {
                        var e = this,
                            t = e.$createElement,
                            i = e._self._c || t;
                        return i("div", {
                            staticClass: "box"
                        }, [i("div", {
                            staticClass: "team"
                        }, [i("div", {
                            staticClass: "red team_all",
                            class: {
                                finished: e.isShow1
                            }
                        }, [i("img", {
                            attrs: {
                                src: n("f2LW")
                            }
                        })]), e._v(" "), i("div", {
                            staticClass: "blue team_all",
                            class: {
                                finished: e.isShow1
                            }
                        }, [i("img", {
                            attrs: {
                                src: n("U1lX")
                            }
                        })])]), e._v(" "), i("div", {
                            staticClass: "mode",
                            class: {
                                finished: e.isShow3
                            }
                        }, [2 == e.examMode ? i("img", {
                            attrs: {
                                src: n("EkUp"),
                                alt: ""
                            }
                        }) : e._e(), e._v(" "), 3 == e.examMode ? i("img", {
                            attrs: {
                                src: n("uH9j"),
                                alt: ""
                            }
                        }) : e._e(), e._v(" "), 4 == e.examMode ? i("img", {
                            attrs: {
                                src: n("jHFk"),
                                alt: ""
                            }
                        }) : e._e(), e._v(" "), i("div", {
                            staticClass: "mode_min"
                        }, [e._v("答题时间："), i("span", [e._v(e._s(e.examInfo && e.examInfo.minutes))]), e._v("  分钟")])]), e._v(" "), i("div", {
                            staticClass: "content"
                        }, [i("div", {
                            staticClass: "pk_team_red pk_team_all",
                            class: {
                                finished: e.isShow3
                            }
                        }, [i("p", {
                            staticClass: "red_team team_name"
                        }, [e._v(e._s(e.examInfo.myInfo && e.examInfo.myInfo.univ_name))]), e._v(" "), i("p", {
                            staticClass: "red_name user_name"
                        }, [e._v(e._s(e.examInfo.myInfo && e.examInfo.myInfo.name))])]), e._v(" "), i("div", {
                            staticClass: "pk_team_vs",
                            class: {
                                finished: e.isShow2
                            }
                        }), e._v(" "), i("div", {
                            staticClass: "pk_team_blue pk_team_all",
                            class: {
                                finished: e.isShow3
                            }
                        }, [i("p", {
                            staticClass: "blue_team team_name"
                        }, [e._v("\n        " + e._s(e.examInfo.opponent && e.examInfo.opponent.univ_name) + "\n      ")]), e._v(" "), i("p", {
                            staticClass: "blue_name user_name"
                        }, [e._v("\n        " + e._s(e.examInfo.opponent && e.examInfo.opponent.name) + "\n      ")])])])])
                    }, [], !1, g, "data-v-29029274", null).exports,
                    codeContainer: n("ar1r").a
                },
                data: function () {
                    return {
                        show: !1,
                        checkData: [],
                        isImage: _.m,
                        isVideo: _.p
                    }
                },
                computed: {
                    clientHeight: function () {
                        return document.body.clientHeight + "px"
                    }
                },
                methods: {
                    showQuestionList: function () {
                        this.show = !0
                    },
                    goQuestion: function (e) {
                        var t = this;
                        return o()(a.a.mark(function n() {
                            var i;
                            return a.a.wrap(function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (e === t.questionId) {
                                            n.next = 17;
                                            break
                                        }
                                        return n.next = 3, t.submitAnswer();
                                    case 3:
                                        return t.show = !1, t.questionId = e, n.prev = 5, t.pageLoading = !0, n.next = 9, t.getQuestionData();
                                    case 9:
                                        t.pageLoading = !1, n.next = 17;
                                        break;
                                    case 12:
                                        n.prev = 12, n.t0 = n.catch(5), t.pageLoading = !1, i = t.$CLIENT_EXAM_ERROR[n.t0] || n.t0, t.$message.error(i);
                                    case 17:
                                    case "end":
                                        return n.stop()
                                }
                            }, n, t, [
                                [5, 12]
                            ])
                        }))()
                    }
                }
            };
        var b = function (e) {
                n("Ctd0")
            },
            y = Object(x.a)(w, function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.pageLoading,
                        expression: "pageLoading"
                    }],
                    style: {
                        "min-height": e.clientHeight
                    }
                }, [!0 === e.beginExam && e.question && e.exam ? n("div", {
                    staticClass: "mobile mobile_exam_wrap"
                }, [n("div", {
                    staticClass: "exam_wrap",
                    style: {
                        "min-height": e.clientHeight
                    }
                }, [1 == e.mode ? n("div", {
                    staticClass: "exam_header exam_header_normal"
                }, [n("div", {
                    staticClass: "mode_back",
                    on: {
                        click: e.goBack
                    }
                }), e._v(" "), n("div", {
                    staticClass: "exam_header_mode exam_header_mode_normal"
                }, [e._v(e._s(e.exam.modeTitle))]), e._v("\n        网上重走长征路知识竞答\n      ")]) : e._e(), e._v(" "), 2 == e.mode ? n("div", {
                    staticClass: "exam_header exam_header_time"
                }, [n("div", {
                    staticClass: "mode_back",
                    on: {
                        click: e.goBack
                    }
                }), e._v(" "), n("div", {
                    staticClass: "exam_header_mode exam_header_mode_time"
                }, [e._v(e._s(e.exam.modeTitle))]), e._v("\n        网上重走长征路知识竞答\n      ")]) : e._e(), e._v(" "), 3 == e.mode ? n("div", {
                    staticClass: "exam_header exam_header_ten"
                }, [n("div", {
                    staticClass: "mode_back",
                    on: {
                        click: e.goBack
                    }
                }), e._v(" "), n("div", {
                    staticClass: "exam_header_mode exam_header_mode_ten"
                }, [e._v(e._s(e.exam.modeTitle))]), e._v("\n        网上重走长征路知识竞答\n      ")]) : e._e(), e._v(" "), 4 == e.mode ? n("div", {
                    staticClass: "exam_header exam_header_ten"
                }, [n("div", {
                    staticClass: "mode_back",
                    on: {
                        click: e.goBack
                    }
                }), e._v(" "), n("div", {
                    staticClass: "exam_header_mode exam_header_mode_race"
                }, [e._v(e._s(e.exam.modeTitle))]), e._v("\n        网上重走长征路知识竞答\n      ")]) : e._e(), e._v(" "), n("div", {
                    staticClass: "exam_info"
                }, [n("div", [n("div", {
                    staticClass: "exam_info_clock"
                }, [e._v("\n            倒计时："), n("span", [e._v(e._s("" + e.timeArr[0] + e.timeArr[1] + ":" + e.timeArr[2] + e.timeArr[3] + ":" + e.timeArr[4] + e.timeArr[5]))])]), e._v(" "), 2 == e.way && 1 != e.mode ? n("div", {
                    staticClass: "exam_info_clock"
                }, [e._v("\n            当前对垒团队："), n("span", [e._v(e._s(e.exam.opponent && e.exam.opponent.name))])]) : e._e(), e._v(" "), 1 == e.way && 1 != e.mode ? n("div", {
                    staticClass: "exam_info_clock"
                }, [e._v("\n            当前对垒个人："), n("span", [e._v(e._s(e.exam.opponent && e.exam.opponent.name))])]) : e._e()]), e._v(" "), n("div", {
                    staticClass: "exam_info_btn",
                    on: {
                        click: e.showQuestionList
                    }
                })]), e._v(" "), n("div", {
                    staticClass: "exam_content"
                }, [n("div", {
                    staticClass: "question_title"
                }, [n("span", {
                    staticClass: "question_number"
                }, [e._v(e._s(e.questionIndex + 1) + "、")]), e._v(" "), e.question.category.isSingle ? n("span", [e._v("【单选题】")]) : e._e(), e._v(" "), e.question.category.isMulti ? n("span", [e._v("【多选题】")]) : e._e(), e._v(" "), e.question.category.isJudge ? n("span", [e._v("【判断题】")]) : e._e(), e._v(" "), n("span", {
                    domProps: {
                        innerHTML: e._s(e.question.title)
                    }
                }), e._v(" "), e.question.source ? n("div", {
                    staticClass: "exam_question_from"
                }, [e._v(e._s("[题目来源：" + e.question.source + "]"))]) : e._e()]), e._v(" "), e.question.mediaLocation ? n("div", {
                    staticClass: "question_media"
                }, [e.mediaContentType.img ? n("img", {
                    attrs: {
                        src: e.question.mediaLocation
                    }
                }) : e._e(), e._v(" "), e.mediaContentType.video ? n("video", {
                    attrs: {
                        controls: ""
                    }
                }, [n("source", {
                    attrs: {
                        src: e.question.mediaLocation,
                        type: "video/mp4"
                    }
                })]) : e._e()]) : e._e(), e._v(" "), n("div", {
                    staticClass: "question_options"
                }, [e.question.category.isSingle ? [n("el-radio-group", {
                    model: {
                        value: e.answer.single,
                        callback: function (t) {
                            e.$set(e.answer, "single", t)
                        },
                        expression: "answer.single"
                    }
                }, e._l(e.question.options, function (t) {
                    return n("el-radio", {
                        key: t.id,
                        class: ["question_opt", {
                            answer_correct: e.correctAnswers.includes(t.id),
                            answer_error: e.errorAnswers.includes(t.id)
                        }],
                        attrs: {
                            label: t.id,
                            disabled: e.isGoingNext
                        }
                    }, [n("span", {
                        domProps: {
                            innerHTML: e._s(t.title)
                        }
                    })])
                }), 1)] : e._e(), e._v(" "), e.question.category.isMulti ? [n("el-checkbox-group", {
                    model: {
                        value: e.answer.multi,
                        callback: function (t) {
                            e.$set(e.answer, "multi", t)
                        },
                        expression: "answer.multi"
                    }
                }, e._l(e.question.options, function (t) {
                    return n("el-checkbox", {
                        key: t.id,
                        class: ["question_opt", {
                            answer_correct: e.correctAnswers.includes(t.id),
                            answer_error: e.errorAnswers.includes(t.id)
                        }],
                        attrs: {
                            label: t.id,
                            disabled: e.isGoingNext
                        }
                    }, [n("span", {
                        domProps: {
                            innerHTML: e._s(t.title)
                        }
                    })])
                }), 1)] : e._e(), e._v(" "), e.question.category.isJudge ? [n("el-radio-group", {
                    model: {
                        value: e.answer.judge,
                        callback: function (t) {
                            e.$set(e.answer, "judge", t)
                        },
                        expression: "answer.judge"
                    }
                }, e._l(e.question.options, function (t) {
                    return n("el-radio", {
                        key: t.id,
                        class: ["question_opt", {
                            answer_correct: e.correctAnswers.includes(t.id),
                            answer_error: e.errorAnswers.includes(t.id)
                        }],
                        attrs: {
                            label: t.id,
                            disabled: e.isGoingNext
                        }
                    }, [n("span", {
                        domProps: {
                            innerHTML: e._s(t.title)
                        }
                    })])
                }), 1)] : e._e()], 2), e._v(" "), n("p", {
                    staticClass: "text_center exam_content_tip"
                }, [e._v("\n          答题时间为"), n("span", [e._v(e._s(e.exam.minutes) + "分钟")]), e._v("，请把握好时间\n        ")]), e._v(" "), n("div", {
                    staticClass: "question_button"
                }, [n("button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.questionIndex + 1 !== e.exam.questionIds.length,
                        expression: "questionIndex + 1 !== exam.questionIds.length"
                    }],
                    staticClass: "question_btn next",
                    on: {
                        click: function (t) {
                            return e.checkNeedCode("goNext")
                        }
                    }
                }, [e._v("\n            下一题\n          ")]), e._v(" "), n("button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.questionIndex + 1 == e.exam.questionIds.length,
                        expression: "questionIndex + 1 == exam.questionIds.length"
                    }],
                    staticClass: "question_btn next",
                    on: {
                        click: function (t) {
                            return e.checkNeedCode("submitExam")
                        }
                    }
                }, [e._v("\n            提交\n          ")])]), e._v(" "), n("van-popup", {
                    staticStyle: {
                        height: "40%",
                        background: "#FFF5F0"
                    },
                    attrs: {
                        position: "bottom"
                    },
                    model: {
                        value: e.show,
                        callback: function (t) {
                            e.show = t
                        },
                        expression: "show"
                    }
                }, [n("div", {
                    staticClass: "question_list_close",
                    on: {
                        click: function (t) {
                            e.show = !1
                        }
                    }
                }), e._v(" "), n("p", {
                    staticClass: "text_center mt20"
                }, [e._v("\n            当前答对："), n("span", {
                    staticClass: "question_list_ing"
                }, [e._v(e._s(e.exam.answerIds.length) + "/" + e._s(e.exam.questionIds.length))])]), e._v(" "), n("ul", {
                    staticClass: "question_list clear"
                }, e._l(e.exam.questionIds, function (t, i) {
                    return n("li", {
                        key: i,
                        staticClass: "question_list_item",
                        class: {
                            ing: i === e.questionIndex, right: e.exam.answerIds.includes(t), wrong: !e.exam.answerIds.includes(t) && i < e.questionIndex
                        }
                    }, [e._v("\n              " + e._s(i + 1) + "\n            ")])
                }), 0)])], 1)])]) : e._e(), e._v(" "), !1 === e.beginExam ? n("activity-exam-animation", {
                    attrs: {
                        examInfo: e.exam,
                        examMode: e.mode
                    },
                    on: {
                        handleBeginExam: e.handleBeginExam,
                        "update:examInfo": function (t) {
                            e.exam = t
                        },
                        "update:exam-info": function (t) {
                            e.exam = t
                        },
                        "update:examMode": function (t) {
                            e.mode = t
                        },
                        "update:exam-mode": function (t) {
                            e.mode = t
                        }
                    }
                }) : e._e(), e._v(" "), n("code-container", {
                    attrs: {
                        codeShow: e.codeShow,
                        confirm: e.confirm
                    },
                    on: {
                        "update:codeShow": function (t) {
                            e.codeShow = t
                        },
                        "update:code-show": function (t) {
                            e.codeShow = t
                        }
                    }
                })], 1)
            }, [], !1, b, "data-v-a21d0f86", null).exports,
            C = {
                name: "ActivityClientExam",
                components: {
                    PageContainer: n("p4+R").a,
                    Exam: y
                }
            },
            k = Object(x.a)(C, function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("page-container", {
                    attrs: {
                        loading: !1
                    }
                }, [t("Exam", {
                    on: {
                        changeIndex: this.changeIndex
                    }
                })], 1)
            }, [], !1, null, null, null);
        t.default = k.exports
    },
    Ctd0: function (e, t) {},
    EkUp: function (e, t, n) {
        e.exports = n.p + "public/img/xianshipk.7957753.png"
    },
    IrFo: function (e, t) {},
    NAT4: function (e, t) {},
    Tjlj: function (e, t) {},
    U1lX: function (e, t, n) {
        e.exports = n.p + "public/img/blue.3494c40.png"
    },
    ar1r: function (e, t, n) {
        "use strict";
        var i = n("lC5x"),
            a = n.n(i),
            s = n("J0Oq"),
            o = n.n(s),
            r = n("4YfN"),
            c = n.n(r),
            u = n("rMyF"),
            d = n("jFiy"),
            m = n("SJI6"),
            l = {
                props: {
                    codeShow: {
                        type: Boolean,
                        default: !1
                    },
                    confirm: {
                        type: Function,
                        default: function () {}
                    }
                },
                data: function () {
                    return {
                        inputCode: "",
                        timeKey: Date.now(),
                        loading: !1,
                        activityId: this.$route.params.id,
                        way: this.$route.params.way,
                        mode_id: this.$route.params.mid
                    }
                },
                computed: c()({}, Object(m.mapGetters)(["publicKey"])),
                created: function () {},
                watch: {
                    codeShow: {
                        immediate: !0,
                        handler: function (e) {
                            e ? this.createCode() : this.inputCode = ""
                        }
                    }
                },
                methods: {
                    setLoading: function (e) {
                        this.loading = e
                    },
                    createCode: function () {
                        this.inputCode = "", this.timeKey = Date.now()
                    },
                    close: function () {
                        this.$emit("update:codeShow", !1)
                    },
                    submit: function () {
                        var e = this;
                        return o()(a.a.mark(function t() {
                            var n;
                            return a.a.wrap(function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (0 !== e.inputCode.trim().length && !e.loading) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return e.loading = !0, t.next = 5, Object(u.a)({
                                            activity_id: e.activityId,
                                            mode_id: e.mode_id,
                                            way: e.way,
                                            code: Object(d.r)(e.publicKey, e.inputCode)
                                        });
                                    case 5:
                                        n = t.sent, n.status ? (localStorage.setItem("alreadyCode", "true"), e.close(), e.confirm()) : (e.$message.error("验证码错误"), e.createCode()), e.loading = !1;
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e)
                        }))()
                    },
                    enterSubmit: function (e) {
                        var t = e || window.event;
                        t.preventDefault ? t.preventDefault() : t.returnValue = !0, this.submit()
                    }
                }
            },
            h = n("Dod7"),
            p = {
                name: "ImageCode",
                props: {
                    timeKey: {
                        type: String,
                        default: Date.now()
                    },
                    fontSizeMin: {
                        type: Number,
                        default: 16
                    },
                    fontSizeMax: {
                        type: Number,
                        default: 40
                    },
                    backgroundColorMin: {
                        type: Number,
                        default: 180
                    },
                    backgroundColorMax: {
                        type: Number,
                        default: 240
                    },
                    colorMin: {
                        type: Number,
                        default: 50
                    },
                    colorMax: {
                        type: Number,
                        default: 160
                    },
                    lineColorMin: {
                        type: Number,
                        default: 40
                    },
                    lineColorMax: {
                        type: Number,
                        default: 180
                    },
                    dotColorMin: {
                        type: Number,
                        default: 0
                    },
                    dotColorMax: {
                        type: Number,
                        default: 255
                    },
                    contentWidth: {
                        type: Number,
                        default: 160
                    },
                    contentHeight: {
                        type: Number,
                        default: 40
                    }
                },
                computed: c()({}, Object(m.mapGetters)(["publicKey"])),
                data: function () {
                    return {
                        codeChars: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
                        codeLength: 4,
                        activityId: this.$route.params.id,
                        way: this.$route.params.way,
                        mode_id: this.$route.params.mid
                    }
                },
                methods: {
                    createCode: function () {
                        var e = this;
                        return o()(a.a.mark(function t() {
                            var n, i, s, o, r, c, m;
                            return a.a.wrap(function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        for (e.$emit("setLoading", !0), t.prev = 1, n = "", i = "", s = 0; s < e.codeLength; s++) o = Math.floor(62 * Math.random()), n += e.codeChars[o];
                                        alert(n);
                                        localStorage.setItem("mycode", n);
                                        if (e.publicKey) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.next = 8, Object(h.b)();
                                    case 8:
                                        r = t.sent, c = r.data, m = c.public_key, e.$store.commit("client/setPublicKey", m);
                                    case 12:
                                        return i = Object(d.r)(e.publicKey, n), t.next = 15, Object(u.z)({
                                            activity_id: e.activityId,
                                            mode_id: e.mode_id,
                                            way: e.way,
                                            code: i
                                        });
                                    case 15:
                                        e.drawPic(n), t.next = 21;
                                        break;
                                    case 18:
                                        t.prev = 18, t.t0 = t.catch(1), e.$message.error("验证码生成失败");
                                    case 21:
                                        return t.prev = 21, e.$emit("setLoading", !1), t.finish(21);
                                    case 24:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e, [
                                [1, 18, 21, 24]
                            ])
                        }))()
                    },
                    randomNum: function (e, t) {
                        return Math.floor(Math.random() * (t - e) + e)
                    },
                    randomColor: function (e, t) {
                        return "rgb(" + this.randomNum(e, t) + "," + this.randomNum(e, t) + "," + this.randomNum(e, t) + ")"
                    },
                    drawPic: function (e) {
                        var t = document.getElementById("s-canvas").getContext("2d");
                        t.textBaseline = "bottom", t.fillStyle = this.randomColor(this.backgroundColorMin, this.backgroundColorMax), t.fillRect(0, 0, this.contentWidth, this.contentHeight);
                        for (var n = 0; n < e.length; n++) this.drawText(t, e[n], n);
                        this.drawLine(t), this.drawDot(t)
                    },
                    drawText: function (e, t, n) {
                        e.fillStyle = this.randomColor(this.colorMin, this.colorMax), e.font = this.randomNum(this.fontSizeMin, this.fontSizeMax) + "px SimHei";
                        var i = (n + 1) * (this.contentWidth / (this.codeLength + 1)),
                            a = this.randomNum(this.fontSizeMax, this.contentHeight - 5),
                            s = this.randomNum(-45, 45);
                        e.translate(i, a), e.rotate(s * Math.PI / 180), e.fillText(t, 0, 0), e.rotate(-s * Math.PI / 180), e.translate(-i, -a)
                    },
                    drawLine: function (e) {
                        for (var t = 0; t < 8; t++) e.strokeStyle = this.randomColor(this.lineColorMin, this.lineColorMax), e.beginPath(), e.moveTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight)), e.lineTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight)), e.stroke()
                    },
                    drawDot: function (e) {
                        for (var t = 0; t < 100; t++) e.fillStyle = this.randomColor(0, 255), e.beginPath(), e.arc(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight), 1, 0, 2 * Math.PI), e.fill()
                    }
                },
                watch: {
                    timeKey: function () {
                        this.createCode()
                    }
                },
                mounted: function () {
                    this.createCode()
                }
            },
            _ = n("W5g0");
        var v = function (e) {
                n("NAT4")
            },
            f = {
                name: "codeContainer",
                mixins: [l],
                components: {
                    imageCode: Object(_.a)(p, function () {
                        var e = this.$createElement,
                            t = this._self._c || e;
                        return t("div", {
                            staticClass: "s-canvas"
                        }, [t("canvas", {
                            attrs: {
                                id: "s-canvas",
                                width: this.contentWidth,
                                height: this.contentHeight
                            }
                        })])
                    }, [], !1, v, "data-v-04cbee62", null).exports
                },
                props: {},
                data: function () {
                    return {}
                },
                created: function () {},
                methods: {}
            };
        var x = function (e) {
                n("IrFo")
            },
            g = Object(_.a)(f, function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("van-popup", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.loading,
                        expression: "loading"
                    }],
                    staticClass: "ph25 pv25 pop_container",
                    attrs: {
                        "close-on-click-overlay": !1
                    },
                    model: {
                        value: e.codeShow,
                        callback: function (t) {
                            e.codeShow = t
                        },
                        expression: "codeShow"
                    }
                }, [n("div", {
                    staticClass: "pop_title"
                }, [e._v("验证码")]), e._v(" "), n("div", {
                    staticClass: "mt20"
                }, [n("div", {
                    staticClass: "mb30 code-wrapper"
                }, [n("image-code", {
                    attrs: {
                        timeKey: e.timeKey,
                        contentWidth: 200,
                        contentHeight: 55,
                        fontSizeMin: 25
                    },
                    on: {
                        setLoading: e.setLoading
                    }
                }), e._v(" "), n("span", {
                    staticClass: "code_change_text",
                    on: {
                        click: e.createCode
                    }
                }, [e._v("看不清，换一张")])], 1), e._v(" "), n("div", [n("el-input", {
                    staticClass: "input-width",
                    attrs: {
                        maxlength: 4,
                        placeholder: "输入验证码",
                        size: "small"
                    },
                    nativeOn: {
                        keydown: function (t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enterSubmit(t)
                        }
                    },
                    model: {
                        value: e.inputCode,
                        callback: function (t) {
                            e.inputCode = t
                        },
                        expression: "inputCode"
                    }
                }), e._v(" "), n("button", {
                    staticClass: "code_button common_btn2_red ml15",
                    on: {
                        click: e.submit
                    }
                }, [e._v("确 认")])], 1)])])
            }, [], !1, x, "data-v-3eff6448", null);
        t.a = g.exports
    },
    f2LW: function (e, t, n) {
        e.exports = n.p + "public/img/red.692bf38.png"
    },
    jHFk: function (e, t, n) {
        e.exports = n.p + "public/img/racepk.e56e06e.png"
    },
    uH9j: function (e, t, n) {
        e.exports = n.p + "public/img/qiangshipk.3ced408.png"
    }
});
