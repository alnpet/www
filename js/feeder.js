$(document).ready(function () {
    var resizeFunc = function () {
        size = getViewSizeWithoutScrollbar();
        scale = size.width / 990;
        resizeDog();
        resizeFeeder();
        if (size.width < 990) {
            changeScale($("#dog-process-bar"), 990, 400);
        } else {
            recoverScale($("#dog-process-bar"));
        }
    };
    var resizeDog = function () {
        var widthTemp = size.width;
        var imgWidth = 1920;
        var imgHeight = 800;
        var newWidth;
        var newHeight;
        var wrapWidth = widthTemp > 990 ? widthTemp : 990;
        var wrapHeight = wrapWidth / imgWidth * imgHeight > 590 ? wrapWidth / imgWidth * imgHeight : 590;
        resizePic(wrapWidth, wrapHeight * 1.2, imgWidth, imgHeight, $("#feeding-dog-img-wrap"), $(
            "#feeding-dog-img"));
        marginFrom = 725 - (parseInt($("#feeding-dog-img-wrap").height(), 10) - 600);
        $("#feeding-dog-img-wrap").css("marginTop", marginFrom + "px");
        marginTo = 725;
    };
    var resizeFeeder = function () {
        var widthTemp = size.width;
        var imgWidth = 1920;
        var imgHeight = 800;
        var newWidth;
        var newHeight;
        var wrapWidth = widthTemp;
        var wrapHeight = wrapWidth / imgWidth * imgHeight > 586 ? wrapWidth / imgWidth * imgHeight : 586;
        resizePic(wrapWidth, wrapHeight * 1.2, imgWidth, imgHeight, $("#feeding-img-wrap"), $(
            "#feeding-img"));
        marginFrom2 = 1875 - (parseInt($("#feeding-img-wrap").height(), 10) - 596);
        $("#feeding-img-wrap").css("marginTop", marginFrom2 + "px");
        marginTo2 = 1875;
    };
    $(window).resize(function () {
        resizeFunc();

    });
    $(window).scroll(function () {
        var scrollObj = GetPageScroll();
        var scrollTop = scrollObj.Y;
        var nowHeight = getViewSizeWithoutScrollbar().height + scrollTop;
        if (nowHeight >= 910 && nowHeight <= (810 + size.height + 300)) {
            // dog scroll
            var marginTop = marginFrom + (nowHeight - 910) * (marginTo - marginFrom) / (size
                .height + 300);
            $("#feeding-dog-img-wrap").animate({
                'marginTop': marginTop + "px"
            }, 0);
        }
        if (nowHeight >= 1880 && nowHeight <= (1880 + size.height)) {
            // feeder scroll
            var marginTop2 = marginFrom2 + (nowHeight - 1880) * (marginTo2 - marginFrom2) / (size
                .height);
            $("#feeding-img-wrap").animate({
                'marginTop': marginTop2 + "px"
            }, 0);
        }
        if (nowHeight >= 1040 && pageTwoFlag === true) {
            // enter page two
            pageTwoFlag = false;
            $("#feeder-feeding-system h1").myFadeIn();
            setTimeout(function () {
                liFadeIn($(".feeder-feeding-func-each:first"), 0, $(".feeder-feeding-func-each")
                    .size(), 200);
            }, 250);
            setTimeout(function () {
                $("#get-tech").myFadeIn();
            }, 500 + 200 * 3);
        }
        if (nowHeight >= 2200 && pageFourFlag === true) {
            // enter page four
            pageFourFlag = false;
            $("#feeder-features h1").myFadeIn();
            setTimeout(function () {
                liFadeIn($(".right-part .feeder-feature-each:first"), 0, $(
                    ".right-part .feeder-feature-each").size(), 200);
            }, 400);
        }
        if (nowHeight >= 1625 && pageThreeFlag === true) {
            // enter page three
            pageThreeFlag = true;
            $("#dog-process-seperate").fadeIn(200);
            setTimeout(function () {
                $("#dog-process-seperate .seperate-each:eq(0)").fadeIn(200);
            }, 500);
            setTimeout(function () {
                $("#dog-process-timeline").animate({
                    "width": "980px"
                }, 1500);
            }, 200);
            setTimeout(function () {
                $("#red-dog").fadeIn(200);
            }, 200);
            setTimeout(function () {
                $("#dog-process-seperate .seperate-each:eq(1)").fadeIn(200);
            }, 1000);
            setTimeout(function () {
                $("#dog-process-seperate .seperate-each:eq(2)").fadeIn(200);
            }, 1500);
            setTimeout(function () {
                $("#green-dog").fadeIn(200);
            }, 1300);
            $("#dog-process-intro .dog-intro-each:eq(0)").show().animate({
                "top": "0px",
                "opacity": "1"
            });
            setTimeout(function () {
                $("#dog-process-intro .dog-intro-each:eq(1)").show().animate({
                    "top": "0px",
                    "opacity": "1"
                });
            }, 500);
            setTimeout(function () {
                $("#dog-process-intro .dog-intro-each:eq(2)").show().animate({
                    "top": "0px",
                    "opacity": "1"
                });
            }, 1000);
            setTimeout(function () {
                $("#dog-process-intro .dog-intro-each:eq(3)").show().animate({
                    "top": "0px",
                    "opacity": "1"
                });
            }, 1500);
        }
    });
    var pageTwoFlag = pageThreeFlag = pageFourFlag = true;
    $(".feeder-feeding-func-each.scale").on("mouseenter", function () {
        $(".feeder-addition-popout-wrap.scale").show();
        var top = getTop($(this)[0]) - $(".feeder-addition-popout-wrap.scale").height() - 15;
        var left = getLeft($(this)[0]) - 27;
        $(".feeder-addition-popout-wrap.scale").css({
            "marginLeft": left + "px",
            "marginTop": top + "px"
        });
        $(".feeder-addition-popout-wrap.scale .feeder-addition-popout").myFadeInTop(null, 150);
    });
    $(".feeder-feeding-func-each.scale").on("mouseleave", function () {
        $(".feeder-addition-popout-wrap.scale .feeder-addition-popout").myFadeInTopOut(function () {
            $(".feeder-addition-popout-wrap.scale").hide();
        }, 150);
    });
    $(".feeder-feeding-func-each.heart").on("mouseenter", function () {
        $(".feeder-addition-popout-wrap.heart").show();
        var top = getTop($(this)[0]) - $(".feeder-addition-popout-wrap.heart").height() - 15;
        var left = getLeft($(this)[0]) - 27;
        $(".feeder-addition-popout-wrap.heart").css({
            "marginLeft": left + "px",
            "marginTop": top + "px"
        });
        $(".feeder-addition-popout-wrap.heart .feeder-addition-popout").myFadeInTop(null, 150);
    });
    $(".feeder-feeding-func-each.heart").on("mouseleave", function () {
        $(".feeder-addition-popout-wrap.heart .feeder-addition-popout").myFadeInTopOut(function () {
            $(".feeder-addition-popout-wrap.heart").hide();
        }, 150);
    });
    $(".feeder-feeding-func-each.collar").on("mouseenter", function () {
        $(".feeder-addition-popout-wrap.collar").show();
        var top = getTop($(this)[0]) - $(".feeder-addition-popout-wrap.collar").height() - 15;
        var left = getLeft($(this)[0]) - 27;
        $(".feeder-addition-popout-wrap.collar").css({
            "marginLeft": left + "px",
            "marginTop": top + "px"
        });
        $(".feeder-addition-popout-wrap.collar .feeder-addition-popout").myFadeInTop(null, 150);
    });
    $(".feeder-feeding-func-each.collar").on("mouseleave", function () {
        $(".feeder-addition-popout-wrap.collar .feeder-addition-popout").myFadeInTopOut(function () {
            $(".feeder-addition-popout-wrap.collar").hide();
        }, 150);
    });

    var obj = new Image();
    obj.src = "./images/Feeder1.png";
    obj.onload = function () { //预先加载背景
        setTimeout(function () {
            $("#feeder-feeder-pic").animate({
                "left": "0px"
            }, {
                duration: 800,
                easing: "easeInOutExpo"
            });
        }, 500);
        setTimeout(function () {
            $("#feeder-dog1-pic").show().animate({
                "top": "0px"
            });
        }, 1500);
    };
    resizeFunc();
});