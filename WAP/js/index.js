$(function () {
    // 横导航
    const nav = {
        init() {
            // 点击横导航跳转到对应模块
            this.handleRowNav();
        },
        handleRowNav() {
            // 遍历每个横导航的item，注册点击事件跳转到对应模块
            $(".nav-list .nav-item").each(function (index) {
                this.ontouchstart = function () {
                    // 先移除所有item的选中态
                    $(".nav-list .nav-item").removeClass("nav-active");
                    // 设置当前点击item的选中态
                    $(this).addClass("nav-active");
                    // 跳转到对应模块
                    $(`#part${index + 1}`)[0].scrollIntoView(true)
                }
            })
        },
    }
    const part1 = {
        init() {
            // 视频轮播
            this.slide();
            // 点击播放视频
            this.play()
        },
        slide() {
            new Slide({
                target: $("#part1 li"),
                prevBtn: $("#part1 .back"),
                nextBtn: $("#part1 .next"),
                effect: "slide",
                autoPlay: false,
                stay: 3000,
                width: $("#part1 .content").width() + 1,
                playTo: 0,
                link: true,
                onchange() {
                    // 切换轮播图的时候把上一个轮播图里的视频暂停
                    const prevPage = $(this)[0].prevPage
                    // 因为轮播图初始化的时候prevPage为undefined所以要先判断
                    if (prevPage !== undefined) {
                        $(this)[0].target[prevPage].querySelector("video").pause()
                        // 隐藏上一个视频的控件
                        $(this)[0].target[prevPage].querySelector("video").removeAttribute("controls")
                        $($(this)[0].target[prevPage]).find(".video-logo").css("display", "block")
                    }
                }
            })
        },
        play() {
            $("#part1 .play").click(function () {
                $(this).parent().parent().prev()[0].play();
                // 视频播放后显示视频控件
                $(this).parent().parent().prev().attr("controls", true)
                $($(this).parent().parent()).css("display", "none")
            })
        }
    }
    const part2 = {
        init() {
            this.slide()
        },
        slide() {
            new Slide({
                target: $("#part2 li"),
                control: $("#part2 .wap-slide-ctr i"),
                prevBtn: $("#part2 .back"),
                nextBtn: $("#part2 .next"),
                effect: "slide",
                autoPlay: false,
                stay: 3000,
                width: $("#part2 .content").width() + 1,
                playTo: 0,
                link: true
            });
        }
    }
    const part3 = {
        init() {
            // 轮播图
            this.slide()
            // 滚动条插件
            $(".nano").nanoScroller({ sliderMaxHeight: 83, alwaysVisible: true });
        },
        slide() {
            $("#part3 .slide-container").each(function () {
                new Slide({
                    target: $(this).find(".slide-div"),
                    control: $(this).find(".slide-ctr i"),
                    prevBtn: $(this).find(".back"),
                    nextBtn: $(this).find(".next"),
                    effect: "fade",
                    autoPlay: true,
                    stay: 3000,
                    width: $("#part3 .content .slide-div").width() + 1,
                    playTo: 0,
                    link: true
                });
                $("#part3 .item").each(function () {
                    this.ontouchstart = function () {
                        // 先隐藏所有轮播图
                        $("#part3 .slide-container").css("display", "none");
                        // 只显示品牌对应的轮播图
                        const index = $(this).index();
                        $("#part3 .slide-container").eq(index).css("display", "block")
                        // 移除所有品牌的选中态
                        $("#part3 .item").removeClass("current")
                        // 只设置当前品牌的选中态
                        $(this).addClass("current")
                    }

                })
            });
        }
    }
    // 嘉宾助阵
    const part4 = {
        init() {
            // 点击图片时的交互
            this.click_pic();
            // // 轮播图
            this.slide();
        },
        click_pic() {
            $("#part4 .slide-div-item>div").click(function () {
                if ($(this).find(".click_before").css("display") === 'block') {
                    $(this).find(".click_before").css("display", "none")
                    $(this).find(".click_after").css("display", "block")
                } else {
                    $(this).find(".click_before").css("display", "block")
                    $(this).find(".click_after").css("display", "none")
                }
            })
        },
        slide() {
            new Slide({
                target: $("#part4 .slide-div-item"),
                prevBtn: $("#part4 .back"),
                nextBtn: $("#part4 .next"),
                effect: "slide",
                autoPlay: false,
                stay: 3000,
                width: $("#part4 .slide-div-item").width()+1,
                playTo: 0,
                link: true
            });
        }
    }
    // 十佳设计师
    const part5 = {
        init() {
            // 轮播图
            this.slide();
        },
        slide() {
            new Slide({
                target: $("#part5 .slide-div-item"),
                control: $("#part5 .wap-slide-ctr i"),
                prevBtn: $("#part5 .back"),
                nextBtn: $("#part5 .next"),
                effect: "fade",
                autoPlay: false,
                stay: 3000,
                width: $("#part5 .slide-box").width(),
                playTo: 0,
                link: true
            });
        }
    }
    nav.init();
    part1.init();
    part2.init();
    part3.init();
    part4.init();
    part5.init();
})