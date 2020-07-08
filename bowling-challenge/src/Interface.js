$(document).ready(function() {
  var scoreBoard = new ScoreBoard();
  updateScoreBoard();

  $('#0').on('click', function()  { updateScoreBoard(0) })
  $('#1').on('click', function()  { updateScoreBoard(1) })
  $('#2').on('click', function()  { updateScoreBoard(2) })
  $('#3').on('click', function()  { updateScoreBoard(3) })
  $('#4').on('click', function()  { updateScoreBoard(4) })
  $('#5').on('click', function()  { updateScoreBoard(5) })
  $('#6').on('click', function()  { updateScoreBoard(6) })
  $('#7').on('click', function()  { updateScoreBoard(7) })
  $('#8').on('click', function()  { updateScoreBoard(8) })
  $('#9').on('click', function()  { updateScoreBoard(9) })
  $('#10').on('click', function() { updateScoreBoard(10) })

  function updateScoreBoard(score) {
    scoreBoard.addScore(score);

    for (var i = 0; i < 10; i++) {
      var frame = scoreBoard.frames[i]
      $('#frame-' + i + '-first-roll').text(frame.first);
      if (i === 9) { _updateFinalFrame(frame) }
      if(!frame.hasStrike()) $('#frame-' + i + '-second-roll').text(frame.second);
      $('#frame-' + i + '-score').text(frame.displayScore());
    };
    _updateButtons()
  };

  function _updateFinalFrame(frame) {
    $('#frame-9-second-roll').text(frame.second);
    if(frame.first + frame.second >= 10) { $('#frame-9-third-roll').text(frame.third) }
    $('#frame-9-score').text(frame.displayScore());
  }

  function _updateButtons() {
    var currentFrame = scoreBoard.currentFrame

    if (currentFrame.isLastFrame()){
      if (currentFrame.hasStrike() && currentFrame.second != 10) {
        var difference = (10 - currentFrame.second) + 1
        return _disableButtons(difference)
      }
      if (currentFrame.first + currentFrame.second >= 10) { return _enableButtons() }
    }

    if (currentFrame.first != null && !currentFrame.hasStrike()) {
      var difference = (10 - currentFrame.first) + 1
      _disableButtons(difference)
    } else { _enableButtons() }
  }

  function _enableButtons() {
    for (var i = 0; i <= 10; i++) $('#' + i).prop('disabled', false);
  }

  function _disableButtons(difference) {
    for (var i = difference; i <= 10; i++) $('#' + i).prop('disabled', true);
  }
});
