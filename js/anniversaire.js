$('#lapin').click(function() {
  let blockAniv1 = '<div id="block1"><h2>prépare toi bien</h2><button id="suivre-lapin">Suis le encore</button></div>';
  $('#invitation').after(blockAniv1);
  $('#lapin').prop('disabled', true);
  $('body').css({"background-color":"#0000ff"});
  $('#suivre-lapin').click(function() {
    let blockAniv2 = '<div id="block2"><h3>On y est presque</h3><button id="suivre-lapin-fin">Une dernière fois</button></div>';
    $('#block1').after(blockAniv2);
    $('#suivre-lapin').prop('disabled', true);
    $('body').css({"background-color":"#ffffff"});
    $('#suivre-lapin-fin').click(function() {
      let blockAniv3 = '<div id="block3"><h4>Bravo !!!</h4></div>';
      $('#block2').after(blockAniv3);
      $('#suivre-lapin-fin').prop('disabled', true);
      $('body').css({"background-color":"#ff0000"});
    });
  });
});
