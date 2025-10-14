$(function(){
  const slide = $('.s3_slide .row');
  const nextBtn = $('.s3_slide .arrow.right');
  const prevBtn = $('.s3_slide .arrow.left');

  //좌우버튼이 2개이기 때문에 row1,row2에 있는 버튼인지 알아내야함
  nextBtn.on('click',function(e){
    e.preventDefault();
    const slider = $(this).parent('.row'); //누른 버튼의 부모를 알아냄
    if(slider.hasClass('row1')){
      next(0);
    }else if(slider.hasClass('row2')){
      next(1);
    }
  }); 

  prevBtn.on('click',function(e){
    e.preventDefault();
    const slider = $(this).parent('.row');
    if(slider.hasClass('row1')){
      prev(0);
    }else if(slider.hasClass('row2')){
      prev(1);
    }
  });

  function next(i){
    const crt = slide.eq(i).children('.row_inner'); //전달받은 값 .row의 자식요소 .row_inner
    let index = crt.children('img.active').index();//선택이 된 .row_inner의 active가 붙은 자식의 index값
    let slLength = crt.children('img').length;//이미지 개수(위아래 개수가 다름)

    index++;
    if(index===slLength){
      index=0;
    }
    crt.children('img').removeClass('active');
    crt.children('img').eq(index).addClass('active');
  };

  function prev(i){
    const crt = slide.eq(i).children('.row_inner');
    let index = crt.children('img.active').index();
    let slLength = crt.children('img').length;

    index--;
    if(index<0){
      index = slLength-1;
    }
    crt.children('img').removeClass('active');
    crt.children('img').eq(index).addClass('active');
  };

});