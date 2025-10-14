$(function(){

  //mobile navigation------------------
  const mobSubBtn = $('.subNav .sub_menu .depth1>li');

  mobSubBtn.on('click',function(){
    $(this).siblings().find(".depth2").slideUp(300);
    $(this).siblings().removeClass("active");

    $(this).find(".depth2").slideToggle(200);
    $(this).toggleClass("active");
  });

  //pc navigation----------------------
  /* 메인메뉴에 호버를 하면 서브가 나오고 이 상태에서 검색버튼을 누르면 검색창이 나오고,
  검색창이 나왔을때는 메뉴에 호버를 했을 때 서브메뉴가 안나오게 함 */
  const BODY = $("body");
  const schBtn = $(".sch_btn"); //검색버튼
  const hNavBtn = $(".h_nav"); //상단메인메뉴전체
  const subNav = $(".subNav"); //서브메뉴 전체
  const schWrap = $(".search_wrap"); //사용자가 입력할 수 있는 검색창

  //서브메뉴와 검색창 둘 중에 하나만 나오게 조건을 만들기 위함
  let hNavIs = false;
  let schWrapIs = false;

  hNavBtn.mouseenter(hNav); //메인메뉴 호버 시 서브메뉴 전체가 나오게 하는 함수 호출
  subNav.mouseleave(hNav_reset); //서브메뉴 전체영역에서 나갔을 때 다시 올라가는 함수 호출

  function hNav(){
    if(!schWrapIs && !hNavIs){
      subNav.slideDown(function(){
        BODY.addClass("dOpen");
      });
      hNavIs = true;
    }
  };
  function hNav_reset(){
    if(hNavIs){
      subNav.slideUp(function(){
        BODY.removeClass("dOpen");
      });
      hNavIs = false;
    }
  };

  //search
  schBtn.on("click",function(){
    if(!schWrapIs){
      sch();
    }else{
      sch_reset();
    }
  });

  function sch(){
    schWrap.slideDown();
    BODY.addClass("sOpen");
    schWrapIs = true;
    hNav_reset();
  };
  function sch_reset(){
    schWrap.slideUp();
    BODY.removeClass("sOpen");
    schWrapIs = false;
  };

 //브라우저크기가 변경되었을때
$(window).on('load resize',function(){
  let w = $(window).innerWidth();
  if(w<1200){
    hNav_reset();
    sch_reset();
    subNav.removeAttr('style');
  }
});






});