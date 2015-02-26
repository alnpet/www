$(document).ready(function () {
    var changeSize = function () {
        size = getViewSizeWithoutScrollbar();
        //$("#collar-smart-single").css("left", 0 - size.width + "px");
        resizeScroll();
        if (size.width < 975) {
            $("#collar-smart-pictures .right-part").hide();
        } else {
            $("#collar-smart-pictures .right-part").show();
        }
        if (size.width < 950) {
            var marginLeft = parseInt((size.width - 139 * 4) / 3 - 10, 10);
            $("#collar-special-wrap .collar-special-each").css("marginLeft", marginLeft + "px");
            $("#collar-special-wrap").css("marginLeft", "-" + marginLeft + "px");
        } else {

        }
    };
    var resizeScroll = function () {
        var collarHeight = $("#collar-smart-collar").height();
        marginToKitchen = collarHeight;
        // 183为中间隔断高度的一般防止覆盖
        marginFromKitchen = scrollPic(1920, 1324, $("#collar-finger").height(), marginToKitchen, $(
            "#collar-kitchen-bg-wrap"), $(
            "#collar-kitchen-bg"), $("#collar-finger").height() + 400, "top", false);
        marginToKitchen = marginToKitchen - 250;
        var collarHeight = $("#collar-smart-collar").height();
        marginToCity = collarHeight + 1070;
        marginFromCity = scrollPic(1920, 1283, $("#collar-specials").height(), marginToCity, $(
            "#collar-city-bg-wrap"), $(
            "#collar-city-bg"), $("#collar-specials").height() + 183, null, false);
    }
    popoutBind($(".collar-special-each.activity"), $(".feeder-addition-popout-wrap.activity"), 15, 15);
    popoutBind($(".collar-special-each.emotional"), $(".feeder-addition-popout-wrap.emotional"), 15, 15);
    popoutBind($(".collar-special-each.lowpower"), $(".feeder-addition-popout-wrap.lowpower"), 15, 15);
    popoutBind($(".collar-special-each.waterproof"), $(".feeder-addition-popout-wrap.waterproof"), 15, 15);
    $(window).resize(function () {
        changeSize();
    });
    $(window).scroll(function () {
        var scrollObj = GetPageScroll();
        var scrollTop = scrollObj.Y;
        var nowHeight = getViewSizeWithoutScrollbar().height + scrollTop;
        var collarHeight = $("#collar-smart-collar").height();
        if (nowHeight >= collarHeight + 135) {
            var marginTop = marginFromKitchen + (nowHeight - (collarHeight + 135)) * (marginToKitchen -
                marginFromKitchen) / (
                size
                .height + $("#collar-finger").height());
            $("#collar-kitchen-bg-wrap").animate({
                'marginTop': marginTop + "px"
            }, 0);
        }
        if (nowHeight >= collarHeight + 1085) {
            var marginTop = marginFromCity + (nowHeight - (collarHeight + 1085)) * (marginToCity -
                marginFromCity) / (
                size
                .height + $("#collar-finger").height());
            $("#collar-city-bg-wrap").animate({
                'marginTop': marginTop + "px"
            }, 0);
        }
        if (nowHeight >= collarHeight + 688 && pageTwoFlag === true) {
            pageTwoFlag = false;
            $("#collar-hand-phone").animate({
                "marginTop": "140px"
            }, 300);
            setTimeout(function () {
                $("#collar-finger-content h1").myFadeIn();
            }, 400);
            setTimeout(function () {
                $("#collar-get-tech").myFadeIn();
            }, 600);
        }
        if (nowHeight >= collarHeight + 1037 && pageThreeFlag === true) {
            pageThreeFlag = false;
            setTimeout(function () {
                $("#collar-design p").myFadeIn();
            }, 500);
        }
    });
    changeSize();
    pageTwoFlag = pageThreeFlag = pageFourFlag = true;
    $("#collar-smart-single").css("left", 0 - size.width + "px");
    setTimeout(function () {
        $("#collar-smart-single").animate({
            "left": "0px"
        }, 300, function () {
            $("#collar-dog-food").animate({
                "bottom": "0px"
            }, 300, function () {
                $("#collar-straight").animate({
                    "top": "0px"
                }, 300, function () {
                    setTimeout(function () {
                        $("#collar-smart-content h1").myFadeIn();
                        setTimeout(function () {
                            $("#collar-smart-content p").myFadeIn();
                            setTimeout(function () {
                                $(
                                    "#collar-smart-content .smart-pre-order"
                                ).myFadeIn();
                            }, 200);
                        }, 200);
                    }, 100);
                });
            });
        });
    }, 500);
});