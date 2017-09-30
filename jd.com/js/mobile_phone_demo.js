/**
 * Created by forever on 2017/8/1.
 */
window.onload = function () {

    //��ҳ�ֲ�ͼ��ʼ
    $(function () {
        var index = 0, timer, focusindex = 0;
        var color = ["#EAC6C6", "#0F0705", "#002258", "#060606", "#7256FF", "#4378FF"];

        $('#box>span').mouseover(function () {
            focusindex = $(this).index();
            index = focusindex;
            $("#banner").css("background", color[index]);
            autoPlay();
        });
        $('.arr-r').click(function () {
            if (index == 5) {
                index = 0;
            }
            else {
                index++;
            }
            $("#banner").css("background", color[index]);
            autoPlay();
        })
        $('.arr-l').click(function () {
            if (index == 0) {
                index = 5;
            }
            else {
                index--;
            }
            $("#banner").css("background", color[index]);
            autoPlay();
        })
        timer = setInterval(function () {
            $('.arr-r').click();
        }, 3000);
        $('#banner').hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(function () {
                $('.arr-r').click();
            }, 3000);
        })

        function autoPlay() {
            $('#box>span').eq(index).addClass('cur').siblings().removeClass('cur');
            $('.imges>li').eq(index)

                .fadeIn()
                .siblings()
                .fadeOut();
        }
    });


//С�ֲ�ͼ(���Լ۱�)
//    var index = 0, timer, focusindex = 0;
//
//    $('.btn>li').mouseover(function () {
//        focusindex = $(this).index();
//        index = focusindex;
//        ato();
//    });
//    $('.arr-1').click(function () {
//        if (index == 1) {
//            index = 0;
//        }
//        else {
//            index++;
//        }
//        ato();
//
//    })
//    $('.arr-2').click(function () {
//        if (index == 0) {
//            index = 1;
//        }
//        else {
//            index--;
//        }
//        ato();
//    })
//    timer = setInterval(function () {
//        $('.arr-1').click();
//    }, 3000);
//    $('.btn').hover(function () {
//        clearInterval(timer);
//
//    }, function () {
//        timer = setInterval(function () {
//            $('.arr-2').click();
//        }, 3000);
//    })
//    function ato() {
//        $('.btn>li').eq(index).addClass('cur').siblings().removeClass('cur');
//        $('.recommendation>li').eq(index).fadeIn().siblings().fadeOut();
//    }


    //С�ֲ�ͼ(���⹺)
    $('.bigimgs').fadebanner({
        animatetime: 400,
        playtime: 3000,     //��ʾ�Զ����Ŷ�����ʱ����
        liimgeles: '.ol>li',      //ȫ��img��li
        focuseles: '.ul>li',      //ȫ����С����
        createli: 'li',      //����С����ı�ǩ
        bigfocusul: '.ul',    //��������С����ĸ�����
        focusclass: 'aut',     //С�����class
        outerdiv: '.bigimgs',      //��������banner���Ĵ����
        bind: 'mouseover',     //�¼�����
        leftbtn: '.btn1',      //��ť
        rightbtn: '.btn2'      //�Ұ�ť
    });
    //С�ֲ�ͼ(���Լ۱�)
    $('.bigimg').fadebanner({
        animatetime: 400,
        playtime: 3000,     //��ʾ�Զ����Ŷ�����ʱ����
        liimgeles: '.recommendation>li',      //ȫ��img��li
        focuseles: '.btn>li',      //ȫ����С����
        createli: 'li',      //����С����ı�ǩ
        bigfocusul: '.btn',    //��������С����ĸ�����
        focusclass: 'cur',     //С�����class
        outerdiv: '.bigimg',      //��������banner���Ĵ����
        bind: 'mouseover',     //�¼�����
        leftbtn: '.btn3',      //��ť
        rightbtn: '.btn4'      //�Ұ�ť
    });


    //���Լ۱��л���
    $(function () {
        $(".more").tab({
                tabname: ".lis>ul>li",//�����л���Ŀ
                tabdiv: ".mob>ul",//���¶�Ӧ����
                addclass: "current",
                bind: "mouseover",//�¼�����
                animatetime: 10  //�������������,��ò�Ҫд�������
            }
        );
    });
    var tis = document.querySelectorAll(".lis s");
    var dls = document.querySelectorAll(".lis li");
    for (var i = 0; i < dls.length; i++) {
        dls[i].index = i;
        dls[i].onmouseover = function () {
            for (var i = 0; i < dls.length; i++) {
                dls[i].style.backgroundColor = "#4D4B4C";
            }
            for (var i = 0; i < tis.length; i++) {
                tis[i].style.display = "none";
            }
            this.style.backgroundColor = "#f40";
            tis[this.index].style.display = "block";

        };
    }

    //�����Ƽ��ֲ�ͼ
    $('.arrival').fadebanner({
        animatetime: 400,
        playtime: 3000,     //��ʾ�Զ����Ŷ�����ʱ����
        liimgeles: '.jpgs>li',      //ȫ��img��li
        focuseles: '.knob>li',      //ȫ����С����
        createli: 'li',      //����С����ı�ǩ
        bigfocusul: '.knob',    //��������С����ĸ�����
        focusclass: 'red',     //С�����class
        outerdiv: '.arrival',      //��������banner���Ĵ����
        bind: 'mouseover',     //�¼�����
        leftbtn: '.span-l',      //��ť
        rightbtn: '.span-r'      //�Ұ�ť
    });

    //���������ť�رչ��
    var gg = document.querySelector("#gg");
    var ggin = document.querySelector("#ggin")
    var closebtn = document.querySelector("#ggin span");
    closebtn.onclick = function () {
        gg.style.display = "none";
        ggin.style.display = "none";
    };

    //��ά����ʾ������
    var erweima = document.querySelector(".erweima");
    var pic = document.querySelector(".pic");
    erweima.onmouseover = function () {
        pic.style.display = "block";
    };
    erweima.onmouseout = function () {
        pic.style.display = "none";
    };


    //$(function () {
    //    $(".dd>ul>li").mouseover(function () {
    //        $(this).siblings("li").css("backgroundColor", "");
    //        $(this).css("backgroundColor", "skyblue");
    //        $(".item").css("display", "block");
    //    });
    //    $(".dd>ul>li").mouseout(function () {
    //        $(".dd>ul>li").css("backgroundColor", "");
    //        $(".item").css("display", "none");
    //    });
    //});

    //��ർ�����л�
    var lis = document.querySelectorAll(".dd>ul>li");
    var items = document.querySelectorAll(".item");
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onmouseover = function () {
            for (var i = 0; i < items.length; i++) {
                items[i].style.display = "none";
            }
            items[this.index].style.display = "block";
            items[this.index].style.backgroundColor = "#FCF6F6";
        };
        lis[i].onmouseout = function () {
            items[this.index].style.display = "none";
        };
    }

    //�̶�������
    $(function () {
        $(window).scroll(function () {
            if ($(document).scrollTop() > 1100) {
                $(".seek").css({"position": "fixed", "top": 0, "display": "block"});
            } else {
                $(".seek").css({"position": "static", "display": "none"})
            }
        });
    });

}




