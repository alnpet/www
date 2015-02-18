$(document).ready(function () {
    var resizeFunc = function () {
        size = getViewSizeWithoutScrollbar();
        resizePetSystem();
        resizePhotoShow();
        resizeScroll();
        resizeTechPower();
        if (size.width < 990) {
            scale = size.width / 990;
            changeScale($("#happy-pet-system"), 990, 620);
            $("#motion-hand-phone").addClass("hide").hide();
            $("#happy-pet-placeholder").css("height", 620 * scale + "px");
            $("#tech-better-connection-content").css({
                "marginRight": "2%"
            });
            $("#tech-diagram").css({
                "transform": "scale(" + scale + ", " + scale + ")",
                "-ms-transform": "scale(" + scale + ", " + scale + ")",
                /* IE 9 */
                "-moz-transform": "scale(" + scale + ", " + scale + ")",
                /* Firefox */
                "-webkit-transform": "scale(" + scale + ", " + scale + ")",
                /* Safari 和 Chrome */
                "-o-transform": "scale(" + scale + ", " + scale + ")"
            });
            $("#collar-proof img").css({
                "width": 857 * scale + "px",
                "height": 199 * scale + "px"
            });
            $("#collar-proof").css({
                "width": 857 * scale + "px",
                "height": 199 * scale + "px"
            });
            $("#tech-photo-show p").css({
                "font-size": "14px"
            });
            if (size.width < 665) {
                $("#tech-photo-show p").css({
                    "font-size": "12px"
                });
            }
            if (size.width < 940) {
                $("#tech-feeding-bowl .right-part").css({
                    "marginTop": "0px",
                    "float": "left",
                    "marginLeft": "10%"
                });
            } else {
                $("#tech-feeding-bowl .right-part").css({
                    "marginTop": "69px",
                    "float": "right",
                    "marginLeft": "0px"
                });
            }
            if (size.width < 620) {
                $("#accurate-motion-wrap").css({
                    "width": "100%"
                });
                $(".accurate-motion-each").css({
                    "float": "left",
                    "marginRight": "20px"
                });
                $("#tech-motion-content h1").css({
                    "marginTop": "0px"
                });
                $("#tech-motion-content p").css({
                    "font-size": "20px"
                });
            } else {
                $("#accurate-motion-wrap").css({
                    "width": "auto"
                });
                $(".accurate-motion-each").css({
                    "float": "none",
                    "marginRight": "0px"
                });
                $("#tech-motion-content h1").css({
                    "marginTop": "123px"
                });
                $("#tech-motion-content p").css({
                    "font-size": "22px"
                });
            }
            if (size.width < 900) {
                $("#tech-low-power h1").css("color", "#333");
                $("#tech-low-power p").css("color", "#999");
            } else {
                $("#tech-low-power h1").css("color", "white");
                $("#tech-low-power p").css("color", "white");
            }
            resizeScroll();
        } else {
            recoverScale($("#happy-pet-system"));
            recoverScale($("#tech-diagram"));
            recoverScale($("#collar-proof"));
            $("#motion-hand-phone").removeClass("hide").show();
            $("#happy-pet-system").css({
                "width": "100%",
                "height": "620px",
                "transform": "none",
                "-webkit-transform": "none"
            });
            $("#happy-pet-placeholder").css("height", "620px");
            $("#tech-feeding-bowl .right-part").css({
                "marginTop": "69px",
                "float": "right",
                "marginLeft": "0px"
            });
            $("#tech-better-connection-content").css({
                "marginRight": "49px"
            });
            $("#tech-photo-show p").css({
                "font-size": "25px"
            });
            $("#accurate-motion-wrap").css({
                "width": "auto"
            });
            $(".accurate-motion-each").css({
                "float": "none",
                "marginRight": "0px"
            });
            $("#tech-motion-content h1").css({
                "marginTop": "123px"
            });
            $("#tech-motion-content p").css({
                "font-size": "22px"
            });
            $("#collar-proof img").css({
                "width": "857px",
                "height": "199px"
            });
            $("#collar-proof").css({
                "width": "857px",
                "height": "199px"
            });
            $("#tech-low-power h1").css("color", "white");
            $("#tech-low-power p").css("color", "white");
            resizeScroll();
        }
    };
    $(window).resize(function () {
        resizeFunc();
    });
    $(window).scroll(function () {
        var scrollObj = GetPageScroll();
        var scrollTop = scrollObj.Y;
        var nowHeight = getViewSizeWithoutScrollbar().height + scrollTop;
        var height = $("#happy-pet-placeholder").height();
        var height2 = $("#tech-feeding-bowl").height();
        var heightTemp = height + 138;
        if (nowHeight >= heightTemp && nowHeight <= (heightTemp + size.height + 371)) {
            var marginTop = marginFromEmotional + (nowHeight - heightTemp) * (marginToEmotional -
                marginFromEmotional) / (size
                .height + 371);
            $("#tech-emotional-bg-wrap").animate({
                'marginTop': marginTop + "px"
            }, 0);
        }
        heightTemp = height + 1228;
        if (nowHeight >= heightTemp && nowHeight <= (heightTemp + size.height + 455)) {
            var marginTop = marginFromData + (nowHeight - heightTemp) * (marginToData - marginFromData) / (
                size
                .height + 455);
            $("#tech-bigdata-bg-wrap").animate({
                'marginTop': marginTop + "px"
            }, 0);
        }
        heightTemp = height + height2 + 2147;
        if (nowHeight >= heightTemp && nowHeight <= (heightTemp + size.height + 457)) {
            var marginTop = marginFromPrecise + (nowHeight - heightTemp) * (marginToPrecise -
                marginFromPrecise) / (size
                .height + 457);
            $("#tech-precise-bg-wrap").animate({
                'marginTop': marginTop + "px"
            }, 0);
        }
        if (nowHeight >= height + 338 && pageTwoFlag === true) {
            pageTwoFlag = false;
            $("#tech-better-connection h1").myFadeIn();
            setTimeout(function () {
                liFadeIn($(".tech-connection-each:first"), 0, $(".tech-connection-each").size(),
                    200);
            }, 400);
        }
        if (nowHeight >= 1328) {
            $("#back-to-top").stop(true, false).animate({
                "marginLeft": "-108px"
            }, 500);
        } else {
            $("#back-to-top").stop(true, false).animate({
                "marginLeft": "0px"
            }, 500);
        }
        console.log(nowHeight);
        if (nowHeight >= height + 858 && pageThreeFlag === true) {

            pageThreeFlag = false;
            $("#tech-health h1").myFadeIn();
            setTimeout(function () {
                $("#tech-diagram img:first").fadeIn(140);
            }, 300);
            setTimeout(function () {
                $("#tech-diagram img:eq(1)").fadeIn(140);
            }, 500);
            setTimeout(function () {
                $("#tech-diagram img:eq(2)").fadeIn(140);
            }, 700);
            setTimeout(function () {
                $("#colorful-arrow").css("height", "0px").show().animate({
                    "height": "228px"
                }, 300);
            }, 900);
            setTimeout(function () {
                $("#big-data-center").fadeIn(140);
            }, 1300);
            setTimeout(function () {
                $("#hlineblue").css({
                    "width": "0px",
                    "marginLeft": "0px"
                }).show().animate({
                    "width": "274px",
                    "marginLeft": "-275px"
                }, 400);
            }, 1500);
            setTimeout(function () {
                $("#slineblue1").css({
                    "height": "0px"
                }).show().animate({
                    "height": "20px"
                }, 200);
            }, 1700);
            setTimeout(function () {
                $("#Precise-feeding").fadeIn();
            }, 1900);
            setTimeout(function () {
                $("#slineblue2").css({
                    "height": "0px"
                }).show().animate({
                    "height": "20px"
                }, 200);
            }, 1850);
            setTimeout(function () {
                $("#Balanced-nutrition").fadeIn();
            }, 2050);
            setTimeout(function () {
                $("#hlinegreen").css({
                    "width": "0px",
                    "marginLeft": "-129px"
                }).show().animate({
                    "width": "283px",
                    "marginLeft": "-412px"
                }, 400);
            }, 2250);
            setTimeout(function () {
                $("#slinegreen1").css({
                    "height": "0px"
                }).show().animate({
                    "height": "26px"
                }, 200);
            }, 2050);
            setTimeout(function () {
                $("#slinegreen2").css({
                    "height": "0px"
                }).show().animate({
                    "height": "37px"
                }, 200);
            }, 2600);
            setTimeout(function () {
                $("#physical-behavior").fadeIn(140);
            }, 2800);
            setTimeout(function () {
                $("#slinered1").css({
                    "height": "0px"
                }).show().animate({
                    "height": "62px"
                }, 200);
            }, 3000);
            setTimeout(function () {
                $("#Social-sharing").fadeIn(140);
            }, 3200);
            setTimeout(function () {
                $("#hlinered").css({
                    "width": "0px"
                }).show().animate({
                    "width": "280px"
                }, 400);
            }, 3200);
            setTimeout(function () {
                $("#slinered2").css({
                    "height": "0px"
                }).show().animate({
                    "height": "32px"
                }, 200);
            }, 3400);
            setTimeout(function () {
                $("#Veterinarian-advice").fadeIn(140);
            }, 3600);
            setTimeout(function () {
                $("#Emotionally-connect").fadeIn(140);
            }, 3800);
            setTimeout(function () {
                $("#slinered3").css({
                    "height": "0px"
                }).show().animate({
                    "height": "32px"
                }, 200);
            }, 3600);
        }
        if (nowHeight >= height + 1568 && pageFourFlag === true) {
            pageFourFlag = false;
            setTimeout(function () {
                $("#tech-big-data-content p").myFadeIn();
            }, 500);
        }
        if (nowHeight >= height + 2350 && pageSixFlag === true) {
            pageSixFlag = false;
            $("#tech-feeding-bowl .left-part img").animate({
                "left": "0px"
            }, 200);
            setTimeout(function () {
                $("#drawer-arrow-wrap").animate({
                    "height": "89px"
                }, 300);
            }, 400);
            setTimeout(function () {
                $("#tech-feeding-bowl h1").myFadeIn();
            }, 800);
            setTimeout(function () {
                $("#tech-feeding-bowl-content p").myFadeIn();
            }, 1000);
            setTimeout(function () {
                $(".tech-feeding-func-each").each(function (i, obj) {
                    var sizeTemp = 0 - parseInt(size.width / 2);
                    $(obj).css("right", sizeTemp + "px").show();
                });
                $(".tech-feeding-func-each:first").animate({
                    "right": "0px"
                }, 200);
                setTimeout(function () {
                    $(".tech-feeding-func-each:eq(1)").animate({
                        "right": "0px"
                    }, 200);
                }, 300);
            }, 1400);
            setTimeout(function () {
                if (size.width < 940) {
                    resizeScroll();
                }
            }, 2000);
        }
        if (nowHeight >= 3400 && pageSevenFlag === true) {
            pageSevenFlag = false;
            $("#tech-measure .right-part").animate({
                "bottom": "0px"
            }, 300);
            setTimeout(function () {
                $("#tech-scale-icon").myFadeIn();
                setTimeout(function () {
                    $("#tech-measure h1").fadeIn();
                    setTimeout(function () {
                        $("#tech-measure p").fadeIn();
                    }, 200);
                }, 200);
            }, 500);
        }
        if (nowHeight >= 3780 && pageEightFlag === true) {
            pageEightFlag = false;
            if (!$("#motion-hand-phone").hasClass("hide")) {
                $("#motion-hand-phone").fadeIn(200);
            }
            setTimeout(function () {
                $("#tech-motion-detect h1").myFadeIn();
                setTimeout(function () {
                    $("#tech-motion-content p").myFadeIn();
                }, 200);
                setTimeout(function () {
                    $(".accurate-motion-each").each(function (i, obj) {
                        var sizeTemp = 0 - parseInt(size.width / 2);
                        $(obj).css("left", sizeTemp + "px").show();
                    });
                    $(".accurate-motion-each:first").animate({
                        "left": "0px"
                    }, 200);
                    setTimeout(function () {
                        $(".accurate-motion-each:eq(1)").animate({
                            "left": "0px"
                        }, 200);
                    }, 300);
                    setTimeout(function () {
                        $(".accurate-motion-each:eq(2)").animate({
                            "left": "0px"
                        }, 200);
                    }, 600);
                }, 400);
            }, 400);
        }
        if (nowHeight >= 4300 && pageNineFlag === true) {
            pageNineFlag = false;
            $("#collar-proof img").addClass("big");
            setTimeout(function () {
                $("#tech-proof h1").myFadeIn();
            }, 1000);
            setTimeout(function () {
                var sizeTemp = 0 - parseInt(size.width / 2);
                $("#rate67").css({
                    "position": "relative",
                    "left": sizeTemp + "px"
                }).show();
                $("#tech-proof-content p").css({
                    "position": "relative",
                    "right": sizeTemp + "px"
                }).show();
                $("#rate67").animate({
                    "left": "0px"
                }, 300);
                $("#tech-proof-content p").animate({
                    "right": "0px"
                }, 300);
            }, 1200);
        }
        if (nowHeight >= 4800 && pageTenFlag === true) {
            pageTenFlag = false;
            $("#tech-low-power h1").myFadeIn();
            setTimeout(function () {
                $("#tech-low-power p").myFadeIn();
            }, 200);
            var changeDot = function (nowHeight) {
                var height = 82 / 6;
                var marginTop = parseInt($("#tech-bluetooth-dot-wrap").css("height"), 10);
                $("#tech-bluetooth-dot-wrap").css({
                    "height": nowHeight + "px",
                    "marginTop": DotMarginTop + 82 - nowHeight + "px"
                });
                $("#tech-bluetooth-dot").css({
                    "marginTop": -82 + nowHeight + "px"
                });
                nowHeight = nowHeight + height;
                if (nowHeight > 82) {
                    nowHeight = 0;
                }
                setTimeout(function () {
                    changeDot(nowHeight)
                }, 200);

            }
            changeDot(0);
        }
    });
    $("#back-to-top").on("click", function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
    });
    $(".tech-photo-show-each").on("mouseover", function () {
        $(this).parent().find(".tech-photo-show-each").css("width", "10%");
        $(this).css("width", "60%");
    }).on("mouseout", function () {
        $(this).parent().find(".tech-photo-show-each").css("width", "20%");
    });
    $(".tech-connection-each.mood").on("mouseenter", function () {
        $(".feeder-addition-popout-wrap.mood").show();
        var top = getTop($(this)[0]) - $(".feeder-addition-popout-wrap.mood").height() - 15;
        var left = getLeft($(this)[0]) - 45;
        $(".feeder-addition-popout-wrap.mood").css({
            "marginLeft": left + "px",
            "marginTop": top + "px"
        });
        $(".feeder-addition-popout-wrap.mood .feeder-addition-popout").myFadeInTop(null, 150);
    });
    $(".tech-connection-each.mood").on("mouseleave", function () {
        $(".feeder-addition-popout-wrap.mood .feeder-addition-popout").myFadeInTopOut(function () {
            $(".feeder-addition-popout-wrap.mood").hide();
        }, 150);
    });
    $(".tech-connection-each.video").on("mouseenter", function () {
        $(".feeder-addition-popout-wrap.video").show();
        var top = getTop($(this)[0]) - $(".feeder-addition-popout-wrap.video").height() - 15;
        var left = getLeft($(this)[0]) - 45;
        $(".feeder-addition-popout-wrap.video").css({
            "marginLeft": left + "px",
            "marginTop": top + "px"
        });
        $(".feeder-addition-popout-wrap.video .feeder-addition-popout").myFadeInTop(null, 150);
    });
    $(".tech-connection-each.video").on("mouseleave", function () {
        $(".feeder-addition-popout-wrap.video .feeder-addition-popout").myFadeInTopOut(function () {
            $(".feeder-addition-popout-wrap.video").hide();
        }, 150);
    });
    $(".tech-connection-each.voice").on("mouseenter", function () {
        $(".feeder-addition-popout-wrap.audio").show();
        var top = getTop($(this)[0]) - $(".feeder-addition-popout-wrap.audio").height() - 15;
        var left = getLeft($(this)[0]) - 45;
        $(".feeder-addition-popout-wrap.audio").css({
            "marginLeft": left + "px",
            "marginTop": top + "px"
        });
        $(".feeder-addition-popout-wrap.audio .feeder-addition-popout").myFadeInTop(null, 150);
    });
    $(".tech-connection-each.voice").on("mouseleave", function () {
        $(".feeder-addition-popout-wrap.audio .feeder-addition-popout").myFadeInTopOut(function () {
            $(".feeder-addition-popout-wrap.audio").hide();
        }, 150);
    });
    var rotateFunc = function (angle) {
        $(".tech-feeding-func-each.gear img").rotate({
            angle: angle,
            duration: 2000,
            animateTo: 360,
            easing: function (x, passTime, startAngle, moveAngle, duration) {
                return (startAngle + moveAngle / duration * passTime);
            },
            callback: function () {
                $(this).rotate({
                    animateTo: 0,
                    duration: 1
                });
                rotateFunc(0);
            }
        });
    };
    $(".tech-feeding-func-each.gear").on("mouseenter", function () {
        var angle = $(".tech-feeding-func-each.gear img").getRotateAngle();
        rotateFunc(angle);
    }).on("mouseleave", function () {
        $(".tech-feeding-func-each.gear img").stopRotate();
        $(".tech-feeding-func-each.gear img").rotate({
            animateTo: 0,
            duration: 1,
            callback: function () {}
        });
    });
    $(".tech-feeding-func-each.dog").on("mouseenter", function () {
        dogInterval = setInterval(function () {
            $(".tech-feeding-func-each.dog img").attr("src", "./images/dog face ON.png");
            setTimeout(function () {
                $(".tech-feeding-func-each.dog img").attr("src",
                    "./images/dog face.png");
            }, 200);
        }, 400);
    }).on("mouseleave", function () {
        clearInterval(dogInterval);
        $(this).find("img").attr("src", "./images/dog face.png");
    });
    var resizePetSystem = function () {
        var heightTemp = size.height - 134;
        var widthTemp = size.width;
        var imgWidth = 1920;
        var imgHeight = 800;
        var newWidth;
        var newHeight;
        var wrapWidth = widthTemp > 990 ? widthTemp : 990;
        var wrapHeight = 620;
        resizePic(wrapWidth, wrapHeight, imgWidth, imgHeight, $("#happy-pet-bg-wrap"), $("#happy-pet-bg"));
    };
    var resizeTechPower = function () {
        var heightTemp = size.height - 134;
        var widthTemp = size.width;
        var imgWidth = 1422;
        var imgHeight = 455;
        var newWidth;
        var newHeight;
        var wrapWidth = widthTemp > 990 ? widthTemp : 990;
        var wrapHeight = 455;
        resizePic(wrapWidth, wrapHeight, imgWidth, imgHeight, $("#tech-low-power-bg-wrap"), $(
            "#tech-low-power-bg"));
        var marginLeft = parseInt($("#tech-low-power-bg").css("marginLeft"), 10);
        var marginTop = parseInt($("#tech-low-power-bg").css("marginTop"), 10);
        var width = parseInt($("#tech-low-power-bg").css("width"), 10);
        var height = parseInt($("#tech-low-power-bg").css("height"), 10);
        $("#tech-bluetooth-dot-wrap").css({
            "marginLeft": width * 0.335443 + marginLeft + "px",
            "marginTop": height * 0.378 + marginTop + "px"
        });
        DotMarginTop = height * 0.378 + marginTop;
        $("#tech-bluetooth-wrap").css({
            "marginLeft": width * 0.314346 + marginLeft + "px",
            "marginTop": height * 0.2923 + marginTop + "px"
        });

    }
    var resizePhotoShow = function () {
        sizeTemp = size.width > 990 ? size.width : 990;
        var imgWidth = 854;
        var imgHeight = 462;
        var resizeHeight = sizeTemp * 0.6 / imgWidth * imgHeight;
        $(".tech-photo-show-each img").css("height", resizeHeight + "px");
        $(".tech-photo-show-content").css("height", resizeHeight + "px");
        $(".tech-photo-show-each p").each(function (i, obj) {
            var width = $(obj).css("width");
            $(obj).css("marginLeft", sizeTemp * 0.6 - parseInt(width, 10) + "px");
        });
    };
    var resizeScroll = function () {
        var height = $("#happy-pet-placeholder").height();
        var height2 = $("#tech-feeding-bowl").height();
        marginToEmotional = height + 133;
        marginFromEmotional = scrollPic(1920, 937, 371, marginToEmotional, $("#tech-emotional-bg-wrap"), $(
            "#tech-emotional-bg"), null, null, false);
        marginToData = height + 1218;
        marginFromData = scrollPic(1920, 1367, 455, marginToData, $("#tech-bigdata-bg-wrap"), $(
            "#tech-bigdata-bg"), null, null, false);
        if (height2 > 600) {
            marginToPrecise = height + height2 + 2000;
        } else {
            marginToPrecise = height + height2 + 2143;
        }
        marginFromPrecise = scrollPic(1920, 1344, 457, marginToPrecise, $("#tech-precise-bg-wrap"), $(
            "#tech-precise-bg"), null, null, false);
    };
    resizeFunc();

    pageThreeFlag = pageTwoFlag = pageFourFlag = pageSixFlag = pageSevenFlag = pageEightFlag = pageNineFlag =
        pageTenFlag = true;
    /**setTimeout(function () {
        $("#pet-system-logo").fadeIn(140);
        setTimeout(function () {
            $("#happy-pet-system-content h1").fadeIn(140);
            setTimeout(function () {
                $("#smart-big-data").fadeIn(140);
                setTimeout(function () {
                    $("#pet-link-arrow1").animate({
                        "height": "105px"
                    }, 300);
                    $("#pet-link-arrow2").animate({
                        "height": "105px"
                    }, 300);
                }, 500);
                setTimeout(function () {
                    $("#smart-feeder-pet").fadeIn(140);
                    $("#smart-app-pet").fadeIn(140);
                    setTimeout(function () {
                        $("#pet-link-arrow3").animate({
                            "height": "121px"
                        }, 300);
                        $("#pet-link-arrow4").animate({
                            "height": "105px"
                        }, 300);
                        setTimeout(function () {
                            $("#smart-collar-pet").fadeIn(140);
                        }, 500);
                    }, 500);
                }, 1000);
            }, 200);
        }, 200);
    }, 1000);**/
});