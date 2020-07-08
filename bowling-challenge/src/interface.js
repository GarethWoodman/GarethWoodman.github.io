$(document).ready(function() {
  var scoreBoard = new ScoreBoard();
  updateScoreBoard();

  console.log("active");

  $('#0').on('click', function() {
    console.log("button 0");
    scoreBoard.addScore(0);
    updateScoreBoard();
  })

  $('#1').on('click', function() {
    console.log("button 1");
    scoreBoard.addScore(1);
    updateScoreBoard();
  })

  $('#2').on('click', function() {
    console.log("button 2");
    scoreBoard.addScore(2);
    updateScoreBoard();
  })

  $('#3').on('click', function() {
    console.log("button 3");
    scoreBoard.addScore(3);
    updateScoreBoard();
  })

  $('#4').on('click', function() {
    console.log("button 4");
    scoreBoard.addScore(4);
    updateScoreBoard();
  })

  $('#5').on('click', function() {
    console.log("button 5");
    scoreBoard.addScore(5);
    updateScoreBoard();
  })

  $('#6').on('click', function() {
    console.log("button 6");
    scoreBoard.addScore(6);
    updateScoreBoard();
  })

  $('#7').on('click', function() {
    console.log("button 7");
    scoreBoard.addScore(7);
    updateScoreBoard();
  })

  $('#8').on('click', function() {
    console.log("button 8");
    scoreBoard.addScore(8);
    updateScoreBoard();
  })

  $('#9').on('click', function() {
    console.log("button 9");
    scoreBoard.addScore(9);
    updateScoreBoard();
  })

  $('#10').on('click', function() {
    console.log("button 10");
    scoreBoard.addScore(10);
    updateScoreBoard();
  })

  function updateScoreBoard() {
    for (var i = 0; i < 10; i++) {
      var frame = scoreBoard.frames[i]
      if (i === 9) { _updateFinalFrame(frame) }
      $('#frame-' + i + '-first-roll').text(frame.first);
      if(!frame.hasStrike()) $('#frame-' + i + '-second-roll').text(frame.second);
      $('#frame-' + i + '-score').text(frame.displayScore());
    };
    _updateButtons()
  };

  function _updateFinalFrame(frame) {
    $('#frame-9-first-roll').text(frame.first);
    $('#frame-9-second-roll').text(frame.second);
    if(frame.hasSpare()) { $('#frame-9-third-roll').text(frame.third) }
    $('#frame-9-score').text(frame.displayScore());
  }

  function _updateButtons() {
    var currentFrame = scoreBoard.currentFrame

    if (currentFrame.isLastFrame()){
      if (currentFrame.hasStrike() && currentFrame.second != 10) {
        var difference = (10 - currentFrame.second) + 1
        return _disableButtons(difference)
      }
      if (currentFrame.hasSpare() || currentFrame.first == null )  {
        return _enableButtons()
      }
    }

    if (currentFrame.first != null && !currentFrame.hasStrike()) {
      var difference = (10 - currentFrame.first) + 1
      _disableButtons(difference)
    } else {
      _enableButtons();
    }
  }

  function _enableButtons() {
    for (var i = 0; i <= 10; i++) $('#' + i).prop('disabled', false);
  }

  function _disableButtons(difference) {
    for (var i = difference; i <= 10; i++) $('#' + i).prop('disabled', true);
  }

});
