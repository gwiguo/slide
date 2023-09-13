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
                $(this).click(function () {
                    // 先移除所有item的选中态
                    $(".nav-list .nav-item").removeClass("nav-active");
                    // 设置当前点击item的选中态
                    $(this).addClass("nav-active");
                    // 跳转到对应模块
                    $(`#part${index + 1}`)[0].scrollIntoView(true)
                })
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
            new Swiper ('#part1 .slide-box', {
                loop: true,     
                navigation: {
                    nextEl: $("#part1 .next"),
                    prevEl: $("#part1 .back"),
                },
                on:{
                    slideChangeTransitionStart:function(){
                        $(this.wrapperEl).find(".swiper-slide").each(function(){
                            $(this).find("video")[0].pause()
                            $(this).find("video")[0].removeAttribute("controls")
                            $(this).find(".video-logo").css("display", "block")
                        })
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
            new Swiper ('#part2 .slide-box', {
                loop: true,     
                navigation: {
                    nextEl: $("#part2 .next"),
                    prevEl: $("#part2 .back"),
                },
                pagination:{
                    el:"#part2 .wap-slide-ctr",
                    type:"custom",
                    renderCustom:function(swiper, current, total){
                        var customPaginationHtml = ""
                        for(var i = 0; i < total; i++) {
                            // 判断哪个分页器此刻应该被激活
                            if(i == (current - 1)) {
                                customPaginationHtml += '<i class="current"></i>';
                            } else {
                                customPaginationHtml += '<i></i>';
                            }
                        }
                        return customPaginationHtml;                                           
                    }
                }
            }) 
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
            // 数组数量必须与HTML中的轮播图数量对应上，比如slidemMap[0]有3张图片，HTML中就要有3个存放图片的标签
            const slidemMap = {
                0:["http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/0-0/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/0-1/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/0-2/50"],
                1:["http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/1-0/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/1-1/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/1-2/50"],
                2:["http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-0/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-1/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-2/50"],
                3:["http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/3-0/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/3-1/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/3-2/50"],
                4:["http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/4-0/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/4-1/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/4-2/50"],
                5:["http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-0/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-1/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-2/50"],
                6:["http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-0/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-1/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-2/50"],
                7:["http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-0/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-1/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-2/50"],
                8:["http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-0/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-1/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-2/50"],
                9:["http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-0/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-1/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-2/50"],
                10:["http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-0/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-1/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-2/50"],
                11:["http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-0/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-1/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-2/50"],
                12:["http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-0/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-1/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-2/50"],
                13:["http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-0/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-1/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-2/50"],
                14:["http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-0/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-1/50","http://zzb.pcauto.com.cn/tools/img/?279x531/05a/fff/2-2/50"]
            }
            let swiper = new Swiper (`#part3 .slide-container .slide-box`, {
                loop: true,     
                navigation: {
                    nextEl: $(`#part3 .slide-container .next`),
                    prevEl: $(`#part3 .slide-container .back`),
                },
                pagination:{
                    el:`#part3 .slide-container .slide-ctr`,
                    type:"custom",
                    renderCustom:function(swiper, current, total){
                        var customPaginationHtml = ""
                        for(var i = 0; i < total; i++) {
                            // 判断哪个分页器此刻应该被激活
                            if(i == (current - 1)) {
                                // 激活的分页器样式
                                customPaginationHtml += '<i class="current"></i>';
                            } else {
                                // 没有被激活的分页器样式
                                customPaginationHtml += '<i></i>';
                            }
                        }
                        return customPaginationHtml;                                           
                    }
                }
            }) 
            $("#part3 .item").each(function () {
                this.ontouchstart = function () {
                    // 只显示品牌对应的轮播图
                    const index = $(this).index();
                    // 先销毁轮播图实例
                    swiper.destroy()
                    // 存储新的轮播图片
                    const imgArr = slidemMap[index];
                    // 设置新的轮播图片
                    $("#part3 .swiper-wrapper .swiper-slide img").each(function(i){
                        $(this).attr("src",imgArr[i])
                    });
                    // 开启新的轮播
                    swiper = new Swiper (`#part3 .slide-container .slide-box`, {
                        loop: true,     
                        navigation: {
                            nextEl: $(`#part3 .slide-container .next`),
                            prevEl: $(`#part3 .slide-container .back`),
                        },
                        pagination:{
                            el:`#part3 .slide-container .slide-ctr`,
                            type:"custom",
                            renderCustom:function(swiper, current, total){
                                var customPaginationHtml = ""
                                for(var i = 0; i < total; i++) {
                                    // 判断哪个分页器此刻应该被激活
                                    if(i == (current - 1)) {
                                        customPaginationHtml += '<i class="current"></i>';
                                    } else {
                                        customPaginationHtml += '<i></i>';
                                    }
                                }
                                return customPaginationHtml;                                           
                            }
                        }
                    }) 
                    // 移除所有品牌的选中态
                    $("#part3 .item").removeClass("current")
                    // 只设置当前品牌的选中态
                    $(this).addClass("current")
                }
            })
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
            new Swiper ('#part4 .slide-box', {
                loop: true,     
                navigation: {
                    nextEl: $("#part4 .next"),
                    prevEl: $("#part4 .back"),
                }
            }) 
        }
    }
    // 十佳设计师
    const part5 = {
        init() {
            // 轮播图
            this.slide();
        },
        slide() {
            new Swiper ('#part5 .slide-box', {
                effect:"fade",
                fadeEffect: {
                    crossFade: true,                    
                },
                loop: true,     
                navigation: {
                    nextEl: $("#part5 .next"),
                    prevEl: $("#part5 .back"),
                },
                pagination:{
                    el:"#part5 .wap-slide-ctr",
                    type:"custom",
                    renderCustom:function(swiper, current, total){
                        var customPaginationHtml = ""
                        for(var i = 0; i < total; i++) {
                            // 判断哪个分页器此刻应该被激活
                            if(i == (current - 1)) {
                                customPaginationHtml += '<i class="current"></i>';
                            } else {
                                customPaginationHtml += '<i></i>';
                            }
                        }
                        return customPaginationHtml;                                           
                    }
                }
            }) 
        }
    }
    nav.init();
    part1.init();
    part2.init();
    part3.init();
    part4.init();
    part5.init();   
})