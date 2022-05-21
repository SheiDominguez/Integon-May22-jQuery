$(() => {

  const triggers = {
    d:'default',
    n: 'narrow',
    l: 'large'
  }

  $(document).keyup((e) => {
    // Para que funcione con mayusculas y minusculas, hay que hacer el toLowerCase() y en
    // las constantes de los triggers estas tienen que estar declradas en minusculas
    const key = String.fromCharCode(e.which).toLowerCase();
    if (key in triggers) {
      $(`#switcher-${triggers[key]}`).click();
    } 
  });

  $('#switcher-default').addClass('selected');

  $('#switcher button')
    .click((e) => {
      const bodyClass = e.target.id.split('-')[1];
      $('body')
        .removeClass()
        .addClass(bodyClass);
        $('#switcher button').removeClass();
      $(e.target)
        .addClass('selected');

      e.stopPropagation();
    });

    $('#switcher-narrow, #switcher-large').click(() => {
      $('#switcher').off('click.collapse')
    });

    /*$('#switcher-narrow, #switcher-large').click(() => {
      console.log("click");
    });*/

  $('#switcher').on(('click.collapse'), (e) => {
    $(e.currentTarget).children('button').toggleClass('hidden');
  });

  $('#switcher h3')
    .hover(function() {
        $(this).addClass('hover');
      }, function() {
        $(this).removeClass('hover');
    });

  //$('#switcher').trigger('click');
  $('#switcher').click();



  /*
  $('#switcher-default')
    .addClass('selected')
    .on('click', () => {
      $('body')
        .removeClass()
    });

  $('#switcher-narrow')
    .on('click', () => {
      $('body')
        .removeClass()
        .addClass('narrow');
    });

  $('#switcher-large')
    .on('click', () => {
      $('body')
        .removeClass()
        .addClass('large');
    });

  $('#switcher button')
    .on('click', function() {
      $('#switcher button')
        .removeClass('selected');
      $(this)
        .addClass('selected');
    });
  */

  //1. When Charles Dickens is clicked, apply the selected style to it.
  $('.author').click(function() {
    $(this).addClass('selected');
  });
  //2. When a chapter title (<h3 class="chapter-title">) is double-clicked, toggle the visibility of the chapter text.
  $('.chapter-title').dblclick(function() {
    $(this).nextAll('p').toggleClass('hidden');
  });
  //3. When the user presses the right arrow key, cycle to the next body class. The key code for the right arrow key is 39.
  $(document).keyup((e) => {
    const key = e.keyCode || e.which;
    if (key == 39) {
      let body = $('body');
      if(body.hasClass('narrow')) {
        body.removeClass().addClass('large');
      } else if(body.hasClass('large')) {
        body.removeClass();
      } else {
        body.removeClass().addClass('narrow');
      }
    } 
  });

});
