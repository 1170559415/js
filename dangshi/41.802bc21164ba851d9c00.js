webpackJsonp([41], {
    "496z": function (e, t) {},
    c7LP: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n("3cXf"),
            r = n.n(s),
            i = n("rVsN"),
            a = n.n(i),
            o = n("lC5x"),
            u = n.n(o),
            c = n("J0Oq"),
            d = n.n(c),
            l = n("rMyF"),
            m = n("+iF8"),
            p = n("jMmt"),
            v = n("jFiy"),
            g = {
                name: "Exam",
                mixins: [{
                    data: function () {
                        return {
                            activityId: this.$route.params.activityId,
                            way: this.$route.params.way,
                            mode_id: this.$route.params.modeId,
                            question: null,
                            answer: {
                                single: "",
                                multi: [],
                                judge: ""
                            },
                            questionId: "",
                            questionIndex: 0,
                            timer: null,
                            timeArr: [],
                            loading: !1,
                            pageLoading: !1,
                            confirm: null,
                            isGoingNext: !1,
                            correctAnswers: [],
                            errorAnswers: [],
                            shortSubmit: !1
                        }
                    },
                    computed: {
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
                            return this.question.mediaLocation ? (e.img = Object(v.m)(this.question.mediaLocation), e.video = Object(v.p)(this.question.mediaLocation), e) : e
                        }
                    },
                    created: function () {
                        var e = this;
                        return d()(u.a.mark(function t() {
                            return u.a.wrap(function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        e.init();
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e)
                        }))()
                    },
                    methods: {
                        init: function () {
                            var e = this;
                            return d()(u.a.mark(function t() {
                                return u.a.wrap(function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!localStorage.getItem("token")) {
                                                t.next = 12;
                                                break
                                            }
                                            return t.prev = 1, t.next = 4, e.beginExam();
                                        case 4:
                                            return t.next = 6, e.getData();
                                        case 6:
                                            e.countDown(), t.next = 12;
                                            break;
                                        case 9:
                                            t.prev = 9, t.t0 = t.catch(1), console.log(t.t0);
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t, e, [
                                    [1, 9]
                                ])
                            }))()
                        },
                        countDown: function () {
                            var e = this;
                            this.timer = new p.b;
                            var t = this.exam.startDateTime + 60 * this.exam.minutes * 1e3,
                                n = Math.floor((t - this.exam.serverDateTime) / 1e3);
                            n = n > 0 ? n : 0, this.timer.countStart(n, function (t) {
                                var n = t.hours,
                                    s = t.mins,
                                    r = t.sec;
                                e.timeArr = Object(p.f)({
                                    hours: n,
                                    mins: s,
                                    sec: r
                                }), 0 === n && 0 === s && 0 === r && e.$alert("考试时间已结束，请交卷", "提示", {
                                    confirmButtonText: "确定",
                                    type: "warning",
                                    showClose: !1
                                }).then(function () {
                                    e.submitConfirm()
                                }).catch(function () {})
                            })
                        },
                        getData: function () {
                            var e = this;
                            return d()(u.a.mark(function t() {
                                var n;
                                return u.a.wrap(function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, e.pageLoading = !0, e.exam.answers.length !== e.exam.questionIds.length) {
                                                t.next = 8;
                                                break
                                            }
                                            return t.next = 5, e.submitConfirm();
                                        case 5:
                                            return t.abrupt("return");
                                        case 8:
                                            e.questionId = e.exam.questionIds[e.exam.answers.length], e.questionIndex = e.exam.answers.length;
                                        case 10:
                                            return t.next = 12, e.getQuestionData(),e.submitAnswer;
                                        case 12:
                                            t.next = 18;
                                            break;
                                        case 14:
                                            t.prev = 14, t.t0 = t.catch(0), n = e.$CLIENT_EXAM_ERROR[t.t0] || t.t0, e.$message.error(n);
                                        case 18:
                                            return t.prev = 18, e.pageLoading = !1, t.finish(18);
                                        case 21:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t, e, [
                                    [0, 14, 18, 21]
                                ])
                            }))()
                        },
                        getQuestionData: function () {
                            var e = this;
                            e.submitAnswer;
                            return d()(u.a.mark(function t() {
                                return u.a.wrap(function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.abrupt("return", new a.a(function () {
                                                var t = d()(u.a.mark(function t(n, s) {
                                                    var r, i;
                                                    return u.a.wrap(function (t) {
                                                        for (;;) switch (t.prev = t.next) {
                                                            case 0:
                                                                return r = {
                                                                    mode_id: e.mode_id,
                                                                    activity_id: e.activityId,
                                                                    question_id: e.questionId,
                                                                    way: e.way
                                                                }, t.next = 3, Object(l.m)(r);
                                                            case 3:
                                                                i = t.sent, e.correctAnswers = [], e.errorAnswers = [], e.answer = {
                                                                    single: "",
                                                                    multi: [],
                                                                    judge: ""
                                                                }, 0 === i.code ? (e.question = new m.b(i.data), n()) : s(i.code);
                                                            case 8:
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
                            return d()(u.a.mark(function t() {
                                var n;
                                return u.a.wrap(function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (e.answerResult[0] && !e.isGoingNext) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return", !1);
                                        case 2:
                                            return t.prev = 2, e.pageLoading = !0, e.isGoingNext = !0, t.next = 7, e.submitAnswer();
                                        case 7:
                                            if (!t.sent) {
                                                t.next = 12;
                                                break
                                            }
                                            return t.next = 11, e.submitConfirm();
                                        case 11:
                                            return t.abrupt("return");
                                        case 12:
                                            return e.questionIndex++, e.questionIndex <= e.exam.questionIds.length - 1 && (e.questionId = e.exam.questionIds[e.questionIndex]), e.pageLoading = !0, t.next = 17, e.getQuestionData(), e.submitAnswer;
                                        case 17:
                                            t.next = 23;
                                            break;
                                        case 19:
                                            t.prev = 19, t.t0 = t.catch(2), n = e.$CLIENT_EXAM_ERROR[t.t0] || t.t0, e.$message.error(n);
                                        case 23:
                                            return t.prev = 23, e.pageLoading = !1, e.isGoingNext = !1, t.finish(23);
                                        case 27:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t, e, [
                                    [2, 19, 23, 27]
                                ])
                            }))()
                        },
                        submitAnswer: function () {
                            var e = this;
                            return d()(u.a.mark(function t() {
                                return u.a.wrap(function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.abrupt("return", new a.a(function () {
                                                var t = d()(u.a.mark(function t(n, s) {
                                                    var r;
                                                    return u.a.wrap(function (t) {
                                                        for (;;) switch (t.prev = t.next) {
                                                            case 0:
                                                                return t.next = 2, Object(l.y)({
                                                                    activityId: e.activityId,
                                                                    questionId: e.questionId,
                                                                    answer: e.answerResult,
                                                                    mode_id: e.mode_id,
                                                                    way: e.way
                                                                });
                                                            case 2:
                                                                0 === (r = t.sent).code ? (e.exam.answers.includes(e.questionId) || e.exam.answers.push(e.questionId), r.data.correct && !e.exam.answerIds.includes(e.questionId) && e.exam.answerIds.push(e.questionId), !r.data.correct && r.data.correct_ids && r.data.correct_ids.length ? (e.pageLoading = !1, e.correctAnswers = r.data.correct_ids, e.errorAnswers = e.answerResult.filter(function (t) {
                                                                    return !e.correctAnswers.includes(t)
                                                                }), setTimeout(function () {
                                                                    n(r.data.finished)
                                                                }, 10)) : n(r.data.finished)) : s(r.code);
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
                            return d()(u.a.mark(function t() {
                                var n, s, r;
                                return u.a.wrap(function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (e.answerResult[0] && !e.isGoingNext && !e.shortSubmit) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return", !1);
                                        case 2:
                                            if (e.isGoingNext = !0, n = e, t.prev = 4, s = 0, !e.answerResult[0]) {
                                                t.next = 21;
                                                break
                                            }
                                            return t.prev = 7, e.pageLoading = !0, t.next = 11, e.submitAnswer();
                                        case 11:
                                            t.next = 18;
                                            break;
                                        case 13:
                                            if (t.prev = 13, t.t0 = t.catch(7), 4811 === (s = t.t0)) {
                                                t.next = 18;
                                                break
                                            }
                                            throw new Error("" + s);
                                        case 18:
                                            return t.prev = 18, e.pageLoading = !1, t.finish(18);
                                        case 21:
                                            return t.next = 23, n.submitConfirm();
                                        case 23:
                                            t.next = 29;
                                            break;
                                        case 25:
                                            t.prev = 25, t.t1 = t.catch(4), r = e.$CLIENT_EXAM_ERROR[t.t1] || t.t1, e.$message.error(r);
                                        case 29:
                                            return t.prev = 29, e.isGoingNext = !1, t.finish(29);
                                        case 32:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t, e, [
                                    [4, 25, 29, 32],
                                    [7, 13, 18, 21]
                                ])
                            }))()
                        },
                        submitConfirm: function () {
                            var e = this;
                            return d()(u.a.mark(function t() {
                                var n;
                                return u.a.wrap(function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e.pageLoading = !0, t.next = 4, Object(l.x)(e.exam.examCode);
                                        case 4:
                                            0 === (n = t.sent).code ? (e.timer && e.timer.countStop(), localStorage.setItem("examResult", r()(n.data)), e.$router.replace({
                                                path: "/cctv/result/" + e.activityId
                                            })) : 4831 === n.code ? (e.shortSubmit = !0, setTimeout(function () {
                                                e.shortSubmit = !1
                                            }, 10)) : 4823 === n.code ? e.$router.replace({
                                                path: "/cctv/start/" + e.activityId
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
                        }
                    },
                    beforeDestroy: function () {
                        this.timer && this.timer.countStop()
                    }
                }, n("EjOs").a],
                data: function () {
                    return {
                        show: !1
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
                    }
                }
            },
            h = n("W5g0");
        var f = function (e) {
                n("496z")
            },
            w = Object(h.a)(g, function () {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.pageLoading,
                        expression: "pageLoading"
                    }],
                    staticClass: "exam_container",
                    style: {
                        "min-height": e.clientHeight
                    }
                }, [e.question && e.exam ? s("div", [s("div", {
                    staticClass: "top_wrapper"
                }, [s("div", {
                    staticClass: "time"
                }, [e._v("\n        倒计时："), s("span", [e._v(e._s("" + e.timeArr[0] + e.timeArr[1] + ":" + e.timeArr[2] + e.timeArr[3] + ":" + e.timeArr[4] + e.timeArr[5]))])]), e._v(" "), s("div", {
                    staticClass: "question_list_btn",
                    on: {
                        click: e.showQuestionList
                    }
                }, [s("img", {
                    attrs: {
                        src: n("uQMW")
                    }
                })])]), e._v(" "), s("div", {
                    staticClass: "question_wrapper"
                }, [s("div", {
                    staticClass: "question_title"
                }, [e._v("\n        " + e._s(e.questionIndex + 1) + "、\n        "), e.question.category.isSingle ? s("span", [e._v("【单选题】")]) : e._e(), e._v(" "), e.question.category.isMulti ? s("span", [e._v("【多选题】")]) : e._e(), e._v(" "), e.question.category.isJudge ? s("span", [e._v("【判断题】")]) : e._e(), e._v(" "), s("span", {
                    domProps: {
                        innerHTML: e._s(e.question.title)
                    }
                }), e._v(" "), e.question.source ? s("div", {
                    staticClass: "exam_question_from"
                }, [e._v(e._s("[题目来源：" + e.question.source + "]"))]) : e._e()]), e._v(" "), e.question.mediaLocation ? s("div", {
                    staticClass: "question_media"
                }, [e.mediaContentType.img ? s("img", {
                    attrs: {
                        src: e.question.mediaLocation
                    }
                }) : e._e(), e._v(" "), e.mediaContentType.video ? s("video", {
                    attrs: {
                        controls: ""
                    }
                }, [s("source", {
                    attrs: {
                        src: e.question.mediaLocation,
                        type: "video/mp4"
                    }
                })]) : e._e()]) : e._e(), e._v(" "), e._m(0), e._v(" "), s("div", {
                    staticClass: "wrapper-box"
                }, [s("div", {
                    staticClass: "question_options_wrapper"
                }, [e.question.category.isSingle ? [s("el-radio-group", {
                    model: {
                        value: e.answer.single,
                        callback: function (t) {
                            e.$set(e.answer, "single", t)
                        },
                        expression: "answer.single"
                    }
                }, e._l(e.question.options, function (t) {
                    return s("el-radio", {
                        key: t.id,
                        class: ["question_opt", {
                            answer_correct: e.correctAnswers.includes(t.id),
                            answer_error: e.errorAnswers.includes(t.id)
                        }],
                        attrs: {
                            label: t.id,
                            disabled: e.isGoingNext
                        }
                    }, [s("span", {
                        domProps: {
                            innerHTML: e._s(t.title)
                        }
                    })])
                }), 1)] : e._e(), e._v(" "), e.question.category.isMulti ? [s("el-checkbox-group", {
                    model: {
                        value: e.answer.multi,
                        callback: function (t) {
                            e.$set(e.answer, "multi", t)
                        },
                        expression: "answer.multi"
                    }
                }, e._l(e.question.options, function (t) {
                    return s("el-checkbox", {
                        key: t.id,
                        class: ["question_opt", {
                            answer_correct: e.correctAnswers.includes(t.id),
                            answer_error: e.errorAnswers.includes(t.id)
                        }],
                        attrs: {
                            label: t.id,
                            disabled: e.isGoingNext
                        }
                    }, [s("span", {
                        domProps: {
                            innerHTML: e._s(t.title)
                        }
                    })])
                }), 1)] : e._e(), e._v(" "), e.question.category.isJudge ? [s("el-radio-group", {
                    model: {
                        value: e.answer.judge,
                        callback: function (t) {
                            e.$set(e.answer, "judge", t)
                        },
                        expression: "answer.judge"
                    }
                }, e._l(e.question.options, function (t) {
                    return s("el-radio", {
                        key: t.id,
                        class: ["question_opt", {
                            answer_correct: e.correctAnswers.includes(t.id),
                            answer_error: e.errorAnswers.includes(t.id)
                        }],
                        attrs: {
                            label: t.id,
                            disabled: e.isGoingNext
                        }
                    }, [s("span", {
                        domProps: {
                            innerHTML: e._s(t.title)
                        }
                    })])
                }), 1)] : e._e()], 2), e._v(" "), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.questionIndex + 1 !== e.exam.questionIds.length,
                        expression: "questionIndex + 1 !== exam.questionIds.length"
                    }],
                    staticClass: "question_btn",
                    on: {
                        click: e.goNext
                    }
                }, [e._v("下一题\n        ")]), e._v(" "), s("button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.questionIndex + 1 == e.exam.questionIds.length,
                        expression: "questionIndex + 1 == exam.questionIds.length"
                    }],
                    staticClass: "question_btn next",
                    on: {
                        click: e.submitExam
                    }
                }, [e._v("\n          提交\n        ")])])]), e._v(" "), s("van-popup", {
                    staticClass: "pop_wrapper",
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
                }, [s("div", {
                    staticClass: "pop-close_btn",
                    on: {
                        click: function (t) {
                            e.show = !1
                        }
                    }
                }), e._v(" "), s("p", {
                    staticClass: "correct_wrapper"
                }, [e._v("\n        当前答对："), s("span", {
                    staticClass: "question_list_ing"
                }, [e._v(e._s(e.exam.answerIds.length) + "/" + e._s(e.exam.questionIds.length))])]), e._v(" "), s("ul", e._l(e.exam.questionIds, function (t, n) {
                    return s("li", {
                        key: n,
                        class: {
                            current: n === e.questionIndex, right: e.exam.answerIds.includes(t), wrong: !e.exam.answerIds.includes(t) && n < e.questionIndex
                        }
                    }, [e._v("\n          " + e._s(n + 1) + "\n        ")])
                }), 0)])], 1) : e._e()])
            }, [function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "question_divider"
                }, [t("span", {
                    staticClass: "ques_circle left"
                }), this._v(" "), t("span", {
                    staticClass: "ques_border"
                }), this._v(" "), t("span", {
                    staticClass: "ques_circle right"
                })])
            }], !1, f, "data-v-01292381", null);
        t.default = w.exports
    },
    uQMW: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAetJREFUeAHt2rEvBEEUx/FbQUWhlPgTdFQ6/4KSVkFxIgrkarkLEkfhT1ApVPwHOpVWoiC5QhQ06M5vikmeyRRsdnb25HvJy755c3fzfC5b7ItWixcCCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAwH8WKFL+ccPhcEXff6p4V6wVRXFvz9P+rNYXikVF0l7sucpfFFvq5zqoN2spoFeFf92E3Wmj7zczXAdhP2XWY2U+9IfPfJn3fprcpx8+yXCt5OzxxI2v6vt7ijfFTuSsI9XmFAuKum/h/Ug/lBBAAAEEEEAAAQQQQACBERBI+vikAcGyDA4V7lFuQ9OPR2ui/RmtzxU5pjG76ufW9tO4XEADM2W5ChvUXs/s153++DHD3n67Tj2NmTCN2NyXJ32S4VrJ2amnMeuCOVG4W3gvguSmMfOKHNOY7Ug/lBBAAAEEEEAAAQQQQACBERBIPY1ZkkFX4R7l2pp+PFsTTQ+mte4rcjzKddTPne2ncbmAnsyI5TJsUHsHZr/u9CHsp8w69TRmyjRlc1+O1fxe6mslZ6eexmxK4UzhbuFORORYNXf7ukj9Y9rj3b+3tW2BHAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAgZjANw8K4Wk/G4+fAAAAAElFTkSuQmCC"
    }
});
