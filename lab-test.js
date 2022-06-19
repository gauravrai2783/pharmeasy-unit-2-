let flag = 0;

  function controller(x) {

    flag = flag + x;
    slideShow(flag);
  }


  slideShow(flag);


  function slideShow(num) {
    let slides = document.getElementsByClassName("slide");
    // console.log(slides);
    if (num == slides.length) {
      flag = 0;
      num = 0;
    }
    if (num < 0) {
      flag = slides.length - 1;
      num = slides.length - 1;
    }
    
    for (let y of slides) {
      y.style.display = "none";
    }


    slides[num].style.display = "block";


  }

  // =====================================================

  let flag1 = 0;

  function controller1(x) {

    flag1 = flag1 + x;
    slideShow1(flag1);
  }


  slideShow1(flag1);


  function slideShow1(num) {
    let slides1 = document.getElementsByClassName("slide1");
    // console.log(slides);
    if (num == slides1.length) {
      flag1 = 0;
      num = 0;
    }
    if (num < 0) {
      flag1 = slides1.length - 1;
      num = slides1.length - 1;
    }
    for (let y of slides1) {
      y.style.display = "none";
    }


    slides1[num].style.display = "block";


  }


  // ================================================================

  let flag2 = 0;

  function controller2(x) {

    flag2 = flag2 + x;
    slideShow2(flag2);
  }


  slideShow2(flag2);


  function slideShow2(num) {
    let slides2 = document.getElementsByClassName("slide2");
    // console.log(slides);
    if (num == slides2.length) {
      flag2 = 0;
      num = 0;
    }
    if (num < 0) {
      flag2 = slides2.length - 1;
      num = slides2.length - 1;
    }
    for (let y of slides2) {
      y.style.display = "none";
    }


    slides2[num].style.display = "block";


  }
