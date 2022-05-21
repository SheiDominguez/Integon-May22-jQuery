$(() => {
  $('div.chapter a[href*="wikipedia"]')
    .attr({ 
      rel: 'external', 
      title: function() { return `Learn more  about ${$(this).text()} at Wikipedia`}, 
      id: index => `wikilink-${index}` 
    });





  $('#hide-read')
    .change((e) => {
      if ($(e.target).is(':checked')) {
        $('.chapter p')
          .filter((i, p) => $(p).data('read'))
          .hide();
      } else {
        $('.chapter p').show();
      } 
    });

  $('.chapter p')
    .click((e) => {
      const $elm = $(e.target);
      $elm .css(
          'textDecoration', $elm.data('read') ? 'none' : 'line-through'
      )
      .data('read', !$(e.target).data('read'));
    });





    
    // Inserta el <a> después de cada parrafo
    //$('<a href="#top">back to top</a>').insertAfter('div.chapter p');
    $('<a id="top"></a>').prependTo('body');// Con el prependTo se inserta el elemento al inicia del body
    /*
    // Referencia a un elemento existente -  acción  -  lugar al cual se moverá
    $('span.footnote')
    .insertBefore('#footer')// También se pueden usar para mover elementos
    .wrapAll('<ol id="notes"></ol>')
    .wrap('<li></li>');
    */
    const $notes = $('<ol id="notes"></ol>').insertBefore('#footer');

    $('span.footnote')
    .each((i, span) => {
      $(`<sup>${i + 1}</sup>`)
        .insertBefore(span); // Se puede poner el puro before [.before()]
      $(span)
        //.clone() // Crea un clon del elemento y mueve la copia en lugar del original
        .appendTo($notes)
        .wrap('<li></li>');
    });



  // Exercises
  //1. Alter the code that introduces the back to top links, so that the links only appear after the fourth paragraph.
  $('div.chapter p').each((i, p) => {
    if(i >= 3) {
      $('<a href="#top">back to top</a>').insertAfter(p);
    }
  });
  
  //2. When a back to top link is clicked on, add a new paragraph after the link containing the message You were here. 
  //Ensure that the link still works.
  $('a[href*="top"]').click(function () {
    $('<p style="color: red;">You were here</p>').insertAfter(this);
  });
  
  //3. When the author's name is clicked, turn it bold (by adding an element, rather than manipulating classes or CSS 
  //attributes).
  $('#f-author').click(function() {
    $('<div id="f-author"><strong>by Edwin A. Abbott</strong></div>').insertBefore(this);
    $(this).hide();
  });




});
