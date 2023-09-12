$(function(){
    const part1 = {
        init(){
            // 视频轮播
            this.slide();
            // 点击播放视频
            this.play()
        },
        slide(){
            new Slide({
                target: $("#part1 li"),
                prevBtn: $("#part1 .back"),
                nextBtn: $("#part1 .next"),
                effect: "slide",
                autoPlay: false,
                stay: 3000,
                width: $("#part1 .content").width()+1,
                playTo: 0,
                link: true,
                onchange(){
                    // 切换轮播图的时候把上一个轮播图里的视频暂停
                    const prevPage = $(this)[0].prevPage
                    // 因为轮播图初始化的时候prevPage为undefined所以要先判断
                    if(prevPage !== undefined){
                        $(this)[0].target[prevPage].querySelector("video").pause()
                        // 隐藏上一个视频的控件
                        $(this)[0].target[prevPage].querySelector("video").removeAttribute("controls")
                        $($(this)[0].target[prevPage]).find(".video-logo").css("display","block")
                    }
                }
            })
        },
        play(){
            $("#part1 .play").click(function(){
                $(this).parent().parent().prev()[0].play();
                // 视频播放后显示视频控件
                $(this).parent().parent().prev().attr("controls",true)
                $($(this).parent().parent()).css("display","none")
            })
        }
    }
    part1.init();
})