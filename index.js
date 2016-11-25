/**
 * Created by JasonKay on 2016/11/10.
 */
window.onload = function () {
    var time = document.getElementById('time');
    var myDate = new Date();

    var date =  myDate.toLocaleDateString();
    function getWeek() {
        switch(myDate.getDay()){
            case 0:
                return '星期天';
                break;
            case 1:
                return '星期一';
                break;
            case 2:
                return '星期二';
                break;
            case 3:
                return '星期三';
                break;
            case 4:
                return '星期四';
                break;
            case 5:
                return '星期五';
                break;
            case 6:
                return '星期六';
                break;
        }
    }
    time.innerHTML = date+'&ensp;'+getWeek();
};

$(document).ready(function () {
    var oUl = $('.big-pic');
    var aBtn = $('.small-pic li');
    var now = 0;

    for (var i=0; i<aBtn.length;i++){
        aBtn[i].index = i;
        aBtn.eq(i).on('click',function () {
            now = this.index;
            slide();
        });
    }

    function slide() {
        for (var i=0; i<aBtn.length;i++){
            aBtn.eq(i).removeClass();
        }
        aBtn.eq(now).addClass('active');
        oUl.animate({left:now*(-580)}, 300);
    }

    function next() {
        now++;
        if (now == aBtn.length){
            now = 0;
        }
        slide();
    }

    var timer = setInterval(next, 2000);
    $('.scroll').on('mouseover',function () {
        clearInterval(timer);
    });
    $('.scroll').on('mouseout',function () {
        timer = setInterval(next, 2000);
    });

    for(var i=0; i<$('.sortRecommend section').length; i++){
        var sectionHeight = $('.sortRecommend section').eq(i).height();
        var imgHeight = $('.sortRecommend img').eq(i).height();

        var height = (sectionHeight-imgHeight)/2;
        $('.sortRecommend img').eq(i).css({'margin-top':height});
    }

    $('.icon-btn-pic').on('click',function () {
        $(this).css({background:'url(img/vm21.gif)'});
        $('.icon-btn-list').css('background','url(img/vm1.gif)');
    });
    $('.icon-btn-list').on('click',function () {
        $(this).css({background:'url(img/vm11.gif)'});
        $('.icon-btn-pic').css('background','url(img/vm2.gif)');
    });


    var smallImg = $('.product-small-pic img');
    for(i=0; i<smallImg.length; i++){
        smallImg[i].index = i;
        smallImg.eq(i).on('mouseover',function () {
            for(i=0; i<smallImg.length; i++){
                smallImg.eq(i).removeClass('active');
            }
            var nowImg = this.index;
            $(this).addClass('active');
            $('.product-big-pic img').attr('src',function (index, attr) {
                attr = smallImg.eq(nowImg).attr('src');
                return attr;
            });
        });
    }

    $('#product-tabs').tabs();
});