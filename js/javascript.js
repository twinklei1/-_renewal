$(function(){
    const $gnb = $('header>nav>.gnb>li');

    $gnb.on('mouseenter', function(){
        $('header>.lnbBg').stop().slideDown();
        $('header>nav>.gnb>li>.lnb').stop().slideDown(200);
    });
    $('header').on('mouseleave', function(){
        $('header>.lnbBg').stop().slideUp();
        $('header>nav>.gnb>li>.lnb').stop().slideUp(200);
    });


    $(window).on('load', function(){
        $('.logo>a').trigger('click');
    });


    //탑버튼 클릭이벤트
    $('.logo>a, aside>a').on('click', function(evt){
        evt.preventDefault();
        $gnb.parent().removeClass('on');
        $('html, body').stop().animate({
            scrollTop : 0
        });
    });

    $(window).on('scroll', function(){
        let scrollTop = $(window).scrollTop();

        if(scrollTop>500){
            $('aside>a').fadeIn(200);
        }else{
            $('aside>a').fadeOut(200);
        }
    });
});

// 비주얼 영역
$(function(){
    const $indicaitor = $('.visual>.visualPagination>li>a');
    const $visual = $('.visual>.visualContainer');
    let nowIdx = 0;

    $indicaitor.on('click', function(evt){
        evt.preventDefault();

        nowIdx = $indicaitor.index(this);
        $visual.stop().animate({
            left : -1200 * nowIdx
        },1000);

        $(this).parent().addClass('on').siblings().removeClass('on');
    });

    setInterval(function(){
        if(nowIdx<3){
            nowIdx++;
        }else{
            nowIdx=0;
        }

        $visual.stop().animate({
            left : -1200 * nowIdx
        },1000);

        $indicaitor.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    },3000);
});

// 섹션 이벤트 슬라이드
$(function(){
    const $eventPrev = $('.notice>.event>.event_prev');
    const $eventNext = $('.notice>.event>.event_next');
    const $slide = $('.notice>.event>.eventContainer>li');
    nowIdx = 0;
    oldIdx = nowIdx;

    $eventNext.on('click', function(evt){
        evt.preventDefault();
        
    });

    $eventPrev.on('click', function(evt){
        evt.preventDefault();
        
    });


})