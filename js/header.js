var liFadeIn = function (obj, num, max, timeout) {
    if (timeout == null) {
        timeout = 140;
    }
    $(obj).myFadeIn(function () {
        if (num < max) {
            liFadeIn(obj.next(), num + 1, max, timeout);
        }
    }, timeout);
};
var scrollPic = function (imgWidth, imgHeight, essentialHeight, marginTo, jqueryObj, jqueryObjInner, limitHeight, position, limit) {
    var widthTemp = size.width;
    var newWidth;
    var newHeight;
    var wrapWidth;
    if (limit === false) {
        wrapWidth = widthTemp;
    } else {
        wrapWidth = widthTemp > 990 ? widthTemp : 990;
    }
    var wrapHeight = wrapWidth / imgWidth * imgHeight > essentialHeight ? wrapWidth / imgWidth * imgHeight :
        essentialHeight;
    if (limitHeight) {
        wrapHeight = limitHeight;
    }
    resizePic(wrapWidth, wrapHeight * 1.2, imgWidth, imgHeight, jqueryObj, jqueryObjInner, position);
    marginFrom = marginTo - (parseInt(jqueryObj.height(), 10) - essentialHeight - 10);
    jqueryObj.css("marginTop", marginFrom + "px");
    return marginFrom;

};
var changeScale = function (jqueryObj, prevWidth, prevHeight, scaleTemp) {
    var calcScale;
    if (scaleTemp) {
        calcScale = scaleTemp;
    } else {
        calcScale = scale;
    }
    var marginLeft = (prevWidth - size.width) / 2;
    var marginTop = (prevHeight - prevHeight * scale) / 2;
    $(jqueryObj).css({
        "transform": "scale(" + calcScale + ", " + calcScale + ")",
        "-ms-transform": "scale(" + calcScale + ", " + calcScale + ")",
        /* IE 9 */
        "-moz-transform": "scale(" + calcScale + ", " + calcScale + ")",
        /* Firefox */
        "-webkit-transform": "scale(" + calcScale + ", " + calcScale + ")",
        /* Safari 和 Chrome */
        "-o-transform": "scale(" + calcScale + ", " + calcScale + ")",
        /* Opera */
        "left": 0 - marginLeft + "px",
        "top": 0 - marginTop + "px",
        "width": prevWidth + "px",
        "height": prevHeight + "px"
    });
};
var recoverScale = function (jqueryObj) {
    $(jqueryObj).css({
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
        "top": "0px"
    });
};
var resizePic = function (wrapWidth, wrapHeight, imgWidth, imgHeight, wrapObj, Obj, position) {
    wrapObj.css("width", wrapWidth + "px");
    wrapObj.css("height", wrapHeight + "px");
    var wrapRatio = wrapWidth / wrapHeight;
    var ratio = imgWidth / imgHeight;
    if (wrapRatio > ratio) {
        newWidth = wrapWidth;
        newHeight = wrapWidth / ratio;
        Obj.css("width", newWidth + "px");
        Obj.css("height", newHeight + "px");
        if (position !== "top") {
            Obj.css("marginTop", 0 - parseInt(((newHeight - wrapHeight) / 2), 10));
        } else {
            Obj.css("marginTop", "0px");
        }
        Obj.css("marginLeft", "0px");

    } else {
        newHeight = wrapHeight;
        newWidth = wrapHeight * ratio;
        Obj.css("height", newHeight + "px");
        Obj.css("width", newWidth + "px");
        if (position !== "right") {
            Obj.css("marginLeft", 0 - parseInt(((newWidth - wrapWidth) / 2), 10));
        }
        if (position == "right") {
            Obj.css("marginLeft", 0 - parseInt(((newWidth - wrapWidth)), 10));
        }
        Obj.css("marginTop", "0px");
    }
};
/**
 * 获取元素距离页面的上边距
 *
 * @param {DOM} e 要获取坐标的dom元素
 * @return {number} 元素纵坐标
 */
