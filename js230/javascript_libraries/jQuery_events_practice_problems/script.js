$(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    const key = $('#key').val();

    $(document).off('keypress').on('keypress', function(event) {
      if (event.key !== key) { return; }
      $('a').trigger('click');
    });

    $('a').on('click', function(event) {
      event.preventDefault();
      $('#accordion').slideToggle();
    });
  });
});
