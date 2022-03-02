$(function () {
    var num = -1920;//向左走  每次定时器加这个值
    setInterval(function () {
        var num1 = $(".inner > ul").position().left + num;
        if (num1 <= -5760) {
            num1 = 0;
        }
        $(".inner > ul").animate({ "left": num1 }, 100)
    }, 3000)
})


$(".zxc").click(function () {
    $(".inner > ul").css("left", "0px")
    console.log("A")
})

$(".js").click(function () {
    $(".inner > ul").css("left", "-1920px")
    console.log("B")
})

$(".xie").click(function () {
    $(".inner > ul").css("left", "-3840px")
    console.log("C")
})



$(".dag").click(function () {
    $('html').animate({ scrollTop: '990' }, 600);
    console.log("A")
})
$(".zpg").click(function () {
    $('html').animate({ scrollTop: '1840' }, 600);
    console.log("B")
})
$(".lyg").click(function () {
    $('html').animate({ scrollTop: '2320' }, 600);
    console.log("C")
})

$(".top").click(function () {
    $('html').animate({ scrollTop: '0' }, 600);
    console.log("D")
})

$(".wxe").mousemove(function () {
    $(".wxe").css("background-size", "230px")
}); $(".wxe").mouseout(function () {
    $(".wxe").css("background-size", "200px")
})

$(".qqe").mousemove(function () {
    $(".qqe").css("background-size", "230px")
}); $(".qqe").mouseout(function () {
    $(".qqe").css("background-size", "200px")
})

$(".qqqe").mousemove(function () {
    $(".qqqe").css("background-size", "230px")
}); $(".qqqe").mouseout(function () {
    $(".qqqe").css("background-size", "200px")
})

$(window).scroll(function () {
    var top = $(window).scrollTop();
    console.log(top);

    if (top >= 352) {
        $(".xuan").css("opacity", "1")
        $(".cang").css("opacity", "1")
        $(".cang").css("left", "0%")
    } else {
        $(".xuan").css("opacity", "0")
        $(".cang").css("opacity", "0")
        $(".cang").css("left", "-5%")
    }

    if (top >= 600) {
        $(".heng dt").css("opacity", "1")
        $(".heng dd").css("opacity", "1")
        $(".heng dd").css("top", "10%")
        $(".heng .rz").css("top", "15%")
    } else {
        $(".heng dt").css("opacity", "0")
        $(".heng dd").css("opacity", "0")
        $(".heng dd").css("top", "-20%")
    }

    if (top >= 990) {
        $(".cdh ul").css("right", "0%")
        $(".cdh ul").css("opacity", "1")
    } else {
        $(".cdh ul").css("right", "-10%")
        $(".cdh ul").css("opacity", "0")
    }

    if (top >= 1370) {
        $(".grzp-a").css("opacity", "1")
        $(".grzp-a").css("top", "80px")

    } else {
        $(".grzp-a").css("opacity", "0")
        $(".grzp-a").css("top", "250px")
    }

    if (top >= 1816) {
        $(".grzp-b").css("opacity", "1")
        $(".grzp-b").css("top", "130px")

    } else {
        $(".grzp-b").css("opacity", "0")
        $(".grzp-b").css("top", "350px")
    }
})

$(function(){
    //获取浏览器宽度
    var _width = $(window).width(); 
    if(_width < 1500){
           $("span").remove();
    }
  });
