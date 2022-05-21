$(() => {
  const sizeMap = {
    'switcher-small': n => n / 1.4,
    'switcher-large': n => n * 1.4,
    'switcher-default': () => defaultSize
  };

  const $speech = $('div.speech');
  const defaultSize = parseFloat($speech.css('fontSize'));

  $('#switcher button')
    .click((e) => {
      const num = parseFloat($speech.css('fontSize'));
      $speech.animate({
        fontSize:`${sizeMap[e.target.id](num)}px`
      });
    });

/*
  $('p').eq(1).hide();

  $('a.more').click((e) => {
      e.preventDefault();
      $('p')
        .eq(1)
        .slideDown('slow');
      $(e.target)
        .hide(); 
    });
*/

const $firstPara = $('p').eq(1).hide();

  $('a.more').click((e) => {
      e.preventDefault();

      //$firstPara.slideToggle('slow');
      $firstPara.animate({ 
        opacity: 'toggle',
        height: 'toggle' 
      }, 'slow');
      $(e.target).text(
        $(e.target).text() === 'read more' ? 'read less' : 'read more'
      );
      
    });




  /*
    $('div.label').click((e) => {
      const $switcher = $(e.target).parent();
      const paraWidth = $('div.speech p').outerWidth();
      const switcherWidth = $switcher.outerWidth();
      $switcher
        .css('position', 'relative')
        .animate({
          borderWidth: '5px',
          left: paraWidth - switcherWidth,
          height: '+=20px'
        }, 'slow');
    });
  */

  $('div.label').click((e) => {
    const $switcher = $(e.target).parent();
    const paraWidth = $('div.speech p').outerWidth();
    const switcherWidth = $switcher.outerWidth();
    $switcher
      .css('position', 'relative')
      .fadeTo('slow', 0.5)
      .animate(
        { left: paraWidth - switcherWidth },
        { duration: 'slow', queue: false }
      )
      .fadeTo('slow', 1.0)
      .slideUp('slow', () => {
        $switcher.css('backgroundColor', '#f00');
      })
      .slideDown('slow');
  });




  $('p')
    .eq(2)
    .css('border', '1px solid #333')
    .click((e) => {
      $(e.target)
        .next()
        .slideDown('slow', () => {
          $(e.target).slideUp('slow');
        });
    });

  $('p')
    .eq(3)
    .css('backgroundColor', '#ccc')
    .hide();


  // Exercises
  //1. Alter the stylesheet to hide the contents of the page initially. When the page is loaded, 
  //fade in the contents slowly.
    $('body').slideDown('slow');

  //2. Give each paragraph a yellow background only when the mouse is over it.
  $('p').hover(function(){
    $(this).addClass('yellowBackgroud');
  }, function(){
    $(this).removeClass('yellowBackgroud');
  });

  //3. Make a click on the title (<h2>) and simultaneously fade it to 25 percent opacity
  //and grow its left-hand margin to 20px. Then, when this animation is complete,
  //fade the speech text to 50 percent opacity.
  $('h2').click(function() {
    let leftHandMargin = $(this).css('marginLeft')
    $(this).fadeTo('slow', 0.25).css('marginLeft', `20px`)
    .siblings().fadeTo('slow', 0.50);
  });

  //4. Here's a challenge for you. React to presses of the arrow keys by smoothly 
  //moving the switcher box 20 pixels in the corresponding direction. 
  //The key codes for the arrow keys are: 37 (left), 38 (up), 39 (right), and 40 (down).
  const $switcher = $('#switcher');
  $(document).keyup((e) => {
    $switcher.css('position', 'relative');
    let switcherMarginLeft = $switcher.css('marginLeft');
    console.log(switcherMarginLeft);
    const key = e.keyCode || e.which;
    console.log(key);
    if (key == 37) {
      $switcher.css('margin-left', `${parseFloat($switcher.css('margin-left')) - 20}px`);
    }
    else if(key == 38){
      $switcher.css('margin-top', `${parseFloat($switcher.css('margin-top')) - 20}px`);
    }
    else if(key == 39){
      $switcher.css('margin-left', `${parseFloat($switcher.css('margin-left')) + 20}px`);
    }
    else if(key == 40){
      $switcher.css('margin-top', `${parseFloat($switcher.css('margin-top')) + 20}px`);
    }
  });
});
