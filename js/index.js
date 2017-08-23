$('#sections').addClass('display-none');

$('#parks').on('click', function() {
  $('#sections').animate({width: 'show'}, 500);
});

$('#what').on('click', function() {
  $('#parks').animate({width: 'hide'}, 500);
});

$('button.back').on('click', function() {
  $('#parks').animate({width: 'show'}, 500);
});