//서브메뉴 -한개 나오는 메뉴 (css에서 서브에 display를 none으로 둬야 새로고침시 서브메뉴가 보이지 않는다)

$("nav > ul.gnb > li").mouseover(function(){
    $(this).find("ul.sub").stop().slideDown(200);
});
$("nav > ul.gnb > li").mouseout(function(){
    $(this).find("ul.sub").stop().slideUp(200);
});


// //메뉴부분 브라우저 전체

// $("nav > ul > li").mouseover(function(){
//     $("ul.sub").stop().slideDown(200);
// });
// $("nav > ul > li").mouseout(function(){
//     $("ul.sub").stop().slideUp(200);
// });



//컨텐츠1 -한개 나오는 메뉴

$("cont_1 > ul.wrapper > li").mouseover(function(){
    $(this).find("wrapper.image_3").stop().fadeIn(200);
});
$("cont_1 > ul.wrapper > li").mouseout(function(){
    $(this).find("wrapper.image_3").stop().fadeOut(200);
});


// 컨텐츠5
$(document).on('ready', function() {
    $(".center").slick({
        infinite: true,
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 1
    });
  }); 



// 탑버튼
// $(function(){

//     $('.go_top').click(function(e){
//        e.preventDefault();
//        $('html,body').stop().animate({scrollTop:0},300); 
//     });

// });

