function stepperInit() {
  var navListItems = $('div.setup-panel div a'),
    allWells = $('.setup-content'),
    allNextBtn = $('.nextBtn'),
    allPrevBtn = $('.prevBtn');

  allWells.hide();

  navListItems.click(function (e) {
    e.preventDefault();
    var $target = $($(this).attr('href')),
      $item = $(this);
    if (!$item.hasClass('disabled')) {
      navListItems.removeClass("stepwizard-step--active");
      $item.parent().addClass("stepwizard-step--active");
      allWells.hide();
      $target.show();
      $target.find('input:eq(0)').focus();
    }
  });

  allPrevBtn.click(function () {
    var curStep = $(this).closest(".setup-content"),
      curStepBtn = curStep.attr("id"),
      curStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent();
    prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");
    curStepWizard.removeClass("stepwizard-step--active");
    prevStepWizard.removeAttr('disabled').trigger('click');
  });

  allNextBtn.click(function () {
    var curStep = $(this).closest(".setup-content"),
      curStepBtn = curStep.attr("id"),
      nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
      curInputs = curStep.find("input[type='text'],input[type='url']"),
      isValid = true;

    $(".form-group").removeClass("has-error");
    for (var i = 0; i < curInputs.length; i++) {
      if (!curInputs[i].validity.valid) {
        isValid = false;
        $(curInputs[i]).closest(".form-group").addClass("has-error");
      }
    }
    if (isValid)
      nextStepWizard.removeAttr('disabled').trigger('click');
  });

  $('div.setup-panel div a.btn-primary').trigger('click');

  
}
// $('div.setup-panel div a[href="#step-2"]').trigger('click');




$(".products li").click(function() {
  let children = $(this).parent().find('li').removeClass("active");
  $(this).addClass("active");
})

$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});

function zoomy(id, urls) {
  $(id).zoomy(urls, {
    height: "100%"
  });
}


function countDownSale(date, id) {
  let second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  let countDown = new Date('Nov 20, 2019 00:00:00').getTime(),
    x = setInterval(function () {

      let now = new Date().getTime();
      distance = countDown - now;
      if (
        document.querySelector(`#${id} .countdown__days`) &
        document.querySelector(`#${id} .countdown__hours`) &
        document.querySelector(`#${id} .countdown__minutes`) &
        document.querySelector(`#${id} .countdown__seconds`)
      ) {
        document.querySelector(`#${id} .countdown__days`).innerText = Math.floor(distance / (day));
        document.querySelector(`#${id} .countdown__hours`).innerText = Math.floor((distance % (day)) / (hour));
        document.querySelector(`#${id} .countdown__minutes`).innerText = Math.floor((distance % (hour)) / (minute));
        document.querySelector(`#${id} .countdown__seconds`).innerText = Math.floor((distance % (minute)) / second);
      }
      
    }, second)
}