var getTop = function (e) {
    var offset = e.offsetTop;
    if (e.offsetParent) {
        offset += this.getTop(e.offsetParent);
    }
    return offset;
};
/**
 * 获取元素距离页面左边的左边距
 *
 * @param {DOM} e 要获取坐标的dom元素
 * @return {number} 元素横坐标
 */
var getLeft = function (e) {
    var offset = e.offsetLeft;
    if (e.offsetParent) {
        offset += this.getLeft(e.offsetParent);
    }
    return offset;
};
var popoutBind = function (jqueryObj, popoutObj, topReduce, leftReduce) {
    $(jqueryObj).on("mouseenter", function () {
        $(popoutObj).show();
        var top = getTop($(this)[0]) - $(popoutObj).height() - topReduce;
        var left = getLeft($(this)[0]) - leftReduce;
        $(popoutObj).css({
            "marginLeft": left + "px",
            "marginTop": top + "px"
        });
        $(popoutObj).find(".feeder-addition-popout").myFadeInTop(null, 150);
    });
    $(jqueryObj).on("mouseleave", function () {
        $(popoutObj).find(".feeder-addition-popout").myFadeInTopOut(function () {
            $(popoutObj).hide();
        }, 150);
    });
};
$.prototype.myFadeIn = function (func, time) {
    if (func == null) {
        func = function () {};
    }
    if (time == null) {
        time = 400;
    }
    if (isNaN(parseFloat($(this).css("top"))) !== true) {
        var top = $(this).css("top");
        $(this).show().css({
            "position": "relative",
            "top": parseInt(top, 10) + 5 + "px",
            "opacity": "0.2"
        }).animate({
            "top": top,
            "opacity": "1"
        }, {
            ease: "easeInQuint",
            duration: time,
            complete: func
        });
    } else {
        $(this).show().css({
            "position": "relative",
            "top": "5px",
            "opacity": "0.2"
        }).animate({
            "top": "0px",
            "opacity": "1"
        }, {
            ease: "easeInQuint",
            duration: time,
            complete: func
        });
    }
};
$.prototype.myFadeInTop = function (func, time) {
    if (func == null) {
        func = function () {};
    }
    if (time == null) {
        time = 400;
    }
    $(this).show().css({
        "position": "relative",
        "bottom": "5px",
        "opacity": "0.2"
    }).animate({
        "bottom": "0px",
        "opacity": "1"
    }, {
        ease: "easeInQuint",
        duration: time,
        complete: func
    });
};
$.prototype.myFadeInTopOut = function (func, time) {
    if (func == null) {
        func = function () {};
    }
    if (time == null) {
        time = 400;
    }
    $(this).show().css({
        "position": "relative",
        "bottom": "0px",
        "opacity": "1"
    }).animate({
        "bottom": "5px",
        "opacity": "0.2"
    }, {
        ease: "easeInQuint",
        duration: time,
        complete: func
    });
};

function getViewSizeWithoutScrollbar() { //不包含滚动条 
    return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    };
}

function getViewSizeWithScrollbar() { //包含滚动条 
    if (window.innerWidth) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    } else if (document.documentElement.offsetWidth == document.documentElement.clientWidth) {
        return {
            width: document.documentElement.offsetWidth,
            height: document.documentElement.offsetHeight
        };
    } else {
        return {
            width: document.documentElement.clientWidth + getScrollWith(),
            height: document.documentElement.clientHeight + getScrollWith()
        };
    }
}

