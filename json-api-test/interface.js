$(document).ready(function() {
  var api = new Api();
  api.get();
  // $('#submit').on('click', function() {
  //   var text = $('#input').val()
  //   api.patch(text);
  //   update();
  // });

  $('#plus').on('click', function() {
    api.patch(1);
    update();
  });

  $('#minus').on('click', function() {
    api.patch(-1);
    update();
  });

  window.setInterval(function(){
    update();
}, 1000);

  function update() {
    api.get();
    if ($('#health').width() <= 0){
      $("#winner").text("You win!")
    }
  }
});
