$(document).ready(function () {
    var ratio = 1422 / 599;


    var bindEvent = function () {
        $(".product-img").on("mouseout", function () {
            /**var obj = this;
            interval1 = setInterval(function () {
                var transform = $(obj).css("transform");
                var scale = parseFloat(transform.replace("matrix(", "").split(",")[0], 10) - 0.0125;
                if (scale === 1) {
                    clearInterval(interval1);
                }
                $(obj).css("transform", "scale(" + scale + "," + scale + ")");
            }, 50);**/
            $(this).addClass("back");
            var obj = this;
            setTimeout(function () {
                $(obj).removeClass("back");
            }, 500);
        });
        var pageTwoFlag = pageThreeFlag = pageFourFlag = true;
        $(window).resize(function () {
            size = getViewSizeWithoutScrollbar();
            resizeMobile();
            resize();
            resizeDog();
            resizeApp();

        });

        $(window).scroll(function () {
            var heightAdd = parseInt($("#show-content-hold-place").height(), 10) + parseInt($(
                "#feeder-content").height(), 10);
            var scrollObj = GetPageScroll();
            var scrollTop = scrollObj.Y;
            var nowHeight = getViewSizeWithoutScrollbar().height + scrollTop;
            marginFrom = heightAdd + 643 - (parseInt($("#app-img-wrap").height(), 10) - 370);
            marginTo = heightAdd + 643;
            if (size.width >= 990) {
                scale = 1;
            }
            marginFrom2 = 645 - 600 + 600 * scale;
            marginTo2 = 745 - 600 + 600 * scale;
            var showContentHeight = parseInt($("#show-content-hold-place").height());
            var feederContentHeight = parseInt($("#feeder-content").height()) + 47;
            var appContentHeight = parseInt($("#app-content").height()) + 54;
            var collarContentHeight = parseInt($("#collar-content").height());
            if (nowHeight >= (320 + parseInt($("#show-content-hold-place").height())) &&
                pageTwoFlag === true) { //enter page two
                pageTwoFlag = false;
                $("#system-content h1").myFadeIn();
                setTimeout(function () {
                    liFadeIn($("#system-icon-wrap img:first"), 0, $("#system-icon-wrap img")
                        .size(), 250);
                }, 250);
                setTimeout(function () {
                    $("#tell-more").myFadeIn();
                }, 500 + 250 * 5);
            }
            if (nowHeight >= (890 + parseInt($("#show-content-hold-place").height())) &&
                pageThreeFlag === true) { //enter page three
                pageThreeFlag = false;
                $("#feeder-content h1").myFadeIn();
                setTimeout(function () {
                    liFadeIn($("#feeder-func-list li:first"), 0, $("#feeder-func-list li").size());
                    //$("#feeder-func-list li").myFadeIn();
                }, 250);
                setTimeout(function () {
                    $("#time-eat").myFadeIn();
                }, 500 + 140 * 5);
            }
            if (nowHeight >= (818 + showContentHeight + appContentHeight + feederContentHeight) &&
                pageFourFlag === true) { //enter page four
                pageFourFlag = false;
                $("#collar-right-content h1").myFadeIn();
                setTimeout(function () {
                    liFadeIn($("#collar-func-list li:first"), 0, $("#collar-func-list li").size());
                }, 250);
                setTimeout(function () {
                    $("#get-moving").myFadeIn();
                }, 500 + 140 * 4);
            }
            if (nowHeight >= (heightAdd + 768) && nowHeight <= (heightAdd + 768) + size.height) {
                var marginTop = marginFrom + (nowHeight - (heightAdd + 768)) * (marginTo -
                    marginFrom) / (size.height);
                $("#app-img-wrap").animate({
                    'marginTop': marginTop + "px"
                }, 0);
            }
            if (nowHeight >= 730 && nowHeight <= 730 + size.height) {
                var marginTop = marginFrom2 + (nowHeight - 730) * (marginTo2 - marginFrom2) / (size
                    .height);
                $("#system-content-wrap").animate({
                    'marginTop': marginTop + "px"
                }, 0);
            }
        });

    };
    var resize = function () {
        var heightTemp = size.height - 134;
        var widthTemp = size.width>990?size.width:990;
        var imgWidth = 1920;
        var imgHeight = 800;
        var newWidth;
        var newHeight;
        var wrapWidth = widthTemp;
        var wrapHeight = 600;
        resizePic(wrapWidth, wrapHeight, imgWidth, imgHeight, $("#main-bg-wrap"), $("#main-bg"));
        $("#show-content").css("height", parseInt($("#main-bg-wrap").css("height"), 10) - 45 + "px");
        $("#app-img").css("width", wrapWidth);
        $("#app-img").css("height", "600px");
    };
    var resizeDog = function () {
        var widthTemp = size.width;
        var imgWidth = 1920;
        var imgHeight = 748;
        var newWidth;
        var newHeight;
        var wrapWidth = widthTemp;
        var wrapHeight = 543;
        resizePic(wrapWidth, wrapHeight, imgWidth, imgHeight, $("#collar-bg-wrap"), $(
            "#collar-content .bg-img"));
    };
    var resizeApp = function () {
        var widthTemp = size.width;
        var imgWidth = 1920;
        var imgHeight = 600;
        var newWidth;
        var newHeight;
        var wrapWidth = widthTemp;
        var appHeight = parseInt($("#app-content").height(), 10) + 200;
        var wrapHeight = wrapWidth / imgWidth * imgHeight > appHeight ? wrapWidth / imgWidth * imgHeight :
            appHeight;
        resizePic(wrapWidth, wrapHeight * 1.1, imgWidth, imgHeight, $("#app-img-wrap"), $("#app-img"));
    };
    var resizeMobile = function () {
        if (size.width < 990) {
            $("#feeder-video-audio").hide();
            $("#feeder-pointer").hide();
            $("#feeder-dog").hide();
            $("#feeder-right-content").css({
                "position": "relative",
                "left": "50%",
                "marginLeft": "-180px",
                "clear": "both"
            });
            $("#feeder-content .large-feeder").css("marginLeft", "10%");
            $(".large-feeder").css({
                "position": "relative",
                "top": "120px"
            });
            $("#feeder-right-content-hide h1").css({
                "position": "relative",
                "top": "-680px"
            });
        } else {
            $("#feeder-pointer").show();
            $("#feeder-right-content").css({
                "position": "relative",
                "left": "0%",
                "marginLeft": "0px",
                "clear": "none"
            });
            $("#feeder-content .large-feeder").css("marginLeft", "-105px");
            $(".large-feeder").css({
                "top": "0px"
            });
            $("#feeder-right-content-hide h1").css({
                "top": "0px"
            });
        }
        if (size.width < 990) {

            scale = size.width / 990;
            var marginLeft = (990 - size.width) / 2;
            var marginTop = (600 - 600 * scale) / 2;
            var heightAdd = parseInt($("#show-content-hold-place").height(), 10) + parseInt($(
                "#feeder-content").height(), 10);
            $("#show-content-wrap").css({
                "transform": "scale(" + scale + ", " + scale + ")",
                "-ms-transform": "scale(" + scale + ", " + scale + ")",
                /* IE 9 */
                "-moz-transform": "scale(" + scale + ", " + scale + ")",
                /* Firefox */
                "-webkit-transform": "scale(" + scale + ", " + scale + ")",
                /* Safari 和 Chrome */
                "-o-transform": "scale(" + scale + ", " + scale + ")",
                /* Opera */
                "left": 0 - marginLeft + "px",
                "top": 0 - marginTop + "px",
                "width": "990px",
                "height": "600px"
            });
            $("#show-content-hold-place").css({
                "width": size.width,
                "height": 600 * scale + "px"
            });
            $("#show-content").css({
                "paddingLeft": "20px"
            });
            $("#product-tag-line").css({
                "paddingLeft": "20px"
            });
            var marginTop = (128 - 128 * scale) / 2;
            var marginLeft = (775 - size.width) / 2;
            $("#system-icon-wrap").css({
                "transform": "scale(" + scale + ", " + scale + ")",
                "-ms-transform": "scale(" + scale + ", " + scale + ")",
                /* IE 9 */
                "-moz-transform": "scale(" + scale + ", " + scale + ")",
                /* Firefox */
                "-webkit-transform": "scale(" + scale + ", " + scale + ")",
                /* Safari 和 Chrome */
                "-o-transform": "scale(" + scale + ", " + scale + ")",
                /* Opera */
                "left": 0 - marginLeft + "px",
                "top": 0 - marginTop + "px",
                "width": "775px",
                "height": "128px",
                "marginLeft": "0px",
                "marginRight": "0px"
            });
            $("#system-icon-hold-place").css({
                "width": size.width,
                "height": 128 * scale + "px"
            });

            $("#collar-right-content").css({
                "float": "right"
            });
        } else {
            marginFrom = 1965 - (parseInt($("#app-img-wrap").height(), 10) - 370);
            marginTo = 1965;
            marginTo = 1965;
            marginFrom2 = 645;
            marginTo2 = 745;
            $("#top-nav-content .news-letter-button").show();
            $("#top-nav-small-button-wrap").show();
            $("#show-content-wrap").css({
                "transform": "scale(1,1)",
                "-ms-transform": "scale(1,1)",
                /* IE 9 */
                "-moz-transform": "scale(1,1)",
                /* Firefox */
                "-webkit-transform": "scale(1,1)",
                /* Safari 和 Chrome */
                "-o-transform": "scale(1,1)",
                /* Opera */
                "left": "0px",
                "top": "0px",
                "width": "auto",
                "height": "auto"
            });
            $("#show-content").css({
                "paddingLeft": "0px"
            });
            $("#product-tag-line").css({
                "paddingLeft": "0px"
            });
            $("#show-content-hold-place").css({
                "width": "auto",
                "height": "auto"
            });
            $("#system-icon-wrap").css({
                "transform": "scale(1,1)",
                "-ms-transform": "scale(1,1)",
                /* IE 9 */
                "-moz-transform": "scale(1,1)",
                /* Firefox */
                "-webkit-transform": "scale(1,1)",
                /* Safari 和 Chrome */
                "-o-transform": "scale(1,1)",
                /* Opera */
                "left": "0px",
                "top": "0px",
                "width": "775px",
                "height": "auto",
                "marginLeft": "auto",
                "marginRight": "auto"
            });

            $("#system-icon-hold-place").css({
                "width": "auto",
                "height": "auto"
            });

            $("#collar-right-content").css({
                "float": "left"
            });
        }
        if (size.width < 624) {
            $("#app-small-phone").css({
                "position": "relative",
                "top": "50px",
                "left": "35px",
                "marginLeft": "10%"
            });
            $("#app-right-content").css("marginLeft", "10%");
            $("#app-right-content h1").css({
                "position": "relative",
                "top": "-220px"
            });
        } else {
            $("#app-small-phone").css({
                "top": "0px",
                "left": "0px",
                "marginLeft": "0%"
            });
            $("#app-right-content").css("marginLeft", "0%");
            $("#app-right-content h1").css({
                "top": "0px"
            });
        }
    };
    size = getViewSizeWithoutScrollbar();
    resizeMobile();
    resize();
    resizeDog();
    resizeApp();
    var obj = new Image();
    obj.src = "./images/main-bg.png";
    obj.onload = function () { //预先加载背景
        setTimeout(function () {
            $("#show-content h1").animate({
                "left": "0px"
            }, {
                duration: 800,
                easing: "easeInOutExpo"
            });
        }, 500);
        setTimeout(function () {
            $(".product-each:eq(0)").myFadeIn();
            setTimeout(function () {
                $(".product-add-icon:eq(0)").myFadeIn();
            }, 250);
            setTimeout(function () {
                $(".product-each:eq(1)").myFadeIn();
            }, 500);
            setTimeout(function () {
                $(".product-add-icon:eq(1)").myFadeIn();
            }, 750);
            setTimeout(function () {
                $(".product-each:eq(2)").myFadeIn();
            }, 1000);
        }, 1500);
        setTimeout(function () {
            $("#show-content h2").animate({
                "left": "0px"
            }, {
                duration: 800,
                easing: "easeInOutExpo"
            });
        }, 2800);
        setTimeout(function () {
            $(".product-tag:first").animate({
                "bottom": "0px",
                "height": "62px"
            }, 300)
        }, 3500);
        setTimeout(function () {
            $(".product-tag:eq(1)").animate({
                "bottom": "0px",
                "height": "62px"
            }, 300)
        }, 4000);

        setTimeout(function () {
            $(".product-tag:eq(2)").animate({
                "bottom": "0px",
                "height": "62px"
            }, 300)
        }, 4500);

    };

    bindEvent();
});