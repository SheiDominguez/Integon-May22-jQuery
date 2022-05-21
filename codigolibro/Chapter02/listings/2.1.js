$(() => {
  $('#selected-plays > li').addClass('horizontal');

  $('#selected-plays li:not(.horizontal)').addClass('sub-level');

  $('#selected-plays > li').addClass('big-letter');
  // href que empiece con mailto
  $('a[href^="mailto:"]').addClass('mailto');
  // href que termine con pdf
  $('a[href$=".pdf"]').addClass('pdflink');
  // href que comiencie con http y que en algun lugar tenga la palabra henry (and)
  $('a[href^="http"][href*="henry"]').addClass('henrylink');
  // href que comiencie con http o que en algun lugar tenga la palabra henry (or {,})
  //$('a[href^="http"],[href*="henry"]').addClass('henrylink');

  // even = par
  //$('tr:even').addClass('alt');
  // odd = nones
  //$('tr:nth-child(odd)').addClass('alt');
  $('tr').filter(':even').addClass('alt');

  //$('td:contains(Henry)').addClass('highlight');

  $('a').filter((i, a) =>
       a.hostname && a.hostname !== location.hostname
     )
     .addClass('external');

     //$('td:contains(Henry)').next().addClass('highlight');
     $('td:contains(1606)').prev().prev().addClass('highlight');
     //$('td:contains(Henry)').nextAll().addClass('highlight');
     //$('td:contains(Henry)').nextAll().addBack().addClass('highlight');
     //$('td:contains(Henry)').parent().children().addClass('highlight');

     $('td:contains(Henry)')  // Find every cell containing "Henry"
     .parent()                // Select its parent
     .find('td:eq(1)')        // Find the 2nd descendant cell
     .addClass('highlight')   // Add the "highlight" class
     .end()                   // Return to the parent of the cell containing "Henry"
     .find('td:eq(2)')        // Find the 3rd descendant cell
     .addClass('highlight');  // Add the "highlight" class


  const eachText = [];
  // la i es el indice del elemento
  $('td')
    .each((index, cell) => {
      if (cell.textContent.startsWith('H')) {
        eachText.push(`${index} - ${cell.textContent}`);
  } });
  console.log('each', eachText);


  //1. Add a class of special to all of the <li> elements at the second level of the nested list.
  $('#selected-plays li:not(.horizontal)').addClass('special');

  //2. Add a class of year to all the table cells in the third column of a table.
  $('tr').find('td:eq(2)').addClass('year');

  //3. Add the class special to the first table row that has the word Tragedy in it.
  $('td:contains(Tragedy)').parent().first().addClass('special');

  //4. Here's a challenge for you. Select all the list items (<li>s) containing a link (<a>)
  //. Add the class afterlink to the sibling list items that follow the ones selected.
  $('li:has(a)').nextAll().addClass('afterlink');

  //5. Here's another challenge for you. Add the class tragedy to the closest ancestor <ul> of any .pdf link.
  $('a[href$=".pdf"]').closest('ul').addClass('tragedy');
});