function GetPageScroll() {
    var x, y;
    if (window.pageYOffset) { // all except IE    
        y = window.pageYOffset;
        x = window.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) { // IE 6 Strict    
        y = document.documentElement.scrollTop;
        x = document.documentElement.scrollLeft;
    } else if (document.body) { // all other IE    
        y = document.body.scrollTop;
        x = document.body.scrollLeft;
    }
    return {
        X: x,
        Y: y
    };
}
var preorderShow = function () {
    $(".addition-tpl").remove();
    $.ajax({
        url: "./preorder.tpl",
        dataType: "text",
        success: function (content) {
            $("body").prepend(content);
            var scrollObj = GetPageScroll();
            var scrollTop = scrollObj.Y;
            var nowHeight = getViewSizeWithoutScrollbar().height + scrollTop;
            var heightTemp = nowHeight - 800 > 0 ? nowHeight - 800 : 0;
            $("#preorder-popout-wrap").css("marginTop", heightTemp + "px");
            if (size.width < 1040) {
                changeScale($("#preorder-popout"), 1040, 638, 660 / 1040);
                var left = (size.width) / 2;
                $("#preorder-popout").css({
                    "top": "0px"
                });
            }
            $("#preorder-popout").hide().myFadeIn();
        }
    });
};
var newsletterShow = function () {
    $(".addition-tpl").remove();
    $.ajax({
        url: "./newsletter.tpl",
        dataType: "text",
        success: function (content) {
            $("body").prepend(content);
            var scrollObj = GetPageScroll();
            var scrollTop = scrollObj.Y;
            var nowHeight = getViewSizeWithoutScrollbar().height + scrollTop;
            var heightTemp = nowHeight - 800 > 0 ? nowHeight - 800 : 0;
            $("#newsletter-popout-wrap").css("marginTop", heightTemp + "px");
            if (size.width < 990) {
                changeScale($("#newsletter-popout"), 912, 545, 660 / (912));
                $("#newsletter-popout").css({
                    "top": "40px",
                    "paddingLeft": "0px"
                });
            }
            $("#newsletter-popout").hide().myFadeIn();
        }
    });
};
$(document).ready(function () {
    var i = document.getElementsByTagName("meta");
    var scaleTemp;
    scaleTemp = $(document).width() / 626;
    metaScale = scaleTemp;
    i[1]["content"] = "width=626, initial-scale=" + scaleTemp;
    var options = {
        url: '/pet/ajax/newsletter?op=signup',
        type: 'post',
        dataType: 'text',
        success: function (data) {　　　　　　
            alert("Submit successfully!");　　　
            $(".addition-tpl").remove();
        },
        error: function (data) {
            alert("Submit failed!");
        }
    };
    $(document).on("click", ".smart-pre-order,#pre-order-button", function () {
        preorderShow();
    });
    $(document).on("click", "#phone-nav .pre-order", function () {
        $("#phone-nav").remove();
        $("#main-container").show();
        preorderShow();
    });
    $(document).on("click", ".news-letter-button", function () {
        newsletterShow();
    });
    $(document).on("click", "#order-join-button", function () {
        newsletterShow();
    });
    $(document).on("submit", "#newsletter-form", function () {
        $("#newsletter-form").ajaxSubmit(options);
        return false;
    });
    $(document).on("click", ".popout .delete-icon", function () {
        $(".addition-tpl").remove();
    });
    $(document).on("click", "#newsletter-submit", function () {
        if ($("#newsletter-name").val() !== "") {
            if ($("#newsletter-email").val() !== "") {

            } else {
                alert("Email is empty!");
            }
        } else {
            alert("Name is empty!");
        }
    })
    $(".social-media-img").on("mouseover", function () {
        var src = $(this).attr("src");
        $(this).attr("src", src.split("_")[0] + "_on.gif");
    }).on("mouseout", function () {
        var src = $(this).attr("src");
        $(this).attr("src", src.split("_")[0] + "_off.gif");
    });
    var preloadImg = ["./images/facebook_on.gif", "./images/twitter_on.gif", "./images/instagram_on.gif",
        "./images/pinterest_on.gif", "./images/linkedin_on.gif", "./images/youtube_on.gif", "./images/newsletter bg.png"
    ];
    for (var i = 0; i < preloadImg.length; i++) {
        obj = new Image();
        obj.src = preloadImg[i];
    }
    $(".arrow-wrap").on("mouseover", function () {
        $(this).attr("value", $(this).find(".intro").text());
        $(this).find('.intro').text("learn more");
    }).on("mouseout", function () {
        $(this).find('.intro').text($(this).attr("value"));
    });
    $(".arrow-wrap").on("mouseenter", function () {
        var obj = $(this).find("img");
        $(obj).stopRotate();
        var angle = $(obj).getRotateAngle();
        $(obj).rotate({
            angle: angle,
            duration: 500,
            animateTo: -90
        });
    }).on("mouseleave", function () {
        var obj = $(this).find("img");
        $(obj).stopRotate();
        var angle = $(obj).getRotateAngle();
        $(obj).rotate({
            angle: angle,
            duration: 500,
            animateTo: 0
        });
    });
    size = getViewSizeWithScrollbar();
    var resizeHeader = function () {
        if (size.width < 990) {
            $("#pre-order-button").css({
                "position":"relative",
                "top":"-30px",
                "right":"20px",
                "height": "30px",
                "line-height": "30px"
            });
            $("#pre-order-button").show();
            $("#top-nav-content .news-letter-button").hide();
            //$("#top-nav-small-button-wrap").hide();
            //$("#page-direct-line").hide();
            $(".top-nav-right-button").css({
                "font-size": "20px",
                "height": "20px",
                "line-height": "20px",
                "marginBottom": "-14px"
            });
            //$("#phone-nav-button").show();
            $("#bottom-nav-right-wrap").css({
                "width": "100%",
                "text-align": "center"
            });
            $("#copyright-line").css({
                "font-size": "24px",
                "margin-left": "auto",
                "margin-right": "auto",
                "width": "475px",
                "text-align": "center"
            });
            $("#top-nav-small-button-wrap").css({
                "marginRight": "0px"
            });
            $("#page-direct-line a").hide();
            $("#top-nav-small-button-wrap img").css({
                "width": "22px",
                "height": "24px",
                "marginRight": "9px"
            });
            $("#bottom-nav-small-button-wrap a img").css({
                "width": "28px",
                "height": "30px",
                "marginRight": "9px"
            });
            $(".news-letter-button .intro").css({
                "width": "148px",
                "font-size": "16px",
                "line-height": "30px"
            });
            $(".news-letter-button").css({
                "width": "170px",
                "height": "30px"
            });
            $(".news-letter-button img").css({
                "marginTop":"9px"
            });
        } else {
            $("#pre-order-button").css({
                "position": "relative",
                "top": "0px",
                "right": "0px",
                "z-index": "1",
                "height": "21px",
                "line-height": "21px"
            });
            $("#top-nav-content .news-letter-button").show();
            $("#top-nav-small-button-wrap").show();
            $("#top-nav-small-button-wrap").css({
                "marginRight": "50px"
            });
            $("#top-nav-small-button-wrap img").css({
                "width": "14px",
                "height": "15px",
                "marginRight": "3px"
            });
            $("#bottom-nav-small-button-wrap a img").css({
                "width": "14px",
                "height": "15px",
                "marginRight": "3px"
            });
            $("#page-direct-line a").show();
            $("#page-direct-line div").show();
            $("#page-direct-line").show();
            $(".top-nav-right-button").css({
                "font-size": "12px",
                "height": "11px",
                "line-height": "11px",
                "marginBottom": "0px"
            });
            $("#phone-nav-button").hide();
            $("#bottom-nav-right-wrap").css({
                "width": "auto",
                "text-align": "left"
            });
            $("#copyright-line").css({
                "font-size": "12px",
                "margin-left": "0px",
                "margin-right": "0px",
                "width": "auto",
                "text-align": "left"
            });
            $(".news-letter-button .intro").css({
                "width": "114px",
                "font-size": "12px",
                "line-height": "23px"
            });
            $(".news-letter-button img").css({
                "marginTop":"6px"
            });
            $(".news-letter-button").css({
                "width": "136px",
                "height": "23px"
                
            });
        }
    };
    $(window).resize(function () {
        size = getViewSizeWithoutScrollbar();
        resizeHeader();
    });
    $("#phone-nav-button").click(function () {
        $("#main-container").hide();
        $.ajax({
            url: "./phonenav.tpl",
            dataType: "text",
            success: function (content) {
                $("body").prepend(content);
            }
        });
    });
    $(document).on("click", "#phone-nav-delete", function () {
        $("#phone-nav").remove();
        $("#main-container").show();
    });
    resizeHeader();

});
